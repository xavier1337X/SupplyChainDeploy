import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

// import Header from "../components/partials/Header";
import HeroHome from "../components/partials/HeroHome";
import FeaturesHome from "../components/partials/Features";
import FeaturesBlocks from "../components/partials/FeaturesBlocks";
import Testimonials from "../components/partials/Testimonials";
import Newsletter from "../components/partials/Newsletter";
// import Footer from "../components/partials/Footer";
import Banner from "../components/partials/Banner";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Supply-chain Luxury Goods</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        {/* <Header /> */}

        {/*  Page content */}
        <main className="flex-grow">
          {/*  Page sections */}
          <HeroHome />
          <FeaturesHome />
          <FeaturesBlocks />
          <Testimonials />
          <Newsletter />
        </main>

        <Banner />

        {/*  Site footer */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
