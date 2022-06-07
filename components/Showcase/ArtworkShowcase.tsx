import { VStack } from "@components/common";
import { Button, Typography } from "@mui/material";
import React from "react";

const ArtworkShowcase = () => {
  return (
    <VStack
      width={["calc(100% + 3rem)", "calc(100% + 4rem)", "calc(100% + 12rem)"]}
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
        Showcase Your Artwork !
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FF0000",
          borderRadius: "10rem",
          paddingX: ["1.5rem", "2rem", "3rem"],
          fontSize: [10, 15, 30],
          fontWeight: "bold",
        }}
      >
        SUBMIT NOW
      </Button>
    </VStack>
  );
};

export default ArtworkShowcase;
