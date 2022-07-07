import { VStack } from "@components/common";
import { Button, Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string;
  textButton: string;
  color: string;
  url: string;
};

const ShowcaseButton = ({ title, textButton, color, url }: Props) => {
  return (
    <VStack
      width="100%"
      gap={["0.5rem", "1rem", "2rem"]}
      paddingY={["1.5rem", "3rem", "5rem"]}
      sx={{
        backgroundColor: "#D9D9D9",
      }}
    >
      <Typography
        fontWeight={"bold"}
        sx={{
          fontSize: [15, 20, 35],
        }}
      >
        {title}
      </Typography>
      <Button
        variant="contained"
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        sx={{
          backgroundColor: color,
          borderRadius: "10rem",
          paddingX: ["1.5rem", "2rem", "3rem"],
          fontSize: [10, 15, 30],
          fontWeight: "bold",
        }}
      >
        {textButton}
      </Button>
    </VStack>
  );
};

export default ShowcaseButton;
