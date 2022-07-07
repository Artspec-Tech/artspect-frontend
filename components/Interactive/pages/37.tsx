import { Center, VStack } from "@components/common";
import React from "react";
import { BackgroundVideo, PageTypography } from "../common";

const InteractivePage = () => {
  return (
    <BackgroundVideo>
      <Center marginBottom={"15rem"}>
        <VStack gap="4rem">
          <PageTypography>
            ใช่แล้ว
            <br />
            หมอกของคุณได้ฝากของขวัญไว้ให้คุณในวันที่เขาไม่อยู่
          </PageTypography>
          <PageTypography delay={3}>
            หวังว่าคุณจะได้ใช้มันในอนาคตนะ
          </PageTypography>
        </VStack>
      </Center>
    </BackgroundVideo>
  );
};

export default InteractivePage;
