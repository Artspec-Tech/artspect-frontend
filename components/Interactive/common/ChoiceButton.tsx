import React from "react";
import { Button, ButtonProps, Box, Typography } from "@mui/material";
import { motion, MotionProps } from "framer-motion";
import { getOrElse } from "@utils/nullOperations";

type Props = {
  idx: number;
  delay?: number;
} & ButtonProps &
  MotionProps;

const ChoiceButton = ({
  idx = 0,
  children,
  transition,
  initial,
  animate,
  delay,
  ...props
}: Props) => {
  return (
    <motion.div
      style={{ width: "65%" }}
      initial={getOrElse(initial, { opacity: 0 })}
      animate={getOrElse(animate, { opacity: 1 })}
      transition={getOrElse(transition, {
        delay: getOrElse(delay, 0) + idx * 1,
        duration: 1,
      })}
    >
      <Button
        fullWidth
        variant="outlined"
        sx={{
          minHeight: 55,
          display: "flex",
          justifyContent: "flex-start",
          border: "1px #f4f4f4 solid",
          borderRadius: 3,
          boxShadow: "3px 3px 5px #DED4EC",
          "&:hover": {
            border: "1px #DED4EC solid",
          },
        }}
        {...props}
      >
        <Typography sx={{ fontSize: 30, marginRight: 1.5 }}>
          {String.fromCharCode(97 + idx)}
        </Typography>
        <Typography textAlign={"left"}>{children}</Typography>
      </Button>
    </motion.div>
  );
};

export default ChoiceButton;
