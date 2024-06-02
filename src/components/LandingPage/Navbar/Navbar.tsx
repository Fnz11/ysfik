"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../../Button";
import NavLink from "../../GlobalNavbar/Atom/NavLink";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Sidebar from "@/components/Sidebar/Sidebar";
import { NavLinks, landingLinks, socialLinks } from "@/const/linkData";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import FloatContact from "@/components/FloatContact/FloatContact";
const Navbar = ({
  waitAnimation,
  isLanding = true,
}: {
  waitAnimation: boolean;
  isLanding?: boolean;
}) => {
  // APPEAR ANIMATION
  useGSAP(() => {
    if (!waitAnimation) {
      setTimeout(() => {
        gsap.fromTo(
          "#navbar",
          {
            y: "-15vh",
            ease: "back.inOut",
          },
          {
            y: 0,
            ease: "back.inOut",
            duration: 3.5,
          }
        );
      }, 1500);
    }
  }, [waitAnimation]);

  // IS SCROLL DOWN
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [isHiddenNav, setIsHiddenNav] = useState(false);
  const [isClickedShow, setIsClickedShow] = useState(false);

  // ON SCROLL
  useEffect(() => {
    if (typeof window == "undefined") return;
    const onScroll = () => {
      if (window.scrollY > 10) {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }
      // if (window.scrollY <= 2500 || window.scrollY >= 5800) {
      //   setIsClickedShow(false);
      // }

      // if (window.scrollY >= 2500 && window.scrollY <= 5800 && !isClickedShow) {
      //   setIsHiddenNav(true);
      // } else {
      //   setIsHiddenNav(false);
      // }

      console.log(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isClickedShow, isHiddenNav]);

  const handleShowNavbar = () => {
    setIsClickedShow(true);
    setIsHiddenNav(false);
  };

  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav
        data-scroll
        data-scroll-sticky
        data-scroll-
        id="navbar"
        className={`fixed  w-full z-[10] top-0 left-0 `}
      >
        <div
          className={`flex z-[2] justify-between backdrop-blur-xl h-full ${
            isHiddenNav && "translate-y-[-10rem] scale-[1.2]"
          } relative border ${
            isScrollDown
              ? " w-[100%] px-10 md:px-16 py-5 shadow-2xl shadow-[rgba(235,0,220,0.15)] bg-[rgba(0,0,0,0.1)] border-transparent border-b-[rgba(255,255,255,0.1)]"
              : "w-[90%] p-5 md:px-10 md:py-8 rounded-[2rem] mt-5 bg-[rgba(255,200,255,0.03)] border-transparent"
          }  delay-100  mx-auto  transition-all duration-1000 ease-in-out `}
        >
          {/* BG */}
          <div className="bg-purple-600 h-24 w-24 absolute rounded-full left-[-5rem] top-[-4rem] scale-[1.5] blur-[4rem]"></div>
          <div className="bg-blue-600 h-24 w-24 absolute rounded-full right-[-5rem] top-[-4rem] scale-[1.5] blur-[3.8rem]"></div>
          <div className="bg-emerald-700 h-24 w-24 absolute rounded-full left-[3rem] top-[-5rem] scale-[1.2] blur-[5rem]"></div>

          {/* Logo */}
          <span className="flex items-center z-[2] justify-center gap-1 font-bold text-lg leading-5">
            <Image
              width={500}
              height={500}
              src="/Favicon.svg"
              className="h-14 w-14"
              alt=""
            />
            <i className="max-md:hidden text-4xl">YSFIK</i>
          </span>

          {/* Links */}
          <div className="max-md:hidden z-[2] flex items-center justify-center font-semibold gap-10 ml-34">
            {isLanding ? (
              <>
                {landingLinks.map((item, i) => (
                  <NavLink key={i} link={item.link}>
                    {item.text}
                  </NavLink>
                ))}
              </>
            ) : (
              <>
                {NavLinks.map((item, i) => (
                  <NavLink key={i} link={item.link}>
                    {item.text}
                  </NavLink>
                ))}
              </>
            )}
          </div>

          {/* Button */}
          <div className="flex z-[2] items-center justify-center gap-3 mt-2 max-md:hidden">
            <Button onClick={() => {}} arrow={true}>
              Let{"'"}s Talk
            </Button>
          </div>

          {/* Open Sidebar */}
          <button
            onClick={() => setIsOpenSidebar(!isOpenSidebar)}
            className="h-8 my-auto aspect-square flex flex-col justify-center items-center relative z-[2] md:hidden"
          >
            <div
              className={`w-full top-0 h-[0.1rem] bg-white rounded-full ${
                isOpenSidebar ? "scale-x-[1.3] rotate-[45deg] mt-[0.95rem]" : ""
              }  absolute transition-all ease-in-out duration-200`}
            />
            <div
              className={`w-full h-[0.1rem] bg-white rounded-full ${
                isOpenSidebar ? "scale-x-0" : ""
              } transition-all ease-in-out duration-200`}
            />
            <div
              className={`w-full bottom-0 h-[0.1rem] bg-white rounded-full absolute transition-all ease-in-out duration-200 ${
                isOpenSidebar
                  ? "scale-x-[1.3] rotate-[-45deg] mb-[0.95rem]"
                  : ""
              } `}
            />
            <div className="absolute size-full blur-[0.15rem]">
              <div
                className={`w-full top-0 h-[0.1rem] bg-white rounded-full ${
                  isOpenSidebar
                    ? "scale-x-[1.3] rotate-[45deg] mt-[0.95rem]"
                    : ""
                }  absolute transition-all ease-in-out duration-200`}
              />
              <div
                className={`w-full h-[0.1rem] bg-white  rounded-full ${
                  isOpenSidebar ? "scale-x-0" : ""
                } transition-all ease-in-out duration-200`}
              />
              <div
                className={`w-full bottom-0 h-[0.1rem] bg-white rounded-full absolute transition-all ease-in-out duration-200 ${
                  isOpenSidebar
                    ? "scale-x-[1.3] rotate-[-45deg] mb-[0.95rem]"
                    : ""
                } `}
              />
            </div>
          </button>
        </div>

        {/* BUTTON */}
        <button
          className={` ${
            !isHiddenNav && " translate-y-[-7rem]"
          } transition-all duration-1000 delay-300 z-[1] ease-in-out flex items-center justify-center absolute right-28 -top-[5rem]  w-fit h-fit  rounded-2xl group `}
        >
          <div
            className={` p-2 border-2 group-hover:scale-[0.98] scale-[1.02] transition-all ease-in-out duration-700 rounded-full group-hover:border-[rgba(108,100,235,0.5)] border-[rgba(108,100,235,0.3)]`}
          >
            <div
              onClick={handleShowNavbar}
              className={`text-white bg-gradient-to-r from-indigo-600  to-pink-600 group-hover:from-indigo-500 group-hover:to-pink-500  rounded-full p-8 pt-20 text-center m-[0.1rem] flex items-center justify-center group-hover:scale-[1.02] transition-all ease-in-out duration-500 text-lg font-semibold shadow-lg group-hover:shadow-xl group-hover:shadow-[rgba(177,98,255,0.3)] shadow-[rgba(177,98,255,0.3)] drop-shadow-2xl before:h-[150%] before:w-[1rem] before:rotate-[20deg]  before:bg-white before:absolute relative overflow-hidden before:-left-10 before:group-hover:translate-x-[20rem] before:transition-all before:duration-500 before:ease-in-out before:blur-[0.9rem] before:invisible before:group-hover:visible`}
            >
              <div className="absolute w-full h-full  floating-element">
                <Image
                  width={500}
                  height={500}
                  src="/Nebula.png"
                  className="w-full  z-[-1] opacity-[0.25] translate-y-10 group-hover:scale-[1.6] group-hover:rotate-[40deg] transition-all duration-[2000ms] rotate-[20deg] scale-[1.8] object-cover  blur-[0rem]"
                  alt=""
                />
              </div>

              <Image
                width={500}
                height={500}
                src="/WhiteArrow.svg"
                className="h-7 w-7  duration-500 transition-all ease-in-out  rotate-[45deg]"
                alt=""
              />
            </div>
          </div>
        </button>
      </nav>

      {/* SIDEBAR */}
      <Sidebar
        isShow={isOpenSidebar}
        handleOpen={() => setIsOpenSidebar((prev) => !prev)}
        isLanding={isLanding}
      />

      {/* UP */}
      <div className="fixed aspect-square bottom-8 right-8 z-[20] flex items-center justify-center flex-col gap-5">
        {/* Font */}
        <div className="italic max-md:hidden relative flex items-center justify-center pointer-events-none">
          <span className="relative z-2 [writing-mode:vertical-lr] text-2xl tracking-[0.5rem] text-white/60">
            SCROLL TO TOP
          </span>
          <span className="absolute blur-[0.2rem] opacity-[0.4] [writing-mode:vertical-lr] text-2xl tracking-[0.5rem] text-white/80">
            SCROLL TO TOP
          </span>
        </div>

        {/* Button */}
        <button
          onClick={typeof window !== "undefined" ? () => window.scrollTo(0, 0) : () => {}}
          className="flex items-center justify-center  border-2 border-slate-200 hover:border-white rounded-full group transition-all duration-300 hover:scale-[0.97] opacity-[0.8] relative  bg-gradient-to-br from-[rgba(67,56,202,0.1)] to-[rgba(190,24,93,0.05)]"
        >
          <div className="h-full w-full rounded-full border-[0.5rem] absolute  group-hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 ease-in-out border-transparent group-hover:border-purple-700 blur-[0.7rem] opacity-[0.05] group-hover:opacity-80 scale-[1.3]"></div>
          <div className="before:h-[120%] before:w-[2rem] before:bg-white before:opacity- before:absolute before:blur-[1.8rem] before:left-[-5rem] delay-75 before:hover:translate-x-[19rem] before:transition-all before:z-[10] before:duration-500 before:rotate-[20deg] relative overflow-hidden h-full w-full p-3 rounded-full">
            <Image
              width={500}
              height={500}
              src="/WhiteArrow.svg"
              className="h-3 w-3 opacity-[0.8] group-hover:opacity-100 duration-500 transition-all ease-in-out  rotate-[-137deg]"
              alt=""
            />
          </div>
        </button>
      </div>

      {/* Socials */}
      <FloatContact />
    </>
  );
};

export default Navbar;
