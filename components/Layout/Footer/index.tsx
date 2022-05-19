import React from "react";
import { VStack, Center, HStack } from "@components/common";
import { PietileCarousel } from "pietile-carousel";
import ArtistCarousel from "./ArtistCarousel";
import TwoImage from "./TwoImage";
import { VanGoghImage } from "@utils/images";
import Image, { StaticImageData } from "next/image";
import { Box } from "@mui/system";

type Props = {};

const Footer = (props: Props) => {
  const carouselStyle = {
    width: 150,
    height: 100,
  };

  const itemStyle = {
    width: "100%",
    height: "100%",
  };

  const colors: string[] = ["red", "orange", "yellow"];

  return (
    <VStack>
      <TwoImage />
      <PietileCarousel style={{ width: 400, height: 600 }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{ width: "100%", height: "100%", backgroundColor: color }}
          >
            Hello
          </div>
        ))}
      </PietileCarousel>
    </VStack>
  );
};

export default Footer;
