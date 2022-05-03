import React from "react";
import { VStack } from "../../common";
import ArtistCarousel from "./ArtistCarousel";
import TwoImage from "./TwoImage";

type Props = {};

const Footer = (props: Props) => {
  return (
    <VStack>
      <TwoImage />
      <ArtistCarousel />
    </VStack>
  );
};

export default Footer;
