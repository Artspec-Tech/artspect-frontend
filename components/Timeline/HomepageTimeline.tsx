import * as React from 'react';
import { HStack, VStack } from '@components/common';
import CircleIcon from '@mui/icons-material/Circle';
import { Box, Typography, Divider } from "@mui/material";


const HomepageTimeline = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        height: ['2.375rem', '3.375rem', '4.375rem', '5.375rem'],
        marginTop: ['8.5rem', '10.5rem', '12.5rem', '14.5rem'],
        marginBottom: '3.125rem'
      }}>
      <Box
        sx={{
          display: 'flex'
        }}
      >
        <VStack>
          <Typography
            fontWeight='bold'
            sx={{
              textAlign: 'center',
              fontSize: [10, 15, 20, 25]
            }}
          >
            Orientation
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: [8, 10, 15, 20]
            }}
          >
            9 Jul
          </Typography>
          <CircleIcon
            sx={{
              width:['2.375rem', '3.375rem', '4.375rem', '5.375rem'],
              height:['2.375rem', '3.375rem', '4.375rem', '5.375rem'],
              color: '#888AC1'
            }}
          ></CircleIcon>
        </VStack>
      </Box>
      <Divider
        sx={{
          display: 'flex',
          alignSelf: 'center',
          borderBottom: 'dashed',
          borderBottomWidth: [3, 4, 5],
          width: ['1.75rem', '2.75rem', '3.75rem'],
          color: '#C6BDBD',
          marginLeft: ['-0.5rem', '-0.738rem', '-0.938rem']
        }}
      ></Divider>
      <Box
        sx={{
          display: 'flex',
          alignSelf: 'flex-start'
        }}
      >
        <VStack>
          <CircleIcon
            sx={{
              width:['2.375rem', '3.375rem', '4.375rem', '5.375rem'],
              height:['2.375rem', '3.375rem', '4.375rem', '5.375rem'],
              color: '#BBDBF0'
            }}
          ></CircleIcon>        
          <Typography
            fontWeight='bold'
            sx={{
              textAlign: 'center',
              fontSize: [10, 15, 20, 25]
            }}
          >
            Art Fair
          </Typography>
          <Typography
            fontWeight='bold'
            sx={{
              textAlign: 'center',
              fontSize: [8, 10, 15, 20]
            }}
          >
            9 Jul - 30 Jul
          </Typography>
        </VStack>        
      </Box>      
      <Divider
        sx={{
          display: 'flex',
          alignSelf: 'center',
          borderBottom: 'dashed',
          borderBottomWidth: [3, 4, 5],
          width: ['1.75rem', '2.75rem', '3.75rem'],
          color: '#C6BDBD',
          marginRight: ['-0.8rem', '-2rem', '-2.5rem']
        }}
      ></Divider>
      <Box
        sx={{
          display: 'flex'
        }}
      >
        <VStack>
          <Typography
            fontWeight='bold'
            sx={{
              textAlign: 'center',
              fontSize: [10, 15, 20, 25]
            }}
          >
            Workshop Period
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: [8, 10, 15, 20]
            }}
          >
            16 Jul - 24 Jul
          </Typography>
          <CircleIcon
            sx={{
              width:['2.375rem', '3.375rem', '4.375rem', '5.375rem'],
              height:['2.375rem', '3.375rem', '4.375rem', '5.375rem'],
              color: '#A3D390'
            }}
          ></CircleIcon>
        </VStack>        
      </Box>
      <Divider
        sx={{
          display: 'flex',
          alignSelf: 'center',
          borderBottom: 'dashed',
          borderBottomWidth: [3, 4, 5],
          width: ['1.75rem', '2.75rem', '3.75rem'],
          color: '#C6BDBD',
          margin: ['-1rem', '-2rem', '-2.5rem']
        }}
      ></Divider>
      <Box
        sx={{
          display: 'flex',
          alignSelf: 'flex-start'
        }}
      >
        <VStack>
          <CircleIcon
            sx={{
              width:['2.375rem', '3.375rem', '4.375rem', '5.375rem'],
              height:['2.375rem', '3.375rem', '4.375rem', '5.375rem'],
              color: '#F5D26C'
            }}
          ></CircleIcon>
          <Typography
            fontWeight='bold'
            sx={{
              textAlign: 'center',
              fontSize: [10, 15, 20, 25]
            }}
          >
            Artwork Selection<br />Announcement
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: [8, 10, 15, 20]
            }}
          >
            7 Aug
          </Typography>
        </VStack>
      </Box>
      <Divider
        sx={{
          display: 'flex',
          alignSelf: 'center',
          borderBottom: 'dashed',
          borderBottomWidth: [3, 4, 5],
          width: ['1.75rem', '2.75rem', '3.75rem'],
          color: '#C6BDBD',
          margin: ['-1rem', '-2rem', '-2.5rem']
        }}
      ></Divider>
      <Box
        sx={{
          display: 'flex'
        }}
      >
        <VStack>
          <Typography
            fontWeight='bold'
            sx={{
              textAlign: 'center',
              fontSize: [10, 15, 20, 25]
            }}
          >
            Exhibition Period
          </Typography>
          <Typography
            sx={{
              fontSize: [8, 10, 15, 20]
            }}
          >
            19 Aug - 26 Aug
          </Typography>
          <CircleIcon
            sx={{
              width: ['2.375rem', '3.375rem', '4.375rem', '5.375rem'],
              height: ['2.375rem', '3.375rem', '4.375rem', '5.375rem'],
              color: '#F17858'
            }}
          ></CircleIcon>
        </VStack>        
      </Box>
    </Box>
  );
}

export default HomepageTimeline;