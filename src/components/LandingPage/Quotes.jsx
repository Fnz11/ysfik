import Image from "next/image";
import React from "react";
import Button from "../Button";

const Quotes = () => {
  return (
    <>
      <section className="min-h-screen w-full md:my-[5rem]  flex items-center justify-center">
        <div className="w-screen h-[80vh] bg-white group flex relative">
          <div className="scale-[0.9] opacity-[0.8] group-hover:opacity-[1] group-hover:scale-[0.95] transition-all duration-700 ease-in-out h-full w-full absolute">
            <Image
              width={500}
              height={500}
              src="/QuoteBG.png"
              className="w-full absolute top-0 scale-y-[0.8] opacity-[0.8] blur-[15rem] h-[80vh] object-cover"
              alt=""
            />
            <Image
              width={500}
              height={500}
              src="/QuoteBG.png"
              className="w-full absolute -bottom-20 opacity-[0.5] blur-[5rem] h-[80vh] object-cover"
              alt=""
            />
          </div>

          <div className="w-full h-full relative flex overflow-hidden ">
            <Image
              width={500}
              height={500}
              src="/QuoteBG.png"
              className="w-full object-cover group-hover:scale-[1.2] transition-all group-hover:-rotate-1 rotate-1 scale-[1.1] duration-1000 absolute h-[80vh] z-[2]"
              alt=""
            />
            <div className="absolute z-[3] translate-x-[-5rem] translate-y-[10rem] rotate-[-40deg] group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-[2000ms] top-[55%]  left-[20%] ">
              <div className="relative w-full h-full floating-element">
                <Image
                  width={500}
                  height={500}
                  src="/Rocket.png"
                  className="w-14 opacity-1 blur-[0.02rem] scale-x-[-1] aspect-square "
                  alt="Rocket"
                />
                <div className="scale-[1.5] fire-element absolute top-[2.3rem] left-[-12.5rem]">
                  <div className="opacity-[0.4] scale-y-[0.5]  rotate-3 bg-gradient-to-bl from-pink-500 to-[80%] blur-[0.9rem] to-transparent h-[10rem] w-[10rem]"></div>
                </div>
                <div className="opacity-[0.2]  bg-gradient-to-bl from-purple-500  absolute left-[-7.5rem] top-[1rem] scale-[1.2]  blur-[1rem] to-transparent h-[10rem] w-[10rem]"></div>
              </div>
            </div>
            <div className="w-full h-full bg-[rgba(27,5,27,0.6)] backdrop-blur-md group-hover:backdrop-blur-0 transition-all duration-300 z-[2] absolute"></div>
            <div className="z-[4] w-[80%] mx-auto h-full flex flex-col items-center justify-center">
              <h1 className="text-3xl md:text-7xl md:leading-[5rem] mb-10 font-bold drop-shadow-xl text-center">
                {"Every accomplishment starts with the decision to try."}
              </h1>
              <h4 className="font-bold uppercase">- Tom Bradley -</h4>
              <div className="mt-10">
                <Button arrow bordered>
                  <a href="#features">Get In Touch</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quotes;
