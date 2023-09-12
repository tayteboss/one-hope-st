import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import client from '../client';
import { SiteSettingsType, TransitionsType } from '../shared/types/types';
import Logo from '../components/blocks/Logo';

const PageWrapper = styled.div``;

type Props = {
	siteSettings: SiteSettingsType,
	pageTransitionVariants: TransitionsType;
};

const Page = (props: Props) => {
	const {
		siteSettings,
		pageTransitionVariants,
	} = props;

	console.log('siteSettings', siteSettings);

	return (
	<PageWrapper>
		<NextSeo
			title="One Hope St - Brunswick Co-working hair studio"
			description={siteSettings?.seoDescription || ''}
		/>
		<Logo />
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
