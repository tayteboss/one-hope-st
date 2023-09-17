import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	data: string;
};

const ProfileImageWrapper = styled.section`
	grid-column: 3 / -3;
	margin-bottom: ${pxToRem(80)};
`;

const Inner = styled.div`
	width: 100%;
	height: ${pxToRem(460)};
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 500px;
	overflow: hidden;
`;

const ProfileImage = ({ data }: Props) => {
	return (
		<ProfileImageWrapper>
			{data && (
				<Inner>
					<Image src={data} />
				</Inner>
			)}
		</ProfileImageWrapper>
	);
};

export default ProfileImage;
