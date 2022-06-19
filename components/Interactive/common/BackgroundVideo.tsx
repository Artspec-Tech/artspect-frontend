import React, { MediaHTMLAttributes, ReactEventHandler } from "react";

type Props = {
  path?: string;
  videoType?: string;
  handleEnded?: () => void;
} & MediaHTMLAttributes<any>;

const BackgroundVideo = ({
  path,
  videoType = "video/mp4",
  handleEnded,
  children,
  ...props
}: Props) => {
  return (
    <>
      <video
        onEnded={handleEnded}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: -1,
          objectFit: "cover",
        }}
        {...props}
      >
        <source src={path} type={videoType} />
      </video>
      {children}
    </>
  );
};

export default BackgroundVideo;
