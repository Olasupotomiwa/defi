import React from "react";
import { Box, Image, Heading, Text, Flex } from "@chakra-ui/react";
import footerImage from "../assets/footer.png"; // Replace with your image path

const Footer = () => {
  return (
    <Box>
    <Box
      bg={"#001e36"} // Background color similar to the defined Box
      p={14}
      mt={8}
    >
      <Flex
        direction={{ base: "column", md: "row" }} // Stack vertically on small screens and horizontally on larger screens
        align="center"
        justify="center"
        maxW="container.lg"
        mx="auto"
        gap={10}
      >
        {/* Image */}
        <Image
          src={footerImage}
          w={{ base: "150px", md: "300px" }}
          h={{ base: "150px", md: "300px" }}
          alt="Footer Image"
          borderRadius="full"
        />

        {/* Box with Heading and Text */}
        <Box textAlign="center" color="white">
          <Heading fontSize={{ base: "30px", md: "40px" }} mb={2} >
            Everything You Need
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }}>
            Cryptocurrency wallets provide users with a digital solution for ly
            storing and managing blockchain assets and cryptocurrencies. These
            wallets allow users to spend, receive, and trade cryptocurrencies.
          </Text>
        </Box>
      </Flex>
    </Box>
    <Box bg={"#e9d16f"} w={'full'} p={4} mb={4}>
    <Text textAlign={'center'}>Defi-Webpage</Text>
    </Box>
    </Box>
  );
};

export default Footer;
