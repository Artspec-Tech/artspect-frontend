import { HStack } from "@components/common";
import { Typography, IconButton } from "@mui/material";
import fontWeights from "@utils/fontWeights";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";

const AuthenticatedHeader = () => {
  return (
    <HStack gap={3}>
      <Typography
        fontSize={17}
        fontWeight={fontWeights.extraLight}
        whiteSpace="nowrap"
      >
        My Account
      </Typography>
      <IconButton color="primary">
        <ShoppingCartOutlinedIcon />
      </IconButton>
    </HStack>
  );
};

export default AuthenticatedHeader;
