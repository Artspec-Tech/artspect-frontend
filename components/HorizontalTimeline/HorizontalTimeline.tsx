import * as React from "react";
import { VStack } from "@components/common";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, Typography, Divider } from "@mui/material";

const timelineEvents = [
  {
    title: "Orientation",
    date: "9 Jul",
    dotColor: "#888AC1",
    leftMargin: ['-0.5rem', '-0.5rem', '-0.938rem', '-1.138rem'],
    rightMargin: '0rem'
  },
  {
    title: "Art Fair",
    date: "9 Jul - 30 Jul",
    dotColor: "#BBDBF0",
    leftMargin: '0rem',
    rightMargin: ['-0.8rem', '-1.7rem', '-2.5rem', '-3rem']

  },
  {
    title: "Workshop Period",
    date: "16 Jul - 24 Jul",
    dotColor: "#A3D390",
    leftMargin: ['-1rem', '-1.6rem', '-2.5rem', '-3rem'],
    rightMargin: ['-1rem', '-4.8rem', '-6.8rem', '-8.3rem']
  },
  {
    title: "Artwork Selection Announcement",
    date: "7 Aug",
    dotColor: "#F5D26C",
    leftMargin: ['-1rem', '-4.8rem', '-6.8rem', '-8.3rem'],
    rightMargin: ['-1rem', '-1.6rem', '-2.5rem', '-3rem']
  },
  {
    title: "Exhibition Period",
    date: "19 Aug - 26 Aug",
    dotColor: "#F17858"
  },
];

export default function HomepageTimeline() {
  return (
    <Box
      sx={{
        display: 'flex',
        height: ["2.375rem", "3.375rem", "4.375rem", "5.375rem"],
        marginTop: ["8.5rem", "10.5rem", "12.5rem", "14.5rem"],
        marginBottom: "3.125rem",
      }}
    >
      {timelineEvents.map((event, i) => (
        <Box key={i}
          sx={{
            display: 'flex',
            alignItems: "flex-start"
          }}
        >
          <Box
            sx={{
              display: 'flex',
              ...(i % 2 === 0 && {
                alignSelf: 'flex-end'
              })
            }}
          >
            <VStack>
              {i % 2 === 0 && (
                <Box>
                  <Typography
                    fontWeight="bold"
                    sx={{
                      textAlign: "center",
                      fontSize: [8, 13, 18, 22],
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: [6, 8, 13, 18],
                    }}
                  >
                    {event.date}
                  </Typography>
                </Box>
              )}
              
              <CircleIcon
                sx={{
                  width: ["2.375rem", "3.375rem", "4.375rem", "5.375rem"],
                  height: ["2.375rem", "3.375rem", "4.375rem", "5.375rem"],
                  color: event.dotColor,
                }}
              />

              {i % 2 === 1 && (
                <Box>
                  <Typography
                    fontWeight="bold"
                    sx={{
                      textAlign: "center",
                      fontSize: [8, 13, 18, 22],
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: [6, 8, 13, 18],
                    }}
                  >
                    {event.date}
                  </Typography>
                </Box>
              )}

            </VStack>
          </Box>
          {i !== timelineEvents.length - 1 && (
            <Divider
              sx={{
                display: 'flex',
                alignSelf: "center",
                borderBottom: "dashed",
                borderBottomWidth: [3, 4, 5],
                width: ["1.75rem", "2.75rem", "3.75rem"],
                color: "#C6BDBD",
                marginLeft: event.leftMargin,
                marginRight: event.rightMargin
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
}
