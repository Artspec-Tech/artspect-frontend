import React from "react";
import { useRouter } from "next/router";
import { BackgroundVideo } from "../common";

const InteractivePage = () => {
  const [status, setStatus] = React.useState<"initial" | "loop">("initial");

  const router = useRouter();

  return (
    <BackgroundVideo
      videoType={status}
      handleEnded={() => setStatus("loop")}
      loop={status === "loop"}
      onClick={() => {
        status === "loop" && router.push("/interactive/intro");
      }}
      nextVideoOnClick={status === "loop"}
    />
  );
};

export default InteractivePage;
