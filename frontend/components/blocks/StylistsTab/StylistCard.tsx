import styled from 'styled-components';
import { StylistType } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';
import StylistCardButton from '../../elements/StylistCardButton';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type StyledProps = {
	$buttonIsHovered: boolean;
}

type Props = {
	data: StylistType;
	setCardIsHovered: (isHovered: boolean) => void;
};

const StylistCardWrapper = styled.div<StyledProps>`
	color: var(--colour-light-brown);
	pointer-events: all;
	margin-bottom: ${pxToRem(8)};
	position: relative;

	&:hover {
		filter: blur(0px) !important;
	}

	.stylist-card-button {
		background: ${(props) => props.$buttonIsHovered ? 'var(--colour-light-brown)' : 'var(--colour-dark-brown)'};
		filter: ${(props) => props.$buttonIsHovered ? 'blur(1px)' : 'blur(0px)'};
	}
`;

const StylistButtonWrapper = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: center;
	column-gap: ${pxToRem(8)};
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

const StylistCard = ({ data, setCardIsHovered }: Props) => {
	const {
		name,
		slug,
		bookingLink,
	} = data;

	const [isHovered, setIsHovered] = useState(false);
	const [buttonIsHovered, setButtonIsHovered] = useState(false);

	return (
		<StylistCardWrapper
			className="type-large stylist-card"
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
			$buttonIsHovered={buttonIsHovered}
		>
			{name && name}
			<AnimatePresence>
				{isHovered && (
					<StylistButtonWrapper
						variants={wrapperVariants}
						initial='hidden'
						animate='visible'
						exit='hidden'
						onMouseOver={() => setCardIsHovered(true)}
						onMouseOut={() => setCardIsHovered(false)}
					>
						<StylistCardButton
							title="Read Bio"
							link={`/${slug?.current}`}
							setButtonIsHovered={setButtonIsHovered}
						/>
						<StylistCardButton
							title="Make Booking"
							link={bookingLink}
							setButtonIsHovered={setButtonIsHovered}
						/>
					</StylistButtonWrapper>
				)}
			</AnimatePresence>
		</StylistCardWrapper>
	);
};

export default StylistCard;
