import styled from 'styled-components';
import { TransitionsType } from '../../../shared/types/types';
import { motion } from 'framer-motion';

type Props = {
	tabVariants: TransitionsType;
};

const StylistsTabWrapper = styled(motion.div)``;

const StylistsTab = (props: Props) => {
	const {
		tabVariants
	} = props;

	return (
		<StylistsTabWrapper
			variants={tabVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
		>
			StylistsTab
		</StylistsTabWrapper>
	);
};

export default StylistsTab;
