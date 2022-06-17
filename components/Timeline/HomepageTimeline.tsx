import * as React from 'react';
import { VStack } from '@components/common';
import CircleIcon from '@mui/icons-material/Circle';
import { Box, Typography, Divider } from "@mui/material";

const timelineEvents = [
  { title: "Orientation", date: "9 Jul", dotColor: "#888AC1", displayBelow: "none", displayAbove: "flex", displayDivider: "visible" },
  { title: "Art Fair", date: "9 Jul - 30 Jul", dotColor: "#BBDBF0", displayBelow: "flex", displayAbove: "none", displayDivider: "visible" },
  { title: "Workshop Period", date: "16 Jul - 24 Jul", dotColor: "#A3D390", displayBelow: "none", displayAbove: "flex", displayDivider: "visible" },
  { title: "Artwork Selection<br />Announcement", date: "7 Aug", dotColor: "#F5D26C", displayBelow: "flex", displayAbove: "none", displayDivider: "visible" },
  { title: "Exhibition Period", date: "19 Aug - 26 Aug", dotColor: "#F17858", displayBelow: "none", displayAbove: "flex", displayDivider: "hidden" },
];

export default function HomepageTimeline() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        height: ['2.375rem', '3.375rem', '4.375rem', '5.375rem'],
        marginTop: ['8.5rem', '10.5rem', '12.5rem', '14.5rem'],
        marginBottom: '3.125rem'
      }}>
      {timelineEvents.map(({ title, date, dotColor, displayBelow, displayAbove, displayDivider }) => (
        <>
          <Box key={title}
            sx={{
              display: 'flex'
            }}
          >
            <VStack>
              <CircleIcon
                sx={{
                  width: ['2.375rem', '3.375rem', '4.375rem', '5.375rem'],
                  height: ['2.375rem', '3.375rem', '4.375rem', '5.375rem'],
                  color: {dotColor},
                  display: {displayBelow}
                }} 
              />
              <Typography
                fontWeight='bold'
                sx={{
                  textAlign: 'center',
                  fontSize: [10, 15, 20, 25]
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: [8, 10, 15, 20]
                }}
              >
                {date}
              </Typography>
              <CircleIcon
                sx={{
                  width: ['2.375rem', '3.375rem', '4.375rem', '5.375rem'],
                  height: ['2.375rem', '3.375rem', '4.375rem', '5.375rem'],
                  color: {dotColor},
                  display: {displayAbove}
                }} />
            </VStack>
          </Box>
          <Divider
              sx={{
                visibility: {displayDivider},
                alignSelf: 'center',
                borderBottom: 'dashed',
                borderBottomWidth: [3, 4, 5],
                width: ['1.75rem', '2.75rem', '3.75rem'],
                color: '#C6BDBD'
              }} 
          />
        </>             
      ))}   
    </Box>
  );
}
