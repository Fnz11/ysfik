"use client";
import { useRef, useState } from "react";

const Gallery = () => {
  const targetRef = useRef([]);

  const handleOnMouseMove = (e) => {
    for (let i = 0; i < targetRef.current.length; i++) {
      const rect = targetRef.current[i].getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      //   set delay
      console.log(x, y);
      setTimeout(() => {
        targetRef.current[i].style.setProperty("--mouse-x", `${x}px`);
        targetRef.current[i].style.setProperty("--mouse-y", `${y}px`);
      }, 25);
    }
  };
  // ed
  return (
    <>
      <div
        onMouseMove={handleOnMouseMove}
        className="h-[170vh] w-[100vw] mt-[10rem] px-20"
      >
        <div className="w-full h-full  grid gap-5 grid-cols-8">
          {/* 1 */}
          <div
            ref={(e) => (targetRef.current[0] = e)}
            className="md:col-span-5 col-span-1 row-span-3   rounded-[1rem] relative "
          >
            {/* BORDER */}
            <div className="bg-gradient-to-br from-indigo-700 via-transparent to-pink-700 opacity-[0.5] absolute w-full overflow-hidden h-full rounded-[1rem]">
              <div className="w-full h-full relative">
                <div style={{left}} className={`z-[2] bg-white h-[10%] aspect-square absolute`}></div>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-[1rem] flex flex-col inset-[1.5px] absolute z-[2]"></div>
          </div>

          {/* 2 */}
          <div
            ref={(e) => (targetRef.current[1] = e)}
            className="col-span-3 row-span-5 bg-zinc-900 rounded-[1rem] relative group overflow-hidden "
          >
            <div
              className="border-inherit h-full w-full opacity-0 group-hover:opacity-100 duration-500 transition-all absolute left-0 top-0 z-[3]"
              style={{
                background: `radial-gradient(
      600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
      rgba(255, 255, 255, 0.4),
      transparent 40%
    )`,
              }}
            ></div>
          </div>

          {/* 3 */}
          <div
            ref={(e) => (targetRef.current[2] = e)}
            className="col-span-3 row-span-2 bg-zinc-900 rounded-[1rem] relative group overflow-hidden "
          >
            <div
              className="border-inherit h-full w-full opacity-0 group-hover:opacity-100 duration-500 transition-all absolute left-0 top-0 z-[3]"
              style={{
                background: `radial-gradient(
      600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
      rgba(255, 255, 255, 0.4),
      transparent 40%
    )`,
              }}
            ></div>
          </div>

          {/* 4 */}
          <div
            ref={(e) => (targetRef.current[3] = e)}
            className="col-span-2 row-span-2 bg-zinc-900 rounded-[1rem] relative group overflow-hidden "
          >
            <div
              className="border-inherit h-full w-full opacity-0 group-hover:opacity-100 duration-500 transition-all absolute left-0 top-0 z-[3]"
              style={{
                background: `radial-gradient(
      600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
      rgba(255, 255, 255, 0.4),
      transparent 40%
    )`,
              }}
            ></div>
          </div>

          {/* 5 */}
          <div
            ref={(e) => (targetRef.current[4] = e)}
            className="col-span-3 row-span-3 bg-zinc-900 rounded-[1rem] relative group overflow-hidden "
          >
            <div
              className="border-inherit h-full w-full opacity-0 group-hover:opacity-100 duration-500 transition-all absolute left-0 top-0 z-[3]"
              style={{
                background: `radial-gradient(
      600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
      rgba(255, 255, 255, 0.4),
      transparent 40%
    )`,
              }}
            ></div>
          </div>

          {/* 6 */}
          <div
            ref={(e) => (targetRef.current[5] = e)}
            className="col-span-3 row-span-3 bg-zinc-900 rounded-[1rem] relative group overflow-hidden "
          >
            <div
              className="border-inherit h-full w-full opacity-0 group-hover:opacity-100 duration-500 transition-all absolute left-0 top-0 z-[3]"
              style={{
                background: `radial-gradient(
      600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
      rgba(255, 255, 255, 0.4),
      transparent 40%
    )`,
              }}
            ></div>
          </div>

          {/* 7 */}
          <div
            ref={(e) => (targetRef.current[6] = e)}
            className="col-span-2 row-span-3 bg-zinc-900 rounded-[1rem] relative group overflow-hidden "
          >
            <div
              className="border-inherit h-full w-full opacity-0 group-hover:opacity-100 duration-500 transition-all absolute left-0 top-0 z-[3]"
              style={{
                background: `radial-gradient(
      600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
      rgba(255, 255, 255, 0.4),
      transparent 40%
    )`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
