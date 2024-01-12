import styled, { css } from 'styled-components';
import { TransitionsType } from '../../../shared/types/types';
import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import pxToRem from '../../../utils/pxToRem';
import Link from 'next/link';

type Props = {
	tabVariants: TransitionsType;
	address: [];
	addressLink: string;
	phone: string;
	email: string;
	instagramLink: string;
	instagramHandle: string;
};

const ContactTabWrapper = styled(motion.div)`
	mix-blend-mode: color-burn;
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const typeStyles = css`
	color: var(--colour-light-brown);
	pointer-events: all;
	cursor: none;

	transition: all var(--transition-speed-slow) var(--transition-ease);

	&:hover {
		color: var(--colour-dark-brown);
	}
`;

const AddressLink = styled.a`
	text-align: center;
	margin-bottom: ${pxToRem(24)};
	${typeStyles}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(16)};
	}

	* {
		font-size: 7vw !important;
		line-height: 0.75 !important;

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			font-size: 12vw !important;
		}
	}
`;

const Email = styled.a`
	text-align: center;
	margin-bottom: ${pxToRem(4)};
	${typeStyles}

	font-size: 3vw !important;
	line-height: 0.85 !important;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(8)};
		font-size: 6vw !important;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		font-size: ${pxToRem(23)} !important;
		line-height: 1;
	}
`;

const LinkTag = styled.a`
	text-align: center;
	margin-bottom: ${pxToRem(4)};
	${typeStyles}

	font-size: 3vw !important;
	line-height: 0.85 !important;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: 6vw !important;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		font-size: ${pxToRem(23)} !important;
		line-height: 1;
	}
`;

const Phone = styled.a`
	text-align: center;
	${typeStyles}
`;

const ContactTab = (props: Props) => {
	const {
		tabVariants,
		address,
		addressLink,
		phone,
		email,
		instagramLink,
		instagramHandle
	} = props;

	return (
		<ContactTabWrapper
			variants={tabVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
			className="tab-wrapper"
		>
			<Inner>
				{address && addressLink && (
					<AddressLink
						href={addressLink}
						target="_blank"
						className="type-large cursor-map"
					>
						<PortableText value={address} />
					</AddressLink>
				)}
				{email && (
					<Email href={`mailto:${email}`} className="cursor-email">
						{email}
					</Email>
				)}
				{instagramLink && instagramHandle && (
					<Link href={instagramLink} passHref>
						<LinkTag target="_blank" className="cursor-instagram">
							@{instagramHandle}
						</LinkTag>
					</Link>
				)}
				{phone && (
					<Phone href={`tel:${phone}`} className="cursor-phone">
						{phone}
					</Phone>
				)}
			</Inner>
		</ContactTabWrapper>
	);
};

export default ContactTab;
