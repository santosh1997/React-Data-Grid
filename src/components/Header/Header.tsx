import { HeaderWrapper } from "./Header.styles";
import ProfileThumbnail from "./ProfileThumbnail";
import Title from "./Title";

const Header = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <Title />
      <ProfileThumbnail />
    </HeaderWrapper>
  );
};

export default Header;
