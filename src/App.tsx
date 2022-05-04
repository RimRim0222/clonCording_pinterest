import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { Themes } from "./theme/Themes";
import "./scss/styles.scss";
import { Header } from "./layout/Header";

const WrapperStyled = styled.div`
  ${Themes.cssx.flexStartR}
  flex: 1;
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;
const Contents = styled.div`
  ${Themes.cssx.flexStart}
  flex: 1;
  width: 100%;
  border: 1px solid orange;
`;

export default function App() {
  return (
    <ThemeProvider theme={Themes}>
      <WrapperStyled>
        <Header />
        <Contents>Contents</Contents>
      </WrapperStyled>
    </ThemeProvider>
  );
}
