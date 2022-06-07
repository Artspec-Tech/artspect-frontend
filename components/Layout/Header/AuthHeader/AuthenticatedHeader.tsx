import { HStack } from "@components/common";
import { Typography, IconButton, useTheme, useMediaQuery } from "@mui/material";
import fontWeights from "@utils/fontWeights";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";

const AuthenticatedHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return isMobile ? (
    <HStack gap={1}>
      <Typography
        fontSize={12}
        fontWeight={fontWeights.extraLight}
        whiteSpace="nowrap"
      >
        My Account
      </Typography>
      <IconButton color="primary" size="small">
        <ShoppingCartOutlinedIcon />
      </IconButton>
    </HStack>
  ) : (
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
