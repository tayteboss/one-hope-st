import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

const HeaderWrapper = styled.header`
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
`;

const TriggerWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Trigger = styled.button`
	font-size: 3vw;
	color: var(--colour-light-brown);

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		color: var(--colour-dark-brown);
	}
`;

const Header = () => {
	return (
		<HeaderWrapper className="header">
			<TriggerWrapper>
				<Trigger className="orb-link">
					Gallery
				</Trigger>
				<Trigger className="orb-link">
					Stylists
				</Trigger>
			</TriggerWrapper>
			<TriggerWrapper>
				<Trigger className="orb-link">
					Contact
				</Trigger>
				<Trigger className="orb-link">
					Socials
				</Trigger>
			</TriggerWrapper>
		</HeaderWrapper>
	)
};

export default Header;
