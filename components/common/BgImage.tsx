import { Box, BoxProps } from "@mui/material";
import Image from "next/image";
import React from "react";
import { FooterBackground } from "../../utils/images";
import HStack from "./HStack";

type Props = BoxProps & {
  height?: string | number;
  width?: string | number;
};

const BgImage = ({ height, width, children, ...props }: Props) => {
  return (
    <Box
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        height: height,
        width: "100%",
      }}
      {...props}
    >
      <Image
        alt={"imgalt"}
        src={FooterBackground}
        layout="fill"
        objectFit="cover"
        quality={80}
      />
      {children && (
        <HStack
          justifyContent={"space-around"}
          style={{
            zIndex: 10,
          }}
        >
          {children}
        </HStack>
      )}
    </Box>
  );
};

export default BgImage;
