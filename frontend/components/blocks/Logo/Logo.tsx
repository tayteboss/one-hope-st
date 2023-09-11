import styled from 'styled-components';

const LogoWrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
	mix-blend-mode: color-burn;
	pointer-events: none;
`;

const LogoGraphic = styled.img`
	width: 30vw;
	height: auto;
`;

const Logo = () => {
	return (
		<LogoWrapper>
			<LogoGraphic src="/icons/logo.svg" />
		</LogoWrapper>
	);
};

export default Logo;
