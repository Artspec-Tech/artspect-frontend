import { VStack } from "@components/common";
import Description from "@components/Description";
import VerticalTimeline from "@components/VerticalTimeline";
import HorizontalTimeline from "@components/HorizontalTimeline";
import Product from "@components/Product";
import Showcase from "@components/Showcase";
import { useMediaQuery, useTheme } from "@mui/material";
import WebLayout from "@components/Layout/Web";
import { NextPageWithLayout } from "types";
import { ReactElement } from "react";

const Home: NextPageWithLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <VStack
      sx={{
        marginY: {
          xs: "0",
          md: "3rem",
        },
        marginX: {
          xs: "1.5rem",
          sm: "2rem",
          md: "6rem",
        },
        gap: {
          xs: "2rem",
          md: "5rem",
        },
      }}
    >
      <Description />
      {isMobile ? <VerticalTimeline /> : <HorizontalTimeline />}
      <Showcase />
      <Product />
    </VStack>
  );
};

Home.getLayout = (page: ReactElement) => <WebLayout>{page}</WebLayout>;

export default Home;
