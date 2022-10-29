import "../styles/globals.css";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import { BackTop } from "antd";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Big Data E-commerce</title>
        <meta name="description" content="BDE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence>
        <>
          <Navigation />
          <BackTop />
          <Component {...pageProps} />
        </>
      </AnimatePresence>
    </>
  );
}
