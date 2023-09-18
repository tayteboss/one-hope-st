import styled from 'styled-components';
import { useMousePosition } from '../../../hooks/useMousePosition';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import pxToRem from '../../../utils/pxToRem';
import Cookies from 'js-cookie';

type StyledProps = {
	$largeOrb: boolean;
}

type Props = {
	cursorRefresh: number;
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
	left: -90vw;
	top: -90vh;
	width: 180vw;
	height: 180vh;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: 500vw;
		height: 500vh;
		left: -250vw;
		top: -250vh;
	}
`;

const Svg = styled.svg<StyledProps>`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
	width: ${(props) => props.$largeOrb ? '250%' : '100%'};
	height: ${(props) => props.$largeOrb ? '250%' : '100%'};

	transition: all 1000ms var(--transition-ease);
`;

const ButtonCursor = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 15;
	padding: ${pxToRem(4)} ${pxToRem(12)} ${pxToRem(1)};
	mix-blend-mode: normal;
	background: var(--colour-dark-brown);
	border-radius: 100px;
`;

const Text = styled.div`
	font-size: ${pxToRem(20)};
	line-height: 1;
	color: var(--colour-white);
`;

const buttonVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	}
};

const ProjectGalleryCursor = ({ cursorRefresh }: Props) => {
	const [isHoveringLink, setIsHoveringLink] = useState(false);
	const [buttonText, setButtonText] = useState<boolean | string>(false);
	const [buttonDown, setButtonDown] = useState(false);
	const [isOnDevice, setIsOnDevice] = useState(false);
	const [largeOrb, setLargeOrb] = useState(false);

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
		const hasCookies = Cookies.get('visited');

		if (!hasCookies) {
			setTimeout(() => {
				setButtonText('Enter');
			}, 300);
		}
	}, []);

	useEffect(() => {
		const headerLinks = document.querySelectorAll('.cursor-header');
		const aocCursorLinks = document.querySelectorAll('.cursor-aoc');
		const instagramCursorLinks = document.querySelectorAll('.cursor-instagram');
		const mapCursorLinks = document.querySelectorAll('.cursor-map');
		const emailCursorLinks = document.querySelectorAll('.cursor-email');
		const phoneCursorLinks = document.querySelectorAll('.cursor-phone');

		headerLinks.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setLargeOrb(true);
			});
			link.addEventListener('mouseleave', () => {
				setLargeOrb(false);
			});
		});

		aocCursorLinks.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setButtonText('Enter');
			});
			link.addEventListener('mouseleave', () => {
				setButtonText(false);
			});
			link.addEventListener('click', () => {
				setButtonText(false);
			});
		});

		instagramCursorLinks.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setButtonText('Instagram');
			});
			link.addEventListener('mouseleave', () => {
				setButtonText(false);
			});
			link.addEventListener('click', () => {
				setButtonText(false);
			});
		});

		mapCursorLinks.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setButtonText('View on map');
			});
			link.addEventListener('mouseleave', () => {
				setButtonText(false);
			});
			link.addEventListener('click', () => {
				setButtonText(false);
			});
		});

		emailCursorLinks.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setButtonText('Email');
			});
			link.addEventListener('mouseleave', () => {
				setButtonText(false);
			});
			link.addEventListener('click', () => {
				setButtonText(false);
			});
		});

		phoneCursorLinks.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setButtonText('Call');
			});
			link.addEventListener('mouseleave', () => {
				setButtonText(false);
			});
			link.addEventListener('click', () => {
				setButtonText(false);
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

	useEffect(() => {
		const html = document.querySelector('html');

		if (buttonText) {
			html?.classList.add('no-cursor');
		} else {
			html?.classList.remove('no-cursor');
		}
	}, [buttonText])

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
				<Svg $largeOrb={largeOrb} width="780" height="780" viewBox="0 0 780 780" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="390" cy="390" r="390" fill="url(#paint0_radial_559_198)"/>
					<defs>
						<radialGradient id="paint0_radial_559_198" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(390 390) rotate(90) scale(390)">
							<stop offset="0.447917" stopColor="#FFE3C1"/>
							<stop offset="1" stopColor="#FFEAC0" stopOpacity="0"/>
						</radialGradient>
					</defs>
				</Svg>
				<AnimatePresence>
					{buttonText && (
						<ButtonCursor
							variants={buttonVariants}
							initial='hidden'
							animate='visible'
							exit='hidden'
						>
							<Text>{buttonText}</Text>
						</ButtonCursor>
					)}
				</AnimatePresence>
			</OrbInner>
		</OrbWrapper>
	);
};

export default ProjectGalleryCursor;
