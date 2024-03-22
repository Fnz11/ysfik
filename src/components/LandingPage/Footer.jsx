import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="grid min-h-[15rem] gap-2 md:gap-5 grid-cols-1 md:grid-cols-4 mt-32 md:px-44 shadow m-4">
        <div className="w-full h-full flex z flex-col items-center text-center gap-2">
          <span className="flex items-center text-start justify-center gap-2 font-bold text-lg leading-5">
            <Image
              width={500}
              height={500}
              src="/Favicon.png"
              className="h-12"
              alt=""
            />
            <i>
              REAL
              <br />
              ESTATE
            </i>
          </span>
          <h2 className="font-bold">PT. Real Estate Indonesia</h2>
          <p>
            Gedung District 8, Treasury Tower Lantai 6, Unit F, SCBD Lot 28,
            Jakarta Selatan 12190​
          </p>
          <h4>Copyright © 2023 All rights reserved</h4>
        </div>
        <div className="w-full h-full flex z flex-col items-center text-center gap-2 pt-[3.5rem]">
          <h2 className="font-bold">Contact Us</h2>
          <h4>tanya@realestateindonesia.com</h4>
          <h4>+62 813-8995-0106 (Wa Only)</h4>
        </div>
        <div className="w-full h-full flex z flex-col items-center text-center gap-2 pt-[3.5rem]">
          <h2 className="font-bold">Others</h2>
          <h4>Privacy & Policy</h4>
          <h4>Terms & Condition</h4>
        </div>
        <div className="w-full h-full flex z flex-col items-center text-center gap-2 pt-[3.5rem]">
          <h2 className="font-bold">Sites</h2>
          <a
            href="#home"
            className="hover:text-slate-300 hover:scale-[0.98] transition-all ease-in-out duration-300"
          >
            Home
          </a>
          <a
            href="#list"
            className="hover:text-slate-300 hover:scale-[0.98] transition-all ease-in-out duration-300"
          >
            List Product
          </a>
          <a
            href="#features"
            className="hover:text-slate-300 hover:scale-[0.98] transition-all ease-in-out duration-300"
          >
            Features
          </a>
          <a
            href="#testimonial"
            className="hover:text-slate-300 hover:scale-[0.98] transition-all ease-in-out duration-300"
          >
            Testimonial
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
