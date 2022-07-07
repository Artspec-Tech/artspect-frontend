import { VStack } from "@components/common";
import { useNextPage } from "hooks/useNextPage";
import React from "react";
import { BackgroundVideo, PageTypography } from "../common";

const InteractivePage = () => {
  const nextPage = useNextPage();
  return (
    <BackgroundVideo onEnded={() => nextPage()} loop={false}>
      <VStack>
        <PageTypography>
          ฉันและหมอกเดินตามทางต่อมาเรื่อยๆจนมาถึงห้องสุดท้าย
        </PageTypography>
      </VStack>
    </BackgroundVideo>
  );
};

export default InteractivePage;
