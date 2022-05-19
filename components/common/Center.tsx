import { Box, BoxProps } from "@mui/material";
import React from "react";

type Props = BoxProps;

const Center = ({ children, ...props }: Props) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
      width={"100%"}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Center;
