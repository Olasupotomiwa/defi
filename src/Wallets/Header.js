import React from 'react';
import { Box, Flex,  Image, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Launch from '../assets/launchpad.png'


const Header = () => {
  return (
    <Box as="header"  p={4} fontFamily={"Montserrat"}>
      {/* First Header with Flex Links and Logo */}
      <Flex justifyContent={'space-between'} align="center" wrap="wrap" py={4} color={"gray.500"} mt={6} >
        {/* Left Links */}
        <Link to={'https://github.com/walletconnect'}  >
            <Text fontWeight="700" fontSize="lg"  color={"gray.500"}>
         NEUTRAL
         </Text>
        </Link>
        <Link to="https://docs.walletconnect.org/" fontWeight="bold" fontSize="lg"  fontFamily={"Montserrat"}>
        <Text fontWeight="700" fontSize="lg" color={"gray.500"}>
          PROTOCOLS
          </Text>
        </Link>

        {/* Logo in the center */}
        <Link to='/'>
        <Image
          src={Launch}
          alt="Logo"
          boxSize="100px" // Adjust size as needed
          mx={10}
          
        />
        </Link>

        {/* Right Links */}
        <Link to="/wallet" fontWeight="bold" fontSize="lg"  textTransform="uppercase" fontFamily={"Montserrat"}>
        <Text fontWeight="700" fontSize="lg" color={"gray.500"}>
          Wallets
          </Text>
        </Link>
        <Link to="https://registry.walletconnect.org/apps" fontWeight="bold" fontSize="lg"  textTransform="uppercase" fontFamily={"Montserrat"}>
        <Text fontWeight="700" fontSize="lg"  color={"gray.500"}>
          Apps
          </Text>
        </Link>
      </Flex>

      {/* Second Header and Text in the middle */}
      <Box textAlign="center" mt={8} >
        <Heading as="h2" fontSize={'38px'} mb={4} fontWeight={"400"}>
        Wallets
        </Heading>
        <Text fontSize="md" >
          Multiple iOS and Android wallets support the WalletConnect protocol. Simply scan a QR code from your desktop computer screen to start securely using a dApp with your mobile wallet. Interaction between mobile apps and mobile browsers are supported via mobile deep linking.
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
