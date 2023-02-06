import type { AppProps } from "next/app";
import Head from "next/head";

import "styles/globals.scss";
import Footer from "components/layout/main-footer";
import Header from "components/layout/main-header";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height"
        />
        <title>Гурван бухат</title>
      </Head>

      <Header />

      <Component {...pageProps} />

      <Footer />
    </>
  );
};

export default MyApp;
