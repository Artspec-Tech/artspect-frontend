import { VStack } from "@components/common";
import { Box, TextField } from "@mui/material";
import fontWeights from "@utils/fontWeights";
import { motion } from "framer-motion";
import { useNextPage } from "hooks/useNextPage";
import React from "react";
import { choicePage26 } from "../choices/choices";
import { BackgroundVideo, ChoiceButton, PageTypography } from "../common";

const InteractivePage = () => {
  const nextPage = useNextPage();
  return (
    <BackgroundVideo nextVideoOnClick={false}>
      <VStack gap={"3rem"}>
        <VStack height="auto">
          <PageTypography fontWeight={fontWeights.bold}>
            ทันใดนั้น!!
          </PageTypography>
          <PageTypography>
            หมอกสีทึมของนักกวีก็เปลี่ยนเป็นสดใสขึ้นทันที
          </PageTypography>
        </VStack>

        <PageTypography delay={3}>
          ตอนนี้สีหน้าของนักกวีได้เปลี่ยนไปอย่างสิ้นเชิง
          เขาชอบมันมากและขอบคุณฉันไม่หยุด
        </PageTypography>

        <VStack height="auto" gap="2rem" width="100%">
          <PageTypography delay={5}>ส่วนฉัน…</PageTypography>
          <VStack height="auto" gap="1.5rem" width="100%">
            {choicePage26.map((choice, index) => (
              <ChoiceButton
                key={index}
                idx={index}
                delay={6}
                onClick={() => nextPage()}
              >
                {choice}
              </ChoiceButton>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </BackgroundVideo>
  );
};

export default InteractivePage;
