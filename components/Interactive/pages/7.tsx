import { VStack } from "@components/common";
import { Typography } from "@mui/material";
import React from "react";
import { ChoiceButton, BackgroundVideo } from "../common";

const choices = [
  "ทั่วร่างกายของฉัน",
  "บนหัวของฉัน",
  "ตรงหัวใจของฉัน",
  "ปลายมือและเท้า",
];

const InteractivePage = () => {
  return (
    <BackgroundVideo>
      <VStack gap={3.5}>
        <Typography
          variant="h3"
          align="center"
          width={"60%"}
          sx={{ fontSize: 20 }}
        >
          หมอกเหล่านั้นเริ่มเคลื่อนตัวอีกครั้ง
          จนฉันสัมผัสได้ว่ามันควบตัวรัดแน่นอยู่ ที่...
        </Typography>
        {choices.map((choice, idx) => {
          return (
            <ChoiceButton key={idx} idx={idx}>
              {choice}
            </ChoiceButton>
          );
        })}
      </VStack>
    </BackgroundVideo>
  );
};

export default InteractivePage;
