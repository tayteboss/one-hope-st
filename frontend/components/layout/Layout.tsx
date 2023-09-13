import styled from 'styled-components';
import Header from './Header';
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';
import AOC from '../blocks/AOC';
import Cookies from 'js-cookie';
import Orb from '../elements/Orb';
import { useRouter } from 'next/router';

type CursorContextValue = {
	cursorRefresh: number;
	setCursorRefresh: Dispatch<SetStateAction<number>>;
}

export const CursorContext = createContext<CursorContextValue>({
	cursorRefresh: 0,
	setCursorRefresh: () => {},
});

const Main = styled.main``;

type Props = {
	children: ReactNode;
	handleActiveTab: (activeTab: string) => void;
};

const Layout = (props: Props) => {
	const {
		children,
		handleActiveTab
	} = props;

	const [aocIsActive, setAocIsActive] = useState(false);
	const [cursorRefresh, setCursorRefresh] = useState(0);

	const router = useRouter();

	useEffect(() => {
		const timer = setTimeout(() => {
			setCursorRefresh(cursorRefresh + 1);
		}, 300);

		return () => {
			clearTimeout(timer);
		}
	}, [router.pathname]);

	useEffect(() => {
		const body = document.querySelector('body');

		if (!body) return;

		const hasCookies = Cookies.get('visited');

		if (!hasCookies) {
			body.classList.add('hide-elements');
			setAocIsActive(true);
		}
	}, []);

	const handleCloseAoc = () => {
		setAocIsActive(false);
		Cookies.set('visited', 'true', { expires: 1, path: '' });

		const body = document.querySelector('body');
		if (body) {
			body.classList.remove('hide-elements');
		}
	};

	return (
		<CursorContext.Provider value={{ cursorRefresh, setCursorRefresh }}>
			<Header handleActiveTab={handleActiveTab} />
			<AOC
				aocIsActive={aocIsActive}
				handleCloseAoc={() => handleCloseAoc()}
			/>
			<Main>
				{children}
			</Main>
			<Orb cursorRefresh={cursorRefresh} />
		</CursorContext.Provider>
	);
};

export default Layout;
