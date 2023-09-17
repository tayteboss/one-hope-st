import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import HeaderTrigger from './HeaderTrigger';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

type Props = {
	handleActiveTab: (activeTab: string) => void;
}

type StyledProps = {
	$isHovered: boolean;
}

const HeaderWrapper = styled(motion.header)<StyledProps>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	height: 100dvh;
	z-index: 10;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: ${pxToRem(16)};
	mix-blend-mode: hard-light;
	pointer-events: none;

	transition: opacity var(--transition-speed-slow) var(--transition-ease);

	.header-trigger {
		filter: ${(props) => props.$isHovered ? 'blur(5px)' : 'blur(0)'};
	}
`;

const TriggerWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const wrapperVariants = {
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

const Header = (props: Props) => {
	const {
		handleActiveTab
	} = props;

	const [isHovered, setIsHovered] = useState(false);
	const [isActive, setIsActive] = useState(false);

	const router = useRouter();

	useEffect(() => {
		if (router.pathname !== '/') {
			setIsActive(false);
		} else {
			setIsActive(true);
		}
	}, [router]);

	return (
		<>
			{isActive && (
				<HeaderWrapper
					className="header"
					$isHovered={isHovered}
					variants={wrapperVariants}
					initial='hidden'
					animate='visible'
					exit='hidden'
				>
					<TriggerWrapper className="hidden-element">
						<HeaderTrigger
							title="Gallery"
							setIsHovered={setIsHovered}
							handleActiveTab={handleActiveTab}
						/>
						<HeaderTrigger
							title="Stylists"
							setIsHovered={setIsHovered}
							handleActiveTab={handleActiveTab}
						/>
					</TriggerWrapper>
					<TriggerWrapper className="hidden-element">
						<HeaderTrigger
							title="Contact"
							setIsHovered={setIsHovered}
							handleActiveTab={handleActiveTab}
						/>
						<HeaderTrigger
							title="Socials"
							setIsHovered={setIsHovered}
							handleActiveTab={handleActiveTab}
						/>
					</TriggerWrapper>
				</HeaderWrapper>
			)}
		</>
	)
};

export default Header;
