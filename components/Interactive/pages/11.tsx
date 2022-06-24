import { Center, VStack } from "@components/common";
import { Typography } from "@mui/material";
import React from "react";
import BackgroundVideo from "../common/BackgroundVideo";

const InteractivePage = () => {
  return (
    <BackgroundVideo page="14" loop={false}>
      <Center>
        <VStack>
          <Typography
            sx={{
              fontSize: 18,
              textAlign: "center",
              textShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)",
			  marginBottom: 2,
            }}
          >
            “ฉันอยากจะพาเธอไปยังที่แห่งหนึ่ง
          </Typography>
          <Typography
            sx={{
              fontSize: 18,
              textAlign: "center",
              textShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)",
            }}
          >
            ตามฉันมานะ”
          </Typography>
        </VStack>
      </Center>
    </BackgroundVideo>
  );
};

export default InteractivePage;
