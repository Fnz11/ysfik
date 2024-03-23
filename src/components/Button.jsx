import Image from "next/image";
import React from "react";

const Button = ({ arrow, children, onClick, className, bordered }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={` ${className} ${bordered && "scale-[1.1]"} flex items-center justify-center w-fit h-fit  rounded-2xl group `}
      >
        <div
          className={` ${
            bordered && "py-2 px-3 border-2 "
          } group-hover:scale-[0.98] scale-[1.02] transition-all ease-in-out duration-700 rounded-3xl group-hover:border-[rgba(108,100,235,0.5)] border-[rgba(108,100,235,0.3)]`}
        >
          <div
            type="button"
            className={`text-white bg-gradient-to-r from-indigo-600  to-pink-600 group-hover:from-indigo-500 group-hover:to-pink-500  rounded-2xl ${bordered ? "px-12" : "px-10"}  py-2.5 text-center m-[0.1rem] flex items-center justify-center gap-3 group-hover:scale-[1.02] transition-all ease-in-out duration-500 text-lg font-semibold shadow-lg group-hover:shadow-xl group-hover:shadow-[rgba(177,98,255,0.3)] shadow-[rgba(177,98,255,0.3)] drop-shadow-2xl`}
          >
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
