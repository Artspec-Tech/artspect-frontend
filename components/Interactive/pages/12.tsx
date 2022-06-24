import { Center, VStack } from "@components/common";
import { Typography, TypographyProps } from "@mui/material";
import React from "react";
import BackgroundVideo from "../common/BackgroundVideo";
const PageTypography = ({ children, ...props }: TypographyProps) => {
  return (
    <Typography
      sx={{
        fontSize: 18,
        textAlign: "center",
        textShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)",
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};
const InteractivePage = () => {
  return (
    <BackgroundVideo page="16" >
        <VStack justifyContent={"start"}>
          <PageTypography marginTop={5} marginBottom={2}>"ยินดีต้อนรับสู่ (museum of emotions) นะ</PageTypography>
          <PageTypography>ที่นี่น่ะ</PageTypography>
          <PageTypography marginBottom={3}>ทุกคนมีหมอกของตัวเองมาด้วยกันทั้งนั้น</PageTypography>
          <PageTypography>แล้วก็มีหลายสีเต็มไปหมดเลย"</PageTypography>
        </VStack>
    </BackgroundVideo>
  );
};

export default InteractivePage;
