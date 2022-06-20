import { Center, VStack } from "@components/common";
import { Typography } from "@mui/material";
import React from "react";
import { BackgroundVideo } from "../common";

const InteractivePage = () => {
  return (
    <BackgroundVideo>
      <Center>
        <VStack>
          <Typography>Hello</Typography>
        </VStack>
      </Center>
    </BackgroundVideo>
  );
};

export default InteractivePage;
