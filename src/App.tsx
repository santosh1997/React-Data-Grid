import { AppWrapper } from "./App.styles";
import Content from "./components/Content";
import Header from "./components/Header";

const App = (): JSX.Element => {
  return (
    <AppWrapper>
      <Header />
      <Content />
    </AppWrapper>
  );
};

export default App;
