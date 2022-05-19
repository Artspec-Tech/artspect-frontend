import React from "react";
import { VStack } from "@components/common";
import DescriptionContent from "./DescriptionContent";

const Description = () => {
  return (
    <VStack gap={"65px"}>
      <DescriptionContent
        subTopic="VALUE"
        text="Artspect aimes to guide you through the journey of self-exploration using art as a tool. We want to remind people to take a brief pause in their busy schedules, listen to their bodies and emotions, reflect on them, and identify how they are feeling right now. We welcome and invite everyone to join us on this journey."
      />
      <DescriptionContent
        subTopic="PURPOSE"
        text="We encourage everyone to create their art through which the emotions are expressed. Then we will host an exhibition to showcase everyone’s work. Through this process, we hope to empower poeple to be more expressive of their emotions and inspire people to continue practicing self-expression as their habits."
      />
    </VStack>
  );
};

export default Description;
