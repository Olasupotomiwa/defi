import React from "react";
import { Box } from "@chakra-ui/react";
import Header from './Header'
import Walletlogo from "./walletlogo";

const Wallets = () => {
  return (
    <Box>
      <Box maxW={"980px"} mx={"auto"}>
        <Header />
        <Walletlogo/>
      </Box>
     
    </Box>
  );
};

export default Wallets;
