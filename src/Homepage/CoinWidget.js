import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

const CoinGeckoWidget = () => {
  useEffect(() => {
    // Load CoinGecko script dynamically
    const script = document.createElement('script');
    script.src = 'https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box
      id="coin-marquee-widget-container"
      width="100%"
      borderRadius="md"
      overflow="hidden"
      p="4"
      bg="black"
      color="white"
      boxShadow="lg"
    >
      {/* The widget will be injected here */}
      <gecko-coin-price-marquee-widget
        locale="en"
        dark-mode="true"
        outlined="true"
        coin-ids=""
        initial-currency="usd"
      ></gecko-coin-price-marquee-widget>
    </Box>
  );
};

export default CoinGeckoWidget;
