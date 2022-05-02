import type { NextPage } from "next";
import { Box } from "@mui/material";
import Layout from "../components/layout";
import { HStack } from "../components/common";

const Home: NextPage = () => {
  return (
    <Layout>
      <HStack flexGrow={1}>Hello, world!</HStack>
    </Layout>
  );
};

export default Home;
