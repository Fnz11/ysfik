/* eslint-disable @next/next/no-page-custom-font */
"use client";
import Head from "next/head";
import Navbar from "../components/LandingPage/Navbar/Navbar";
import Header from "../components/LandingPage/Header";
import Features from "../components/LandingPage/Features/Features";
import Quotes from "../components/LandingPage/Quotes";
import Footer from "../components/LandingPage/Footer";
import TechStack from "../components/LandingPage/TechStack/TechStack";
import Projects from "../components/LandingPage/Projects/Projects";
import Gallery from "../components/LandingPage/Gallery/Gallery";
import Preloader from "../components/Preloader/Preloader";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ContactMe from "@/components/LandingPage/ContactMe/ContactMe";

export default function Home() {
  const [preloader, setPreloader] = useState(true);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <>
      <Head>
        <title>Ysfik</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Preloader setPreloader={setPreloader} show={preloader} />

      <div
      // options={{
      //   smooth: true,

      //   // ... all available Locomotive Scroll instance options
      // }}
      // watch={
      //   [
      //     //..all the dependencies you want to watch to update the scroll.
      //     //  Basicaly, you would want to watch page/location changes
      //     //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
      //   ]
      // }
      // containerRef={containerRef}
      >
        {!preloader && (
          <div
            data-scroll
            data-scroll-speed="6"
            data-scroll-section
            data-scroll-container
            ref={containerRef}
            id="home"
            className={`bg-[#060606] bg-grid-white/[0.03] overflow-hiddenw-screen flex flex-col items-center justify-center text-white text-base md:text-lg relative pt-20 overflow-hidden`}
          >
            <Navbar waitAnimation={preloader} />

            <Header waitAnimation={preloader} />

            <TechStack />

            <Projects />

            <Gallery />

            <Features />

            <Quotes />

            <ContactMe />

            <Footer />
          </div>
        )}
      </div>
    </>
  );
}
