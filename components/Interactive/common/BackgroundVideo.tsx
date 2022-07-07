import { VStack } from "@components/common";
import { arrayBufferToBlob } from "@utils/binaryOperations";
import { db, Video } from "@utils/db";
import { fetchInteractiveVideos } from "@utils/fetchInteractiveVideos";
import { getOrElse } from "@utils/nullOperations";
import { useNextPage } from "hooks/useNextPage";
import { useRouter } from "next/router";
import React, {
  MediaHTMLAttributes,
  RefObject,
  useEffect,
  useState,
} from "react";

type Props = {
  page?: string;
  src?: string;
  videoType?: string;
  nextVideoOnClick?: boolean;
  handleEnded?: () => void;
  videoRef?: RefObject<any>;
} & MediaHTMLAttributes<any>;

const BackgroundVideo = ({
  page,
  src,
  videoType = "loop",
  handleEnded = () => 0,
  children,
  loop = true,
  autoPlay = true,
  muted = true,
  nextVideoOnClick = true,
  ...props
}: Props) => {
  const { query } = useRouter();
  const nextPage = useNextPage();
  const page_path = `/videos/interactive/${getOrElse(
    query.page,
    page
  )}/${videoType}.mp4`;
  return (
    <VStack onClick={nextVideoOnClick ? nextPage : undefined}>
      <video
        onEnded={() => handleEnded()}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: -1,
          objectFit: "cover",
        }}
        loop={loop}
        autoPlay={autoPlay}
        muted={muted}
        src={page_path}
        typeof={"video/mp4"}
        {...props}
      />
      {children}
    </VStack>
  );
};

export default BackgroundVideo;
