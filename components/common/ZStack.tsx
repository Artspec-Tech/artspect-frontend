import React from "react";
import { Box, BoxProps } from "@mui/material";

type Props = {
  reverse?: boolean;
} & BoxProps;

const ZStack = ({ children, reverse = false, ...props }: Props) => {
  return (
    <Box display={"flex"} className={"z-stack"} width={"100%"} height={"100%"}>
      {children &&
        React.Children.map(children, (child, i) => {
          return (
            <Box
              key={i}
              display="flex"
              width={"100%"}
              height={"100%"}
              zIndex={reverse ? i * -1 : i}
              position={"absolute"}
              {...props}
            >
              {child}
            </Box>
          );
        })}
    </Box>
  );
};

export default ZStack;
