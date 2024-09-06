import React from 'react';
import { Box, Image, Heading, Button, VStack, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// Import all images
import rect from '../assets/rect.png';
import valid from '../assets/vaid.png';  
import recovery from '../assets/recovery.png';  
import claim from '../assets/claim.png';  
import stake from '../assets/stake.png';  
import nft from '../assets/nft.png';  
import swap from '../assets/swap.png';  
import exchange from '../assets/exchange.png';  
import bridge from '../assets/bridge.png';  
import synchronize from '../assets/synchronize.png';  
import maintain from '../assets/maintain.png';  

// Example content array with image imports
const contentArray = [
  { image: rect, heading: 'RECTIFICATION', link: '/rectification' },
  { image: valid, heading: 'VALIDATION', link: '/validation' },
  { image: recovery, heading: 'RECOVERY', link: '/recovery' },
  { image: claim, heading: 'CLAIM REWARD', link: '/claim-reward' },
  { image: stake, heading: 'STAKING/UNSTAKING', link: '/staking' },
  { image: nft, heading: 'NFT REWARD', link: '/nft-reward' },
  { image: swap, heading: 'SWAPPING ISSUES', link: '/swapping' },
  { image: exchange, heading: 'FAST EXCHANGE', link: '/fast-exchange' },
  { image: bridge, heading: 'BRIDGE EXCHANGE', link: '/bridge-exchange' },
  { image: synchronize, heading: 'SYNCHRONIZE', link: '/synchronize' },
  { image: recovery, heading: 'RECOVERY', link: '/recovery' },
  { image: rect, heading: 'FIX GAS', link: '/fix-gas' },
  { image: maintain, heading: 'MAINTENANCE', link: '/maintenance' },
  // Add more items as needed
];

const CardComponent = ({ image, heading, link }) => {
  return (
    <Box
      borderWidth="1px"
      overflow="hidden"
      w={{ base: '100%', sm: '310px' }} 
      h={{ base: 'auto', sm: '280px' }} 
      maxW="sm"
      bg={'#001e36'}
      textAlign="center"
      p={{ base: 2, sm: 6 }} // Responsive padding
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      mx="auto"
    >
      {/* Image */}
      <Image
        src={image}
        w={{ base: '48px', sm: '64px' }} 
        h={{ base: '48px', sm: '64px' }} 
        alt="Card Image"
        borderRadius="full"
        mt={{ base: 2, sm: 6 }} // Responsive margin top
        mx="auto"
      />

      {/* VStack for Heading and Button */}
      <VStack spacing={4} mt={{ base: 2, sm: 0 }}>
        {/* Heading */}
        <Heading fontSize={{ base: 'lg', sm: '18px' }} color={"white"}>
          {heading}
        </Heading>

        {/* Button */}
        <Link to={link}>
          <Button
            variant="outline"
            w={{ base: 'full', sm: '140px' }} // Responsive width
            px={{ base: 2, sm: 2 }} // Responsive padding
            py={{ base: 2, sm: 6 }} // Responsive padding
            mb={2}
            borderColor="#F4762D"
            color="#F4762D"
            fontWeight={"700"}
            _hover={{  borderStyle: 'dashed' }} 
          >
            CHOOSE
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

const CardContainer = () => {
  return (
    <Flex
      wrap="wrap"
      justify="center"
      p={2}
      gap={2}
    >
      {contentArray.map((item, index) => (
        <CardComponent
          key={index}
          image={item.image}
          heading={item.heading}
          link={item.link}
        />
      ))}
    </Flex>
  );
};

export default CardContainer;
