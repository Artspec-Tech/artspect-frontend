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
        height: '70px',
        marginTop: '200px',
        marginBottom: '40px'
      }}>
      <Box
        sx={{
          display: 'flex'
        }}
      >
        <VStack>
          <Typography
            fontWeight={"bold"}
            sx={{
              textAlign: 'center',
              fontSize: 20
            }}
          >
            Orientation
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: 15
            }}
          >
            9 Jul
          </Typography>
          <CircleIcon
            sx={{
              width:'70px',
              height:'70px',
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
          borderBottomWidth: 5,
          width: '60px',
          color: '#C6BDBD',
          marginLeft: '-15px'
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
              width:'70px',
              height:'70px',
              color: '#BBDBF0'
            }}
          ></CircleIcon>        
          <Typography
            fontWeight={'bold'}
            sx={{
              textAlign: 'center',
              fontSize: 20
            }}
          >
            Art Fair
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: 15
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
          borderBottomWidth: 5,
          width: '60px',
          color: '#C6BDBD',
          marginRight: '-40px'
        }}
      ></Divider>
      <Box
        sx={{
          display: 'flex'
        }}
      >
        <VStack>
          <Typography
            fontWeight={'bold'}
            sx={{
              textAlign: 'center',
              fontSize: 20
            }}
          >
            Workshop Period
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: 15
            }}
          >
            16 Jul - 24 Jul
          </Typography>
          <CircleIcon
            sx={{
              width:'70px',
              height:'70px',
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
          borderBottomWidth: 5,
          width: '60px',
          color: '#C6BDBD',
          margin: '-40px'
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
              width:'70px',
              height:'70px',
              color: '#F5D26C'
            }}
          ></CircleIcon>
          <Typography
            fontWeight={'bold'}
            sx={{
              textAlign: 'center',
              fontSize: 20
            }}
          >
            Artwork Selection<br />Announcement
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: 15
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
          borderBottomWidth: 5,
          width: '60px',
          color: '#C6BDBD',
          margin: '-40px'
        }}
      ></Divider>
      <Box
        sx={{
          display: 'flex'
        }}
      >
        <VStack>
          <Typography
            fontWeight={'bold'}
            sx={{
              textAlign: 'center',
              fontSize: 20
            }}
          >
            Exhibition Period
          </Typography>
          <Typography
            sx={{
              fontSize: 15
            }}
          >
            19 Aug - 26 Aug
          </Typography>
          <CircleIcon
            sx={{
              width:'70px',
              height:'70px',
              color: '#F17858'
            }}
          ></CircleIcon>
        </VStack>        
      </Box>
    </Box>
  );
}

export default HomepageTimeline;