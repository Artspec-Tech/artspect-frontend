import {VStack} from "@components/common";
import Description from "@components/Description";
import Timeline from "@components/Timeline";
import Product from "@components/Product";
import Showcase from "@components/Showcase";
import WebLayout from "@components/Layout/Web";
import {NextPageWithLayout} from "types";
import {ReactElement} from "react";

const Home: NextPageWithLayout = () => {
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
      <Timeline />
      <Showcase />
      <Product />
    </VStack>
  );
};

Home.getLayout = (page: ReactElement) => <WebLayout>{page}</WebLayout>;

export default Home;
