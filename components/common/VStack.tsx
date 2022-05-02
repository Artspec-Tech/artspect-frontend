import React from "react";
import { Stack, StackProps } from "@mui/material";

type Props = StackProps;

const VStack = ({ children, ...props }: Props) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      {...props}
    >
      {children}
    </Stack>
  );
};

export default VStack;
