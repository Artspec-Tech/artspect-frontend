import { HStack } from "@components/common";
import React from "react";
import ShowcaseButton from "./ShowcaseButton";

const Showcase = () => {
  return (
    <HStack
      width={["calc(100% + 3rem)", "calc(100% + 4rem)", "calc(100% + 12rem)"]}
    >
      <ShowcaseButton
        color="red"
        title="Showcase your artwork!"
        textButton="submit now"
        url="https://docs.google.com/forms/d/e/1FAIpQLSfBipAD8tFkD_QMNoV7K0p7omYkTZQr_B5zbLxFg1-Tnr_HwQ/viewform"
      />
      <ShowcaseButton
        color="#31BC00"
        title="Book for workshop!"
        textButton="book now"
        url="https://docs.google.com/forms/d/e/1FAIpQLSewkw0GjYPaocxAjVH_rST7DcIh5q6eqDtuI4yaL70ibtpN0A/viewform"
      />
    </HStack>
  );
};

export default Showcase;
