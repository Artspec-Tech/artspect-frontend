import { HStack, VStack } from "@components/common";
import Divider from "@components/common/Divider";
import { Typography } from "@mui/material";
import fontWeights from "@utils/fontWeights";
import React from "react";

type Props = {
  subTopic: string;
  text: string;
};

const DescriptionContent = ({ subTopic, text }: Props) => {
  return (
    <HStack justifyContent={"space-between"}>
      <VStack alignItems={"flex-end"} width={"25%"}>
        <Typography
          textAlign={"right"}
          fontSize={{
            xs: "18px",
            sm: "36px",
            md: "55px",
          }}
          fontWeight={"bold"}
          lineHeight={0.9}
          color={"#382B4F"}
        >
          OUR
        </Typography>
        <Typography
          textAlign={"right"}
          fontSize={{
            xs: "18px",
            sm: "36px",
            md: "55px",
          }}
          fontWeight={"bold"}
          lineHeight={0.9}
          color={"#382B4F"}
        >
          {subTopic}
        </Typography>
      </VStack>
      <Divider
        orientation="vertical"
        thickness={1.5}
        style={{
          backgroundColor: "#382B4F",
          opacity: "50%",
        }}
      />
      <Typography
        width={"65%"}
        fontSize={[8, 12, 17]}
        textAlign={"justify"}
        fontWeight={fontWeights.light}
      >
        {text}
      </Typography>
    </HStack>
  );
};

export default DescriptionContent;
