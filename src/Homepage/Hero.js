import React from "react";
import { Heading, Text, Button, VStack, Image, Center } from "@chakra-ui/react";
import Launch from "../assets/launchpad.png";

function App() {
  return (
    <Center p={4} >
      <VStack spacing={2} align="center">
        {/* Image centered */}
        <Image src={Launch} alt="Wallet" width={"80px"} objectFit="cover" />

        {/* Subheadings */}
        <Heading fontSize="42PX" textAlign="center">
          LaunchPad Protocols
        </Heading>
        <Text fontSize="lg" textAlign="center" my={4}>
          AUTHENTICATION
        </Text>

        {/* Connect Wallet Button */}
        <Button bg={"#F4762D"} fontSize={'22px'} color={"white"} my={4} fontWeight={'400'} p={6}>
          CONNECT WALLET
        </Button>

        {/* Text under the button */}
        <Text fontSize="md"  textAlign="center">
          LaunchPad Protocols is a decentralized platform and network that
          blends Blockchain with DeFi, incorporating Blockchain aspects such as
          non-custodial management, Micropools, rapid liquidity, and
          decentralized governance. Each procedure must be completed in its
          entirety.
        </Text>

        <Text fontSize="15px"  textAlign="center" fontWeight={'700'}>
        The authentication of wallet will be finished as follows.
        </Text>
      </VStack>
    </Center>
  );
}

export default App;
