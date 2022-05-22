import { BgImage, HStack, VStack } from "@components/common";
import { FooterBackground } from "../../../utils/images";
import { Box } from "@mui/system";
import React from "react";

type Props = {};

const ExtendedFooter = (props: Props) => {
  return (
    <BgImage source={FooterBackground}>
      <HStack marginTop={"2rem"} justifyContent={"space-between"}>
        <Box
          style={{
            width: "5%",
          }}
        >
          IG
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
              width: "35vw",
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
