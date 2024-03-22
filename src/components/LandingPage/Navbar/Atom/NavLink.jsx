import Link from "next/link";
import React from "react";

const NavLink = ({ link = "/", children }) => {
  return (
    <>
      <a
        className="hover:text-slate-300 hover:scale-[0.98] transition-all ease-in-out duration-300"
        href={link}
      >
        {children}
      </a>
    </>
  );
};

export default NavLink;
