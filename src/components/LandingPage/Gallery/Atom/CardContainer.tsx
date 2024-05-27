"use client";
import { RefObject } from "react";
import ScrollReveallComponent from "../../../ScrollReveallComponent";

const CardContainer = ({
  targetRef,
  i,
  span = "col-span-2 row-span-2",
  bg = "bg-gradient-to-bl",
  children,
  className,
}: {targetRef: any; i: number; span?: string; bg?: string; children: any; className?: string}) => {
  return (
    <ScrollReveallComponent
      far={700}
      delay={i * 50}
      className={` ${span} w-full h-full flex items-center justify-center `}
    >
      <div
        ref={(e) => (targetRef.current[i] = e)}
        className={`w-full h-full from-indigo-800 via-transparent to-pink-800 p-[0.2rem] opacity-[0.8] hover:opacity-100 transition-all duration-1000 rounded-[1rem] relative overflow-hidden ${bg} `}
      >
        <div
          className="border-inherit h-full w-full opacity-0 group-hover:opacity-100 duration-500 transition-all absolute left-0 top-0 z-[3]"
          style={{
            background: `radial-gradient(
        50rem circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
        rgba(150, 10, 255, 0.7),
        transparent 40%
      )`,
          }}
        ></div>
        <div
          className={` w-full h-full rounded-[1rem] bg-zinc-900 z-[10] relative`}
        >
          <div
            className="border-inherit h-full w-full opacity-0 group-hover:opacity-100 duration-500 transition-all absolute left-0 top-0 z-[3]"
            style={{
              background: `radial-gradient(
          60rem circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
          rgba(150, 100, 255, 0.1),
          transparent 40%
        )`,
            }}
          ></div>
          <div className={`w-full h-full absolute ${className} `}>{children}</div>
        </div>
      </div>
    </ScrollReveallComponent>
  );
};

export default CardContainer;
