import { HStack, VStack, Divider, Center } from "@components/common";
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
    <HStack height={["150px", "300px", "400px"]} paddingX={"5%"}>
      <IconButton onClick={() => carousel.current?.slidePrev()}>
        <ArrowBackIosRounded
          sx={{
            fontSize: ["1rem", "2rem", null],
          }}
        />
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
            paddingX={["1rem", "2rem", "4rem"]}
          >
            <Center width={"30%"}>
              <Box
                borderRadius={"50%"}
                height={["4.5rem", "10rem", "13rem"]}
                overflow="hidden"
                position="relative"
                style={{
                  aspectRatio: "1",
                }}
              >
                <Image
                  src={artist.img}
                  alt="Van gogh"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Center>
            <VStack width={"70%"} gap={[1, 1.5, 2]}>
              <Typography
                fontWeight={fontWeights.medium}
                fontSize={[10, 15, 25]}
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
              <Typography
                fontStyle={"italic"}
                fontWeight={fontWeights.light}
                fontSize={[10, 15, 25]}
              >
                {artist.name}
              </Typography>
            </VStack>
          </HStack>
        ))}
      </PietileCarousel>
      <IconButton onClick={() => carousel.current?.slideNext()}>
        <ArrowForwardIosRounded
          sx={{
            fontSize: ["1rem", "2rem", null],
          }}
        />
      </IconButton>
    </HStack>
  );
};

export default ArtistCarousel;
