import { HStack } from "@components/common";
import { Button, Typography } from "@mui/material";
import fontWeights from "@utils/fontWeights";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { navigations } from "./navigationList";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <HStack
      padding={"2rem 6rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography variant="h4" fontWeight={fontWeights.semiBold}>
        Artspect
      </Typography>
      <HStack width="auto" gap={5}>
        {navigations.map((nav) => {
          console.log(nav.path === router.pathname);
          return (
            <Link key={nav.path} href={nav.path} passHref>
              <Button
                variant="text"
                style={{
                  textTransform: "none",
                }}
              >
                <Typography
                  fontSize={20}
                  style={{
                    fontWeight:
                      nav.path === router.pathname
                        ? fontWeights.semiBold
                        : fontWeights.light,
                  }}
                >
                  {nav.text}
                </Typography>
              </Button>
            </Link>
          );
        })}
      </HStack>
    </HStack>
  );
};

export default Header;
