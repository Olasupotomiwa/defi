import React from 'react';
import { Box, Flex,  Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Plug from '../assets/plug.png'
import error from '../assets/eeror.png'


const Header = () => {
  return (
    <Box as="header"  p={4} fontFamily={"Montserrat"} maxW="980px" mx="auto">
      {/* First Header with Flex Links and Logo */}
      <Flex justifyContent={'space-between'} align="center" wrap="wrap" py={4} color={"gray.500"} mt={6} >
        {/* Left Links */}
        <Link to={'https://github.com/walletconnect'}  >
            <Text fontWeight="700" fontSize="lg"  color={"gray.500"}>
         NEUTRAL
         </Text>
        </Link>
        <Link to="https://docs.walletconnect.org/" fontWeight="bold" fontSize="lg"   fontFamily={"Montserrat"}>
        <Text fontWeight="700" fontSize="lg" mx={8} color={"gray.500"}>
          PROTOCOLS
          </Text>
        </Link>

        {/* Logo in the center */}
        <Link to='/'>
        <Image
          src={Plug}
          alt="Logo"
          boxSize="100px" // Adjust size as needed
          mx={10}
          
        />
        </Link>

        {/* Right Links */}
        <Link to="/wallet" fontWeight="bold" fontSize="lg"  textTransform="uppercase" fontFamily={"Montserrat"}>
        <Text fontWeight="700" fontSize="lg" mx={8} color={"gray.500"}>
          Wallets
          </Text>
        </Link>
        <Link to="https://registry.walletconnect.org/apps" fontWeight="bold" fontSize="lg"  textTransform="uppercase" fontFamily={"Montserrat"}>
        <Text fontWeight="700" fontSize="lg" mx={8} color={"gray.500"}>
          Apps
          </Text>
        </Link>
      </Flex>

      {/* Second Header and Text in the middle */}
      <Box textAlign="center" mt={8} >
       <Text>An Error Has Occured, Please try again.  <Link to="/import">go back</Link></Text>
        
       <Link to='/import'>
        <Image
          src={error}
          mt={4}
          alt="error"
          boxSize={{base: '250px', md: '400px'}}
          mx={'auto'}
          textAlign={'center'}
         
          
        />
        </Link>

      </Box>
    </Box>
  );
};

export default Header;
