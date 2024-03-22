import Image from "next/image";
import React from "react";

const Button = ({ arrow, children, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className=" flex items-center justify-center w-fit h-fit focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800  rounded-lg group bg-gradient-to-b from-violet-600 to-violet-500 hover:scale-[0.98] transition-all ease-in-out duration-300"
      >
        <div
          type="button"
          className="text-white bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500  hover:via-purple-400 hover:to-purple-500  rounded-lg px-10 py-2.5 text-center m-[0.1rem] flex items-center justify-center gap-3  transition-all ease-in-out duration-300 text-lg font-semibold shadow-xl shadow-[rgba(177,98,255,0.3)] drop-shadow-2xl"
        >
          {children}
          {arrow && (
            <Image
              width={500}
              height={500}
              src="/WhiteArrow.svg"
              className="h-3 w-3 group-hover:translate-x-[0.2rem] group-hover:-translate-y-[0.1rem] duration-200 transition-all ease-in-out  -rotate-90"
              alt=""
            />
          )}
        </div>
      </button>
    </>
  );
};

export default Button;
