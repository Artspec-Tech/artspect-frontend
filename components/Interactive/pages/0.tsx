import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";

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
      <Typography>Zero</Typography>
    </Box>
  );
};

export default InteractivePage;
