import "@emotion/react";
import { Themes } from "./Themes";

declare module "@emetion/react" {
  export interface Theme {
    colors: typeof Themes.colors;
    cssx: typeof Themes.cssx;
  }
}
