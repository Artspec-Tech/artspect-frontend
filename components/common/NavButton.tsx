import { Button, ButtonProps, Typography } from "@mui/material";
import React from "react";

type Props = ButtonProps & {
  text: string;
  circleColor: string;
};

const NavButton = ({ text, circleColor, ...props }: Props) => {
  return (
    <Button
      style={{
        textTransform: "none",
      }}
      {...props}
    >
      <div
        style={{
          borderRadius: "50%",
          backgroundColor: circleColor,
          width: "20px",
          height: "20px",
          filter: "blur(9px)",
          position: "relative",
          marginLeft: "-20px",
          left: "105%",
        }}
      ></div>
      <Typography>{text}</Typography>
    </Button>
  );
};

export default NavButton;
