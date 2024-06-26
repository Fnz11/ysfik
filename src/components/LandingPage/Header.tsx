"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useRef, useState } from "react";
import Button from "../Button";
import { useGSAP } from "@gsap/react";
import {
  fadeInAnimation,
  fadeOutAnimation,
  floatingAnimation,
} from "../../utils/animations";
import { useIntersection } from "react-use";
const Header = ({ waitAnimation }: { waitAnimation: boolean }) => {
  // INTERSECTION
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "500px",
    threshold: 0.2,
  });

  // ==================== STATE ====================

  // Is Ready Animation State
  const [isReadyAnimation, setisReadyAnimation] = useState(false);

  // Is Reveall State
  const [isReveall, setIsReveall] = useState(false);

  // ==================== HANDLE ====================

  // GSAP
  useGSAP(() => {
    if (!waitAnimation && !isReveall && intersection) {
      if (intersection.intersectionRatio < 0.2) {
        fadeOutAnimation([".heading", ".text", ".btn"]);
      }
      setIsReveall(true);
      setTimeout(
        () => {
          if (intersection.intersectionRatio >= 0.2) {
            fadeInAnimation([".heading", ".text", ".btn"]);
            floatingAnimation([".floating-left"], {}, { x: 10 });
            floatingAnimation([".floating-right"], {}, { x: -10 });
          }
          setisReadyAnimation(true);
        },
        !isReadyAnimation ? 2500 : 0
      );
    }
  }, [intersection, waitAnimation]);

  return (
    <>
      <header
        ref={sectionRef}
        className="w-[95%] flex items-center justify-center mx-auto z-[2] mt-20 md:mt-10 md:aspect-video  rounded-[1.5rem] p-1 relative "
      >
        {/* FLOATING RIGHT */}
        <div className="max-md:hidden floating-right opacity-0 absolute -skew-x-[2deg] skew-y-[10deg] top-[70vh] md:top-[60vh] right-[10vw]">
          <div className="w-[7rem] h-[7rem] md:w-[10rem] md:h-[10rem] p-[0.1rem] bg-gradient-to-br from-pink-500 via-transparent  to-indigo-600 rounded-2xl   relative ">
            <div className="w-full h-full bg-gradient-to-br from-pink-500 via-transparent  to-indigo-600 rounded-2xl absolute z-[0] opacity-[0.8] blur-[3rem]"></div>
            <div className="flex h-full w-full rounded-2xl z-[2] relative items-center justify-center text-center text-[4rem] md:text-[6rem] pb-3 font-[600] bg-gradient-to-br from-[rgba(0,0,0,0.8)] via-gray-900 via-[60%] to-[rgba(0,0,0,0.8)]">
              <h1>{">_"}</h1>
            </div>
          </div>
        </div>
        {/* FLOATING LEFT */}
        <div className="max-md:hidden floating-left opacity-0  absolute skew-x-[2deg] -skew-y-[8deg] -top-20 left-0 md:top-32 md:left-20">
          <div className="w-[7rem] h-[7rem] md:w-[10rem] md:h-[10rem] ">
            <Image
              src="/Web.png"
              alt="float-left"
              width={100}
              height={100}
              className=" h-full w-full relative"
            />
            <Image
              src="/Web.png"
              alt="float-left"
              width={100}
              height={100}
              className=" h-full w-full absolute top-0 left-0 opacity-[0.7] blur-[2rem]"
            />
          </div>
        </div>

        {/* LIGHT */}
        <div className="bg-pink-400 h-[20rem] blinking-element absolute w-[12rem] aspect-square rounded-full z-[1] -right-32 top-[12rem] blur-[8rem] mr-52 opacity-[0.2] scale-[1.2]"></div>
        <div className="bg-blue-600 h-[20rem] blinking-element absolute w-[12rem] aspect-square rounded-full z-[1] -left-32 top-[5rem] blur-[6rem] mr-52 opacity-[0.2] scale-[1.5]"></div>
        <div className="bg-indigo-500 h-[20rem] absolute w-[12rem] aspect-square rounded-full z-[1] top-[-5rem] blur-[6rem] mr-[20rem] opacity-[0.35] scale-[2]"></div>
        <div className="bg-purple-500 h-[20rem] absolute w-[12rem] aspect-square rounded-full z-[1] top-[-5rem] blur-[6rem] ml-[25rem] opacity-[0.2] scale-[1.7]"></div>
        {/* <div className=" absolute size-full top-0 left-0 scale-[1.2] z-[-1]"></div> */}
        {/* CONTENT */}
        <div className="z-[3] flex flex-col items-center justify-center mb-32">
          <h1 className="drop-shadow-xl text-6xl leading-[5rem] md:text-8xl md:leading-[8rem] flex flex-col text-center font-[700] max-md:mt-10">
            <span className="heading opacity-0">
              Empower <br className="md:hidden" /> Your Vision{" "}
            </span>
            <div className="heading opacity-0 relative">
              <span className="absolute blur-[1rem] opacity-[0.6] pb-3 bg-clip-text text-transparent z-[1] bg-gradient-to-r from-indigo-600  to-pink-600 ">
                with <i>YSFIK</i>.
              </span>
              <span className="pb-3 z-[3] relative bg-clip-text text-transparent  bg-gradient-to-r from-indigo-600  to-pink-600 ">
                with <i>YSFIK</i>.
              </span>
            </div>
          </h1>
          <p className="text opacity-0 md:w-[55%] md:leading-[2.2rem] text-center mt-5 text-base md:text-xl font-semibold mb-20 text-white/70">
            Experience the power of transformation with our web development
            solutions. More than{" "}
            <b className="underline ">
              {" "}
              88% have already realized their dreams
            </b>{" "}
            with us. Hello, I'm Fikri Nurdiansyah, but you can call me Ysfik. As
            a Fullstack Web Developer, I'm dedicated to turning visions into
            reality. Let's collaborate and unleash the full potential of your
            ideas.
          </p>
          <Button onClick={() => {}} arrow bordered className={"btn opacity-0"}>
            <a href="#features">Let{"'"}s Talk</a>
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
