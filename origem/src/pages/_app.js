import "../styles/globals.ts";
import GlobalStyle from "../styles/globals";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
