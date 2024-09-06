import React from "react";
import { Box } from "@chakra-ui/react";
import Hero from "./Hero";
import Cards from "./Cards";
import Footer from './Footer'

const Homepage = () => {
  return (
    <Box>
      <Box maxW={"980px"} mx={"auto"}>
        <Hero />
        <Cards />
      </Box>
      <Footer/>
    </Box>
  );
};

export default Homepage;
