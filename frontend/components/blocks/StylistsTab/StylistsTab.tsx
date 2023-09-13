import styled from 'styled-components';
import { StylistType, TransitionsType } from '../../../shared/types/types';
import { motion } from 'framer-motion';
import StylistCard from './StylistCard';
import { useState } from 'react';

type StyledProps = {
	$cardIsHovered: boolean;
};

type Props = {
	tabVariants: TransitionsType;
	stylists: StylistType[];
};

const StylistsTabWrapper = styled(motion.div)<StyledProps>`
	mix-blend-mode: color-burn;

	.stylist-card {
		filter: ${(props) => props.$cardIsHovered ? 'blur(2px)' : 'blur(0px)'};
	}
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StylistsTab = (props: Props) => {
	const {
		tabVariants,
		stylists
	} = props;

	const [cardIsHovered, setCardIsHovered] = useState(false);

	const hasStylits = stylists.length > 0;

	return (
		<StylistsTabWrapper
			variants={tabVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
			className="tab-wrapper"
			$cardIsHovered={cardIsHovered}
		>
			<Inner>
				{hasStylits && stylists.map((stylist, i) => (
					<StylistCard
						key={i}
						data={stylist}
						setCardIsHovered={setCardIsHovered}
					/>
				))}
			</Inner>
		</StylistsTabWrapper>
	);
};

export default StylistsTab;
