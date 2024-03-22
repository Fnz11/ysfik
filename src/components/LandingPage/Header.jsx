/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import Button from "../Button";

const Header = () => {
  return (
    <>
      <header
        id="home"
        className="w-[95%] flex items-center justify-center mx-auto z-[2] mt-32 md:mt-0 md:aspect-video  rounded-[1.5rem] p-1 relative"
      >
        <div className="absolute top-20 left-20 bg-gradient-to-br from-purple-400 via-[#14172D] to-cyan-500 h-[15rem] w-[11rem] rounded-lg p-[0.1rem] ">
          <Image
            src="/MyFullPict.jpg"
            alt="logo"
            width={500}
            height={500}
            className="h-full w-full rounded-lg saturate-150"
          />
        </div>

        <div className="bg-pink-400 h-[20rem] absolute w-[12rem] aspect-square rounded-full z-[0] -right-32 top-[5rem] blur-[15rem] mr-52 scale-[1.5]"></div>
        <div className="bg-purple-600 h-[12rem] absolute w-[12rem] aspect-square rounded-full z-[0] -right-32 top-[5rem] blur-[9rem] mr-52 scale-[1.5]"></div>
        <div className="bg-blue-600 h-[20rem] absolute w-[12rem] aspect-square rounded-full z-[0] -left-32 top-[5rem] blur-[12rem] mr-52 scale-[1.5]"></div>
        <div className="z-[3] flex flex-col items-center justify-center mb-32">
          <h1 className="drop-shadow-xl text-3xl md:text-8xl md:leading-[8rem] flex flex-col text-center font-[700]">
            <span className="">Empower Your Vision </span>
            <span className="bg-clip-text text-transparent pb-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              with <i>YSFIK</i>.
            </span>
          </h1>
          <p className="md:w-[55%] md:leading-[2.2rem] text-center mt-5 text-base md:text-xl font-semibold mb-20">
            Experience the power of transformation with our web development
            solutions. More than{" "}
            <b className="underline"> 88% have already realized their dreams</b>{" "}
            with us. Hello, I'm Fikri Nurdiansyah, but you can call me Ysfik. As
            a Fullstack Web Developer, I'm dedicated to turning visions into
            reality. Let's collaborate and unleash the full potential of your
            ideas.
          </p>
          <Button arrow>
            <a href="#features">Get Started</a>
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
