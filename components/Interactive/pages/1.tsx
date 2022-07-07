import { Center } from "@components/common";
import React from "react";
import BackgroundVideo from "../common/BackgroundVideo";
import PageTypography from "../common/PageTypography";

const InteractivePage = () => {
  return (
    <BackgroundVideo loop={false}>
      <Center marginBottom={"40rem"}>
        <PageTypography delay={10} duration={5}>
          เช้าวันนึงที่แสนจะธรรมดา
          <br />
          ฉันตื่นลืมตาขึ้นมาบนเตียง...
        </PageTypography>
      </Center>
    </BackgroundVideo>
  );
};

export default InteractivePage;
