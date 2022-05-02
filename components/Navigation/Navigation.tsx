import React from "react";
import { HStack, NavButton } from "../common";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <HStack
      borderTop={"1px solid black"}
      borderBottom={"1px solid black"}
      paddingY={"10px"}
      justifyContent={"space-around"}
    >
      <NavButton text={"Home"} circleColor={"rgba(218, 103, 69, 0.7)"} />
      <NavButton text={"Artwork"} circleColor={"rgba(218, 103, 69, 0.7)"} />
      <NavButton text={"Workshop"} circleColor={"rgba(218, 103, 69, 0.7)"} />
    </HStack>
  );
};

export default Navigation;
