import React from "react";
import { VStack } from "@components/common";
import TwoImage from "./TwoImage";
import ArtistCarousel from "./ArtistCarousel";

const Footer = () => {
  return (
    <VStack>
      <TwoImage />
      <ArtistCarousel />
    </VStack>
  );
};

export default Footer;
