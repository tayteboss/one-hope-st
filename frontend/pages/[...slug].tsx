import styled from 'styled-components';
import client from '../client';
import { StylistType } from '../shared/types/types';

type Props = {
	data: StylistType;
};

const PageWrapper = styled.div``;

const Page = (props: Props) => {
	const {
		data
	} = props;

	console.log('data', data);

	return (
		<PageWrapper>
			Page
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

	const data = await client.fetch(stylistsQuery);

	return {
		props: {
			data
		},
	};
};

export default Page;
