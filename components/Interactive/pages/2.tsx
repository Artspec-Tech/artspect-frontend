import { VStack } from "@components/common";
import { Typography } from "@mui/material";
import React from "react";
import { ChoiceButton, BackgroundVideo } from "../common";
const InteractivePage = () => {
  return (
    <BackgroundVideo>
      <VStack gap={3.5}>
        <Typography
          variant="h3"
          align="center"
          width={"60%"}
          marginBottom={8}
          sx={{ fontSize: 20, fontWeight: "bold" }}
        >
          แล้วพบว่ามีหมอกแห่งอารมณ์ เคลื่อนตัวเข้าปกคลุม หมอกเหล่านั้นมีหน้าตา……
        </Typography>
        <ChoiceButton idx={0}>หนาปิดมิดจนฉันหา ทางออกไม่ได้</ChoiceButton>
        <ChoiceButton idx={1}>จางๆพอมีแสงรำไรให้เห็นอยู่บ้าง</ChoiceButton>
      </VStack>
    </BackgroundVideo>
  );
};

export default InteractivePage;
