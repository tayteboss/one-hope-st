import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import client from '../client';
import { SiteSettingsType, TransitionsType } from '../shared/types/types';
import Logo from '../components/blocks/Logo';
import SocialsTab from '../components/blocks/SocialsTab';
import GalleryTab from '../components/blocks/GalleryTab';
import StylistsTab from '../components/blocks/StylistsTab';
import ContactTab from '../components/blocks/ContactTab';
import { AnimatePresence } from 'framer-motion';

const PageWrapper = styled.div``;

type Props = {
	siteSettings: SiteSettingsType,
	pageTransitionVariants: TransitionsType;
	activeTab: string;
};

const tabVariants = {
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

const Page = (props: Props) => {
	const {
		siteSettings,
		pageTransitionVariants,
		activeTab
	} = props;

	console.log('siteSettings', siteSettings);

	return (
	<PageWrapper>
		<NextSeo
			title="One Hope St - Brunswick Co-working hair studio"
			description={siteSettings?.seoDescription || ''}
		/>
		<AnimatePresence mode="wait">
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
				/>
			)}
			{activeTab === 'Stylists' && (
				<StylistsTab
					tabVariants={tabVariants}
					key={3}
				/>
			)}
			{activeTab === 'Contact' && (
				<ContactTab
					tabVariants={tabVariants}
					key={3}
				/>
			)}
			{activeTab === 'Socials' && (
				<SocialsTab
					tabVariants={tabVariants}
					key={4}
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
		}
	`;

	const siteSettings = await client.fetch(siteSettingsQuery);

	return {
		props: {
			siteSettings,
		},
	};
}

export default Page;
