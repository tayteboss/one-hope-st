import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	aocIsActive: boolean;
	handleCloseAoc: () => void;
};

const AOCWrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	height: 100dvh;
	width: 100%;
	z-index: 1000;
	display: flex;
	align-items: center;
	justify-content: center;
	mix-blend-mode: color-burn;
	flex-direction: column;
`;

const AOCInner = styled.p`
	max-width: ${pxToRem(930)};
	text-align: center;
	font-size: ${pxToRem(52)};
	color: var(--colour-light-brown);
	padding: 0 ${pxToRem(16)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${pxToRem(40)} !important;
		line-height: 1 !important;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		font-size: ${pxToRem(32)} !important;
		line-height: 1 !important;
	}
`;

const Hint = styled.p`
	display: none;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		display: block;
		margin-top: ${pxToRem(16)};
		font-size: ${pxToRem(20)};
	}
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	}
};

const AOC = (props: Props) => {
	const { aocIsActive, handleCloseAoc } = props;

	return (
		<>
			<AnimatePresence>
				{aocIsActive && (
					<AOCWrapper
						onClick={() => handleCloseAoc()}
						variants={wrapperVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						className="cursor-aoc sentence-case"
					>
						<AOCInner className="type-h3">
							We acknowledge the Traditional Custodians of country
							throughout Australia and their connections to land,
							sea and community. We pay our respect to their
							Elders past, present and emerging.
						</AOCInner>
						<Hint>Click anywhere to enter</Hint>
					</AOCWrapper>
				)}
			</AnimatePresence>
		</>
	);
};

export default AOC;
