"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../../Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Sidebar from "@/components/Sidebar/Sidebar";
import { NavLinks, landingLinks, socialLinks } from "@/const/linkData";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import FloatContact from "@/components/FloatContact/FloatContact";
import NavLink from "@/components/GlobalNavbar/Atom/NavLink";
const Navbar = () => {
  // APPEAR ANIMATION
  useGSAP(() => {
    gsap.fromTo(
      "#navbar",
      {
        y: "-18rem",
        ease: "back.inOut",
      },
      {
        y: 0,
        ease: "back.inOut",
        duration: 3.5,
      }
    );
  }, []);

  // IS SCROLL DOWN
  const [isScrollDown, setIsScrollDown] = useState(false);

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
          className={`translate-[-18rem] flex z-[2] justify-between h-full relative p-5 md:px-10 md:py-4 rounded-[2rem] mx-auto  transition-all duration-1000 ease-in-out`}
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
            {NavLinks.map((item, i) => (
              <NavLink key={i} link={item.link}>
                {item.text}
              </NavLink>
            ))}
          </div>

          {/* right */}
          <div className="w-[10rem]" />

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
      </nav>

      {/* SIDEBAR */}
      <Sidebar
        isShow={isOpenSidebar}
        handleOpen={() => setIsOpenSidebar((prev) => !prev)}
        isLanding={false}
      />

      {/* Socials */}
      <FloatContact />
    </>
  );
};

export default Navbar;
