import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import Link from 'next/link';

type Props = {
	title: string;
	link: string;
	target: string;
	setButtonIsHovered: (isHovered: boolean) => void;
};

const LinkTag = styled.a`
	padding: ${pxToRem(4)} ${pxToRem(12)} ${pxToRem(1)};
	mix-blend-mode: color-burn;
	background: var(--colour-dark-brown);
	border-radius: 100px;
	font-size: ${pxToRem(20)} !important;
	line-height: 1 !important;
	color: var(--colour-white);
	white-space: nowrap;

	transition: all var(--transition-speed-slow) var(--transition-ease);

	&:hover {
		background: var(--colour-dark-brown) !important;
		filter: blur(0px) !important;
	}
`;

const StylistCardButton = (props: Props) => {
	const {
		title,
		link,
		target,
		setButtonIsHovered
	} = props;

	return (
		<>
			{link && (
				<Link href={link} passHref>
					<LinkTag
						onMouseOver={() => setButtonIsHovered(true)}
						onMouseOut={() => setButtonIsHovered(false)}
						className="stylist-card-button"
						target={target}
					>
						{title && title}
					</LinkTag>
				</Link>
			)}
		</>
	);
};

export default StylistCardButton;
