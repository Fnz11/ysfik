"use client";
import ColorfulTextBG from "@/components/ColorfulTextBG";
import Link from "next/link";
import React, { useState } from "react";

const NavLink = ({
  link = "/",
  children,
}: {
  link?: string;
  children: React.ReactNode;
}) => {
  // Hover state
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <a
        href={link}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group"
      >
        <h1 className="transition-all duration-200 text-white/[0.8]  font-thin h-7 overflow-hidden  z-[10] relative uppercase tracking-widest italic">
          <span className="relative z-[2] font-light flex items-center justify-center">
            <div className="size-[80%] bg-purple-600 blur-[1rem] absolute rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400" />
            <span className="relative z-[2] group-hover:scale-[0.99]">{children}</span>
          </span>
          {/* <div className="w-full translate-x-[-100%] group-hover:translate-x-0 h-[0.1rem] absolute bottom-0 bg-purple-600 blur-[0.01rem] transition-all duration-200" /> */}
        </h1>
      </a>
    </>
  );
};

export default NavLink;
