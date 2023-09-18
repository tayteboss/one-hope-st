import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

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

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		font-size: ${pxToRem(50)};
		line-height: ${pxToRem(50)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${pxToRem(50)};
		line-height: ${pxToRem(50)};
		filter: blur(0) !important;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		font-size: ${pxToRem(35)};
		line-height: ${pxToRem(35)};
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
