import styled from 'styled-components';
import { PortableText } from '@portabletext/react';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	data: [];
}

const ProfileBioWrapper = styled.section`
	grid-column: 3 / -3;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
	}
`;

const Inner = styled.div`
	* {
		font-size: 4vw !important;
		line-height: 0.9 !important;
		text-align: center;

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			font-size: ${pxToRem(26)} !important;
			line-height: 1 !important;
		}
	}
`;

const ProfileBio = ({ data }: Props) => {
	return (
		<ProfileBioWrapper>
			{data && (
				<Inner>
					<PortableText
						value={data}
					/>
				</Inner>
			)}
		</ProfileBioWrapper>
	);
};

export default ProfileBio;
