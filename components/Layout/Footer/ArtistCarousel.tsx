import { IconButton, Typography } from "@mui/material";
import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { VanGoghImage } from "../../../utils/images";
import Image from "next/image";
import { HStack, VStack } from "../../common";

type Props = {};

const ArtistCarousel = (props: Props) => {
  const slider = useRef<Slider>(null);

  const settings: Settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
  };
  return (
    <HStack
      paddingX={20}
      height={"400px"}
      justifyContent={"space-between"}
      style={{
        backgroundColor: `rgba(185, 223, 255, 0.47)`,
      }}
    >
      <IconButton
        size="large"
        color="primary"
        onClick={() => slider.current?.slickPrev()}
      >
        <ChevronLeftIcon fontSize="inherit" />
      </IconButton>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Slider {...settings} ref={slider}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <div key={i}>
              <HStack justifyContent="space-between" gap={"50px"}>
                <VStack
                  borderRadius="50%"
                  overflow="hidden"
                  style={{
                    aspectRatio: "1",
                  }}
                >
                  <Image src={VanGoghImage} alt="van goh" objectFit="cover" />
                </VStack>
                <VStack width={"100%"}>
                  <Typography fontSize={20} fontWeight={600} textAlign="center">
                    “Paintings have a life of their own that derives from the
                    painter&apos;s soul.”
                  </Typography>
                  <Typography fontSize={15} fontWeight={200} textAlign="center">
                    - Vincent Van Gogh
                  </Typography>
                </VStack>
              </HStack>
            </div>
          ))}
        </Slider>
      </div>

      <IconButton
        size="large"
        color="primary"
        onClick={() => slider.current?.slickNext()}
      >
        <ChevronRightIcon fontSize="inherit" />
      </IconButton>
    </HStack>
  );
};

export default ArtistCarousel;
