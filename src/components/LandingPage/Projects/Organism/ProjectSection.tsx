"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProjectSection = ({
  data,
}: {
  projectNumberShow?: number;
  data: any;
}) => {
  // ==================== STATE ====================

  // Translate state
  const [translateValue, setTranslateValue] = useState(5);

  // Is Mobile state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Project Show State
  const [projectNumberShow, setProjectNumberShow] = useState(1);

  // ==================== HANDLE ====================

  // Project Show Handler
  const handleNextShow = () => {
    if (projectNumberShow < 3) {
      setProjectNumberShow((prev) => prev + 1);
    } else {
      setProjectNumberShow(1);
    }
  };
  const handlePrevShow = () => {
    if (projectNumberShow > 1) {
      setProjectNumberShow((prev) => prev - 1);
    } else {
      setProjectNumberShow(3);
    }
  };

  //Handle Translate
  function getTranslateValue(number: number, isMobile: boolean) {
    const baseTranslate = isMobile ? 20.1 : 6;
    const increment = isMobile ? 20 : 19;

    return baseTranslate + (number - 1) * increment;
  }
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Untuk set initial value

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    setTranslateValue(getTranslateValue(projectNumberShow, isMobile));
  }, [projectNumberShow, isMobile]);

  return (
    <div className="flex max-md:flex-col w-full h-full justify-between ">
      <div className="w-full h-full relative rounded-[2rem] aspect-square p-[0.3rem]">
        <div
          style={{
            transform: `translateX(-${translateValue}%)`,
          }}
          className={`flex items-center justify-center w-[500%] md:w-[200%] h-full transition-all ease-in-out duration-500`}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={` md:w-[19%] relative border border-white rounded-[2.5rem] p-5 ${
                i - 1 == projectNumberShow &&
                "max-md:opacity-0 md:scale-x-[0.8] md:skew-y-[10deg]  md:mt-[6rem]"
              } ${
                i + 1 == projectNumberShow &&
                "max-md:opacity-0 md:scale-x-[0.8]  md:skew-y-[-10deg]  md:mt-[6rem]"
              } ${
                !(
                  i == projectNumberShow ||
                  i - 1 == projectNumberShow ||
                  i + 1 == projectNumberShow
                ) && "scale-0 md:scale-x-0"
              } transition-all ease-in-out duration-500 `}
            >
              <Image
                width={500}
                height={500}
                src={data.image}
                className={`w-full h-full  absolute top-0 left-0 blur-[2rem] opacity-[0.5] transition-all duration-700 ease-in-out z-[0] aspect-square object-cover rounded-[1.8rem] `}
                alt=""
              />
              <div className="w-full h-full overflow-hidden relative rounded-[1.9rem]">
                <Image
                  width={500}
                  height={500}
                  src={data.image}
                  className="w-full z-[2] relative opacity-[0.8] transition-all duration-700 ease-in-out saturate-60 aspect-square object-cover "
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
        {/* RIGHT */}
        <div className="flex items-center justify-center gap-10 mt-[-14.5rem]  md:mt-[-6rem]">
          <button
            onClick={handlePrevShow}
            className="flex items-center justify-center  border-2 border-slate-200 hover:border-white rounded-full group transition-all duration-300 hover:scale-[0.97] opacity-[0.8] relative  bg-gradient-to-br from-[rgba(67,56,202,0.1)] to-[rgba(190,24,93,0.05)]"
          >
            <div className="h-full w-full rounded-full border-[0.5rem] absolute  group-hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 ease-in-out border-transparent group-hover:border-purple-700 blur-[0.7rem] opacity-[0.05] group-hover:opacity-80 scale-[1.3]"></div>
            <div className="before:h-[120%] before:w-[2rem] before:bg-white before:opacity- before:absolute before:blur-[1.8rem] before:left-[-5rem] delay-75 before:hover:translate-x-[19rem] before:transition-all before:z-[10] before:duration-500 before:rotate-[20deg] relative overflow-hidden h-full w-full p-5 md:p-7 rounded-full">
              <Image
                width={500}
                height={500}
                src="/WhiteArrow.svg"
                className="h-5 md:h-10 w-5 md:w-10 opacity-[0.8] group-hover:opacity-100 duration-500 transition-all ease-in-out  rotate-[135deg]"
                alt=""
              />
            </div>
          </button>
          <button
            onClick={handleNextShow}
            className="flex items-center justify-center  border-2 border-slate-200 hover:border-white rounded-full group transition-all duration-300 hover:scale-[0.97] opacity-[0.8] relative  bg-gradient-to-br from-[rgba(67,56,202,0.1)] to-[rgba(190,24,93,0.05)]"
          >
            <div className="h-full w-full rounded-full border-[0.5rem] absolute  group-hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 ease-in-out border-transparent group-hover:border-purple-700 blur-[0.7rem] opacity-[0.05] group-hover:opacity-80 scale-[1.3]"></div>
            <div className="before:h-[120%] before:w-[2rem] before:bg-white before:opacity- before:absolute before:blur-[1.8rem] before:left-[-5rem] delay-75 before:hover:translate-x-[19rem] before:transition-all before:z-[10] before:duration-500 before:rotate-[20deg] relative overflow-hidden h-full w-full p-5 md:p-7 rounded-full">
              <Image
                width={500}
                height={500}
                src="/WhiteArrow.svg"
                className="h-5 md:h-10 w-5 md:w-10 opacity-[0.8] group-hover:opacity-100 duration-500 transition-all ease-in-out  rotate-[-45deg]"
                alt=""
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
