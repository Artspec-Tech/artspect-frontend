import React from "react";
import { HStack, VStack } from "@components/common";
import { Box, Typography, Divider } from "@mui/material";

type Props = {
  subTopic: string;
  text: string;
};

const Description = ({ subTopic, text }: Props) => {
  return (
    <HStack justifyContent={"space-around"}>
      <VStack alignItems={"flex-end"} width={"15%"}>
        <Typography
          textAlign={"right"}
          fontSize={55}
          fontWeight={"bold"}
          lineHeight={0.9}
          color={"#382B4F"}
        >
          OUR
        </Typography>
        <Typography
          textAlign={"right"}
          fontSize={55}
          fontWeight={"bold"}
          lineHeight={0.9}
          color={"#382B4F"}
        >
          {subTopic}
        </Typography>
      </VStack>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ borderRightWidth: 1.5 }}
        style={{
          backgroundColor: "#382B4F",
          opacity: "50%",
        }}
      />
      <Typography width={"65%"} fontSize={17} textAlign={"justify"}>
        {text}
      </Typography>
    </HStack>
  );
};

export default Description;
