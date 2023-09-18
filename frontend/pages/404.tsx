import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import LayoutWrapper from '../components/common/LayoutWrapper';
import Link from 'next/link';
import pxToRem from '../utils/pxToRem';

const PageWrapper = styled.div`
	position: relative;
	z-index: 15;
	pointer-events: all;
`;

const Inner = styled.div`
	padding-top: ${pxToRem(40)} 0;
`;

const Title = styled.h1`
	margin-bottom: ${pxToRem(24)};
`;

const HomeLink = styled.a``;

const Page = () => {
	return (
		<PageWrapper>
			<NextSeo
				title="One Hope St - 404"
			/>
			<LayoutWrapper>
				<Inner>
					<Title>We couldn't find that page</Title>
					<Link href="/" passHref>
						<HomeLink>Go back home</HomeLink>
					</Link>
				</Inner>
			</LayoutWrapper>
		</PageWrapper>
	)
}

export default Page;
