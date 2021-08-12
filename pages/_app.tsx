import type { AppProps } from "next/app";
import {
  GlobalStyle as PortionGlobalStyle,
  PortionCssProp,
} from "@portion/style";
import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`${css`
  body {
    font-family: "Ubuntu", sans-serif;
    margin: 0;
    padding: 0;
    background: var(${PortionCssProp.color.background.primary.name});
    color: var(${PortionCssProp.color.font.primary.name});
  }
`}`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PortionGlobalStyle />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
