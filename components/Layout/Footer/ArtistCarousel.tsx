import { HStack, VStack, Divider } from "@components/common";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import { IconButton, Box, Typography } from "@mui/material";
import fontWeights from "@utils/fontWeights";
import { VanGoghImage } from "@utils/images";
import { PietileCarousel, PietileCarouselHandle } from "pietile-carousel";
import artists from "./artists";
import React, { useRef } from "react";
import Image from "next/image";

const ArtistCarousel = () => {
  const carousel = useRef<PietileCarouselHandle>(null);
  return (
    <HStack
      height={"400px"}
      paddingX={"5%"}
      sx={{
        backgroundColor: "#E2F2FF",
      }}
    >
      <IconButton onClick={() => carousel.current?.slidePrev()}>
        <ArrowBackIosRounded />
      </IconButton>
      <PietileCarousel
        ref={carousel}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {artists.map((artist) => (
          <HStack
            key={artist.name}
            height="100%"
            justifyContent={"space-between"}
            paddingX={"5rem"}
          >
            <Box
              borderRadius={"50%"}
              height={"50%"}
              overflow="hidden"
              position="relative"
              style={{
                aspectRatio: "1",
              }}
            >
              <Image
                src={VanGoghImage}
                alt="Van gogh"
                layout="fill"
                objectFit="cover"
              />
            </Box>
            <VStack width={"70%"} gap={2}>
              <Typography
                fontWeight={fontWeights.medium}
                fontSize={25}
                fontStyle={"italic"}
                lineHeight={1}
                textAlign="center"
                letterSpacing={"0.4px"}
              >
                {artist.quote}
              </Typography>
              <Divider
                color="black"
                style={{
                  marginLeft: "20%",
                  marginRight: "20%",
                }}
              />
              <Typography fontStyle={"italic"} fontWeight={fontWeights.light}>
                {artist.name}
              </Typography>
            </VStack>
          </HStack>
        ))}
      </PietileCarousel>
      <IconButton onClick={() => carousel.current?.slideNext()}>
        <ArrowForwardIosRounded />
      </IconButton>
    </HStack>
  );
};

export default ArtistCarousel;
