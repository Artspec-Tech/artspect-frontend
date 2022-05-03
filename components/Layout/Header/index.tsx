import { Typography } from "@mui/material";
import React from "react";
import { VStack } from "../../common";
import Navigation from "./Navigation";
import SubHeader from "./SubHeader";

type Props = {};

const Header = (props: Props) => {
  return (
    <VStack>
      <SubHeader />
      <Typography fontSize={30} fontWeight={600} marginBottom={"15px"}>
        Artspect
      </Typography>
      <Navigation />
    </VStack>
  );
};

export default Header;
