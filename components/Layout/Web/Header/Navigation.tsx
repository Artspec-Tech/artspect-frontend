import React from "react";
import fontWeights from "@utils/fontWeights";
import Link from "next/link";
import { Typography } from "@mui/material";
import { navigations } from "./navigationList";
import { AnimateSharedLayout, motion } from "framer-motion";
import { HStack, VStack, Divider } from "@components/common";
import { useRouter } from "next/router";

const Navigation = () => {
  const { pathname } = useRouter();
  const isCurrentPath = (path: string) => pathname === path;
  return (
    <HStack gap={4}>
      <AnimateSharedLayout>
        {navigations.map((nav) => (
          <Link key={nav.path} href={nav.path} passHref>
            <VStack position={"relative"}>
              <Typography
                fontSize={17}
                component={motion.p}
                fontWeight={fontWeights.extraLight}
                style={{
                  cursor: "pointer",
                }}
                whileHover={{
                  textShadow: "0px 0px 4px gray",
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
                >
                  <Divider
                    thickness={2}
                    orientation="horizontal"
                    style={{
                      borderColor: "gray",
                      opacity: 0.5,
                    }}
                  />
                </motion.div>
              )}
            </VStack>
          </Link>
        ))}
      </AnimateSharedLayout>
    </HStack>
  );
};

export default Navigation;
