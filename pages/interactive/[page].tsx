import { Center } from "@components/common";
import InteractiveLayout from "@components/Layout/Interactive";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "types";
import fs from "fs";
import dynamic from "next/dynamic";

const Interactive: NextPageWithLayout<{ page: number }> = ({ page = 0 }) => {
  const InteractivePage = dynamic(
    () => import(`components/Interactive/pages/${page}`),
    {
      loading: () => <Center>Loading...</Center>,
    }
  );
  return <InteractivePage />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const files = fs.readdirSync("components/Interactive/pages");
  const page = Number(params?.page);
  if (page < 0 || page >= files.length) {
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
  const paths = Array.from({ length: files.length }, (_, index) => ({
    params: {
      page: index.toString(),
    },
  }));
  console.log(paths);
  return {
    paths,
    fallback: true,
  };
};

Interactive.getLayout = (page: ReactElement) => (
  <InteractiveLayout>{page}</InteractiveLayout>
);

export default Interactive;
