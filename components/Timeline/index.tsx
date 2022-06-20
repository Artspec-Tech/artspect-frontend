import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import HorizontalTimeline from "./HorizontalTimeline";
import VerticalTimeline from "./VerticalTimeline";

const Timeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return isMobile ? <VerticalTimeline /> : <HorizontalTimeline />
};

export default Timeline;
