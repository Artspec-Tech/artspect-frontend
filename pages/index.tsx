import type { NextPage } from "next";
import { VStack } from "@components/common";
import Description from "@components/Description";
import Product from "@components/Product";
import Showcase from "@components/Showcase";

const Home: NextPage = () => {
  return (
    <VStack margin={"3rem 6rem 0 6rem"}>
      <Description />
      <Showcase />
      <Product />
    </VStack>
  );
};

export default Home;
