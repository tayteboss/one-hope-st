import styled from 'styled-components';
import { TransitionsType } from '../../../shared/types/types';
import { motion } from 'framer-motion';

type Props = {
	tabVariants: TransitionsType;
};

const ContactTabWrapper = styled(motion.div)``;

const ContactTab = (props: Props) => {
	const {
		tabVariants
	} = props;

	return (
		<ContactTabWrapper
			variants={tabVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
		>
			ContactTab
		</ContactTabWrapper>
	);
};

export default ContactTab;
