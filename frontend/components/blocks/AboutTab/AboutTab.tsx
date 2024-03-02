import styled from 'styled-components';
import { ImageType, TransitionsType } from '../../../shared/types/types';
import { motion } from 'framer-motion';
import pxToRem from '../../../utils/pxToRem';
import { PortableText } from '@portabletext/react';
import LayoutGrid from '../../common/LayoutGrid';
import LayoutWrapper from '../../common/LayoutWrapper';

type Props = {
	tabVariants: TransitionsType;
	description: [];
	image: string;
};

const AboutTabWrapper = styled(motion.div)`
	mix-blend-mode: color-burn;
	pointer-events: all;
`;

const Inner = styled.div`
	height: 100vh;
	height: 100dvh;
	grid-column: 3 / -3;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`;

const DescriptionWrapper = styled.div`
	overflow: scroll;
	height: 100vh;
	height: 100dvh;
	padding: ${pxToRem(160)} 0;
	pointer-events: all;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */

	&::-webkit-scrollbar {
		display: none;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: 0;
		height: 80vh;
		height: 80dvh;
	}

	* {
		font-size: 4vw !important;
		line-height: 0.9 !important;
		text-align: center;

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			font-size: ${pxToRem(29)} !important;
			line-height: 1 !important;
		}
	}
`;

const ImageWrapper = styled.div`
	pointer-events: all;
	width: 100%;
	height: ${pxToRem(460)};
	grid-column: 3 / -3;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		height: ${pxToRem(400)};
		grid-column: 1 / -1;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		height: ${pxToRem(375)};
	}
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 500px;
	overflow: hidden;
`;

const AboutTab = (props: Props) => {
	const { tabVariants, description, image } = props;

	return (
		<>
			{/* <LayoutWrapper>
				<LayoutGrid>
					{image && (
						<ImageWrapper>
							<Image src={image} />
						</ImageWrapper>
					)}
				</LayoutGrid>
			</LayoutWrapper> */}
			<AboutTabWrapper
				variants={tabVariants}
				initial="hidden"
				animate="visible"
				exit="hidden"
				className="tab-wrapper"
			>
				<LayoutWrapper>
					<LayoutGrid>
						<Inner>
							{description && (
								<DescriptionWrapper className="sentence-case">
									<PortableText value={description} />
								</DescriptionWrapper>
							)}
						</Inner>
					</LayoutGrid>
				</LayoutWrapper>
			</AboutTabWrapper>
		</>
	);
};

export default AboutTab;
