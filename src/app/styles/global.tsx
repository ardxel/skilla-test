import {css, Global} from "@emotion/react";
import emotionNormalize from 'emotion-normalize';

export const GlobalStyles = () => (
  <Global styles={css`
    ${emotionNormalize};
    & body {
      font-family: "SF Pro Display", sans-serif;
    }
    & html, body, #root {
      position: relative;
      min-height: 100vh;
      height: 100%;
      background: #F1F4F9;
    }
  `}/>
)