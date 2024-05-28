import Button from "@/components/Button";
import Title from "@/components/Title";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className=" min-h-[100vh] my-[10rem] w-screen flex flex-col justify-center relative z-[0]">
      <Title title="About Me" color="text-purple-600">
        Hi there!, I am Fikri.
      </Title>

      {/* Light */}
      <div className="bg-[#a431ca] saturate-[1.5] h-[30rem] absolute w-[22rem] aspect-square rounded-full z-[1] top-[10rem] blur-[6rem]  opacity-[0.4] scale-[1.2] pointer-events-none"></div>
      <div className="bg-[#7f35ca] saturate-[1.5]  h-[30rem] absolute w-[32rem] aspect-square rounded-full z-[1] top-[20rem] blur-[8rem] right-[5rem] opacity-[0.5] scale-[2] pointer-events-none"></div>
      <div className="bg-[#3c0271] saturate-[1.5]  h-[30rem] absolute w-[32rem] aspect-square rounded-full z-[1] bottom-[2rem] blur-[6rem] left-[5rem] opacity-[0.6] scale-[2] pointer-events-none"></div>

      <div className="h-[150vh] max-md:flex-col flex  justify-between relative z-[10]">
        {/* Left */}
        <div className="w-full md:w-[50%] h-full relative flex items-center justify-center">
          {/* BG */}
          <Image
            src="/ChainBG.png"
            alt="BG"
            width={1000}
            height={1000}
            className="size-full object-cover shadow-2xl shadow-pink-950/[0.8] rounded-sm brightness-[0.7]"
          />
          {/* ME */}
          <div className="absolute md:right-[-20%] h-[23rem] md:h-[60%] md:w-[65%] p-3 md:p-5 border border-white rounded-xl">
            <Image
              src="/Success.png"
              alt="Me"
              width={500}
              height={500}
              className="size-full object-cover rounded-xl shadow-2xl shadow-pink-950/[0.8]"
            />
          </div>
        </div>
        {/* Right */}
        <div className="w-full md:w-[40%] p-5 md:p-24 flex flex-col gap-7 md:gap-10 justify-center text-white/70 text-lg md:text-xl text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae
            accusamus, aperiam culpa labore inventore et quo cumque autem,
            laudantium, ab maiores magnam non! Optio enim laboriosam iusto modi
            deleniti.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae
            accusamus, aperiam culpa labore inventore et quo cumque autem,
            laudantium, ab maiores magnam non! Optio enim laboriosam iusto modi
            deleniti.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae
            accusamus, aperiam culpa labore inventore et quo cumque autem,
            laudantium, ab maiores magnam non! Optio enim laboriosam iusto modi
            deleniti.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae
            accusamus, aperiam culpa labore inventore et quo cumque autem,
            laudantium, ab maiores magnam non! Optio enim laboriosam iusto modi
            deleniti.
          </p>
          {/* button */}
          <Button onClick={() => {}} arrow bordered className={"btn max-md:mx-auto mt-5"}>
            <a href="#features">Let{"'"}s Talk</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
