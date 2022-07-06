import {Center, VStack} from "@components/common";
import InteractiveLayout from "@components/Layout/Interactive";
import {arrayBufferToBlob} from "@utils/binaryOperations";
import React, {ReactElement, useEffect, useState} from "react";
import {NextPageWithLayout} from "types";
import {Glob} from "glob";
import axios from "axios";
import BackgroundVideo from "../../components/Interactive/common/BackgroundVideo";
import {Box, LinearProgress, Button} from "@mui/material";
import {GetStaticProps} from "next";
import {db, Video} from "@utils/db";

import {useRouter} from "next/router";

const videoPath = "videos/interactive";
const publicVideoPath = `public/${videoPath}`;

const Interactive: NextPageWithLayout<{
  paths: {
    page: string;
    type: string;
  }[];
}> = ({paths}) => {
  const [percentage, setPercentage] = useState<number>(0);
  const [status, setStatus] = React.useState<"initial" | "loop">("initial");
  const [videoSrc, setVideoSrc] = useState<string>("");
  const [secondVideoSrc, setSecondVideoSrc] = useState<string>("");

  function handleEnded() {
    console.log("ended");
    if (status !== "loop") {
      setVideoSrc(secondVideoSrc);
    }
    setStatus("loop");
  }

  const router = useRouter();
  useEffect(() => {
    const getVideoData = async () => {
      try {
        //for initial video
        await Promise.all(
          [
            {page: "0", type: "initial.mp4"},
            {page: "0", type: "loop.mp4"},
          ].map(async (path) => {
            const id = await db.videos
              .where({name: `${path.page}_${path.type}`})
              .first();
            if (!id) {
              const res = await axios.get(
                `/videos/interactive/${path.page}/${path.type}`,
                {
                  responseType: "arraybuffer",
                }
              );
              console.log(res);
              console.log("hah");

              await db.videos.add({
                name: `${path.page}_${path.type}`,
                arrayBuffer: res.data as ArrayBuffer,
              });
            }
            const video = (await db.videos
              .where({name: "0_initial.mp4"})
              .first()) as Video;
            const blob = arrayBufferToBlob(video.arrayBuffer, "video/mp4");
            const videoUrl = URL.createObjectURL(blob);
            setVideoSrc(videoUrl);

            const video2 = (await db.videos
              .where({name: "0_loop.mp4"})
              .first()) as Video;
            const blob2 = arrayBufferToBlob(video2.arrayBuffer, "video/mp4");
            const videoUrl2 = URL.createObjectURL(blob2);
            if (!!video2) {
              setSecondVideoSrc(videoUrl2);
            }
          })
        );

        //for all video
        await Promise.all(
          paths.map(async (path) => {
            const id = await db.videos
              .where({name: `${path.page}_${path.type}`})
              .first();
            if (!id) {
              const res = await axios.get(
                `/videos/interactive/${path.page}/${path.type}`,
                {
                  responseType: "arraybuffer",
                }
              );
              await db.videos.add({
                name: `${path.page}_${path.type}`,
                arrayBuffer: res.data as ArrayBuffer,
              });
            }
            setPercentage((p) => p + 1);
          })
        );
        router.push("/interactive/0");
      } catch (err: unknown) {
        console.error(err);
      }
    };
    getVideoData();
  }, [paths]);

  return (
    <>
      {videoSrc === "" ? (
        <Box></Box>
      ) : (
        <BackgroundVideo
          // page="0"
          src={videoSrc}
          nextVideoOnClick={false}
          videoType={status}
          handleEnded={handleEnded}
          loop={status === "loop"}
        >
          <VStack width="100%" gap="1.5rem" paddingTop={10}>
            <Box width="60%" display="flex" sx={{flexDirection: "column"}}>
              <LinearProgress
                variant="determinate"
                value={Math.min(
                  Math.round((percentage / (paths.length - 1)) * 100),
                  100
                )}
                sx={{
                  height: "10px",
                  borderRadius: "5px",
                  "& .MuiLinearProgress-bar": {
                    background: "linear-gradient(197deg, #db6982, #3663a7)",
                  },
                  marginBottom: "10px",
                }}
              />
              {Math.min(
                Math.round((percentage / (paths.length - 1)) * 100),
                100
              ) === 100 ? (
                <Button href="interactive/1" sx={{textTransform: "none"}}>
                  Tap to Enter
                </Button>
              ) : null}
            </Box>
          </VStack>
        </BackgroundVideo>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const glob = new Glob(`${publicVideoPath}/**/*.mp4`, {sync: true});
  const paths = glob.found.map((file) => {
    const fileParts = file.replace(`${publicVideoPath}/`, "").split("/");
    return {
      page: fileParts[0],
      type: fileParts[1],
    };
  });
  return {
    props: {
      paths,
    },
  };
};

Interactive.getLayout = (page: ReactElement) => (
  <InteractiveLayout>{page}</InteractiveLayout>
);

export default Interactive;
