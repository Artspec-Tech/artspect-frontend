import React from "react";
import { VStack } from "@components/common";
import TwoImage from "./TwoImage";
import ArtistCarousel from "./ArtistCarousel";
import ExtendedFooter from "./ExtendedFooter";

const Footer = () => {
  return (
    <VStack>
      <TwoImage />
      <ArtistCarousel />
      <ExtendedFooter />
    </VStack>
  );
};

export default Footer;
