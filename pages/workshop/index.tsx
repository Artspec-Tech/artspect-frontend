import { NextPage } from "next";
import React from "react";
import { HStack } from "@components/common";
import Layout from "@components/Layout";

type Props = {};

const Workshop: NextPage = (props: Props) => {
  return (
    <Layout>
      <HStack>Workshop</HStack>
    </Layout>
  );
};

export default Workshop;
