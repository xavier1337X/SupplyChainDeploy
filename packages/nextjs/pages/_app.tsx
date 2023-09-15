import "~~/styles/globals.css";

import type { AppProps } from "next/app";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { Toaster } from "react-hot-toast";
import alanBtn from "@alan-ai/alan-sdk-web";
import "@rainbow-me/rainbowkit/styles.css";
import { appChains } from "~~/services/web3/wagmiConnectors";
import { wagmiClient } from "~~/services/web3/wagmiClient";
import { BlockieAvatar } from "~~/components/scaffold-eth";

import Header from "~~/components/Header";
import Footer from "~~/components/Footer";

import { useEffect } from "react";
import { useAppStore } from "~~/services/store/store";
import { useEthPrice } from "~~/hooks/scaffold-eth";

import NextNProgress from "nextjs-progressbar";
import Router from "next/router";


const ScaffoldEthApp = ({ Component, pageProps }: AppProps) => {
  const price = useEthPrice();
  const setEthPrice = useAppStore(state => state.setEthPrice);


  // useEffect(() => {
  //   if(typeof window === undefined) return
  //   if(isMounted()){
  //     alanBtn({
  //       key: '07070e457e92f6e7f793ccf062512ba02e956eca572e1d8b807a3e2338fdd0dc/stage',
  //       onCommand: (commandData) => {
  //         if (commandData.command === 'go:back') {
  //           // Call the client code that will react to the received command
  //         }
  //       }
  //     });

  //   }
    
  // }, [isMounted]);

  useEffect(() => {
    const alanBtn = require('@alan-ai/alan-sdk-web');
    alanBtn({
      key: '07070e457e92f6e7f793ccf062512ba02e956eca572e1d8b807a3e2338fdd0dc/stage',
      rootEl: document.getElementById("alan-btn"),
      onCommand: (command) => {
        if (command == 'testCommand1') {
          // Router.push("/")
          alert("navigate to home page")
          // Call the client code that will react to the received command
        }

      }
    });
  }, []);
  
  useEffect(() => {
    if (price > 0) {
      setEthPrice(price);
    }
  }, [setEthPrice, price]);

  return (
    <WagmiConfig client={wagmiClient}>
      <NextNProgress />
      <RainbowKitProvider chains={appChains.chains} avatar={BlockieAvatar}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="relative flex flex-col flex-1">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
        <Toaster />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default ScaffoldEthApp;
