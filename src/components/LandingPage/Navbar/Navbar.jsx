"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../../Button";
import NavLink from "./Atom/NavLink";
const Navbar = () => {
  // IS SCROLL DOWN
  const [isScrollDown, setIsScrollDown] = useState(false);

  // ON SCROLL
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const linkData = [
    {
      link: "#home",
      text: "Home",
    },
    {
      link: "#features",
      text: "Features",
    },
    {
      link: "#tech",
      text: "Tech",
    },
    {
      link: "#project",
      text: "Project",
    },
    {
      link: "#contact",
      text: "Contact",
    },
  ];

  return (
    <>
      <nav className={`fixed  w-full z-[10] top-0 left-0 `}>
        <div
          className={`flex justify-between backdrop-blur-[3rem] h-full relative ${
            isScrollDown
              ? " w-[100%] px-16 py-8 shadow-2xl shadow-[rgba(235,0,220,0.15)] bg-[rgba(255,200,255,0.1)] "
              : "w-[90%] px-10 py-8 rounded-[2rem] mt-5 bg-[rgba(255,200,255,0.03)]"
          }  delay-100  mx-auto  transition-all duration-1000 ease-in-out `}
        >
          {/* BG */}
          <div className="bg-purple-600 h-24 w-24 absolute rounded-full left-[-5rem] top-[-4rem] scale-[1.5] blur-[4rem]"></div>
          <div className="bg-blue-600 h-24 w-24 absolute rounded-full right-[-5rem] top-[-4rem] scale-[1.5] blur-[3.8rem]"></div>
          <div className="bg-emerald-700 h-24 w-24 absolute rounded-full left-[3rem] top-[-5rem] scale-[1.2] blur-[5rem]"></div>

          {/* LOGO */}
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

          <div className="max-md:hidden z-[2] flex items-center justify-center font-semibold gap-10 ml-34">
            {linkData.map((item, i) => (
              <NavLink key={i} link={item.link}>
                {item.text}
              </NavLink>
            ))}
          </div>

          <div className="flex z-[2] items-center justify-center gap-3 mt-2">
            <Button arrow={true}>Dashboard</Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
