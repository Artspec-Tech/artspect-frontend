import * as React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Grid, Box, Typography, Divider } from "@mui/material";

const timelineEvents = [
  {
    title: "Exhibition Period",
    date: "19 Aug - 26 Aug",
    dotColor: "#F17858"
  },
  {
    title: "Artwork Selection Announcement",
    date: "7 Aug",
    dotColor: "#F5D26C"
  },
  {
    title: "Workshop Period",
    date: "16 Jul - 24 Jul",
    dotColor: "#A3D390"
  },
  {
    title: "Art Fair",
    date: "9 Jul - 30 Jul",
    dotColor: "#BBDBF0"
  },
  {
    title: "Orientation",
    date: "9 Jul",
    dotColor: "#888AC1"
  },
];

export default function HomepageTimeline() {
  return (
    <Grid container direction="row">
      <Grid item xs={2}>
        {timelineEvents.map((event, i) => (
          <Box key={i}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <CircleIcon
              sx={{
                width: "1.5rem",
                height: "1.5rem",
                color: event.dotColor,
              }}
            />
            {i !== timelineEvents.length - 1 && (
              <Divider
                sx={{
                  borderRight: "dashed",
                  borderRightWidth: 2,
                  height: "1.3rem",
                  color: "#C6BDBD"
                }}
              />
            )}
          </Box>
        ))}
      </Grid>
      <Grid
        container 
        xs={6} 
        direction="column"
        sx={{
          marginBottom:"-1.1rem"
        }}
      >
        {timelineEvents.map((event, i) => (
          <Grid item xs key={i}>
            <Typography
              fontWeight="bold"
              sx={{
                fontSize: 16
              }}
            >
              {event.title}
            </Typography>
          </Grid> 
        ))}  
      </Grid>
      <Grid
        container 
        xs={4}
        direction="column"
        sx={{
          marginTop:"0.21rem",
          marginBottom:"-1.3rem"
        }}
      >
        {timelineEvents.map((event, i) => (
          <Grid item xs key={i}>
            <Typography
              sx={{
                fontSize: 12
              }}
            >
              {event.date}
            </Typography>
          </Grid> 
        ))}  
      </Grid>
    </Grid>
  );
}
