import { Box, Stack, Typography } from "@mui/material";
import * as BasketIcon from "../../assets/icons/basket.svg";
import * as ArrowDownIcon from "../../assets/icons/arrow-down.svg";
import Image from "next/image";
import React from "react";

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
      <Typography>i18n</Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={1}
        >
          <Typography>My account</Typography>
          <Image src={ArrowDownIcon} alt="Arrow down" width={10} height={10} />
        </Stack>

        <Image src={BasketIcon} alt="Basket" width={21} height={30} />
      </Stack>
    </Box>
  );
};

export default SubHeader;
