import { Center } from "@components/common";
import InteractiveLayout from "@components/Layout/Interactive";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "types";
import { GetStaticProps } from "next";

const Interactive: NextPageWithLayout = () => {
  return <Center />;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: "/interactive/0",
      permanent: true,
    },
  };
};

Interactive.getLayout = (page: ReactElement) => (
  <InteractiveLayout>{page}</InteractiveLayout>
);

export default Interactive;
