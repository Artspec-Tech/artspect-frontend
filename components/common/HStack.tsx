import React from "react";
import { Stack, StackProps } from "@mui/material";

type Props = StackProps;

const HStack = ({ children, ...props }: Props) => {
  return (
    <Stack
      direction="row"
      width="100%"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      {children}
    </Stack>
  );
};

export default HStack;
