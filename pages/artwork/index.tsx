import React, { ReactElement } from "react";
import { VStack } from "@components/common";
import {
  Typography,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Box,
} from "@mui/material";
import WebLayout from "@components/Layout/Web";
import { NextPageWithLayout } from "types";
import DoneIcon from "@mui/icons-material/Done";
import CircleIcon from "@mui/icons-material/Circle";
import { LiteratureImage, VisualImage, PerformanceImage } from "@utils/images";
import SubmissionDetail from "@components/Submission/SubmissionDetail";
import Image from "next/image";

const Artwork: NextPageWithLayout = () => {
  return (
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
        fontSize={{
          xs: "18px",
          sm: "36px",
          md: "55px",
        }}
        sx={{ alignSelf: "flex-start" }}
        fontWeight={"bold"}
        lineHeight={0.9}
      >
        Artwork Submission
      </Typography>
      <Grid container spacing={6}>
        <Grid item sm={7}>
          <List>
            <ListItem>
              <ListItemIcon>
                <DoneIcon />
              </ListItemIcon>
              <Typography fontWeight={"bold"}>
                &quot;รับส่วนลดในการเข้าร่วมเวิร์คช็อป&quot;
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon />
              </ListItemIcon>
              <Typography fontWeight={"bold"}>
                &quot;สร้างที่ระลึกให้กับความทรงจำของคุณ&quot;
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon />
              </ListItemIcon>
              <Typography fontWeight={"bold"}>
                &quot;โอกาสในการจัดแสดงผลงานและแบ่งปันเรื่องราวของคุณ&quot;
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item sm={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              border: 5,
              borderColor: "#BBC7DD",
              borderRadius: 1,
            }}
          >
            <Typography fontWeight="bold" fontSize="20px">
              Showcase your artwork!
            </Typography>
            <Button
              variant="contained"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfBipAD8tFkD_QMNoV7K0p7omYkTZQr_B5zbLxFg1-Tnr_HwQ/viewform"
              sx={{ borderRadius: 10, backgroundColor: "#FF0000" }}
            >
              SUBMIT NOW
            </Button>
          </Box>
        </Grid>
        <Grid item sm={7}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "flex-row",
              alignItems: "flex-end",
              paddingBottom: "2.5rem",
            }}
          >
            <Typography fontSize="30px" fontWeight="bold" paddingRight={"3rem"}>
              Tracks
            </Typography>
            <Typography
              fontSize={{
                sm: "15px",
                lg: "20px",
              }}
              marginBottom="0.3rem"
            >
              เลือกหนึ่งหัวข้อและความเชี่ยวชาญเพียงอย่างเดียว
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Image src={LiteratureImage} alt="Literature" />
            <Image src={VisualImage} alt="Visual Arts" />
            <Image src={PerformanceImage} alt="Performance Arts" />
          </Box>
        </Grid>
        <Grid item sm={5}>
          <Typography
            fontSize={{
              xs: "18px",
              sm: "24px",
              md: "30px",
            }}
            fontWeight="bold"
          >
            Our Criteria
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CircleIcon
                  sx={{
                    height: "5px",
                    width: "5px",
                    marginTop: "-20px",
                    color: "#000000",
                  }}
                />
              </ListItemIcon>
              <Typography sx={{ lineHeight: "2.2rem", marginLeft: "-30px" }}>
                Artspect ให้ความสำคัญกับเรื่องราวและ
                การสื่อความผ่านผลงานเป็นหลัก
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon
                  sx={{
                    height: "5px",
                    width: "5px",
                    marginTop: "-20px",
                    color: "#000000",
                  }}
                />
              </ListItemIcon>
              <Typography sx={{ lineHeight: "2.2rem", marginLeft: "-30px" }}>
                ทักษะทางด้านศิลปะเป็นเพียงส่วนหนึ่ง ของการตัดสินเท่านั้น
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon
                  sx={{
                    height: "5px",
                    width: "5px",
                    marginTop: "-20px",
                    color: "#000000",
                  }}
                />
              </ListItemIcon>
              <Typography sx={{ lineHeight: "2.2rem", marginLeft: "-30px" }}>
                ผลงานของคุณอาจเป็นส่วนช่วยสร้างแรงบันดาลใจ ให้กับผู้ชม
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item sm={6}>
          <SubmissionDetail />
        </Grid>
        <Grid item sm={6}>
          <Typography
            fontSize={{
              xs: "18px",
              sm: "24px",
              md: "30px",
            }}
            fontWeight="bold"
          >
            Exhibition Details
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CircleIcon
                  sx={{
                    height: "5px",
                    width: "5px",
                    marginTop: "-20px",
                    color: "#000000",
                  }}
                />
              </ListItemIcon>
              <Typography sx={{ lineHeight: "2.2rem", marginLeft: "-30px" }}>
                ผลงานศิลปะ 24 ชิ้น จะถูกเลือกเพื่อนำไปจัดแสดง (ประเภทละ 8 ชิ้น)
                กรรมการจากผู้สนับสนุนโครงการจะเป็นผู้เลือกผลงาน 1
                ชิ้นจากแต่ละประเภท
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon
                  sx={{
                    height: "5px",
                    width: "5px",
                    marginTop: "-38px",
                    color: "#000000",
                  }}
                />
              </ListItemIcon>
              <Typography sx={{ lineHeight: "2.2rem", marginLeft: "-30px" }}>
                1 ผลงานจะผลงาน 1 ชิ้นจะมาจากผลโหวตของประชาชนทั่วไป
                (ผลงานทั้งหมดจะถูกเผยแพร่บนเว็บไซต์ของเราและประชาชนทั่วไปสามารถร่วมโหวตผลงานได้
                1 ชิ้นจากแต่ละประเภท)
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon
                  sx={{
                    height: "5px",
                    width: "5px",
                    marginTop: "-20px",
                    color: "#000000",
                  }}
                />
              </ListItemIcon>
              <Typography sx={{ lineHeight: "2.2rem", marginLeft: "-30px" }}>
                ผลงานในประเภทศิลปะการแสดงและดนตรีจะถูกนำไปเปิดในนิทรรศการหรือเป็นการแสดงสดตามตารางเวลา
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </VStack>
  );
};

Artwork.getLayout = (page: ReactElement) => <WebLayout>{page}</WebLayout>;

export default Artwork;
