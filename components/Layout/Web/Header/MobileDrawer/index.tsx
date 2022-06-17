import { SwipeableDrawer } from "@mui/material";
import React from "react";
import DrawerContent from "./DrawerContent";

type Props = {
  isDrawerOpen: boolean;
  toggleDrawer: (
    toggle: boolean
  ) => (e: React.KeyboardEvent | React.MouseEvent) => void;
};

const MobileDrawer = ({ isDrawerOpen, toggleDrawer }: Props) => {
  const iOS =
    typeof navigator !== "undefined" && /iPhone|iPod/.test(navigator.userAgent);
  return (
    <SwipeableDrawer
      anchor="right"
      open={isDrawerOpen}
      onOpen={toggleDrawer(true)}
      onClose={toggleDrawer(false)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >
      <DrawerContent toggleDrawer={toggleDrawer} />
    </SwipeableDrawer>
  );
};

export default MobileDrawer;
