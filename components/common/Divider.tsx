import React from "react";
import { Divider as MuiDivider, DividerProps } from "@mui/material";

type Props = {
  orientation?: "horizontal" | "vertical";
  thickness?: string | number;
} & Omit<DividerProps, "sx">;

const Divider = ({
  orientation = "horizontal",
  thickness,
  ...props
}: Props) => {
  return (
    <MuiDivider
      orientation={orientation}
      flexItem
      {...props}
      sx={
        orientation === "horizontal"
          ? { borderBottomWidth: thickness }
          : { borderRightWidth: thickness }
      }
    />
  );
};

export default Divider;
