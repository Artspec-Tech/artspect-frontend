import React from "react";
import { BgImage } from "../../common";
import { FooterBackground } from "../../../utils/images";
import { Box } from "@mui/material";

type Props = {};

const TwoImage = (props: Props) => {
  return (
    <BgImage
      src={FooterBackground}
      sx={{
        height: {
          xs: "100vw",
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
