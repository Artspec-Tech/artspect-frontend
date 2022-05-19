import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { HStack } from "../common";

type Props = {};

const Description = (props: Props) => {
  return (
    <div>
      <Grid container spacing={2} margin={"1rem 0"}>
        <HStack gap={3} width="auto">
          <Grid item xs={2} marginTop={"4rem"}>
            <Typography fontSize={30} fontWeight={600}>
              Our
            </Typography>
            <Typography fontSize={30} fontWeight={600}>
              Value
            </Typography>
          </Grid>
          <Grid
            item
            xs={1}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Typography fontSize={70} fontWeight={10}>
              |
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography fontSize={10}>
              Artspect aims to guide you through the journey of self-exploration
              using art as a tool. We want to remind people to take a brief
              pause in their busy schedules, listen to their bodies and
              emotions, reflect on them, and identify how they are feeling right
              now. We welcome and invite everyone to join us on this journey.
            </Typography>
          </Grid>
        </HStack>
      </Grid>
      <HStack>
        <Typography>Our Purpose</Typography>
        <Typography>|</Typography>
        <Typography fontSize={10}>
          We encourage everyone to create their art through which the emotions
          are expressed. Then we will host an exhibition to showcase everyones
          work. Through this process, we hope to empower poeple to be more
          expressive of their emotions and inspire people to continue practicing
          self-expression as their habits.
        </Typography>
      </HStack>
    </div>
  );
};

export default Description;
