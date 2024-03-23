import Image from "next/image";
import React from "react";
import Button from "../Button";

const Quotes = () => {
  return (
    <>
      <section className="min-h-screen w-full md:my-[5rem]  flex items-center justify-center">
        <div className="w-screen h-[80vh] bg-white flex relative">
          <Image
            width={500}
            height={500}
            src="/QuoteBG.png"
            className="w-full absolute top-0 scale-y-[0.8] blur-[15rem] h-[80vh] object-cover"
            alt=""
          />
          <Image
            width={500}
            height={500}
            src="/QuoteBG.png"
            className="w-full absolute -bottom-20 opacity-[0.5] blur-[4rem] h-[80vh] object-cover"
            alt=""
          />
          <div className="w-full h-full relative flex overflow-hidden group">
            <Image
              width={500}
              height={500}
              src="/QuoteBG.png"
              className="w-full object-cover group-hover:scale-[1.2] transition-all group-hover:-rotate-1 rotate-1 scale-[1.1] duration-1000 absolute h-[80vh] z-[2]"
              alt=""
            />
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
