import { HStack } from "@components/common";
import { Typography, IconButton } from "@mui/material";
import { BoxProps } from "@mui/system";
import fontWeights from "@utils/fontWeights";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";

const AuthenticatedHeader = ({ ...props }: BoxProps) => {
  return (
    <HStack {...props}>
      <Typography
        fontSize={17}
        fontWeight={fontWeights.light}
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
