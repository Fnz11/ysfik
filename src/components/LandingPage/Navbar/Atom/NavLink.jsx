import Link from "next/link";
import React from "react";

const NavLink = ({ link = "/", children }) => {
  return (
    <>
      <a href={link} className="relative group">
        <h1 className="group-hover:text-gray-200  h-7 overflow-hidden  z-[10] relative">
          <div className="translate-y-0 flex flex-col ease-in-out transition-all duration-200 h-full group-hover:translate-y-[-1.8rem]">
            <span>{children}</span>
            <span>{children}</span>
          </div>
        </h1>
      </a>
    </>
  );
};

export default NavLink;
