"use client";
import { linkData } from "@/const/linkData";
import Image from "next/image";
import React from "react";
import Button from "../Button";
import NavLink from "../LandingPage/Navbar/Atom/NavLink";

const Sidebar = ({
  isShow,
  handleOpen,
}: {
  isShow: boolean;
  handleOpen: () => void;
}) => {
  return (
    <>
      <div
        className={`w-screen h-screen fixed top-0 left-0 z-50 ${
          !isShow && "pointer-events-none"
        } `}
      >
        <div className="size-full relative">
          {/* Button */}
          <button
            onClick={handleOpen}
            className={`h-8 my-auto aspect-square right-8 top-8 z-[20] md:hidden absolute ${
              !isShow && "opacity-0"
            } transition-all duration-300 ease-in-out `}
          >
            <div className="size-full relative flex flex-col justify-center items-center">
              <div
                className={`w-full top-0 h-[0.1rem] bg-white rounded-full ${
                  isShow ? "scale-x-[1.3] rotate-[45deg] mt-[0.95rem]" : ""
                }  absolute transition-all ease-in-out duration-200`}
              />
              <div
                className={`w-full h-[0.1rem] bg-white rounded-full ${
                  isShow ? "scale-x-0" : ""
                } transition-all ease-in-out duration-200`}
              />
              <div
                className={`w-full bottom-0 h-[0.1rem] bg-white rounded-full absolute transition-all ease-in-out duration-200 ${
                  isShow ? "scale-x-[1.3] rotate-[-45deg] mb-[0.95rem]" : ""
                } `}
              />
              <div className="absolute size-full blur-[0.15rem]">
                <div
                  className={`w-full top-0 h-[0.1rem] bg-white rounded-full ${
                    isShow ? "scale-x-[1.3] rotate-[45deg] mt-[0.95rem]" : ""
                  }  absolute transition-all ease-in-out duration-200`}
                />
                <div
                  className={`w-full h-[0.1rem] bg-white  rounded-full ${
                    isShow ? "scale-x-0" : ""
                  } transition-all ease-in-out duration-200`}
                />
                <div
                  className={`w-full bottom-0 h-[0.1rem] bg-white rounded-full absolute transition-all ease-in-out duration-200 ${
                    isShow ? "scale-x-[1.3] rotate-[-45deg] mb-[0.95rem]" : ""
                  } `}
                />
              </div>
            </div>
          </button>

          {/* Background */}
          <div
            onClick={handleOpen}
            className={`bg-black/40 backdrop-blur-xl w-screen h-screen ${
              !isShow && "translate-x-[100%]"
            } transition-all ease-in-out duration-[0.4s] absolute border-l border-white/10`}
          />

          {/* Content */}
          <div
            className={`bg-black/90  w-[70%] h-screen ${
              !isShow ? "translate-x-[-100%]" : ""
            } transition-all ease-in-out duration-[0.6s] z-[2] p-10 relative border-r border-white/10 flex flex-col justify-between items-center pb-[35vh]`}
          >
            {/* Logo */}
            <span className="flex items-center z-[2] justify-center gap-1 font-bold text-lg leading-5">
              <Image
                width={500}
                height={500}
                src="/Favicon.svg"
                className="h-14 w-14"
                alt=""
              />
              <i className=" text-4xl">YSFIK</i>
            </span>

            {/* Links */}
            <div className="z-[2] flex flex-col items-center font-semibold gap-10 ">
              {linkData.map((item, i) => (
                <button
                  key={i}
                  onClick={() => {
                    handleOpen();
                    if (typeof window !== "undefined") {
                      window.location.href = item.link;
                    }
                  }}
                >
                  <span className="pointer-events-none">
                    <NavLink>{item.text}</NavLink>
                  </span>
                </button>
              ))}
            </div>

            {/* Button */}
            <div className="flex z-[2] items-center justify-center gap-3 mt-2">
              <Button onClick={() => {}} arrow={true}>
                Let{"'"}s Talk
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
