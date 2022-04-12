import ContentDescription from "./ContentDescription";
import { ContentHeaderWrapper } from "./ContentHeader.styles";
import ContentTitle from "./ContentTitle";

const ContentHeader = (): JSX.Element => {
  return (
    <ContentHeaderWrapper>
      <ContentTitle />
      <ContentDescription />
    </ContentHeaderWrapper>
  );
};

export default ContentHeader;
