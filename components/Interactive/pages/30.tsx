import { VStack } from "@components/common";
import React from "react";
import BackgroundVideo from "../common/BackgroundVideo";
import PageTypography from "../common/PageTypography";

const InteractivePage = () => {
  return (
    <BackgroundVideo page={"29"} loop={false}>
      <VStack gap="3rem">
        <VStack height="auto" width="100%">
          <PageTypography>ว่างเปล่า?</PageTypography>
          <PageTypography delay={4}>
            คำถามนี้ผุดขึ้นมาในหัวของฉัน
          </PageTypography>
        </VStack>
        <PageTypography delay={6}>
          ห้องสีขาวโปร่ง ไม่มีแม้กระทั่งกำแพงคอยกั้น
          นี่เป็นห้องจัดแสดงจริงๆหรือเนี่ย
        </PageTypography>
      </VStack>
    </BackgroundVideo>
  );
};

export default InteractivePage;
