import { VStack } from "@components/common";
import { useNextPage } from "hooks/useNextPage";
import React from "react";
import BackgroundVideo from "../common/BackgroundVideo";
import PageTypography from "../common/PageTypography";

const InteractivePage = () => {
  const nextpage = useNextPage();
  return (
    <BackgroundVideo
      loop={false}
      onEnded={() => {
        nextpage();
      }}
    >
      <VStack gap="3rem">
        <PageTypography>
          “ขอให้เธอประทับใจกับห้องจัดแสดงสุดท้ายของ museum of emotions”
        </PageTypography>
        <PageTypography delay={3}>“ห้องนี้ถูกสร้างไว้เพื่อเธอ”</PageTypography>
      </VStack>
    </BackgroundVideo>
  );
};

export default InteractivePage;
