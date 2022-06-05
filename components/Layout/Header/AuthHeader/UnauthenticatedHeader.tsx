import { Typography } from "@mui/material";
import fontWeights from "@utils/fontWeights";
import React from "react";

const UnauthenticatedHeader = () => {
  return (
    <Typography
      fontSize={17}
      fontWeight={fontWeights.extraLight}
      whiteSpace="nowrap"
    >
      Sign in
    </Typography>
  );
};

export default UnauthenticatedHeader;
