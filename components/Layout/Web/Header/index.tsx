import React, { useState } from "react";
import { HStack } from "@components/common";
import { IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import fontWeights from "@utils/fontWeights";
import Navigation from "./Navigation";
import Divider from "@components/common/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import AuthenticatedHeader from "./AuthHeader/AuthenticatedHeader";
import UnauthenticatedHeader from "./AuthHeader/UnauthenticatedHeader";
import MobileDrawer from "./MobileDrawer";
import Image from "next/image";
import { LogoIcon } from "@utils/icons";

const Header = () => {
  const showHeader = false;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isAuthenticated = true;
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer =
    (toggle: boolean) => (e: React.KeyboardEvent | React.MouseEvent) => {
      if (
        e &&
        e.type === "keydown" &&
        ((e as React.KeyboardEvent).key === "Tab" ||
          (e as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(toggle);
    };
  const AuthHeader: JSX.Element = isAuthenticated ? (
    <AuthenticatedHeader />
  ) : (
    <UnauthenticatedHeader />
  );
  return isMobile ? (
    <HStack
      padding={"2rem 1rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Image src={LogoIcon} alt="logo" height="70px" width="70px" />
      {showHeader && (
        <HStack width="auto" gap={0.5}>
          {AuthHeader}
          <Divider orientation="vertical" style={{ borderColor: "black" }} />
          <IconButton color="primary" size="small" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <MobileDrawer
            isDrawerOpen={isDrawerOpen}
            toggleDrawer={toggleDrawer}
          />
        </HStack>
      )}
    </HStack>
  ) : (
    <HStack
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        paddingY: "2rem",
        paddingX: {
          sm: "2rem",
          md: "4rem",
          lg: "6rem",
        },
      }}
    >
      <Typography variant="h4" fontWeight={fontWeights.semiBold}>
        Artspect
      </Typography>
      {showHeader && (
        <HStack width="auto" gap={3}>
          <Navigation />
          <Divider orientation="vertical" style={{ borderColor: "black" }} />
          {AuthHeader}
        </HStack>
      )}
    </HStack>
  );
};

export default Header;
