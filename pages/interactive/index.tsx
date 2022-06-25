import { Center } from "@components/common";
import InteractiveLayout from "@components/Layout/Interactive";
import React, { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "types";
import { Glob } from "glob";
import axios from "axios";
import { GetStaticProps } from "next";
import { db } from "@utils/db";
import { Button, Typography } from "@mui/material";

const videoPath = "videos/interactive";
const publicVideoPath = `public/${videoPath}`;

const Interactive: NextPageWithLayout<{
  paths: {
    page: string;
    type: string;
  }[];
}> = ({ paths }) => {
  const [percentage, setPercentage] = useState<number>(0);
  useEffect(() => {
    const getVideoData = async () => {
      try {
        paths.forEach(async (path) => {
          const id = await db.videos
            .where({ name: `${path.page}_${path.type}` })
            .first();
          if (!id) {
            const res = await axios.get(
              `/videos/interactive/${path.page}/${path.type}`,
              {
                responseType: "blob",
              }
            );
            const blob = new Blob([res.data], { type: "video/mp4" });
            await db.videos.add({
              name: `${path.page}_${path.type}`,
              blob: blob,
            });
          } else {
            console.log(
              `Already has ${path.page}_${path.type} in database, skipping`
            );
          }
          setPercentage((p) => p + 1);
        });
      } catch (err: unknown) {
        console.log(err);
      }
    };
    getVideoData();
  }, [paths]);
  return (
    <Center>
      <Typography>
        {Math.min(Math.round((percentage / (paths.length - 1)) * 100), 100)} %
      </Typography>
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
