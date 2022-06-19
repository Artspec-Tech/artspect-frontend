import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

const InteractivePage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loop, setLoop] = useState(false);
  const url = !loop ? "/videos/pg_0_initial.mp4" : "/videos/pg_0_loop.mp4";
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [url]);
  return (
    <Box width={"100%"} height={"100%"}>
      <video
        ref={videoRef}
        autoPlay
        loop={loop}
        muted
        onEnded={() => {
          if (!loop) setLoop(true);
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: -1,
          objectFit: "cover",
        }}
      >
        <source src={url} type="video/mp4" />
      </video>
    </Box>
  );
};

export default InteractivePage;
