import * as React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { endOfToday, isWithinInterval } from "date-fns";
import timelineEvents from "./timelineEvents";

export default function VerticalTimeline() {
  return (
    <Box>
      {timelineEvents.slice(0).reverse().map((event, i) => (
      <Grid container direction="row" key={i}>
        <Grid item xs={2}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <CircleIcon
                sx={{
                  width: "1.5rem",
                  height: "1.5rem",
                  color: event.dotColor,
                  zIndex: 2
                }}
              />
              {isWithinInterval(endOfToday(), { start: event.dateStart, end: event.dateEnd }) && (
                <CircleIcon
                  sx={{
                    position: 'absolute',
                    width: '1.75rem',
                    height: '1.75rem',
                    color: '#DA6745',
                    zIndex: 1
                  }}
                />
              )}
            </Box>
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
        </Grid>
        <Grid
          container
          item
          xs={6} 
          direction="column"
          sx={{
            marginBottom:"-1.1rem"
          }}
        >
          <Grid item xs>
            <Typography
              fontWeight="bold"
              sx={{
                fontSize: 16
              }}
            >
              {event.title}
            </Typography>
          </Grid> 
        </Grid>
        <Grid
          container
          item 
          xs={4}
          direction="column"
          sx={{
            marginTop:"0.21rem",
            marginBottom:"-1.3rem"
          }}
        >
          <Grid item xs>
            <Typography
              sx={{
                fontSize: 12
              }}
            >
              {event.date}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      ))}
    </Box>
  );
}
