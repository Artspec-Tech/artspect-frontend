import {Center, VStack} from "@components/common";
import {Typography, TypographyProps} from "@mui/material";
import React from "react";
import BackgroundVideo from "../common/BackgroundVideo";
const PageTypography = ({children, ...props}: TypographyProps) => {
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
    <BackgroundVideo>
      <VStack justifyContent={"start"}>
        <PageTypography marginTop={12} marginBottom={2} marginX={12}>
          ห้องสุดท้ายนี้ดูมืดผิดหูผิดตา มีหมอกปกคลุมเต็มไปหมด
        </PageTypography>
        <PageTypography marginBottom={2} marginX={8}>
          มีเพียงแสงโคมไฟที่ส่องลงมาบนหน้านักกวีที่นั่งกุมขมับอยู่
        </PageTypography>
        <PageTypography>ฉันค่อยๆเดินเข้าไปหาเขาใกล้ๆ</PageTypography>
      </VStack>
    </BackgroundVideo>
  );
};

export default InteractivePage;
