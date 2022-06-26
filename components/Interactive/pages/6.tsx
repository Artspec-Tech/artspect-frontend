import { VStack } from "@components/common";
import { Typography } from "@mui/material";
import React from "react";
import { BackgroundVideo, ChoiceButton } from "../common";
import { choicesPage6, choicesPage6ToColor } from "../choices/choices";
import { useNextPage } from "hooks/useNextPage";
import { motion } from "framer-motion";

const InteractivePage = () => {
  const nextPage = useNextPage();

  function handleClick(event: React.SyntheticEvent, key: number) {
    window.localStorage.setItem("userChoicePage6", String(key));
    nextPage();
  }

  return (
    <BackgroundVideo nextVideoOnClick={false}>
      <VStack width={"100%"} gap="2rem">
        <Typography
          fontSize={20}
          width="80%"
          textAlign={"center"}
          component={motion.h3}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 3,
          }}
        >
          ฉันจึงเฝ้ามองหมอกแห่งอารมณ์ อยู่ครู่นึง แล้วพบว่า
          หมอกที่ปกคลุมฉันส่วนใหญ่มีสี…..
        </Typography>
        <VStack width={"100%"} height={"auto"} gap="1rem">
          {choicesPage6.map((choice, index) => (
            <ChoiceButton
              key={index}
              idx={index}
              onClick={(e) => handleClick(e, index)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 3.5 + index * 1.1,
                duration: 1,
              }}
            >
              {choice}
            </ChoiceButton>
          ))}
        </VStack>
      </VStack>
    </BackgroundVideo>
  );
};

export default InteractivePage;
