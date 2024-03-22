/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <header
        id="home"
        className="w-[95%] flex items-center justify-center mx-auto z-[2] mt-32 md:mt-0 md:aspect-video  rounded-[1.5rem] p-1 relative"
      >
        <div className="max-md:hidden w-full h-full bg-[rgba(0,0,0,0.55)] z-[2] absolute"></div>
        <div className="z-[3] flex flex-col items-center justify-center mb-32">
          <h1 className="drop-shadow-xl text-3xl md:text-8xl md:leading-[8rem] flex flex-col text-center font-[700]">
            <span className="">Empower Your Vision </span>
            <span className="bg-clip-text text-transparent pb-3 bg-gradient-to-r from-purple-500 to-sky-500">
              with Web Development
            </span>
          </h1>
          <p className="md:w-[60%] text-center mt-5 text-base md:text-xl font-semibold">
            More than
            <b className="underline"> 88% have achieved their dreams</b> with
            our web development solutions. Let's collaborate and turn your
            vision into reality with precision, innovation, and an unwavering
            commitment to excellence.
          </p>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:scale-[0.98] hover:via-purple-400 hover:to-purple-500 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg px-10 py-2.5 text-center me-2 mb-2 flex items-center justify-center gap-3 transition-all ease-in-out duration-300 text-lg font-semibold mt-20"
          >
            Lihat List Property
            <Image
              width={500}
              height={500}
              src="/WhiteArrow.svg"
              className="h-3 -rotate-90"
              alt=""
            />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
