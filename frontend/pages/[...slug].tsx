import styled from 'styled-components';
import client from '../client';
import { StylistType, TransitionsType } from '../shared/types/types';
import LayoutWrapper from '../components/common/LayoutWrapper';
import LayoutGrid from '../components/common/LayoutGrid';
import NavigationWidget from '../components/blocks/NavigationWidget';
import ProfileBio from '../components/blocks/ProfileBio';
import ProfileImage from '../components/blocks/ProfileImage';
import { motion } from 'framer-motion';
import pxToRem from '../utils/pxToRem';

type Props = {
	data: StylistType;
	pageTransitionVariants: TransitionsType;
};

const PageWrapper = styled(motion.div)`
	position: relative;
	z-index: 15;
	padding: ${pxToRem(80)} 0 ${pxToRem(160)};
`;

const Page = (props: Props) => {
	const {
		data,
		pageTransitionVariants
	} = props;

	console.log('pageTransitionVariants', pageTransitionVariants);
	

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
		>
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

	const data = await client.fetch(stylistsQuery);

	return {
		props: {
			data
		},
	};
};

export default Page;
