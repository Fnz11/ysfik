"use client";
import { socialLinks } from "@/const/linkData";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const FloatContact = () => {
  const [isHoverSocial, setIsHoverSocial] = useState(false);

  return (
    <div className="fixed italic aspect-square bottom-8 left-8 z-[20] flex items-center justify-end flex-col gap-2 max-md:hidden">
      <div
        className={`flex items-center justify-start mt-2 relative overflow-hidden ${
          !isHoverSocial ? "h-[15rem]" : "h-0"
        } w-5 transition-all duration-500 ease-in-out pointer-events-none truncate [writing-mode:vertical-lr]`}
      >
        <span className="absolute z-2 text-2xl tracking-[0.5rem] text-white/60">
          MY CONTACT
        </span>
        <span className="absolute blur-[0.2rem] opacity-[0.4] text-2xl tracking-[0.5rem] text-white/80">
          MY CONTACT
        </span>
      </div>
      {/* Instagram */}
      <div
        onMouseEnter={() => setIsHoverSocial(true)}
        onMouseLeave={() => setIsHoverSocial(false)}
        className="group flex flex-col gap-2"
      >
        <div className="flex items-center justify-start mt-2 relative overflow-hidden group-hover:h-[13rem] h-0 transition-all duration-500 ease-in-out pointer-events-none truncate [writing-mode:vertical-lr]">
          <span className="absolute z-2 text-2xl tracking-[0.5rem] text-white/60">
            INSTAGRAM
          </span>
          <span className="absolute blur-[0.2rem] opacity-[0.4] text-2xl tracking-[0.5rem] text-white/80">
            INSTAGRAM
          </span>
        </div>
        <Link
          target="_blank"
          href={socialLinks.instagram}
          className="flex items-center justify-center  border-2 border-slate-200 hover:border-white rounded-full group transition-all duration-300 hover:scale-[0.97] relative  bg-gradient-to-br from-[rgba(67,56,202,0.1)] to-[rgba(190,24,93,0.05)] opacity-[0.7]"
        >
          <div className="h-full w-full rounded-full border-[0.5rem] absolute  group-hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 ease-in-out border-transparent group-hover:border-purple-700 blur-[0.7rem] opacity-[0.05] group-hover:opacity-80 scale-[1.3]"></div>
          <div className="before:h-[120%] before:w-[2rem] before:bg-white before:opacity- before:absolute before:blur-[1.8rem] before:left-[-5rem] delay-75 before:hover:translate-x-[19rem] before:transition-all before:z-[10] before:duration-500 before:rotate-[20deg] relative overflow-hidden h-full w-full p-2 rounded-full">
            <FaInstagram className="h-7 w-7 text-white text-2xl" />
          </div>
        </Link>
      </div>

      {/* Whatsapp */}
      <div
        onMouseEnter={() => setIsHoverSocial(true)}
        onMouseLeave={() => setIsHoverSocial(false)}
        className="group flex flex-col gap-2"
      >
        <div className="flex items-center justify-start mt-2 relative overflow-hidden group-hover:h-[12rem] h-0 transition-all duration-500 ease-in-out pointer-events-none truncate [writing-mode:vertical-lr]">
          <span className="absolute z-2 text-2xl tracking-[0.5rem] text-white/60">
            WHATSAPP
          </span>
          <span className="absolute blur-[0.2rem] opacity-[0.4] text-2xl tracking-[0.5rem] text-white/80">
            WHATSAPP
          </span>
        </div>
        <Link
          target="_blank"
          href={socialLinks.whatsapp}
          className="flex items-center justify-center  border-2 border-slate-200 hover:border-white rounded-full group transition-all duration-300 hover:scale-[0.97] relative  bg-gradient-to-br from-[rgba(67,56,202,0.1)] to-[rgba(190,24,93,0.05)] opacity-[0.7]"
        >
          <div className="h-full w-full rounded-full border-[0.5rem] absolute  group-hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 ease-in-out border-transparent group-hover:border-purple-700 blur-[0.7rem] opacity-[0.05] group-hover:opacity-80 scale-[1.3]"></div>
          <div className="before:h-[120%] before:w-[2rem] before:bg-white before:opacity- before:absolute before:blur-[1.8rem] before:left-[-5rem] delay-75 before:hover:translate-x-[19rem] before:transition-all before:z-[10] before:duration-500 before:rotate-[20deg] relative overflow-hidden h-full w-full p-2 rounded-full">
            <FaWhatsapp className="h-7 w-7 text-white text-2xl" />
          </div>
        </Link>
      </div>

      {/* Email */}
      <div
        onMouseEnter={() => setIsHoverSocial(true)}
        onMouseLeave={() => setIsHoverSocial(false)}
        className="group flex flex-col gap-2"
      >
        <div className="flex items-center justify-start mt-2 relative overflow-hidden group-hover:h-[7rem] h-0 transition-all duration-500 ease-in-out pointer-events-none truncate [writing-mode:vertical-lr]">
          <span className="absolute z-2 text-2xl tracking-[0.5rem] text-white/60">
            EMAIL
          </span>
          <span className="absolute blur-[0.2rem] opacity-[0.4] text-2xl tracking-[0.5rem] text-white/80">
            EMAIL
          </span>
        </div>

        <Link
          target="_blank"
          href={socialLinks.email}
          className="flex items-center justify-center  border-2 border-slate-200 hover:border-white rounded-full group transition-all duration-300 hover:scale-[0.97] relative  bg-gradient-to-br from-[rgba(67,56,202,0.1)] to-[rgba(190,24,93,0.05)] opacity-[0.7]"
        >
          <div className="h-full w-full rounded-full border-[0.5rem] absolute  group-hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 ease-in-out border-transparent group-hover:border-purple-700 blur-[0.7rem] opacity-[0.05] group-hover:opacity-80 scale-[1.3]"></div>
          <div className="before:h-[120%] before:w-[2rem] before:bg-white before:opacity- before:absolute before:blur-[1.8rem] before:left-[-5rem] delay-75 before:hover:translate-x-[19rem] before:transition-all before:z-[10] before:duration-500 before:rotate-[20deg] relative overflow-hidden h-full w-full p-2 rounded-full">
            <MdOutlineEmail className="h-7 w-7 text-white text-2xl" />
          </div>
        </Link>
      </div>

      {/* Github */}
      <div
        onMouseEnter={() => setIsHoverSocial(true)}
        onMouseLeave={() => setIsHoverSocial(false)}
        className="group flex flex-col gap-2"
      >
        <div className="flex items-center justify-start mt-2 relative overflow-hidden group-hover:h-[8.5rem] h-0 transition-all duration-500 ease-in-out pointer-events-none truncate [writing-mode:vertical-lr]">
          <span className="absolute z-2 text-2xl tracking-[0.5rem] text-white/60">
            GITHUB
          </span>
          <span className="absolute blur-[0.2rem] opacity-[0.4] text-2xl tracking-[0.5rem] text-white/80">
            GITHUB
          </span>
        </div>

        <Link
          target="_blank"
          href={socialLinks.github}
          className="flex items-center justify-center  border-2 border-slate-200 hover:border-white rounded-full group transition-all duration-300 hover:scale-[0.97] relative  bg-gradient-to-br from-[rgba(67,56,202,0.1)] to-[rgba(190,24,93,0.05)] opacity-[0.7]"
        >
          <div className="h-full w-full rounded-full border-[0.5rem] absolute  group-hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 ease-in-out border-transparent group-hover:border-purple-700 blur-[0.7rem] opacity-[0.05] group-hover:opacity-80 scale-[1.3]"></div>
          <div className="before:h-[120%] before:w-[2rem] before:bg-white before:opacity- before:absolute before:blur-[1.8rem] before:left-[-5rem] delay-75 before:hover:translate-x-[19rem] before:transition-all before:z-[10] before:duration-500 before:rotate-[20deg] relative overflow-hidden h-full w-full p-2 rounded-full">
            <FaGithub className="h-7 w-7 text-white text-2xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FloatContact;
