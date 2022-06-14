import { Center } from "@components/common";
import InteractiveLayout from "@components/Layout/Interactive";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "types";
import fs from "fs";
import dynamic from "next/dynamic";

const Interactive: NextPageWithLayout<{ page: number }> = ({ page }) => {
  const InteractivePage = dynamic(
    () => import(`components/Interactive/pages/${page}`),
    {
      loading: () => <Center>Loading...</Center>,
    }
  );
  return <InteractivePage />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      page: parseInt(params?.page as string),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync("components/Interactive/pages");
  const paths = Array.from({ length: files.length }, (_, index) => ({
    params: {
      page: (index + 1).toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

Interactive.getLayout = (page: ReactElement) => (
  <InteractiveLayout>{page}</InteractiveLayout>
);

export default Interactive;
