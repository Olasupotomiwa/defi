import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import Homepage from './Homepage';
import Wallets from './Wallets';
import Import from './Import';
import ScrollToTop from './Top';
import Animation from './Animation';

const pageTitles = {
  '/': 'Defi Webpage',
  '/wallets': 'Wallets',
  '/import': 'Import',
};

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || 'Default Title';
    document.title = title;
  }, [location]);

  return (
    <Box px={0} fontFamily={"Montserrat"}>
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
};

export default App;
