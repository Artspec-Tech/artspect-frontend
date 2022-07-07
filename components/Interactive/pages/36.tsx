import { Center, VStack } from "@components/common";
import React from "react";
import { BackgroundVideo, PageTypography } from "../common";

const InteractivePage = () => {
  return (
    <BackgroundVideo>
      <Center marginBottom={"15rem"}>
        <PageTypography>
          ณ ตอนที่คุณคิดว่าเหลือแค่คุณในที่แห่งนี้
          <br />
          ทันใดนั้น ก็มีสิ่งของปรากฎอยู่ตรงหน้าคุณ
        </PageTypography>
      </Center>
    </BackgroundVideo>
  );
};

export default InteractivePage;
