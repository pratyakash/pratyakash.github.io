import { useEffect } from "react";
import Head from "next/head";

import Header from "../src/components/header";

import "../styles/app.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <main>
      <Head>
        <title>Pratyakash | Full Stack Developer</title>
        <meta name="description" content="Pratyakash Saini" />
        <link rel="icon" href="/images/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/images/favicon-32x32.png" sizes="32x32" type="image/png" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
