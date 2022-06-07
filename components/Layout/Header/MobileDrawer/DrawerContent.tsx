import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { Center, HStack, VStack } from "@components/common";
import { navigations } from "../navigationList";
import Link from "next/link";

const drawerVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type Props = {
  toggleDrawer: (
    toggle: boolean
  ) => (e: React.KeyboardEvent | React.MouseEvent) => void;
};

const DrawerContent = ({ toggleDrawer }: Props) => {
  return (
    <Center>
      <motion.div variants={drawerVariants} initial="closed" animate="open">
        <VStack
          gap={5}
          sx={{
            width: "80vw",
          }}
        >
          {navigations.map((nav, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              onClick={toggleDrawer(false)}
              style={{
                width: "100%",
                padding: "0 20%",
              }}
            >
              <Link key={nav.path} href={nav.path} passHref>
                <HStack gap={2.5} justifyContent={"flex-start"}>
                  <nav.icon />
                  <Typography fontSize={30}>{nav.text}</Typography>
                </HStack>
              </Link>
            </motion.div>
          ))}
        </VStack>
      </motion.div>
    </Center>
  );
};

export default DrawerContent;
