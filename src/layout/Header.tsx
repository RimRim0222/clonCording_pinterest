import styled from "@emotion/styled";
import { Themes } from "../theme/Themes";

const HeaderStyled = styled.div`
  ${Themes.cssx.flexBtw}
  flex: none;
  width: 100%;
  height: 80px;
  border: 1px solid green;
`;

export function Header() {
  return <HeaderStyled>header</HeaderStyled>;
}
