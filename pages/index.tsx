import type { NextPage } from "next";
import { VStack } from "@components/common";
import Description from "@components/Description";
import Product from "@components/Product";
import Showcase from "@components/Showcase";

const Home: NextPage = () => {
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
      <Showcase />
      <Product />
    </VStack>
  );
};

export default Home;
