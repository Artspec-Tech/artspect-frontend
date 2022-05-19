import type { NextPage } from "next";
import { VStack } from "@components/common";
import Description from "@components/Description";

const Home: NextPage = () => {
  return (
    <VStack margin={"3rem 6rem"}>
      <Description />
    </VStack>
  );
};

export default Home;
