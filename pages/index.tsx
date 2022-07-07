import { NextPageWithLayout } from "types";
import { Center } from "@components/common";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPageWithLayout = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/interactive/0");
  }, []);
  return <Center />;
};

export default Home;
