import { motion } from 'framer-motion';
import styled from 'styled-components';
import { TransitionsType } from '../../../shared/types/types';

type Props = {
	tabVariants: TransitionsType;
}

const LogoWrapper = styled(motion.div)`
	position: fixed;
	top: 50%;
	left: 50%;
	width: 100%;
	height: 100vh;
	transform: translate(-50%, -50%);
	z-index: 10;
	mix-blend-mode: color-burn;
	pointer-events: none;
	display: flex;
	align-items: center;
	justify-content: center;

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const LogoGraphic = styled.img`
	width: 30vw;
	height: auto;
	pointer-events: all;

	transition: all var(--transition-speed-slow) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: 50vw;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		width: 75vw;
	}
`;

const Logo = (props: Props) => {
	const {
		tabVariants
	} = props;

	return (
		<LogoWrapper
			variants={tabVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
		>
			<LogoGraphic
				src="/icons/logo.svg"
				className="hidden-element"
			/>
		</LogoWrapper>
	);
};

export default Logo;
