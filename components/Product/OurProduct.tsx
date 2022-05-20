import { HStack, VStack } from "@components/common";
import { Typography } from "@mui/material";
import React from "react";

type Props = {};

const OurProduct = (props: Props) => {
  return (
    <VStack width={"100%"} margin={"5rem"}>
      <Typography
        textAlign={"left"}
        width={"100%"}
        fontSize={35}
        fontWeight={"bold"}
        color={"#382B4F"}
      >
        OUR PRODUCTS
      </Typography>
      <Typography
        marginTop={"3rem"}
        fontSize={55}
        fontWeight={"bold"}
        color={"#382B4F"}
      >
        COMING SOON
      </Typography>
      <Typography
        textAlign={"center"}
        marginBottom={"3rem"}
        fontSize={45}
        fontWeight={"bold"}
        style={{
          background:
            "-webkit-linear-gradient(180deg, #6E5684 0%, #EF7F5E 20%, #F3B266 33.09%, #E8BC65 37.11%, #E8BC65 44.21%, #E8BC65 48.36%, #EF7F5E 57.07%, #6E5684 75.42%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        STAY TUNED!
      </Typography>
    </VStack>
  );
};

export default OurProduct;
