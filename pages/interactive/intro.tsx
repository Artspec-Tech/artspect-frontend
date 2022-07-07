import { Center, VStack } from "@components/common";
import { PageTypography } from "@components/Interactive/common";
import InteractiveLayout from "@components/Layout/Interactive";
import { Typography } from "@mui/material";
import fontWeights from "@utils/fontWeights";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "types";

const Interactive: NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <VStack gap="2rem" onClick={() => router.push("/interactive/1")}>
      <PageTypography fontWeight={fontWeights.regular}>
        งานออกแบบประสบการ์ณชิ้นนี้
        <br />
        เป็นเพียงแนวทางในการช่วยให้คุณได้สำรวจภายในจิตใจของตนเอง
        <br />
        หาสื่อศิลปะที่เหมาะกับตัวคุณเพื่อการเปิดเผยตัวตนและสื่อสารผ่านงานศิลปะอย่างเป็นอิสระ
      </PageTypography>
      <PageTypography fontWeight={fontWeights.regular}>
        เพราะเราเชื่อว่า การมีความเข้าใจในอารมณ์และความรู้สึกของตนเอง
        จะทำให้เกิดการเติบโตทางความคิด และกระบวนการพัฒนาภายในตนเอง
      </PageTypography>
      <PageTypography fontWeight={fontWeights.regular}>
        และเรา Artspect จะเป็นเพื่อนร่วมทางให้คุณเสมอ ไม่ว่าคุณจะรู้สึกอย่างไร
        หรือคุณจะเป็นคนแบบใด
      </PageTypography>
      <PageTypography fontWeight={fontWeights.regular}>
        &quot;เราไม่ใช่เครื่องจักรแห่งความคิดที่มีความรู้สึก
        เราคือเครื่องจักรแห่งความรู้สึกที่มีความคิด&quot;
        <br />– Antonio Damasio
      </PageTypography>
      <PageTypography fontWeight={fontWeights.regular}>
        (We are not thinking machine that feels, we are feeling machine that
        thinks.)
      </PageTypography>
    </VStack>
  );
};

Interactive.getLayout = (page: ReactElement) => (
  <InteractiveLayout>{page}</InteractiveLayout>
);

export default Interactive;
