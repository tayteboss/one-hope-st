import styled from 'styled-components';
import { TransitionsType } from '../../../shared/types/types';
import { motion } from 'framer-motion';

type Props = {
	tabVariants: TransitionsType;
}

const SocialsTabWrapper = styled(motion.div)``;

const SocialsTab = (props: Props) => {
	const {
		tabVariants
	} = props;

	return (
		<SocialsTabWrapper
			variants={tabVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
		>
			SocialsTab
		</SocialsTabWrapper>
	);
};

export default SocialsTab;
