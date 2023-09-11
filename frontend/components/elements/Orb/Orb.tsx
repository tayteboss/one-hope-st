import styled from 'styled-components';
import { useMousePosition } from '../../../hooks/useMousePosition';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type StyledProps = {
	$isHoveringLink: boolean;
}

type Props = {
	cursorRefresh: () => void;
}

const OrbWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 5;
	pointer-events: none;
`;

const OrbInner = styled(motion.div)`
	position: fixed;
	display: flex;
	flex-flow: row;
	align-content: center;
	justify-content: center;
	left: -80vw;
	top: -80vh;
	width: 160vw;
	height: 160vh;
`;

const Svg = styled.svg<StyledProps>`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
	width: ${(props) => props.$isHoveringLink ? '100%' : '100%'};
	height: ${(props) => props.$isHoveringLink ? '100%' : '100%'};

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const Cursor = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 15;
	height: 50px;
	width: 50px;
	mix-blend-mode: normal;
	fill: radial-gradient(50% 50% at 50% 50%, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
`;

const ProjectGalleryCursor = ({ cursorRefresh }: Props) => {
	const [isHoveringLink, setIsHoveringLink] = useState(false);
	const [isOnDevice, setIsOnDevice] = useState(false);

	const router = useRouter();

	const position = useMousePosition();

	let mouseXPosition = position.x;
	let mouseYPosition = position.y;

	const variantsWrapper = {
		hidden: {
			opacity: 1,
			x: mouseXPosition,
			y: mouseYPosition,
		},
		visible: {
			opacity: 1,
			x: mouseXPosition,
			y: mouseYPosition,
		},
	};

	useEffect(() => {
		const orbLinks = document.querySelectorAll('.orb-link');

		orbLinks.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHoveringLink(true);
			});
			link.addEventListener('mouseleave', () => {
				setIsHoveringLink(false);
			});
			link.addEventListener('mousedown', () => {
				setIsHoveringLink(false);
			});
			link.addEventListener('mouseup', () => {
				setIsHoveringLink(true);
			});
			link.addEventListener('click', () => {
				setIsHoveringLink(false);
			});
		});

		// checking if on a device
		const ua = navigator.userAgent;
		if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
			setIsOnDevice(true);
		} else if (
			/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				ua
			)
		) {
			setIsOnDevice(true);
		}
	}, [cursorRefresh]);

	useEffect(() => {
		setIsHoveringLink(false);
	}, [router.asPath, cursorRefresh]);

	return (
		<OrbWrapper>
			<OrbInner
				variants={variantsWrapper}
				initial="hidden"
				animate="visible"
				transition={{
					type: 'spring',
					mass: 0.05,
					stiffness: 100,
					damping: 20,
					ease: 'linear',
				}}
			>
				{/* <Cursor /> */}
				<Svg $isHoveringLink={isHoveringLink} width="780" height="780" viewBox="0 0 780 780" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="390" cy="390" r="390" fill="url(#paint0_radial_559_198)"/>
					<defs>
						<radialGradient id="paint0_radial_559_198" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(390 390) rotate(90) scale(390)">
							<stop offset="0.447917" stopColor="#FFE3C1"/>
							<stop offset="1" stopColor="#FFEAC0" stopOpacity="0"/>
						</radialGradient>
					</defs>
				</Svg>

			</OrbInner>
		</OrbWrapper>
	);
};

export default ProjectGalleryCursor;
