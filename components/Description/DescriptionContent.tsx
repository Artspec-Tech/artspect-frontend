import { HStack, VStack } from "@components/common";
import { Typography, Divider } from "@mui/material";
import React from "react";

type Props = {
  subTopic: string;
  text: string;
};

const DescriptionContent = ({ subTopic, text }: Props) => {
  return (
    <HStack justifyContent={"space-between"}>
      <VStack alignItems={"flex-end"} width={"22.5%"}>
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

export default DescriptionContent;
