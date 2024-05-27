"use client";
import React from "react";
import ScrollReveallComponent from "./ScrollReveallComponent";

const Title = ({
  title,
  children,
  color = "text-purple-600",
  className,
  id = "title",
  ref,
}: {title: string; children: React.ReactNode; color?: string; className?: string; id?: string; ref?: any}) => {
  return (
    <ScrollReveallComponent delay={50}>
      <div
        ref={ref}
        id={id}
        className={` ${className} z-[2] relative w-full flex flex-col items-center`}
      >
        <h3 className={` ${color} font-semibold uppercase`}>{title}</h3>
        <h1 className="drop-shadow-xl md:leading-[6rem] text-3xl md:text-7xl mt-6 md:mt-10 mb-16 md:mb-32 flex flex-col text-center font-[700]">
          {children}
        </h1>
      </div>
    </ScrollReveallComponent>
  );
};

export default Title;
