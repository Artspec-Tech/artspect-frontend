import { VStack } from "@components/common";
import { Box, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useNextPage } from "hooks/useNextPage";
import React from "react";
import { BackgroundVideo, PageTypography } from "../common";

const InteractivePage = () => {
  const nextPage = useNextPage();
  return (
    <BackgroundVideo nextVideoOnClick={false}>
      <VStack gap={"3rem"}>
        <PageTypography>
          ฉันเหลือบไปเห็นแผ่นกระดาษที่เขากำลังเขียนอยู่มันเป็นกลอนที่ยังแต่งไม่เสร็จ
        </PageTypography>
        <VStack gap={"0.5rem"} height="auto">
          <PageTypography delay={4}>
            &quot;เมฆหมอกหนา พาใจ ให้ขุ่นหมอง
          </PageTypography>
          <PageTypography delay={4}>
            นั่งเฝ้ามอง อยู่ครู่หนึ่ง เริ่มสงสัย
          </PageTypography>
          <PageTypography delay={4}>อารมณ์ที่ สั่งสม อยู่ภายใน</PageTypography>
          <PageTypography delay={4}>ใช่เธอไหม _ _ _ _ _&quot;</PageTypography>
        </VStack>
        <Box
          component={motion.form}
          sx={{
            "& .MuiTextField-root": { m: 1, width: 300 },
          }}
          noValidate
          autoComplete="off"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 6,
            duration: 1,
          }}
        >
          <TextField
            hiddenLabel
            multiline
            rows={6}
            placeholder="Enter text..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                nextPage();
              }
            }}
          />
        </Box>
      </VStack>
    </BackgroundVideo>
  );
};

export default InteractivePage;
