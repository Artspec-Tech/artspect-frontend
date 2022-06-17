import { Box } from "@mui/material";
import { NextPage } from "next";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const InteractiveLayout: NextPage = ({ children }: Props) => {
  return (
    <Box width="min(100%, 480px)" height="100vh" margin="auto">
      {children}
    </Box>
  );
};

export default InteractiveLayout;
