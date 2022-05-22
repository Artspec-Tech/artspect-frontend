import { BgImage, HStack, VStack } from "@components/common";
import { ExtendedFooterBackground } from "../../../utils/images";
import fontWeights from "@utils/fontWeights";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box } from "@mui/system";
import React from "react";
import { IconButton, Typography } from "@mui/material";

type Props = {};

const ExtendedFooter = (props: Props) => {
  return (
    <BgImage source={ExtendedFooterBackground}>
      <HStack margin={"2rem"} justifyContent={"space-between"} height={"100%"}>
        {/* <VStack width={"5%"} alignItems={"end "}>
          <IconButton color="secondary">
            <InstagramIcon fontSize="large" />
          </IconButton>
        </VStack> */}
        <VStack width={"35%"} height={"100%"} justifyContent={"space-between"}>
          <Typography
            fontSize={30}
            fontWeight={fontWeights.semiBold}
            color="white"
            textAlign={"left"}
            width={"100%"}
          >
            Artspect
          </Typography>
          <Typography fontSize={12} color="white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            adipisci perferendis facere quia. Consequatur rem recusandae
            consectetur sapiente earum aut repellat quibusdam, voluptatem nobis
            quod nam eius suscipit, inventore amet?
          </Typography>
          <Typography fontSize={12} color="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eius
            distinctio blanditiis cumque doloribus vero delectus fugiat minima,
            veniam nam modi eveniet cupiditate. Quia voluptas cupiditate
            corrupti iste dolor officia.
          </Typography>
        </VStack>
        <VStack width={"12%"}>Contact Us</VStack>
        <VStack width={"10%"}>Quick Links</VStack>
        <Box
          style={{
            width: "40%",
          }}
        >
          <div
            style={{
              width: "37vw",
              aspectRatio: "16/9",
              backgroundColor: "#C4C4C4",
            }}
          />
        </Box>
      </HStack>
    </BgImage>
  );
};

export default ExtendedFooter;
