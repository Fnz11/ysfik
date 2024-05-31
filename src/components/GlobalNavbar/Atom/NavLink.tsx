"use client";
import ColorfulTextBG from "@/components/ColorfulTextBG";
import gsap from "gsap";
import Link from "next/link";
import React, { useState } from "react";

const NavLink = ({
  link = "/",
  children,
}: {
  link?: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <a
        onMouseEnter={() =>
          gsap.fromTo(
            "#navlink-light",
            { x: "0" },
            { x: "12rem", duration: 0.5, delay: 0.1, ease: "power1.inOut" }
          )
        }
        href={link}
        className="relative group"
      >
        <h1 className="transition-all duration-200 text-white/[0.8]  font-thin h-7 overflow-hidden  z-[10] relative uppercase tracking-widest italic group">
          <div
            id="navlink-light"
            className="h-[150%] w-[1rem] rotate-[20deg]  bg-white absolute  -left-10 blur-[0.5rem] invisible group-hover:visible z-[-1]"
          ></div>
          <span className="relative z-[2] font-light flex items-center justify-center">
            <div className="h-[30%] w-[90%] bg-purple-600 scale-[1.1] blur-[0.5rem] absolute rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400" />
            <span className="relative z-[2] group-hover:scale-[0.99]">
              {children}
            </span>
          </span>
          {/* <div className="w-full translate-x-[-100%] group-hover:translate-x-0 h-[0.1rem] absolute bottom-0 bg-purple-600 blur-[0.01rem] transition-all duration-200" /> */}
        </h1>
      </a>
    </>
  );
};

export default NavLink;
