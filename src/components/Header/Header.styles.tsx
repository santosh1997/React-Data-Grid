import styled from "styled-components";

const HeaderWrapper = styled.div`
  height: 80px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  > div {
    vertical-align: middle;
  }
`;

const TitleWrapper = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #3c5dd2;
  padding: 25px 0px 26px 20px;
  display: inline-block;
`;

const ProfileThumbnailWrapper = styled.div`
  height: 30px;
  width: 30px;
  display: inline-block;
  padding: 24px 60px 26px 0px;
  float: right;
`;

export { HeaderWrapper, TitleWrapper, ProfileThumbnailWrapper };
