import styled, { css } from 'styled-components';
import { TransitionsType } from '../../../shared/types/types';
import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	tabVariants: TransitionsType;
	address: [];
	addressLink: string;
	phone: string;
	email: string;
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

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(8)};
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
		email
	} = props;

	return (
		<ContactTabWrapper
			variants={tabVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
			className="tab-wrapper"
		>
			<Inner>
				{address && addressLink && (
					<AddressLink
						href={addressLink}
						target="_blank"
						className="type-large cursor-map"
					>
						<PortableText
							value={address}
						/>
					</AddressLink>
				)}
				{email && (
					<Email
						href={`mailto:${email}`}
						className="type-small cursor-email"
					>
						{email}
					</Email>
				)}
				{phone && (
					<Phone
						href={`tel:${phone}`}
						className="type-small cursor-phone"
					>
						{phone}
					</Phone>
				)}
			</Inner>
		</ContactTabWrapper>
	);
};

export default ContactTab;
