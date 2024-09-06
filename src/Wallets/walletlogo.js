import React from "react";
import { Box, Image, Text, Grid } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

// Wallet images
import solflare from "../assets/solflare.jpg";
import phantom from "../assets/phantom.png";
import defi from "../assets/defi.jpeg";
import walletconnect from "../assets/WalletConnect.jpeg";
import metamask from "../assets/metamask.png";
import coinbase from "../assets/Coinbase.png";
import trust from "../assets/trust.png";
import ledger from "../assets/ledger.png";
import keplr from "../assets/keplr.jpg";
import coinomi from "../assets/coinomi.jpeg";
import binance from "../assets/binance.png";
import rainbow from "../assets/rainbow.png";
import ronin from "../assets/ronin.jpeg";
import stablefund from "../assets/stalefund.webp";
import gnosis from "../assets/gnosis.jpeg";
import solaris from "../assets/solaris.jpeg";
import pillar from "../assets/pillar.jpeg";
import onto from "../assets/onto.jpeg";
import fortmatic from "../assets/formatic.jpeg";
import samourai from "../assets/samourai.png";
import tokenpocket from "../assets/tokenpocket.jpeg";
import mathwallet from "../assets/mathwallet.jpeg";
import bitpay from "../assets/bitpay.jpeg";
import ledgerlive from "../assets/ledgerlive.jpeg";
import walleth from "../assets/walleth.png";
import authereum from "../assets/authereum.jpeg";
import avalanche from "../assets/avalanche.jpeg";
import terra from "../assets/terra.png";
import matic from "../assets/matic.png";
import dharma from "../assets/dharma.jpeg";
import inch from "../assets/1inch.jpeg";
import huobi from "../assets/huobi.jpeg";
import eidoo from "../assets/eidoo.jpeg";
import trustvault from "../assets/trustvault.jpeg";
import atomic from "../assets/atomic.jpeg";
import coin98 from "../assets/coin98.jpeg";
import coolwallets from "../assets/cool.jpeg";
import alphawallet from "../assets/alpha.jpeg";
import dcent from "../assets/dcent.jpeg";
import zelcore from "../assets/zelcore.jpeg";
import nash from "../assets/nash.jpeg";
import gridplus from "../assets/gridplus.jpeg";
import cybavo from "../assets/cybavo.jpeg";
import tokenary from "../assets/tokenary.jpeg";
import torus from "../assets/torus.jpeg";
import spatium from "../assets/spatium.jpeg";
import infinito from "../assets/infinito.jpeg";
import walletio from "../assets/walletio.jpeg";
import infinitywallet from "../assets/infinity.jpeg";
import ownbit from "../assets/ownbit.jpeg";
import sparkpoint from "../assets/sparkpoint.jpeg";
import viawallet from "../assets/via.jpeg";
import vision from "../assets/vision.jpeg";
import peakdefi from "../assets/peakdefi.jpeg";
import unstoppable from "../assets/unstoppable.jpeg";
import dokwallet from "../assets/dok.jpeg";
import atwallet from "../assets/at.jpeg";
import midaswallet from "../assets/midas.jpeg";
import ellipal from "../assets/ellipal.jpeg";
import keyringpro from "../assets/keyring.jpeg";
import aktionariat from "../assets/aktionariat.jpeg";
import talkenwallet from "../assets/talken.jpeg";
import xinfinxdc from "../assets/xinfin.jpeg";
import atokenwallet from "../assets/atoken.jpeg";
import rwallet from "../assets/r.jpeg";
import plasmapay from "../assets/plasmapay.jpeg";
import o3wallet from "../assets/q3.jpeg";
import hashkeyme from "../assets/hashkey.jpeg";
import jadewallet from "../assets/jade.jpeg";
import defiant from "../assets/defiant.jpeg";
import cmorq from "../assets/cmorq.jpeg";
import valora from "../assets/valora.jpeg";
import quiverx from "../assets/quiverx.jpeg";
import encryptedink from "../assets/encrypted.jpeg";
import cleo from "../assets/cleo.jpg";
import atariwallet from "../assets/atari.png";
import daedaluswallet from "../assets/daedalus.png";
import mobox from "../assets/mobox.png";
import neoline from "../assets/neoline.png";
import revolutwallet from "../assets/revolut.png";
import xdefi from "../assets/xdefi.png";
import callistowallet from "../assets/callisto.png";
import celo from "../assets/celo.jpeg";

// Wallets and images mapping
const walletData = [
  { name: "Solflare Wallet", image: solflare },
  { name: "Phantom Wallet", image: phantom },
  { name: "DeFi Wallet", image: defi },
  { name: "WalletConnect", image: walletconnect },
  { name: "MetaMask", image: metamask },
  { name: "Coinbase", image: coinbase },
  { name: "Trust Wallet", image: trust },
  { name: "Ledger Wallet", image: ledger },
  { name: "Keplr Wallet", image: keplr },
  { name: "Coinomi", image: coinomi },
  { name: "Binance", image: binance },
  { name: "Rainbow", image: rainbow },
  { name: "Ronin Wallet", image: ronin },
  { name: "StableFund", image: stablefund },
  { name: "Gnosis Safe", image: gnosis },
  { name: "Solaris", image: solaris },
  { name: "Pillar", image: pillar },
  { name: "ONTO", image: onto },
  { name: "Fortmatic", image: fortmatic },
  { name: "Samourai", image: samourai },
  { name: "TokenPocket", image: tokenpocket },
  { name: "MathWallet", image: mathwallet },
  { name: "BitPay", image: bitpay },
  { name: "Ledger Live", image: ledgerlive },
  { name: "Walleth", image: walleth },
  { name: "Authereum", image: authereum },
  { name: "Avalanche", image: avalanche },
  { name: "Terra Wallet", image: terra },
  { name: "Matic Wallet", image: matic },
  { name: "Dharma", image: dharma },
  { name: "1inch Wallet", image: inch },
  { name: "Huobi Wallet", image: huobi },
  { name: "Eidoo", image: eidoo },
  { name: "TrustVault", image: trustvault },
  { name: "Atomic", image: atomic },
  { name: "Coin98", image: coin98 },
  { name: "CoolWallet S", image: coolwallets },
  { name: "AlphaWallet", image: alphawallet },
  { name: "D'CENT", image: dcent },
  { name: "ZelCore", image: zelcore },
  { name: "Nash", image: nash },
  { name: "GridPlus", image: gridplus },
  { name: "CYBAVO", image: cybavo },
  { name: "Tokenary", image: tokenary },
  { name: "Torus", image: torus },
  { name: "Spatium", image: spatium },
  { name: "Infinito", image: infinito },
  { name: "wallet.io", image: walletio },
  { name: "Infinity Wallet", image: infinitywallet },
  { name: "Ownbit", image: ownbit },
  { name: "SparkPoint", image: sparkpoint },
  { name: "ViaWallet", image: viawallet },
  { name: "Vision", image: vision },
  { name: "PEAKDEFI", image: peakdefi },
  { name: "Unstoppable", image: unstoppable },
  { name: "Dok Wallet", image: dokwallet },
  { name: "AT.Wallet", image: atwallet },
  { name: "Midas Wallet", image: midaswallet },
  { name: "Ellipal", image: ellipal },
  { name: "KEYRING PRO", image: keyringpro },
  { name: "Aktionariat", image: aktionariat },
  { name: "Talken Wallet", image: talkenwallet },
  { name: "XinFin XDC", image: xinfinxdc },
  { name: "AToken Wallet", image: atokenwallet },
  { name: "RWallet", image: rwallet },
  { name: "PlasmaPay", image: plasmapay },
  { name: "O3Wallet", image: o3wallet },
  { name: "HashKey Me", image: hashkeyme },
  { name: "Jade Wallet", image: jadewallet },
  { name: "Defiant", image: defiant },
  { name: "cmorq", image: cmorq },
  { name: "Valora", image: valora },
  { name: "QuiverX", image: quiverx },
  { name: "Celo Wallet", image: celo },
  { name: "Encrypted Ink", image: encryptedink },
  { name: "Cleo", image: cleo },
  { name: "Atari Wallet", image: atariwallet },
  { name: "Daedalus Wallet", image: daedaluswallet },
  { name: "Mobox", image: mobox },
  { name: "Neoline", image: neoline },
  { name: "Revolut Wallet", image: revolutwallet },
  { name: "XDefi", image: xdefi },
  { name: "Callisto Wallet", image: callistowallet },
];

const WalletGrid = () => (
    <Grid
    templateColumns={{
      base: 'repeat(2, 1fr)',   // 2 columns on mobile
      md: 'repeat(auto-fill, minmax(200px, 1fr))' // 1 column per row on medium and larger screens
    }}
    gap={6}
    my={8}
    mb={20}
  > 
    {" "}
    {walletData.map((wallet) => (
        <Link to='/import' >
      <Box
        key={wallet.name}
        textAlign="center" 
        p={2}
       
      >
        {" "}
        <Image
          src={wallet.image}
          alt={wallet.name}
          
          borderRadius="full"
         
          w="100px"
          mx="auto"
        />{" "}
        <Text mt={4}>{wallet.name}</Text>{" "}
      </Box>
      </Link>
    ))}{" "}
  </Grid>
);

export default WalletGrid;
