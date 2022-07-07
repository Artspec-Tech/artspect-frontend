import { Center } from "@components/common";
import InteractiveLayout from "@components/Layout/Interactive";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "types";
import fs from "fs";
import dynamic from "next/dynamic";

const Interactive: NextPageWithLayout<{ page: string }> = ({ page = "0" }) => {
  if (page !== "intro") {
    const InteractivePage = dynamic(
      () => import(`components/Interactive/pages/${page}`)
    );
    return <InteractivePage />;
  }
  return <Center />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const files = fs.readdirSync("components/Interactive/pages");
  if (!files.includes(`${params?.page}.tsx`)) {
    return {
      redirect: {
        destination: "/interactive/0",
        permanent: true,
      },
    };
  }
  return {
    props: {
      page: params?.page,
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
