import styled from 'styled-components';

type Props = {
	title: string;
	setIsHovered: (isHovered: boolean) => void;
}

const HeaderTriggerWrapper = styled.button`
	font-size: 2.5vw;
	color: var(--colour-light-brown);

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		color: var(--colour-dark-brown);
		filter: blur(0) !important;
	}
`;

const HeaderTrigger = (props: Props) => {
	const {
		title,
		setIsHovered
	} = props;

	return (
		<HeaderTriggerWrapper
			className="header-trigger"
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
		>
			{title && title}
		</HeaderTriggerWrapper>
	);
};

export default HeaderTrigger;
