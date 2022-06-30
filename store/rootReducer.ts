import { combineReducers } from "@reduxjs/toolkit";
import { videoReducer } from "./videos/videoSlice";

const rootReducer = combineReducers({
  video: videoReducer,
});

export default rootReducer;
