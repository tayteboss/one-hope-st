import Link from 'next/link';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	data: string;
};

const NavigationWidgetWrapper = styled.div`
	position: fixed;
	width: 100%;
	bottom: ${pxToRem(65)};
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	justify-content: center;
	column-gap: ${pxToRem(8)};
`;

const BackWrapper = styled.a`
	height: ${pxToRem(35)};
	width: ${pxToRem(35)};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background: rgb(255, 178, 2);

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		background: rgb(255, 58, 0);
	}
`;

const BackIcon = styled.img`
	width: ${pxToRem(20)};
	height: auto;
`;

const BookingWrapper = styled.a`
	z-index: 15;
	padding: ${pxToRem(4)} ${pxToRem(20)} ${pxToRem(1)};
	mix-blend-mode: normal;
	background: var(--colour-dark-brown);
	border-radius: 100px;
	display: flex;
	align-items: center;
	justify-content: center;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		background: rgb(255, 58, 0);
	}
`;

const Text = styled.div`
	font-size: ${pxToRem(24)};
	line-height: 0.6;
	color: var(--colour-white);
`;

const NavigationWidget = ({ data }: Props) => {
	return (
		<NavigationWidgetWrapper>
			<Link href="/" passHref>
				<BackWrapper>
					<BackIcon src="/icons/arrow.svg" />
				</BackWrapper>
			</Link>
			{data && (
				<Link href={data} passHref>
					<BookingWrapper target="_blank">
						<Text>
							Make Booking
						</Text>
					</BookingWrapper>
				</Link>
			)}
		</NavigationWidgetWrapper>
	);
};

export default NavigationWidget;
