import React from "react";
import {BgImage} from "components/common";
import {FooterBackground} from "../../utils/images";
import {Box} from "@mui/material";
import { WorkshopsImage, MomentImage } from "@utils/images";
import Image from "next/image";

const TwoImage = () => {
  return (
    <BgImage
      src={FooterBackground}
      sx={{
        height: {
          xs: "110vw",
          sm: "300px",
          lg: "400px",
          xl: "450px",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: {
            xs: "80vw",
            sm: "35vw",
            xl: "650px",
          },
          aspectRatio: "16/9"
        }}
      >
        <Image src={WorkshopsImage} layout="fill" objectFit="contain" alt="Welcome to Artspect" />
      </Box>
      <Box
        sx={{
          position: "relative",
          width: {
            xs: "80vw",
            sm: "35vw",
            xl: "650px",
          },
          aspectRatio: "16/9"
        }}
      >
        <Image src={MomentImage} layout="fill" objectFit="contain" alt="Welcome to Artspect" />
      </Box>
    </BgImage>
  );
};

export default TwoImage;
