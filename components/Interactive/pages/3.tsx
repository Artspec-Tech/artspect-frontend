import { Center, VStack } from "@components/common";
import { Typography, TypographyProps } from "@mui/material";
import fontWeights from "@utils/fontWeights";
import React from "react";
import { BackgroundVideo } from "../common";

const PageTypography = ({ children, ...props }: TypographyProps) => {
  return (
    <Typography
      fontWeight={fontWeights.semiBold}
      fontSize={25}
      sx={{
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
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
      <Center>
        <VStack>
          <PageTypography>หมอกแห่งอารมณ์เหล่านั้น</PageTypography>
          <PageTypography>ดูมีสีสันปะปน</PageTypography>
          <PageTypography>แล้วสีไหนที่ปกคลุมฉัน</PageTypography>
          <PageTypography>อย่กันบ้างนะ?</PageTypography>
        </VStack>
      </Center>
    </BackgroundVideo>
  );
};

export default InteractivePage;
