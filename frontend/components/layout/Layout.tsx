import styled from 'styled-components';
import Header from './Header';
import { ReactNode, useEffect, useState } from 'react';
import AOC from '../blocks/AOC';
import Cookies from 'js-cookie';

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
		<>
			<Header handleActiveTab={handleActiveTab} />
			<AOC
				aocIsActive={aocIsActive}
				handleCloseAoc={() => handleCloseAoc()}
			/>
			<Main>
				{children}
			</Main>
		</>
	);
};

export default Layout;
