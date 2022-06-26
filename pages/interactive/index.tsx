import {Center} from "@components/common";
import InteractiveLayout from "@components/Layout/Interactive";
import React, {ReactElement, useEffect, useRef} from "react";
import {NextPageWithLayout} from "types";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "store";
import {VideoState} from "store/videos/videoSlice";
import {Glob} from "glob";
import axios from "axios";
import {GetStaticProps} from "next";
import {addVideos} from "store/videos/videoSlice";

const videoPath = "videos/interactive";
const publicVideoPath = `public/${videoPath}`;

const Interactive: NextPageWithLayout<{
  paths: {
    page: string;
    type: string;
  }[];
}> = ({paths}) => {
  const video: VideoState = useSelector<RootState, VideoState>(
    (state) => state.video
  );
  const dispatch = useDispatch();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoUrl, setVideoUrl] = React.useState<string | null>();
  useEffect(() => {
    console.log(paths);
    const getVideoData = async () => {
      try {
        paths.forEach(async (path) => {
          const res = await axios.get(
            `/videos/interactive/${path.page}/${path.type}`,
            {
              responseType: "blob",
            }
          );
          dispatch(
            addVideos({
              axiosResponse: res,
              page: path.page,
              videoType: path.type,
            })
          );
          const blob = new Blob([res.data], {type: "video/mp4"});
          console.log(blob);

          const url = URL.createObjectURL(blob);
          setVideoUrl(url);
        });
      } catch (err: unknown) {
        console.error(err);
      }
    };
    getVideoData();
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);
  return (
    <Center>
      {videoUrl && (
        <video autoPlay loop muted>
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </Center>
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
