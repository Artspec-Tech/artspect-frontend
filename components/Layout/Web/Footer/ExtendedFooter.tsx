import fontWeights from "@utils/fontWeights";
import React from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import { navigations } from "../Header/navigationList";
import { WelcomeImage } from "@utils/images";
import Image from "next/image";

const ExtendedFooter = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      minHeight={["8rem", "12rem", "20rem"]}
      paddingX={["2rem", "2rem", "4rem"]}
      height="auto"
      width="100%"
      bgcolor="#191323"
      sx={{
        paddingY: { xs: "24px", sm: "24px" },
        backgroundColor: "#191323",
      }}
      display="flex"
    >
      <Grid
        container
        paddingLeft="12px"
        sx={{
          gridTemplateAreas: `"header header header image" 
            "1 2 3 image"`,

          columnGap: "8px",
          gridTemplateColumns: { xs: "40% 30% auto 0", sm: "1fr 15% 15% 1fr" },
          gridTemplateRows: {
            xs: "auto auto auto",
            sm: "auto auto",
          },
          alignContent: "center",
          justifyItems: "center",
          display: "grid",
        }}
      >
        <Grid
          item
          width="100%"
          sx={{ gridArea: "header", backgroundColor: "#191323" }}
        >
          <Typography
            fontWeight={fontWeights.bold}
            fontSize={[15, 20, 30]}
            marginBottom="40px"
            color="#FFFFFF"
          >
            Artspect
          </Typography>
        </Grid>
        <Grid
          item
          height="100%"
          sx={{ gridArea: 1, backgroundColor: "#191323" }}
        >
          <Typography
            fontWeight={fontWeights.bold}
            fontSize={[8, 10, 15]}
            marginBottom="12px"
            color="#F3C766"
          >
            Artspect is a place where we guide you through the journey of
            self-exploration using art as a tool.
          </Typography>
          <Typography
            fontSize={[6, 8, 12]}
            color="#FFFFFF"
            sx={{
              opacity: "0.6",
              lineHeight: { sx: "12px", sm: "24px" },
            }}
          >
            Artspect คือ
            พื้นที่ที่ช่วยส่งเสริมให้คุณได้สำรวจภายในตนเองโดยใช้ศิลปะเป็นเครื่องมือ
          </Typography>
        </Grid>
        <Grid item sx={{ gridArea: 2, backgroundColor: "#191323" }}>
          <Typography
            fontWeight={fontWeights.bold}
            fontSize={[8, 10, 15]}
            marginBottom="12px"
            color="#F3C766"
          >
            Contact Us
          </Typography>
          <Typography
            fontSize={[6, 8, 12]}
            color="#FFFFFF"
            sx={{
              opacity: "0.6",
              paddingTop: "8px",
            }}
          >
            Instagram: @artspect_official
          </Typography>
          <Typography
            fontSize={[6, 8, 12]}
            color="#FFFFFF"
            sx={{
              opacity: "0.6",
              paddingTop: "8px",
            }}
          >
            Facebook: Artspect.official
          </Typography>
          {isMobile ? (
            <Box
              position="relative"
              width="100%"
              height="50px"
              marginTop="12px"
              sx={{
                gridArea: "image"
              }}
            >
              <Image src={WelcomeImage} layout="fill" objectFit="contain" alt="Welcome to Artspect" />
            </Box>
          ) : (
            <Box display="none"></Box>
          )}
        </Grid>
        <Grid item sx={{ gridArea: 3, backgroundColor: "#191323" }}>
          <Typography
            fontWeight={fontWeights.bold}
            fontSize={[8, 10, 15]}
            marginBottom="12px"
            color="#F3C766"
          >
            Quick Links
          </Typography>
          {navigations.map((nav) => (
            <Link key={nav.path} href={nav.path} passHref>
              <Typography
                color="#FFFFFF"
                fontSize={[6, 8, 12]}
                sx={{
                  cursor: "pointer",
                  opacity: "0.6",
                  paddingTop: "8px",
                }}
              >
                {nav.text}
              </Typography>
            </Link>
          ))}
          <Typography
            fontSize={[6, 8, 12]}
            color="#FFFFFF"
            sx={{
              cursor: "pointer",
              opacity: "0.6",
              paddingTop: "8px",
            }}
          >
            My Account
          </Typography>
        </Grid>
        <Grid
          item
          display="grid"
          width="100%"
          sx={{
            gridArea: "image"
          }}
        >
          <Box position={"relative"}>
            <Image src={WelcomeImage} layout="fill" objectFit="contain" alt="Welcome to Artspect" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExtendedFooter;
