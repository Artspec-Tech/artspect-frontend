import React from "react";
import {BackgroundVideo} from "../common";

const InteractivePage = () => {
  const [status, setStatus] = React.useState<"initial" | "loop">("initial");

  function handleEnded() {
    console.log("ended");
    setStatus("loop");
  }

  return (
    <BackgroundVideo
      videoType={status}
      handleEnded={handleEnded}
      loop={status === "loop"}
      nextVideoOnClick={status === "loop"}
    />
  );
};

export default InteractivePage;
