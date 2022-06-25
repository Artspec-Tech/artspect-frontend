import { getOrElse } from "@utils/nullOperations";
import { useRouter } from "next/router";
import React, { MediaHTMLAttributes, RefObject } from "react";

type Props = {
  page?: string;
  src?: string;
  videoType?: string;
  handleEnded?: () => void;
  videoRef?: RefObject<any>;
} & MediaHTMLAttributes<any>;

const BackgroundVideo = ({
  page,
  src,
  videoType = "loop",
  videoRef,
  handleEnded = () => 0,
  children,
  loop = true,
  autoPlay = true,
  muted = true,
  ...props
}: Props) => {
  const { query } = useRouter();
  return (
    <>
      <video
        onEnded={() => handleEnded()}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: -1,
          objectFit: "cover",
        }}
        ref={videoRef}
        loop={loop}
        autoPlay={autoPlay}
        muted={muted}
        {...props}
      >
        <source
          src={getOrElse(
            src,
            `/videos/interactive/${getOrElse(
              page,
              query.page
            )}/${videoType}.mp4`
          )}
          type="video/mp4"
        />
      </video>
      {children}
    </>
  );
};

export default BackgroundVideo;
