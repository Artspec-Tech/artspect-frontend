import { Center } from "@components/common";
import InteractiveLayout from "@components/Layout/Interactive";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "types";

const Interactive: NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <Center>
      <Button onClick={() => router.push("/interactive/0")}>Next page</Button>
    </Center>
  );
};

Interactive.getLayout = (page: ReactElement) => (
  <InteractiveLayout>{page}</InteractiveLayout>
);

export default Interactive;
