import styled from 'styled-components';
import client from '../client';
import { SiteSettingsType, StylistType, TransitionsType } from '../shared/types/types';
import LayoutWrapper from '../components/common/LayoutWrapper';
import LayoutGrid from '../components/common/LayoutGrid';
import NavigationWidget from '../components/blocks/NavigationWidget';
import ProfileBio from '../components/blocks/ProfileBio';
import ProfileImage from '../components/blocks/ProfileImage';
import { motion } from 'framer-motion';
import pxToRem from '../utils/pxToRem';
import { NextSeo } from 'next-seo';

type Props = {
	data: StylistType;
	siteSettings: SiteSettingsType;
	pageTransitionVariants: TransitionsType;
};

const PageWrapper = styled(motion.div)`
	position: relative;
	z-index: 15;
	padding: ${pxToRem(80)} 0 ${pxToRem(160)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(40)} 0 ${pxToRem(160)};
	}
`;

const Page = (props: Props) => {
	const {
		data,
		siteSettings,
		pageTransitionVariants
	} = props;

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
		>
			<NextSeo
				title={`"One Hope St - ${data?.name}`}
				description={siteSettings?.seoDescription || ''}
			/>
			<LayoutWrapper>
				<LayoutGrid>
					<ProfileImage data={data?.profileImage} />
					<ProfileBio data={data?.profileDescription} />
					<NavigationWidget data={data?.bookingLink} />
				</LayoutGrid>
			</LayoutWrapper>
		</PageWrapper>
	);
};

export async function getStaticPaths() {
	const stylistsQuery = `
		*[_type == 'stylists'] {
			slug
		}
	`;

	const allStylists = await client.fetch(stylistsQuery);

	return {
		paths: allStylists.map((item: any) => {
			return `/${item?.slug}`;
		}),
		fallback: true
	};
};

export async function getStaticProps({ params }: any) {
	const stylistsQuery = `
		*[_type == 'stylists' && slug.current == "${params.slug[0]}"][0] {
			...,
			'profileImage': profileImage.asset->url,
		}
	`;

	const siteSettingsQuery = `
		*[_type == 'siteSettings'][0] {
			...,
			imageGallery[] {
				...,
				_type == "image" => {
					asset->
				},
			},
		}
	`;

	const data = await client.fetch(stylistsQuery);
	const siteSettings = await client.fetch(siteSettingsQuery);

	return {
		props: {
			data,
			siteSettings
		},
	};
};

export default Page;
