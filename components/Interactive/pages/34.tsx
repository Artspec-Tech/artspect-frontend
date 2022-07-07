import { VStack } from "@components/common";
import { useNextPage } from "hooks/useNextPage";
import React from "react";
import { choicePage34 } from "../choices/choices";
import { ChoiceButton, BackgroundVideo, PageTypography } from "../common";

const InteractivePage = () => {
  const nextPage = useNextPage();
  return (
    <BackgroundVideo nextVideoOnClick={false}>
      <VStack justifyContent="space-between" py="7rem" width="100%">
        <VStack height="auto" gap={4}>
          <PageTypography>
            เวลาของหมอกใกล้หมดลงแล้ว
            <br />
            ถึงเวลาที่คุณต้องบอกลามันแล้วหล่ะ
          </PageTypography>
          <PageTypography delay={3}>
            คุณจะบอกลาเพื่อนคนนี้ของคุณอย่างไร?
          </PageTypography>
        </VStack>
        <VStack height="auto" width="100%" gap={2}>
          {choicePage34.map((choice, index) => (
            <ChoiceButton
              key={index}
              idx={index}
              delay={5}
              onClick={() => nextPage()}
            >
              {choice}
            </ChoiceButton>
          ))}
        </VStack>
      </VStack>
    </BackgroundVideo>
  );
};

export default InteractivePage;
