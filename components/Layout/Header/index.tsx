import React from "react";
import { HStack } from "@components/common";
import { IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import fontWeights from "@utils/fontWeights";
import Navigation from "./Navigation";
import Divider from "@components/common/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import AuthenticatedHeader from "./AuthenticatedHeader";
import UnauthenticatedHeader from "./UnauthenticatedHeader";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isAuthenticated = true;
  const AuthHeader: JSX.Element = isAuthenticated ? (
    <AuthenticatedHeader />
  ) : (
    <UnauthenticatedHeader />
  );
  return isMobile ? (
    <HStack
      padding={"2rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography fontWeight={fontWeights.semiBold} fontSize={20}>
        Artspect
      </Typography>
      <HStack width="auto" gap={1}>
        {AuthHeader}
        <Divider orientation="vertical" style={{ borderColor: "black" }} />
        <IconButton color="primary" size="medium">
          <MenuIcon />
        </IconButton>
      </HStack>
    </HStack>
  ) : (
    <HStack
      padding={"2rem 6rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography variant="h4" fontWeight={fontWeights.semiBold} fontSize={12}>
        Artspect
      </Typography>
      <HStack width="auto" gap={3}>
        <Navigation />
        <Divider orientation="vertical" style={{ borderColor: "black" }} />
        {AuthHeader}
      </HStack>
    </HStack>
  );
};

export default Header;
