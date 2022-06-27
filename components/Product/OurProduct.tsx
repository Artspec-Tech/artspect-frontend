import {VStack} from "@components/common";
import {Typography} from "@mui/material";
import fontWeights from "@utils/fontWeights";
import React from "react";

const OurProduct = () => {
  return (
    <VStack width={"100%"} gap={["1rem", "2rem", "3rem"]}>
      <Typography
        textAlign={"left"}
        width={"100%"}
        fontSize={[15, 20, 35]}
        fontWeight={"bold"}
        color={"#382B4F"}
      >
        OUR PRODUCTS
      </Typography>
      <VStack height="auto">
        <Typography
          fontSize={[35, 50, 65]}
          fontWeight={"bold"}
          color={"#382B4F"}
          sx={{
            textShadow: "0px 2.5px 4px rgba(0, 0, 0, 0.25);",
          }}
        >
          COMING SOON
        </Typography>
        <Typography
          textAlign={"center"}
          fontSize={[30, 45, 55]}
          fontWeight={"bold"}
          sx={{
            background:
              "-webkit-linear-gradient(180deg, #6E5684 0%, #EF7F5E 20%, #F3B266 33.09%, #E8BC65 37.11%, #E8BC65 44.21%, #E8BC65 48.36%, #EF7F5E 57.07%, #6E5684 75.42%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0px 2.5px 4px rgba(0, 0, 0, 0.15);",
          }}
        >
          STAY TUNED!
        </Typography>
      </VStack>
    </VStack>
  );
};

export default OurProduct;
