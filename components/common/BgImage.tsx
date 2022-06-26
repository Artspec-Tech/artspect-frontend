import {Box, BoxProps, useMediaQuery, useTheme} from "@mui/material";
import {SystemCssProperties} from "@mui/system";
import React from "react";
import {VStack} from ".";
import HStack from "./HStack";

type Props = BoxProps & {
  src?: any;
  height?: string | number;
  width?: string | number;
};

const BgImage = ({height, src, children, ...props}: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        height: props.sx!.height,
        width: "100%",
        backgroundImage: `url(${src.default.src})`,
        backgroundSize: "cover",
      }}
    >
      {children &&
        (isMobile ? (
          <VStack
            justifyContent={"space-evenly"}
            style={{
              zIndex: 10,
            }}
          >
            {children}
          </VStack>
        ) : (
          <HStack
            justifyContent={"space-evenly"}
            style={{
              zIndex: 10,
            }}
          >
            {children}
          </HStack>
        ))}
    </Box>
  );
};

export default BgImage;
