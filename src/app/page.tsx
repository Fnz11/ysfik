/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Navbar from "../components/LandingPage/Navbar/Navbar";
import Header from "../components/LandingPage/Header";
import Features from "../components/LandingPage/Features/Features";
import Quotes from "../components/LandingPage/Quotes";
import Footer from "../components/LandingPage/Footer";
import TechStack from "../components/LandingPage/TechStack/TechStack";
import Projects from "../components/LandingPage/Projects/Projects";
import Gallery from "../components/LandingPage/Gallery/Gallery";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home App</title>
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
      <div className="bg-[#060606] overflow-hiddenw-screen flex flex-col items-center justify-center text-white text-base md:text-lg relative pt-20 overflow-x-hidden">
        <Navbar />

        <Header />

        <TechStack />

        <Projects />

        <Gallery />

        <Features />

        <Quotes />

        <Footer />
      </div>
    </>
  );
}
