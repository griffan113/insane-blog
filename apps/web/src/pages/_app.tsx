import type { AppProps } from "next/app";
import NProgress from "nprogress";
import { Router } from "next/router";
import Head from "next/head";

import { Layout, Typography } from "@DS/index";
import "nprogress/nprogress.css";
import "@src/styles/globals.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>insane blog.</title>
      </Head>
      <style jsx global>{`
        body {
          font-family: ${Typography.styles.fonts.sans.roboto.style.fontFamily};
        }
      `}</style>
      <Layout.Root>
        <Component {...pageProps} />
      </Layout.Root>
    </>
  );
}
