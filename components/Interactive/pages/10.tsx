import { Center, VStack } from "@components/common";
import { Typography, TypographyProps } from "@mui/material";
import React from "react";
import BackgroundVideo from "../common/BackgroundVideo";
const PageTypography = ({ children, ...props }: TypographyProps) => {
  return (
    <Typography
      sx={{
        fontSize: 20,
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
    <BackgroundVideo page="9">
      <Center>
        <VStack>
          <PageTypography marginTop={10}>&quot;ไม่เป็นไรนะ คนเก่ง</PageTypography>
          <PageTypography marginBottom={5}>
            ไม่ว่าเธอจะเห็นฉันเป็นสีอะไร
          </PageTypography>
          <PageTypography marginBottom={5}>จะหนาแค่ไหน</PageTypography>
          <PageTypography marginBottom={5}>หรือเพราะอะไร</PageTypography>
          <PageTypography>การมีฉันอยู่มันเป็นเรื่องปกตินะ&quot;</PageTypography>
        </VStack>
      </Center>
    </BackgroundVideo>
  );
};

export default InteractivePage;
