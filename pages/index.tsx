import type { NextPage } from "next";
import { Center, VStack } from "@components/common";
import Description from "@components/Description";
import Product from "@components/Product";
import Showcase from "@components/Showcase";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const Home: NextPage = () => {
  return (
    <VStack margin={"3rem 6rem 0 6rem"} gap={"5rem"}>
      <Description />
      <Showcase />
      <Product />
    </VStack>
  );
};

export default Home;
