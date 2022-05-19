import { Typography } from "@mui/material";
import fontWeights from "@utils/fontWeights";
import React from "react";

type Props = {};

const UnauthenticatedHeader = (props: Props) => {
  return (
    <Typography
      fontSize={17}
      fontWeight={fontWeights.light}
      whiteSpace="nowrap"
    >
      Sign in
    </Typography>
  );
};

export default UnauthenticatedHeader;
