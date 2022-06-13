import React, { ReactElement } from "react";
import { HStack } from "@components/common";
import WebLayout from "@components/Layout/Web";
import { NextPageWithLayout } from "types";

const Artwork: NextPageWithLayout = () => {
  return <HStack>Artwork</HStack>;
};

Artwork.getLayout = (page: ReactElement) => <WebLayout>{page}</WebLayout>;

export default Artwork;
