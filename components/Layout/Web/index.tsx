import { NextPage } from "next";
import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children?: ReactNode;
};

const WebLayout: NextPage = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Artspect</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default WebLayout;
