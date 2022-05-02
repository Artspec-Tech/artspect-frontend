import { NextPage } from "next";
import type { AppProps } from "next/app";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const layout: NextPage = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default layout;
