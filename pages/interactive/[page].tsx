import { Center } from "@components/common";
import InteractiveLayout from "@components/Layout/Interactive";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "types";
import { isSafari } from "react-device-detect";
import fs from "fs";
import dynamic from "next/dynamic";
import Unsupported from "@components/Interactive/common/Unsupported";

const Interactive: NextPageWithLayout<{ page: number }> = ({ page = 0 }) => {
  const InteractivePage = dynamic(
    () => import(`components/Interactive/pages/${page}`),
    {
      loading: () => <Center>Loading...</Center>,
    }
  );
  return !isSafari ? <InteractivePage /> : <Unsupported />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const files = fs.readdirSync("components/Interactive/pages");
  if (files.indexOf(`${params?.page as string}.tsx`) === -1) {
    return {
      redirect: {
        destination: "/interactive/0",
        permanent: true,
      },
    };
  }
  return {
    props: {
      page: parseInt(params?.page as string),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync("components/Interactive/pages");
  const paths = files.map((file) => ({
    params: {
      page: file.replace(".tsx", ""),
    },
  }));
  return {
    paths,
    fallback: true,
  };
};

Interactive.getLayout = (page: ReactElement) => (
  <InteractiveLayout>{page}</InteractiveLayout>
);

export default Interactive;
