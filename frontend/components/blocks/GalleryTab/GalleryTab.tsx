import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { ImageType, TransitionsType } from '../../../shared/types/types';
import { useEffect, useState } from 'react';
import Image from 'next/image';

type Props = {
	tabVariants: TransitionsType;
	data: ImageType[];
};

const GalleryTabWrapper = styled(motion.div)``;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	pointer-events: all;
	position: relative;
	width: 80%;
	height: 70%;
`;

const ImageWrapper = styled(motion.div)`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
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
					<AnimatePresence>
						{count === i && (
							<ImageWrapper
								key={i}
								variants={wrapperVariants}
								initial='hidden'
								animate='visible'
								exit='hidden'
							>
								<Image
									src={item?.asset?.url}
									layout="fill"
									objectFit="contain"
									priority={true}
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
