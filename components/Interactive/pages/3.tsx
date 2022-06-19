import { Center, VStack } from "@components/common";
import { Typography } from "@mui/material";
import fontWeights from "@utils/fontWeights";
import React from "react";
import { BackgroundVideo } from "../common";

const InteractivePage = () => {
  return (
    <BackgroundVideo
      path="/videos/interactive/3/loop.mp4"
      videoType="video/mp4"
      loop
      muted
      autoPlay
    >
      <Center>
        <VStack>
          <Typography fontWeight={fontWeights.semiBold} fontSize={30}>
            หมอกแห่งอารมณ์เหล่านั้น
          </Typography>
          <Typography fontWeight={fontWeights.semiBold} fontSize={30}>
            ดูมีสีสันปะปน
          </Typography>
          <Typography fontWeight={fontWeights.semiBold} fontSize={30}>
            แล้วสีไหนที่ปกคลุมฉัน
          </Typography>
          <Typography fontWeight={fontWeights.semiBold} fontSize={30}>
            อย่กันบ้างนะ?
          </Typography>
        </VStack>
      </Center>
    </BackgroundVideo>
  );
};

export default InteractivePage;
