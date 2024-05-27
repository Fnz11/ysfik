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
        <h1 className="group-hover:scale-[0.95] transition-all duration-200  font-thin h-7 overflow-hidden  z-[10] relative">
          <ColorfulTextBG position="left-0 bottom-[0%]" hidden={!isHovered}>
            <span>{children}</span>
          </ColorfulTextBG>
        </h1>
      </a>
    </>
  );
};

export default NavLink;
