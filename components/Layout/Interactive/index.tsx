import { Box, ThemeProvider } from "@mui/material";
import { NextPage } from "next";
import React, { ReactNode, useEffect, useState } from "react";
import { createTheme } from "@mui/material/styles";
import useWindowDimensions from "hooks/useWindowDimensions";
const interactiveTheme = createTheme({
  typography: {
    fontFamily: "Prompt",
    fontWeightRegular: 300,
    fontWeightBold: 500,
  },
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

type Props = {
  children?: ReactNode;
};

const InteractiveLayout: NextPage = ({ children }: Props) => {
  const [height, setHeight] = useState<string>("100vh");
  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(`${window.innerHeight}px`);
    });
  }, []);
  return (
    <ThemeProvider theme={interactiveTheme}>
      <Box
        width="min(100%, 480px)"
        height={height}
        margin="auto"
        position="relative"
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default InteractiveLayout;
