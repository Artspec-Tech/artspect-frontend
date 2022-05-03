import { Box, Typography } from "@mui/material";
import { BasketIcon, ArrowDownIcon } from "../../../utils/icons";
import Image from "next/image";
import React from "react";
import { HStack } from "../../common";

type Props = {};

const SubHeader = (props: Props) => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        padding: "10px 72px",
      }}
    >
      <HStack gap={1} width="auto">
        <Typography>English</Typography>
        <Image src={ArrowDownIcon} alt="Arrow down" width={10} height={10} />
      </HStack>
      <HStack gap={2} width="auto">
        <HStack gap={1}>
          <Typography>My account</Typography>
          <Image src={ArrowDownIcon} alt="Arrow down" width={10} height={10} />
        </HStack>
        <Image src={BasketIcon} alt="Basket" width={30} height={21} />
      </HStack>
    </Box>
  );
};

export default SubHeader;
