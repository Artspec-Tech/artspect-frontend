import type { NextPage } from "next";
import { VStack } from "@components/common";
import Description from "@components/Description";
import Product from "@components/Product";

const Home: NextPage = () => {
  return (
    <VStack margin={"3rem 6rem 0 6rem"}>
      <Description />
      <Product />
    </VStack>
  );
};

export default Home;
