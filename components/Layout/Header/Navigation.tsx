import Link from "next/link";
import React from "react";
import { HStack, NavButton } from "../../common";
import { navigations } from "./navigationList";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <HStack
      borderTop={"1px solid black"}
      borderBottom={"1px solid black"}
      paddingY={"10px"}
      justifyContent={"space-around"}
    >
      {navigations.map((nav) => (
        <Link key={nav.path} href={nav.path} passHref>
          <NavButton text={nav.text} circleColor={nav.circleColor} />
        </Link>
      ))}
    </HStack>
  );
};

export default Navigation;
