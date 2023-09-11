import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import client from '../client';

const PageWrapper = styled.div``;

type Props = {
	siteSettings: {}
};

const Page = (props: Props) => {
	const {
		siteSettings
	} = props;

	console.log('siteSettings', siteSettings);

	return (
	<PageWrapper>
		<NextSeo
			title="Boiler"
			description="Boiler Plate"
		/>
		Home
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
