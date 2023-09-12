import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import HeaderTrigger from './HeaderTrigger';
import { useState } from 'react';

type StyledProps = {
	$isHovered: boolean;
}

const HeaderWrapper = styled.header<StyledProps>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	height: 100dvh;
	z-index: 10;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: ${pxToRem(16)};
	mix-blend-mode: hard-light;

	transition: opacity var(--transition-speed-default) var(--transition-ease);

	.header-trigger {
		filter: ${(props) => props.$isHovered ? 'blur(5px)' : 'blur(0)'};
	}
`;

const TriggerWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Header = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<HeaderWrapper
			className="header hidden-element"
			$isHovered={isHovered}
		>
			<TriggerWrapper>
				<HeaderTrigger
					title="Gallery"
					setIsHovered={setIsHovered}
				/>
				<HeaderTrigger
					title="Stylists"
					setIsHovered={setIsHovered}
				/>
			</TriggerWrapper>
			<TriggerWrapper>
				<HeaderTrigger
					title="Contact"
					setIsHovered={setIsHovered}
				/>
				<HeaderTrigger
					title="Socials"
					setIsHovered={setIsHovered}
				/>
			</TriggerWrapper>
		</HeaderWrapper>
	)
};

export default Header;
