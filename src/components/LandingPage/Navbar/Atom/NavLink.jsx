import Link from "next/link";
import React from "react";

const NavLink = ({ link = "/", children }) => {
  return (
    <>
      <a href={link} className="relative group">
        <h1 className="group-hover:text-gray-200 group-hover:scale-[0.98] transition-all ease-in-out z-[10] relative duration-300">
          {children}
        </h1>
      </a>
    </>
  );
};

export default NavLink;
