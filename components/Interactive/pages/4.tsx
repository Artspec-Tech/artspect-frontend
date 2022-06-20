import { Center, VStack } from "@components/common";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BackgroundVideo } from "../common";

const InteractivePage = () => {
  return (
    <BackgroundVideo>
      <Center>
        <VStack>
          <Typography
            sx={{
              width: "50%",
              textAlign: "right",
              position: "absolute",
              top: "1.5rem",
              left: "10rem",
            }}
          >
            หมอกสีเหลืองแสดงถึงความสุข สงบ พอใจ และสนุกสนาน
          </Typography>
          <Typography>หมอกสีม่วงน่าประหลาดใจ ตื่นเต้น และสับสน</Typography>
          <Typography>หมอกสีฟ้า ดูเศร้าซึม เหงาๆ และสิ้นหวัง</Typography>
        </VStack>
      </Center>
    </BackgroundVideo>
  );
};

export default InteractivePage;
