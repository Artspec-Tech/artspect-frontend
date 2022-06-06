import { VStack } from "@components/common";
import { Button, Typography } from "@mui/material";
import React from "react";

const ArtworkShowcase = () => {
  return (
    <VStack
      padding={"5rem 0"}
      sx={{
        paddingY: {
          xs: "1.5rem",
          sm: "3rem",
          md: "5rem",
        },
        width: {
          xs: "calc(100% + 3rem)",
          sm: "calc(100% + 4rem)",
          md: "calc(100% + 12rem)",
        },
        backgroundColor: "#D9D9D9",
        gap: {
          xs: "0.5rem",
          sm: "1rem",
          md: "2rem",
        },
      }}
    >
      <Typography
        fontWeight={"bold"}
        sx={{
          fontSize: {
            xs: 15,
            sm: 20,
            md: 35,
          },
        }}
      >
        Showcase Your Artwork !
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FF0000",
          borderRadius: "10rem",
          paddingX: {
            xs: "1.5rem",
            sm: "2rem",
            md: "3rem",
          },
          fontSize: {
            xs: 10,
            sm: 15,
            md: 30,
          },
          fontWeight: "bold",
        }}
      >
        SUBMIT NOW
      </Button>
    </VStack>
  );
};

export default ArtworkShowcase;
