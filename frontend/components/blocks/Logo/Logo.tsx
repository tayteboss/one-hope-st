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
	transform: translate(-50%, -50%);
	z-index: 10;
	mix-blend-mode: color-burn;
	pointer-events: none;

	transition: opacity var(--transition-speed-default) var(--transition-ease);
`;

const LogoGraphic = styled.img`
	width: 30vw;
	height: auto;
`;

const Logo = (props: Props) => {
	const {
		tabVariants
	} = props;

	return (
		<LogoWrapper
			className="hidden-element"
			variants={tabVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
		>
			<LogoGraphic src="/icons/logo.svg" />
		</LogoWrapper>
	);
};

export default Logo;
