import { ContentWrapper } from "./Content.styles";
import ContentHeader from "./ContentHeader";
import Grid from "./Grid";

const Content = (): JSX.Element => {
  return (
    <ContentWrapper>
      <ContentHeader />
      <Grid />
    </ContentWrapper>
  );
};

export default Content;
