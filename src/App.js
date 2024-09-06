import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Coinwidget from './Homepage/CoinWidget';
import Homepage from './Homepage';

import ScrollToTop from './Top';
import Animation from './Animation'

function App() {
  return (
    <Box px={0}>
    <>
    <ScrollToTop />
      <Coinwidget />
     <Animation>
        <Routes>
          <Route path="/" element={<Homepage />} />
          
        </Routes>
        </Animation>
    </>
    </Box>
  );
}

export default App;
