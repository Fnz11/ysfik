"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../../Button";
import NavLink from "./Atom/NavLink";
const Navbar = () => {
  // IS SCROLL DOWN
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [isHiddenNav, setIsHiddenNav] = useState(false);
  const [isClickedShow, setIsClickedShow] = useState(false);

  // ON SCROLL
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }
      if (window.scrollY <= 2500 || window.scrollY >= 3700) {
        setIsClickedShow(false);
      }

      if (window.scrollY >= 2500 && window.scrollY <= 3700 && !isClickedShow) {
        setIsHiddenNav(true);
      } else {
        setIsHiddenNav(false);
      }

      console.log(isHiddenNav, isClickedShow);
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

  const linkData = [
    {
      link: "#home",
      text: "Home",
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
      link: "#features",
      text: "Features",
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
          className={`flex z-[2] justify-between backdrop-blur-[3rem] h-full ${
            isHiddenNav && "translate-y-[-10rem] scale-[1.2]"
          } relative ${
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
              type="button"
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
    </>
  );
};

export default Navbar;
