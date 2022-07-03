import { Center, VStack } from "@components/common";
import InteractiveLayout from "@components/Layout/Interactive";
import React, { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "types";
import { Glob } from "glob";
import axios from "axios";
import { GetStaticProps } from "next";
import { db } from "@utils/db";
import { Box, LinearProgress, Typography } from "@mui/material";
import { useNextPage } from "hooks/useNextPage";
import { useRouter } from "next/router";

const videoPath = "videos/interactive";
const publicVideoPath = `public/${videoPath}`;

const Interactive: NextPageWithLayout<{
  paths: {
    page: string;
    type: string;
  }[];
}> = ({ paths }) => {
  const [percentage, setPercentage] = useState<number>(0);
  const router = useRouter();
  useEffect(() => {
    const getVideoData = async () => {
      try {
        await Promise.all(
          paths.map(async (path) => {
            const id = await db.videos
              .where({ name: `${path.page}_${path.type}` })
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
            console.log(path);
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
    <Center>
      <VStack width="100%" gap="1.5rem">
        <Typography>
          {Math.min(Math.round((percentage / (paths.length - 1)) * 100), 100)} %
        </Typography>
        <Box width="60%">
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
            }}
          />
        </Box>
      </VStack>
    </Center>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const glob = new Glob(`${publicVideoPath}/**/*.mp4`, { sync: true });
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
