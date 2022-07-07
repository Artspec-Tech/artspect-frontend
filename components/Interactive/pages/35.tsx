import { Center, VStack } from "@components/common";
import { Typography } from "@mui/material";
import React from "react";
import { BackgroundVideo, PageTypography } from "../common";

const InteractivePage = () => {
  return (
    <BackgroundVideo>
      <Center>
        <VStack gap="3rem">
          <PageTypography>“เราไปก่อนนะ”</PageTypography>
          <PageTypography delay={3}>
            เสียงนี้ดังขึ้นจากกลุ่มหมอกที่ค่อยๆจางหายไป
          </PageTypography>
        </VStack>
      </Center>
    </BackgroundVideo>
  );
};

export default InteractivePage;
