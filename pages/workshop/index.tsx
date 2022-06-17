import React, { ReactElement } from "react";
import { HStack } from "@components/common";
import WebLayout from "@components/Layout/Web";
import { NextPageWithLayout } from "types";

const Workshop: NextPageWithLayout = () => {
  return <HStack>Workshop</HStack>;
};

Workshop.getLayout = (page: ReactElement) => <WebLayout>{page}</WebLayout>;

export default Workshop;
