import { VStack } from "@components/common";
import { Button, Typography } from "@mui/material";
import React from "react";

const ArtworkShowcase = () => {
  return (
    <VStack
      width={"calc(100% + 12rem)"}
      padding={"5rem 0"}
      sx={{
        backgroundColor: "#D9D9D9",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={"bold"}
        fontSize={35}
        marginBottom={"3rem"}
      >
        Showcase your Artwork !
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#FF0000",
          borderRadius: "16px",
          fontSize: "35",
          fontWeight: "bold",
        }}
      >
        SUBMIT NOW
      </Button>
    </VStack>
  );
};

export default ArtworkShowcase;
