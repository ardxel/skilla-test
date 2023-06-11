import {ThemeProvider} from "@emotion/react";
import {theme} from "../styles";

export const withEmotion = (component: Component) => () => (
  <ThemeProvider theme={theme}>
    {component()}
  </ThemeProvider>
)