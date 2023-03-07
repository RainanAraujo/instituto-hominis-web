import type { AppProps } from "next/app";
import GlobalStyle, { theme } from "@/styles/globals";
import { ThemeProvider } from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "@/styles/Dialog.css";
import "animate.css/animate.min.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
