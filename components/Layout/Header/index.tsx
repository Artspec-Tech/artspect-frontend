import React from "react";
import { HStack } from "@components/common";
import { IconButton, Typography } from "@mui/material";
import fontWeights from "@utils/fontWeights";
import Navigation from "./Navigation";
import Divider from "@components/common/Divider";
import AuthenticatedHeader from "./AuthenticatedHeader";
import UnauthenticatedHeader from "./UnauthenticatedHeader";

type Props = {};

const Header = (props: Props) => {
  const gap = 3;
  const isAuthenticated = true;
  return (
    <HStack
      padding={"2rem 6rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography variant="h4" fontWeight={fontWeights.semiBold}>
        Artspect
      </Typography>
      <HStack width="auto" gap={gap}>
        <Navigation />
        <Divider orientation="vertical" style={{ borderColor: "black" }} />
        {isAuthenticated ? (
          <AuthenticatedHeader gap={gap} />
        ) : (
          <UnauthenticatedHeader />
        )}
      </HStack>
    </HStack>
  );
};

export default Header;
