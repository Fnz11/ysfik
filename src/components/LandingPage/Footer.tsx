import React from "react";

const Footer = () => {
  return (
    <div className="w-screen h-[10rem] flex items-end justify-center relative mb-[-0.7rem]">
      {/* BG */}
      <div className="bg-[#a431ca] saturate-[1.5] h-[30rem] absolute w-[22rem] aspect-square rounded-full z-[1] blur-[6rem]  opacity-[0.15] scale-[1.3] pointer-events-none left-[4rem]"></div>
      <div className="bg-[#3c0271] saturate-[1.5]  h-[30rem] absolute w-[32rem] aspect-square rounded-full z-[1] blur-[6rem] right-[5rem] opacity-[0.2] scale-[2.1] pointer-events-none"></div>
      <div className="bg-[#a23eff] saturate-[1.5]  h-[30rem] absolute w-[32rem] aspect-square rounded-full z-[1] blur-[6rem] right-[16rem] opacity-[0.15] scale-[1] pointer-events-none"></div>
      
      <div className="w-screen bg-[rgba(0,0,0,0.1)] backdrop-blur-xl border-t border-[rgba(255,255,255,0.1)] py-10 z-[2] relative flex items-center justify-center">
        <div className="text-white/40 text-center">© 2023 Fikri Nurdiansyah. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
