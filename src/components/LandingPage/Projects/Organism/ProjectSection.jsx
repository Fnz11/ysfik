import Image from "next/image";
import React from "react";

const ProjectSection = ({ index, data }) => {
  return (
    <div
      key={index}
      className="flex max-md:flex-col group w-full h-full justify-between"
    >
      <div className="w-full h-full relative rounded-[2rem] bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 aspect-square p-[0.3rem]">
        <Image
          width={500}
          height={500}
          src={data.image}
          className={`w-full h-full  absolute blur-[10rem] opacity-[0.5] transition-all duration-700 ease-in-out scale-[1.1] z-[0] aspect-square object-cover rounded-[1.8rem] `}
          alt=""
        />
        <div className="h-full w-full bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 aspect-square absolute  transition-all duration-700 ease-in-out opacity-[0.4] scale-[1.05] blur-[2rem]"></div>
        <div className="w-full h-full overflow-hidden relative rounded-[1.9rem]">
          <Image
            width={500}
            height={500}
            src={data.image}
            className="w-full z-[2] relative opacity-[0.8] transition-all duration-700 ease-in-out saturate-60 aspect-square object-cover "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
