import { ProfileThumbnailIcon } from "../../assets/icons";
import { ProfileThumbnailWrapper } from "./Header.styles";

const ProfileThumbnail = (): JSX.Element => {
  return (
    <ProfileThumbnailWrapper>
      <ProfileThumbnailIcon />
    </ProfileThumbnailWrapper>
  );
};

export default ProfileThumbnail;
