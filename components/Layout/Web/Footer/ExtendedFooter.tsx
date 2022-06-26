import {Center, HStack, VStack} from "@components/common";
import fontWeights from "@utils/fontWeights";
import React from "react";
import {Box, Typography} from "@mui/material";
import Link from "next/link";
import {navigations} from "../Header/navigationList";

const ExtendedFooter = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      height={["10rem", "15rem", "25rem"]}
      gap={2}
      sx={{
        paddingX: ["1rem", "4rem", "6rem"],
        backgroundColor: "#191323",
      }}
    >
      <VStack width={"35%"} justifyContent={"space-around"} height={"80%"}>
        <Typography
          fontSize={[15, 20, 30]}
          fontWeight={fontWeights.semiBold}
          color="white"
          textAlign={"left"}
          width={"100%"}
        >
          Artspect
        </Typography>
        <Typography
          fontWeight={fontWeights.bold}
          fontSize={[8, 10, 15]}
          color="#F3C766"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id
          egestas diam. Curabitur hendrerit est eu rhoncus
        </Typography>
        <Typography
          fontSize={[6, 8, 12]}
          color="#FFFFFF"
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
        justifyContent={"flex-start"}
        height={"50%"}
        marginTop={"4.3rem"}
        gap={3}
      >
        <Typography
          fontWeight={fontWeights.bold}
          fontSize={[8, 10, 15]}
          color="#F3C766"
        >
          Contact Us
        </Typography>
        <Typography
          fontSize={12}
          color="#FFFFFF"
          style={{
            opacity: "0.6",
          }}
        >
          Phone: +66 96-930-53xx
        </Typography>
        <Typography
          fontSize={12}
          color="#FFFFFF"
          style={{
            opacity: "0.6",
          }}
        >
          Email: xxxxxx@gmail.com
        </Typography>
      </VStack>
      <VStack
        width={"10%"}
        justifyContent={"flex-start"}
        height={"50%"}
        marginTop={"4.3rem"}
        gap={3}
      >
        <Typography fontWeight={fontWeights.bold} fontSize={15} color="#F3C766">
          Quick Links
        </Typography>
        {navigations.map((nav) => (
          <Link key={nav.path} href={nav.path} passHref>
            <Typography
              color="#FFFFFF"
              fontSize={12}
              sx={{
                cursor: "pointer",
              }}
            >
              {nav.text}
            </Typography>
          </Link>
        ))}
        <Typography
          fontSize={12}
          color="#FFFFFF"
          style={{
            opacity: "0.6",
          }}
        >
          My Account
        </Typography>
      </VStack>
      <Center
        style={{
          width: "40%",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              xl: "600px",
            },
            aspectRatio: "16/9",
            backgroundColor: "#C4C4C4",
          }}
        />
      </Center>
    </HStack>
  );
};

export default ExtendedFooter;
