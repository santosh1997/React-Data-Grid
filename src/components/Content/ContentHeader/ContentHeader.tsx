import { ContentHeaderWrapper } from "./ContentHeader.styles";
import ContentTitle from "./ContentTitle";

const ContentHeader = (): JSX.Element => {
  return (
    <ContentHeaderWrapper>
      <ContentTitle /> A data grid is an architecture or set of services that
      gives individuals or groups of users the ability to access, modify and
      transfer extremely large amounts of geographically distributed data for
      research purposes
    </ContentHeaderWrapper>
  );
};

export default ContentHeader;
