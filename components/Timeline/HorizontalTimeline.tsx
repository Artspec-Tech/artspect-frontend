import * as React from "react";
import { VStack } from "@components/common";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, Typography, Divider } from "@mui/material";
import { endOfToday, isWithinInterval } from "date-fns";
import timelineEvents from "./timelineEvents";

export default function HorizontalTimeline() {
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
                      maxWidth: ['13rem','13rem','18rem','22rem'],
                      fontSize: [8, 13, 18, 22],
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: [6, 11, 13, 18],
                    }}
                  >
                    {event.date}
                  </Typography>
                </Box>
              )}
              
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <CircleIcon
                  sx={{
                    width: ["2.375rem", "3.375rem", "4.375rem", "5.375rem"],
                    height: ["2.375rem", "3.375rem", "4.375rem", "5.375rem"],
                    color: event.dotColor,
                    zIndex: 2
                  }}
                />
                {isWithinInterval(endOfToday(), { start: event.dateStart, end: event.dateEnd }) && (
                  <CircleIcon
                    sx={{
                      position: 'absolute',
                      width: ['3rem','4rem','5rem','6rem'],
                      height: ['3rem','4rem','5rem','6rem'],
                      color: '#DA6745',
                      zIndex: 1
                    }}
                  />
                )}
                
              </Box>
              

              {i % 2 === 1 && (
                <Box>
                  <Typography
                    fontWeight="bold"
                    sx={{
                      textAlign: "center",
                      maxWidth: ['13rem','13rem','18rem','22rem'],
                      fontSize: [8, 13, 18, 22],
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: [6, 11, 13, 18],
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
                width: ["1rem", "2.5rem", "3.75rem"],
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
