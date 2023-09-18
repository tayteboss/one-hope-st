import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { ImageType, TransitionsType } from '../../../shared/types/types';
import { useEffect, useState } from 'react';

type Props = {
	tabVariants: TransitionsType;
	data: ImageType[];
};

const GalleryTabWrapper = styled(motion.div)``;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	height: 100vh;
	width: 100%;
`;

const ImageWrapper = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 60%;
	width: 70%;
	border-radius: 500px;
	overflow: hidden;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		height: 70%;
		width: 80%;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		width: 90%;
	}
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	pointer-events: all;
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 1,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 1,
			ease: 'easeInOut'
		}
	}
};

const GalleryTab = (props: Props) => {
	const {
		tabVariants,
		data
	} = props;

	const hasData = data.length > 0;

	if (!hasData) return <></>;

	const dataLength = data.length;

	const [count, setCount] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((count) => {
				if (count === dataLength - 1) {
					return 1;
				} else {
					return count + 1;
				}
			});
		}, 2000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<GalleryTabWrapper
			variants={tabVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
			className="tab-wrapper"
		>
			<Inner>
				{data.map((item, i) => (
					<AnimatePresence key={i}>
						{count === i && (
							<ImageWrapper
								variants={wrapperVariants}
								initial='hidden'
								animate='visible'
								exit='hidden'
							>
								<Image
									src={item?.asset?.url}
								/>
							</ImageWrapper>
						)}
					</AnimatePresence>
				))}
			</Inner>
		</GalleryTabWrapper>
	);
};

export default GalleryTab;
