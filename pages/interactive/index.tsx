import { Center } from "@components/common";
import InteractiveLayout from "@components/Layout/Interactive";
import React, { ReactElement, useEffect } from "react";
import { NextPageWithLayout } from "types";
import { useRouter } from "next/router";

const Interactive: NextPageWithLayout = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/interactive/0");
  }, []);
  return <Center />;
};

Interactive.getLayout = (page: ReactElement) => (
  <InteractiveLayout>{page}</InteractiveLayout>
);

export default Interactive;
