import React from "react";
import { HStack, NavButton } from "../common";
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
        <NavButton
          key={nav.path}
          text={nav.text}
          circleColor={nav.circleColor}
        />
      ))}
    </HStack>
  );
};

export default Navigation;
