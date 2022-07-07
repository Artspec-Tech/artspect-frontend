import { Typography, TypographyProps } from "@mui/material";
import { motion, MotionProps } from "framer-motion";

type Props = {
  delay?: number;
  duration?: number;
  fontWeight?: TypographyProps["fontWeight"];
  fontSize?: number;
  children: React.ReactNode;
};

const PageTypography = ({
  delay = 1,
  duration = 3,
  fontWeight = 500,
  fontSize,
  children,
}: Props & any) => {
  return (
    <Typography
      component={motion.h3}
      paddingX={"1rem"}
      fontSize={20}
      fontWeight={fontWeight}
      sx={{
        fontSize: fontSize || 18,
        textAlign: "center",
        textShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: delay,
        duration: duration,
      }}
    >
      {children}
    </Typography>
  );
};

export default PageTypography;
