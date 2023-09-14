import styled from 'styled-components';
import { TransitionsType } from '../../../shared/types/types';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {
	tabVariants: TransitionsType;
	instagramLink: string;
	instagramHandle: string;
}

const SocialsTabWrapper = styled(motion.div)`
	mix-blend-mode: color-burn;
`;

const LinkTag = styled.a`
	text-align: center;
	color: var(--colour-light-brown);
	text-decoration: none;
	pointer-events: all;
	cursor: none;

	transition: all var(--transition-speed-slow) var(--transition-ease);

	&:hover {
		color: var(--colour-dark-brown);
	}
`;

const SocialsTab = (props: Props) => {
	const {
		tabVariants,
		instagramLink,
		instagramHandle
	} = props;

	const hasData = instagramLink && instagramHandle;

	return (
		<SocialsTabWrapper
			variants={tabVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
			className="tab-wrapper"
		>
			{hasData && (
				<Link href={instagramLink} passHref>
					<LinkTag
						target="_blank"
						className="cursor-instagram type-large"
					>
						@{instagramHandle}
					</LinkTag>
				</Link>
			)}
		</SocialsTabWrapper>
	);
};

export default SocialsTab;
