import React from "react";
import { Box, Typography } from "@mui/material";
import { VStack } from "./common";
import SubHeader from "./SubHeader";
import Navigation from "./Navigation";

type Props = {};

const Header = (props: Props) => {
  return (
    <VStack>
      <SubHeader />
      <Typography fontSize={50} fontWeight={500} marginY={"10px"}>
        Artspect
      </Typography>
      <Navigation />
    </VStack>
  );
};

export default Header;
