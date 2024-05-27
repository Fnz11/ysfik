import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const Button = ({
  arrow,
  children,
  onClick,
  className,
  bordered,
  square: isSquare,
}: {
  arrow?: boolean;
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  bordered?: boolean;
  square?: string;
}) => {
  return (
    <>
      <button
        onMouseEnter={() =>
          gsap.fromTo(
            "#btn-light",
            { x: "0" },
            { x: "17rem", duration: 0.5, ease: "circ.inOut" }
          )
        }
        onClick={onClick}
        className={twMerge(
          `${
            bordered && "scale-[1.1]"
          } flex items-center justify-center w-fit h-fit  rounded-2xl group `,
          className
        )}
      >
        <div
          className={` ${
            bordered && "py-2 px-3 border-2 "
          } group-hover:scale-[0.98] scale-[1.02] transition-all ease-in-out duration-700 rounded-3xl group-hover:border-[rgba(108,100,235,0.5)] border-[rgba(108,100,235,0.3)]`}
        >
          <div
            className={`text-white bg-gradient-to-r from-indigo-600  to-pink-600 group-hover:from-indigo-500 group-hover:to-pink-500  rounded-2xl ${
              bordered ? "px-12" : "px-10"
            } ${isSquare} py-2.5 text-center m-[0.1rem] flex items-center justify-center gap-3 group-hover:scale-[1.02] transition-all ease-in-out duration-500 text-lg font-semibold shadow-lg group-hover:shadow-xl group-hover:shadow-[rgba(177,98,255,0.3)] shadow-[rgba(177,98,255,0.3)] relative overflow-hidden drop-shadow-2xl`}
          >
            <div
              id="btn-light"
              className="h-[150%] w-[1rem] rotate-[20deg]  bg-white absolute  -left-10 blur-[0.9rem] invisible group-hover:visible z-[-1]"
            ></div>
            <div className="absolute w-full h-full left-0 top-0 z-[-1] floating-element">
              <Image
                width={500}
                height={500}
                src="/Nebula.png"
                className="w-full  z-[-1] opacity-[0.35] group-hover:scale-[1.6] group-hover:rotate-[40deg] transition-all duration-[2000ms] rotate-[20deg] scale-[1.3] object-cover  blur-[0rem]"
                alt=""
              />
            </div>
            {children}
            {arrow && (
              <Image
                width={500}
                height={500}
                src="/WhiteArrow.svg"
                className="h-3 w-3 group-hover:translate-x-[0.2rem] group-hover:-translate-y-[0.1rem] duration-500 transition-all ease-in-out  -rotate-90"
                alt=""
              />
            )}
          </div>
        </div>
      </button>
    </>
  );
};

export default Button;
