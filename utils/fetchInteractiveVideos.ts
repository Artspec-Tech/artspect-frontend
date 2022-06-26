import axios from "axios";
import { db } from "./db";

type Props = {
  page: string;
  videoType: string;
};

export const fetchInteractiveVideos = async ({
  page,
  videoType,
}: Props): Promise<void> => {
  try {
    const res = await axios.get(`/videos/interactive/${page}/${videoType}`, {
      responseType: "blob",
    });
    await db.videos.add({
      name: `${page}_${videoType}.mp4`,
      arrayBuffer: res.data as ArrayBuffer,
    });
  } catch {
    console.log(`cannot retrieve /videos/interactive/${page}/${videoType}.mp4`);
  }
};
