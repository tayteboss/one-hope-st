import styled from 'styled-components';

type Props = {
	title: string;
	setIsHovered: (isHovered: boolean) => void;
	handleActiveTab: (activeTab: string) => void;
}

const HeaderTriggerWrapper = styled.button`
	font-size: 3.5vw;
	line-height: 3.5vw;
	color: var(--colour-light-brown);
	pointer-events: all;

	transition: all var(--transition-speed-slow) var(--transition-ease);

	&:hover {
		color: var(--colour-dark-brown);
		filter: blur(0) !important;
	}
`;

const HeaderTrigger = (props: Props) => {
	const {
		title,
		setIsHovered,
		handleActiveTab
	} = props;

	return (
		<HeaderTriggerWrapper
			className="header-trigger cursor-header"
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
			onClick={() => handleActiveTab(title)}
		>
			{title && title}
		</HeaderTriggerWrapper>
	);
};

export default HeaderTrigger;
