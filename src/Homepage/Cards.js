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
  { image: rect, heading: 'RECTIFICATION',  },
  { image: valid, heading: 'VALIDATION',  },
  { image: recovery, heading: 'RECOVERY',  },
  { image: claim, heading: 'CLAIM REWARD',  },
  { image: stake, heading: 'STAKING/UNSTAKING',  },
  { image: nft, heading: 'NFT REWARD', },
  { image: swap, heading: 'SWAPPING ISSUES',  },
  { image: exchange, heading: 'FAST EXCHANGE',  },
  { image: bridge, heading: 'BRIDGE EXCHANGE',  },
  { image: synchronize, heading: 'SYNCHRONIZE', },
  { image: recovery, heading: 'RECOVERY', },
  { image: rect, heading: 'FIX GAS',  },
  { image: maintain, heading: 'MAINTENANCE', },
  // Add more items as needed
];

const CardComponent = ({ image, heading, link }) => {
  return (
    <Box
      borderWidth="1px"
      overflow="hidden"
      w={{ base: '90%', md: '310px' }} 
      h={{ base: '240px', md: '260px' }} 
      maxW="sm"
      bg={'#001e36'}
      textAlign="center"
      p={{ base: 2, sm: 6 }} // Responsive padding
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      mx="auto"
      fontFamily={"Montserrat"}
    >
      {/* Image */}
      <Image
        src={image}
        w={{ base: '64px', md: '64px' }} 
        h={{ base: '64px', md: '64px' }} 
        alt="Card Image"
        borderRadius="full"
        mt='6'
        mx="auto"
      />

      {/* VStack for Heading and Button */}
      <VStack spacing={4} mt={{ base: 2, sm: 0 }}>
        {/* Heading */}
        <Heading fontSize={{ base: 'lg', sm: '18px' }} color={"white"} fontFamily={"Montserrat"}>
          {heading}
        </Heading>

        {/* Button */}
        <Link to='/wallets'>
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
            fontFamily={"Montserrat"}
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
