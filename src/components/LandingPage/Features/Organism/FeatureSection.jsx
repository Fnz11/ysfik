import Image from "next/image";
import React from "react";

const FeatureSection = ({ index, data, ref }) => {
  return (
    <div
      key={index}
      ref={ref}
      className="flex max-md:flex-col mt-[-2.5rem] group w-full h-fit justify-between"
    >
      <div className="md:w-[46%] h-fit relative rounded-[1rem] bg-gradient-to-br from-indigo-700 via-transparent to-pink-700 aspect-square p-[0.2rem]">
        <Image
          width={500}
          height={500}
          src={data.image}
          className={`w-full absolute blur-[4rem] opacity-[0.3] transition-all duration-700 ease-in-out scale-[1.05] z-[0] aspect-square object-cover rounded-[0.8rem] ${
            index === 1 || index === 0 || index === 2
              ? "group-hover:opacity-[0.2]"
              : "group-hover:opacity-[0.7]"
          } `}
          alt=""
        />
        <div className="h-full bg-gradient-to-br from-indigo-700 via-transparent to-pink-700 aspect-square absolute  transition-all duration-700 ease-in-out opacity-[0.3] group-hover:opacity-[0.5] scale-[1.05] blur-[2rem]"></div>
        <div className="w-full h-full overflow-hidden rounded-[0.9rem]">
          <Image
            width={500}
            height={500}
            src={data.image}
            className="w-full z-[2] relative opacity-[0.8] group-hover:scale-100 transition-all duration-700 ease-in-out scale-[1.1] saturate-60 aspect-square object-cover "
            alt=""
          />
        </div>
      </div>
      <div className="max-md:hidden h-[80vh] w-[0.2rem] bg-gray-800 rounded-full relative flex justify-center">
        <div className="w-[1.8rem] aspect-square bg-sky-900 transition-all duration-700 ease-in-out md:group-hover:bg-sky-500 z-[5] flex items-center justify-center rounded-full absolute">
          <Image
            width={500}
            height={500}
            src="/Check.svg"
            className="w-[60%]"
            alt=""
          />
        </div>
      </div>
      <div className="md:w-[46%] relative p-[0.2rem] md:opacity-[0.8] group-hover:opacity-100 duration-700 transition-all ease-in-out md:scale-[0.95] group-hover:scale-100">
        <h1 className="text-3xl whitespace-nowrap max-md:mt-5 max-md:text-center md:text-5xl mb-10 font-bold drop-shadow-xl">
          {data.title}
          <span className="ml-3 bg-clip-text text-transparent  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            {data.titleAccent}
          </span>
        </h1>
        <p className="text-justify text-xl mb-5 opacity-90">
          {data.description1}
        </p>
        <p className="text-justify text-xl opacity-90 max-md:hidden">
          {data.description2}
        </p>
      </div>
    </div>
  );
};

export default FeatureSection;
