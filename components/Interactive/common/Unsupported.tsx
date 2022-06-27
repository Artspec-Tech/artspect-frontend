import { VStack } from "@components/common";
import { Typography } from "@mui/material";
import React from "react";

type Props = {};

const Unsupported = (props: Props) => {
  return (
    <VStack>
      <Typography>Unsupported browser</Typography>
      <Typography>Please use Chrome, Firefox, or Opera</Typography>
    </VStack>
  );
};

export default Unsupported;
