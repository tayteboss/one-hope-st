import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import client from '../client';
import { SiteSettingsType, StylistType, TransitionsType } from '../shared/types/types';
import Logo from '../components/blocks/Logo';
import GalleryTab from '../components/blocks/GalleryTab';
import StylistsTab from '../components/blocks/StylistsTab';
import ContactTab from '../components/blocks/ContactTab';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import { CursorContext } from '../components/layout/Layout';
import AboutTab from '../components/blocks/AboutTab';

const PageWrapper = styled(motion.div)``;

type Props = {
	siteSettings: SiteSettingsType,
	stylists: StylistType[];
	pageTransitionVariants: TransitionsType;
	activeTab: string;
	cursorRefresh: () => void;
};

const tabVariants = {
	hidden: {
		opacity: 0,
		filter: 'blur(5px)',
		transition: {
			duration: 1,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		filter: 'blur(0px)',
		transition: {
			duration: 1,
			ease: 'easeInOut'
		}
	}
};

const Page = (props: Props) => {
	const {
		siteSettings,
		pageTransitionVariants,
		activeTab,
		stylists
	} = props;

	const { cursorRefresh, setCursorRefresh } = useContext(CursorContext);

	const handleExitComplete = () => {
		setCursorRefresh(cursorRefresh + 1);
	};

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
		>
			<NextSeo
				title="One Hope St - Brunswick Co-working hair studio"
				description={siteSettings?.seoDescription || ''}
			/>
			<AnimatePresence
				mode="wait"
				onExitComplete={() => handleExitComplete()}
			>
				{activeTab === 'Home' && (
					<Logo
						tabVariants={tabVariants}
						key={1}
					/>
				)}
				{activeTab === 'Gallery' && (
					<GalleryTab
						tabVariants={tabVariants}
						key={2}
						data={siteSettings?.imageGallery}
					/>
				)}
				{activeTab === 'Stylists' && (
					<StylistsTab
						tabVariants={tabVariants}
						key={3}
						stylists={stylists}
					/>
				)}
				{activeTab === 'Contact' && (
					<ContactTab
						tabVariants={tabVariants}
						key={4}
						address={siteSettings?.address}
						addressLink={siteSettings?.mapsLink}
						phone={siteSettings?.phone}
						email={siteSettings?.email}
						instagramLink={siteSettings?.instagramLink}
						instagramHandle={siteSettings?.instagramHandle}
					/>
				)}
				{activeTab === 'About' && (
					<AboutTab
						tabVariants={tabVariants}
						key={5}
						description={siteSettings?.aboutDescription}
						image={siteSettings?.aboutImage}
					/>
				)}
			</AnimatePresence>
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const siteSettingsQuery = `
		*[_type == 'siteSettings'][0] {
			...,
			imageGallery[] {
				...,
				_type == "image" => {
					asset->
				},
			},
			'aboutImage': aboutImage.asset->url,
		}
	`;

	const stylistsQuery = `
		*[_type == 'stylists'] | order(orderRank) [0...100] {
			...,
			'profileImage': profileImage.asset->url,
		}
	`;

	const siteSettings = await client.fetch(siteSettingsQuery);
	const stylists = await client.fetch(stylistsQuery);

	return {
		props: {
			siteSettings,
			stylists
		},
	};
}

export default Page;
