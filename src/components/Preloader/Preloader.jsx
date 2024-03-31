"use client";
import {
  fadeInAnimation,
  fadeOutAnimation,
  panoramaAnimation,
  preloaderCloseAnimation,
} from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const Preloader = ({ setPreloader, show }) => {
  useGSAP(() => {
    panoramaAnimation([".preloader-hole"], 45);
    panoramaAnimation([".preloader-stars1"], 30, 1.4);
    panoramaAnimation([".preloader-stars2"], 25, 1.6);
    panoramaAnimation([".preloader-stars3"], 32, -1.3);
    fadeInAnimation(["#preloader-title"]);
  }, []);

  const handleClose = () => {
    fadeOutAnimation(["#preloader-title", "#preloader-black"]);
    fadeOutAnimation(["#preloader-stars3"]);
    fadeOutAnimation(["#preloader-back"], { delay: 3.8, duration: 0.5 });
    preloaderCloseAnimation(["#preloader", "#preloader-red"]);
    setPreloader(false);
  };

  return (
    <>
      <section
        id="preloader"
        className={`fixed z-[1000] w-full h-full flex items-center justify-center bg-[#111325]`}
      >
        <Image
          width={50000}
          height={50000}
          src="/BlackHoleBackground.png"
          className="preloader-hole w-full h-full rotate-[-10deg] z-[-1] saturate-[0.5]  opacity-[0.7] contrast-[0.96] brightness-[0.81] absolute left-0 top-0 mix-blend-difference object-cover scale-[1.1]  "
          alt=""
        />
        <Image
          width={5000}
          height={5000}
          src="/Stars.png"
          className="preloader-stars1  w-[80%] h-[80%] opacity-[0.5] z-[1] absolute left-[-50%] top-0 mix-blend-hard-light object-cover"
          alt=""
        />
        <Image
          width={5000}
          height={5000}
          src="/Stars.png"
          className="preloader-stars3  w-[50%] h-[50%] bottom-0 opacity-[0.5] z-[1] absolute mix-blend-hard-light object-cover"
          alt=""
        />
        <Image
          width={5000}
          height={5000}
          src="/Stars.png"
          className="preloader-stars2  w-[80%] h-[80%] opacity-[0.5] z-[1] absolute right-[-50%] top-0 mix-blend-hard-light object-cover"
          alt=""
        />
        <div
          id="preloader-red"
          className="w-full h-full absolute top-0 left-0 bg-[rgba(255,173,228,0.3)] mix-blend-color-burn z-[5]"
        ></div>
        <div
          id="preloader-black"
          className="w-full h-full relative z-[10] flex flex-col items-center justify-center"
        >
          <div
            id="preloader-black"
            className="w-full h-full absolute top-0 left-0 bg-[rgba(17,19,37, 0.8)]  backdrop-blur-[0.25rem] z-[-1    ]"
          ></div>
          <div onClick={handleClose}>
            <div
              id="preloader-title"
              className="opacity-0 w-fit h-fit flex items-center justify-center relative text-3xl md:text-9xl"
            >
              <h1 className=" font-bold bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 text-transparent ">
                YSFIK PORTFOLIO
              </h1>
              <h1 className=" blur-[0.8rem]  absolute font-bold bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 text-transparent ">
                YSFIK PORTFOLIO
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preloader;
