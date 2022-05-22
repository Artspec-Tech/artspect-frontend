import { BgImage, Divider, HStack, VStack } from "@components/common";
import { ExtendedFooterBackground } from "../../../utils/images";
import fontWeights from "@utils/fontWeights";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box } from "@mui/system";
import React from "react";
import { IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { navigations } from "../Header/navigationList";
import { useRouter } from "next/router";
import { AnimateSharedLayout, motion } from "framer-motion";

type Props = {};

const ExtendedFooter = (props: Props) => {
  const { pathname } = useRouter();
  const isCurrentPath = (path: string) => pathname === path;
  return (
    <HStack
      justifyContent={"space-between"}
      height={"25rem"}
      gap={2}
      sx={{
        backgroundColor: "#191323",
      }}
    >
      {/* <VStack width={"5%"} alignItems={"end "}>
          <IconButton color="secondary">
            <InstagramIcon fontSize="large" />
          </IconButton>
        </VStack> */}
      <VStack
        width={"35%"}
        justifyContent={"space-around"}
        height={"80%"}
        marginLeft={"2rem"}
      >
        <Typography
          fontSize={30}
          fontWeight={fontWeights.semiBold}
          color="white"
          textAlign={"left"}
          width={"100%"}
        >
          Artspect
        </Typography>
        <Typography fontWeight={fontWeights.bold} fontSize={15} color="#F3C766">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
          adipisci perferendis facere quia. Consequatur rem recusandae
          consectetur sapiente earum aut repellat quibusdam, voluptatem nobis
          quod nam eius suscipit, inventore amet?
        </Typography>
        <Typography
          fontSize={12}
          color="white"
          style={{
            opacity: "0.6",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eius
          distinctio blanditiis cumque doloribus vero delectus fugiat minima,
          veniam nam modi eveniet cupiditate. Quia voluptas cupiditate corrupti
          iste dolor officia.
        </Typography>
      </VStack>
      <VStack
        width={"12%"}
        justifyContent={"space-around"}
        height={"40%"}
        marginTop={"1rem"}
      >
        <Typography fontWeight={fontWeights.bold} fontSize={15} color="#F3C766">
          Contact Us
        </Typography>
        <Typography
          fontSize={12}
          color="white"
          style={{
            opacity: "0.6",
          }}
        >
          Phone: +66 96-930-53xx
        </Typography>
        <Typography
          fontSize={12}
          color="white"
          style={{
            opacity: "0.6",
          }}
        >
          Email: xxxxxx@gmail.com
        </Typography>
      </VStack>
      <VStack
        width={"10%"}
        justifyContent={"space-around"}
        height={"50%"}
        marginTop={"4rem"}
      >
        <Typography fontWeight={fontWeights.bold} fontSize={15} color="#F3C766">
          Quick Links
        </Typography>
        {navigations.map((nav) => (
          <Link key={nav.path} href={nav.path} passHref>
            <Box>
              <Typography
                color="#FFFFFF"
                fontSize={15}
                component={motion.p}
                style={{
                  cursor: "pointer",
                  opacity: "0.6",
                }}
                whileHover={{
                  textShadow: "2px 2px 16px yellow",
                }}
              >
                {nav.text}
              </Typography>
              {isCurrentPath(nav.path) && (
                <motion.div
                  layout
                  layoutId="divider"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  style={{
                    position: "absolute",
                    top: "100%",
                    width: "110%",
                  }}
                ></motion.div>
              )}
            </Box>
          </Link>
        ))}
        <Typography
          fontSize={15}
          color="white"
          style={{
            opacity: "0.6",
          }}
        >
          My Account
        </Typography>
      </VStack>
      <Box
        style={{
          width: "40%",
        }}
      >
        <div
          style={{
            width: "90%",
            aspectRatio: "16/9",
            backgroundColor: "#C4C4C4",
          }}
        />
      </Box>
    </HStack>
  );
};

export default ExtendedFooter;
