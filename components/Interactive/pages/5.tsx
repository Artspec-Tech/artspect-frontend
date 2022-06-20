import { Center, VStack } from "@components/common";
import { Typography, TypographyProps } from "@mui/material";
import fontWeights from "@utils/fontWeights";
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
