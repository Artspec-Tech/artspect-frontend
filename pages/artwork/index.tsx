import React, { ReactElement } from "react";
import { HStack, VStack } from "@components/common";
import { Typography, Button, Grid, List, ListItem, ListItemIcon, ListItemText, Box } from "@mui/material";
import WebLayout from "@components/Layout/Web";
import { NextPageWithLayout } from "types";
import DoneIcon from '@mui/icons-material/Done';

const Artwork: NextPageWithLayout = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <VStack
        sx={{
          marginY: {
            xs: "0",
            md: "3rem",
          },
          marginX: {
            xs: "1.5rem",
            sm: "2rem",
            md: "6rem",
          },
          gap: {
            xs: "2rem",
            md: "5rem",
          },
        }}
      >
        <Typography
          textAlign={"left"}
          fontSize={{
            xs: "18px",
            sm: "36px",
            md: "55px",
          }}
          fontWeight={"bold"}
          lineHeight={0.9}
          color={"#382B4F"}
        >
          Artwork Submission
        </Typography>
        <Grid container>
          <Grid item xs={8}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <DoneIcon />
                </ListItemIcon>
                <ListItemText
                  primary="รับส่วนลดในการเข้าร่วมเวิร์คช็อป"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DoneIcon />
                </ListItemIcon>
                <ListItemText
                  primary="สร้างที่ระลึกให้กับความทรงจำของคุณ"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DoneIcon />
                </ListItemIcon>
                <ListItemText
                  primary="โอกาสในการจัดแสดงผลงานและแบ่งปันเรื่องราวของคุณ"
                />
              </ListItem>
            </List>

          </Grid>
          <Grid item xs={4}>
            <Box sx={{ border: 1 }}>
              <Typography>
                Showcase your artwork!
              </Typography>
              <Button variant="contained" color="error" href="#text-buttons">SUBMIT NOW</Button>
            </Box>
          </Grid>
        </Grid>
      </VStack>
    </HStack>    
  );
};

Artwork.getLayout = (page: ReactElement) => <WebLayout>{page}</WebLayout>;

export default Artwork;
