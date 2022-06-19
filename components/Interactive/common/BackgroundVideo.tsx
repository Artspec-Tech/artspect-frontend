import { Box } from "@mui/material";
import React from "react";

type Props = {
  url: string;
  children?: React.ReactNode;
};

const BackgroundVideo = ({ url, children }: Props) => {
  return (
    <Box width={"100%"} height={"100%"}>
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: -1,
        }}
      >
        <source src={url} type="video/mp4" />
      </video>
      {children}
    </Box>
  );
};

export default BackgroundVideo;
