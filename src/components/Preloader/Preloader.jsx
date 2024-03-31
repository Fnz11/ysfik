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
import LightPreloader from "./Organism/LightPreloader";
import StarsPreloader from "./Organism/StarsPreloader";

const Preloader = ({ setPreloader, show }) => {
  useGSAP(() => {
    panoramaAnimation([".preloader-hole"], 45);
    panoramaAnimation([".preloader-stars1"], 30, 1.4);
    panoramaAnimation([".preloader-stars2"], 25, 1.6);
    panoramaAnimation([".preloader-stars3"], 32, -1.3);
    fadeInAnimation(["#preloader-title"], { opacity: 0.8 });
  }, []);

  const handleClose = () => {
    fadeOutAnimation([
      "#preloader-title",
      "#preloader-black",
      "#preloader-stars3",
    ]);
    fadeOutAnimation(
      ["#preloader-back", "#preloader-red", ".preloader-light"],
      { delay: 1.2, duration: 0.5 }
    );
    preloaderCloseAnimation(["#preloader"]);
    setPreloader(false);
  };

  return (
    <>
      <section
        id="preloader"
        className={`${!show && "pointer-events-none select-none cursor-default"} fixed z-[1000] w-full h-full flex items-center justify-center bg-[#111325]`}
      >
        <Image
          width={50000}
          height={50000}
          src="/BlackHoleBackground.png"
          className=" preloader-hole max-md:w-[150vw] max-md:h-[100vw] w-full h-full rotate-[-10deg] z-[-1] saturate-[0.5]  opacity-[0.7] contrast-[0.96] brightness-[0.81] absolute   object-cover scale-[1.1]  "
          alt=""
        />

        {/* STARS */}
        <StarsPreloader />

        {/* LIGHT */}
        <LightPreloader />
        <div
          onClick={handleClose}
          id="preloader-black"
          className="cursor-pointer w-full h-full relative z-[10] flex flex-col items-center justify-center"
        >
          <div
            id="preloader-black"
            className="w-full h-full absolute top-0 left-0 bg-[rgba(17,19,37, 0.8)] pointer-events-none backdrop-blur-[0.25rem] z-[-1]"
          ></div>
          <div
            id="preloader-title"
            onMouseEnter={() => {
              gsap.to("#preloader-title", {
                scale: 1.05,
                duration: 0.5,
                opacity: 1,
                ease: "",
              });
            }}
            onMouseLeave={() => {
              gsap.to("#preloader-title", {
                scale: 1,
                duration: 0.5,
                opacity: 0.8,
                ease: "",
              });
            }}
            className=" opacity-0 w-fit h-fit flex items-center  justify-center relative text-white text-2xl mb-10"
          >
            <h1 className="">Click To Start</h1>
            <h1 className="absolute blur-[0.2rem] opacity-[0.5]">
              Click To Start
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preloader;
