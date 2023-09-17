import styled from 'styled-components';
import { PortableText } from '@portabletext/react';

type Props = {
	data: [];
}

const ProfileBioWrapper = styled.section`
	grid-column: 3 / -3;
`;

const Inner = styled.div`
	* {
		font-size: 4vw !important;
		line-height: 0.8 !important;
		text-align: center;
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
