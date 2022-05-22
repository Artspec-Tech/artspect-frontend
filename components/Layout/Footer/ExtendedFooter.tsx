import { BgImage, HStack, VStack } from "@components/common";
import { ExtendedFooterBackground } from "../../../utils/images";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box } from "@mui/system";
import React from "react";
import { IconButton } from "@mui/material";

type Props = {};

const ExtendedFooter = (props: Props) => {
  return (
    <BgImage source={ExtendedFooterBackground}>
      <HStack margin={"2rem"} justifyContent={"space-between"}>
        <Box
          style={{
            width: "5%",
            position: "absolute",
            bottom: "20px",
          }}
        >
          <IconButton color="secondary">
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Box>
        <VStack width={"25%"} marginBottom={"2rem"}>
          Artspect
        </VStack>
        <VStack width={"12%"} marginBottom={"2rem"}>
          Contact Us
        </VStack>
        <VStack width={"10%"} marginBottom={"2rem"}>
          Quick Links
        </VStack>
        <Box
          style={{
            width: "40%",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              width: "37vw",
              aspectRatio: "16/9",
              backgroundColor: "#C4C4C4",
            }}
          />
        </Box>
      </HStack>
    </BgImage>
  );
};

export default ExtendedFooter;
