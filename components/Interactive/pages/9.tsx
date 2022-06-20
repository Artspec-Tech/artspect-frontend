import { Center } from "@components/common";
import { Typography } from "@mui/material";
import React from "react";
import BackgroundVideo from "../common/BackgroundVideo";

const InteractivePage = () => {
  return (
    <BackgroundVideo>
      <Center>
        <Typography
          paddingX={10}
          sx={{
            fontSize: 20,
            textAlign: "center",
            textShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)",
          }}
        >
          “ตอนนี้เธอรับรู้ได้ถึงการมีอยู่ของฉันแล้ว ใช่ไหม”
        </Typography>
      </Center>
    </BackgroundVideo>
  );
};

export default InteractivePage;
