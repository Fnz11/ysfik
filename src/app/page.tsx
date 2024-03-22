import Head from "next/head";
import Navbar from "../components/LandingPage/Navbar/Navbar";
import Header from "../components/LandingPage/Header";
import Features from "../components/LandingPage/Features";
import Quotes from "../components/LandingPage/Quotes";
import Footer from "../components/LandingPage/Footer";
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
      <div className="bg-[#060606] overflow-hiddenw-screen flex flex-col items-center justify-center text-white text-base md:text-lg relative pt-20">
        <div className="bg-purple-600 h-[12rem] absolute w-[12rem] aspect-square rounded-full z-[1] top-10 blur-[8rem] mr-52 scale-[1.5]"></div>
        <div className="bg-pink-600 h-[12rem] absolute w-[12rem] aspect-square rounded-full z-[1] top-96 left-0 blur-[20rem] mr-52 scale-[1.5]"></div>
        <div className="bg-green-800 h-[12rem] absolute w-[22rem] aspect-square rounded-full z-[1] top-96 blur-[10rem] scale-[1.3]"></div>

        <Navbar />

        <Header />

        <Features />

        <Quotes />

        <Footer />
      </div>
    </>
  );
}
