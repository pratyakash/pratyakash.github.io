import Head from "next/head";

import Home from "../src/components/home";

export default function Main() {
  return (
    <div>
      <Head>
        <title>Pratyakash | Full Stack Developer</title>
        <meta name="description" content="Pratyakash Saini" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
      </Head>
      <Home />
    </div>
  );
}
