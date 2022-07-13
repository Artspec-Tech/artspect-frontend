import { NextPageWithLayout } from "types";
import { Center } from "@components/common";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPageWithLayout = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);
  return <Center />;
};

export default Home;
