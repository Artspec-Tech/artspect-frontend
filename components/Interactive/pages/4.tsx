import { Center, VStack } from "@components/common";
import { Typography, TypographyProps } from "@mui/material";
import fontWeights from "@utils/fontWeights";
import React from "react";
import { BackgroundVideo } from "../common";

const InteractivePage = () => {
  return (
    <BackgroundVideo path="/videos/interactive/4/loop.mp4">
      <Center>
        <VStack>
          <Typography>Hello</Typography>
        </VStack>
      </Center>
    </BackgroundVideo>
  );
};

export default InteractivePage;
