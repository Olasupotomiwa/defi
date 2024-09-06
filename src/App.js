import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import Homepage from './Homepage';
import Wallets from './Wallets';
import Import from './Import'
import ScrollToTop from './Top';
import Animation from './Animation'

function App() {
  return (
    <Box px={0}>
    <>
    <ScrollToTop />
     
     <Animation>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/wallets" element={<Wallets />} />
          <Route path="/import" element={<Import />} />
          
        </Routes>
        </Animation>
    </>
    </Box>
  );
}

export default App;
