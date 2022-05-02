import React from "react";
import { Box, Typography } from "@mui/material";
import SubHeader from "./SubHeader";

type Props = {};

const Header = (props: Props) => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100px",
      }}
    >
      <SubHeader />
      <Typography fontSize={50} fontWeight={500}>
        Artspect
      </Typography>
    </Box>
  );
};

export default Header;
