import { motion } from 'framer-motion';
import styled from 'styled-components';
import { TransitionsType } from '../../../shared/types/types';

type Props = {
	tabVariants: TransitionsType;
};

const GalleryTabWrapper = styled(motion.div)``;

const GalleryTab = (props: Props) => {
	const {
		tabVariants
	} = props;

	return (
		<GalleryTabWrapper
			variants={tabVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
		>
			GalleryTab
		</GalleryTabWrapper>
	);
};

export default GalleryTab;
