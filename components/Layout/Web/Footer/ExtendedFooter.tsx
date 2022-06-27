import fontWeights from "@utils/fontWeights";
import React from "react";
import {Box, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import Link from "next/link";
import {navigations} from "../Header/navigationList";

const ExtendedFooter = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      minHeight={["10rem", "15rem", "25rem"]}
      height="auto"
      width="100%"
      sx={{
        paddingY: {xs: "24px", sm: "24px"},
        paddingX: {xs: "12px", sm: "110px"},
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
          gridTemplateColumns: {xs: "40% 30% auto 0", sm: "1fr 15% 15% 1fr"},
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
          sx={{gridArea: "header", backgroundColor: "#191323"}}
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
        <Grid item height="100%" sx={{gridArea: 1, backgroundColor: "#191323"}}>
          <Typography
            fontWeight={fontWeights.bold}
            fontSize={[8, 10, 15]}
            marginBottom="12px"
            color="#F3C766"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id
            egestas diam. Curabitur hendrerit est eu rhoncus
          </Typography>
          <Typography
            fontSize={[6, 8, 12]}
            color="#FFFFFF"
            sx={{
              opacity: "0.6",
              lineHeight: {sx: "12px", sm: "24px"},
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eius
            distinctio blanditiis cumque doloribus vero delectus fugiat minima,
            veniam nam modi eveniet cupiditate. Quia voluptas cupiditate
            corrupti iste dolor officia.
          </Typography>
        </Grid>
        <Grid item sx={{gridArea: 2, backgroundColor: "#191323"}}>
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
            Phone: +66 96-930-53xx
          </Typography>
          <Typography
            fontSize={[6, 8, 12]}
            color="#FFFFFF"
            sx={{
              opacity: "0.6",
              paddingTop: "8px",
            }}
          >
            Email: xxxxxx@gmail.com
          </Typography>
          {isMobile ? (
            <Box
              width="100%"
              height="50px"
              marginTop="12px"
              sx={{
                gridArea: "image",
                backgroundColor: "#C4C4C4",
              }}
            ></Box>
          ) : (
            <Box display="none"></Box>
          )}
        </Grid>
        <Grid item sx={{gridArea: 3, backgroundColor: "#191323"}}>
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
            gridArea: "image",
            backgroundColor: "#C4C4C4",
          }}
        />
      </Grid>
    </Box>
  );
};

export default ExtendedFooter;
