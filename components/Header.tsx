import React from "react";
import { Box, Typography } from "@mui/material";
import SubHeader from "./SubHeader";
import VStack from "./common/VStack";

type Props = {};

const Header = (props: Props) => {
  return (
    <VStack>
      <SubHeader />
      <Typography fontSize={50} fontWeight={500}>
        Artspect
      </Typography>
    </VStack>
  );
};

export default Header;
