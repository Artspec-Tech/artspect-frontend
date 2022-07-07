import { Center } from "@components/common";
import { Typography } from "@mui/material";
import React from "react";
import BackgroundVideo from "../common/BackgroundVideo";
import { motion } from "framer-motion";

const InteractivePage = () => {
  return (
    <BackgroundVideo loop={false}>
      <Center>
        <Typography
          paddingX={10}
          sx={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            textShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)",
          }}
          component={motion.h1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 10,
            duration: 5,
          }}
        >
          เช้าวันนึงที่แสนจะธรรมดา ฉันตื่นลืมตาขึ้นมาบนเตียง...
        </Typography>
      </Center>
    </BackgroundVideo>
  );
};

export default InteractivePage;
