import React from "react";
import { BgImage } from "components/common";
import { FooterBackground } from "../../../../utils/images";
import { Box } from "@mui/material";

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
          width: {
            xs: "80vw",
            sm: "35vw",
            xl: "650px",
          },
          aspectRatio: "16/9",
          backgroundColor: "#C4C4C4",
        }}
      />
      <Box
        sx={{
          width: {
            xs: "80vw",
            sm: "35vw",
            xl: "650px",
          },
          aspectRatio: "16/9",
          backgroundColor: "#C4C4C4",
        }}
      />
    </BgImage>
  );
};

export default TwoImage;
