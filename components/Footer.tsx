import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { IconButton } from "@mui/material";
import { HStack, VStack } from "./common";
import BgImage from "./common/BgImage";

type Props = {};

const Footer = (props: Props) => {
  return (
    <VStack>
      <BgImage height={"450px"}>
        <div
          style={{
            width: "45vw",
            aspectRatio: "16/9",
            backgroundColor: "#C4C4C4",
          }}
        />
        <div
          style={{
            width: "45vw",
            aspectRatio: "16/9",
            backgroundColor: "#C4C4C4",
          }}
        />
      </BgImage>
      <HStack
        paddingX={20}
        height={"400px"}
        justifyContent={"space-between"}
        style={{
          backgroundColor: `rgba(185, 223, 255, 0.47)`,
        }}
      >
        <IconButton size="large" color="primary">
          <ChevronLeftIcon fontSize="inherit" />
        </IconButton>

        <IconButton size="large" color="primary">
          <ChevronRightIcon fontSize="inherit" />
        </IconButton>
      </HStack>
    </VStack>
  );
};

export default Footer;
