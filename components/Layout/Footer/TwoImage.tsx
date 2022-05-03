import React from "react";
import { BgImage } from "../../common";

type Props = {};

const TwoImage = (props: Props) => {
  return (
    <BgImage height={"450px"}>
      <div
        style={{
          width: "45vw",
          aspectRatio: "16/9",
          backgroundColor: "#C4C4C4",
        }}
      />
      <div
        style={{
          width: "45vw",
          aspectRatio: "16/9",
          backgroundColor: "#C4C4C4",
        }}
      />
    </BgImage>
  );
};

export default TwoImage;
