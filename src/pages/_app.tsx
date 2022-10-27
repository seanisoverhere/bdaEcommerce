import "../styles/globals.css";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Big Data E-commerce</title>
        <meta name="description" content="BDE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </>
  );
}
