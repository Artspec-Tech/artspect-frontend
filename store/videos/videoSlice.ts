import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

export type Video = {
  page: string;
  videoType: string;
  axiosResponse: AxiosResponse;
};

export type VideoState = {
  videos: Video[];
};

export const initialState: VideoState = {
  videos: [],
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    addVideos: (state, { payload }: PayloadAction<Video>) => {
      state.videos = [...state.videos, payload];
    },
  },
});

export const { addVideos } = videoSlice.actions;
export const videoReducer = videoSlice.reducer;
