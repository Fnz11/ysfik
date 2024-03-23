import Title from "../../Title";
import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <div className="my-[10rem]">
      <Title
        className=""
        color="text-purple-500"
        title="Unleash Your Potential"
      >
        <div>With Our Advanced</div>
        <div>Tech Stack.</div>
      </Title>

      <div className=" min-h-[100vh] mt-[5rem] w-screen">
        <div className="flex items-center justify-center w-full relative opacity-[0.6] scale-y-[0.5]">
          {/* LIGHT */}
          <div className="bg-pink-500 h-[20rem] opacity-[0.7] absolute w-[12rem] aspect-square rounded-full -right-32 top-[12rem] blur-[8rem] mr-52 scale-[2] z-[11]"></div>
          <div className="bg-purple-500 h-[20rem] opacity-[0.4] absolute w-[12rem] aspect-square rounded-full -left-[10rem] top-[20rem] blur-[4rem] mr-52 scale-[4] z-[11]"></div>
          <div className="bg-emerald-500 h-[20rem] opacity-[0.7] absolute w-[12rem] aspect-square rounded-full top-[80rem] blur-[8rem] mr-52 scale-[2.8] z-[11]"></div>
          <div className="bg-sky-500 h-[20rem] opacity-[0.8] absolute w-[12rem] aspect-square rounded-full top-[10rem] blur-[8rem] mr-52 scale-[2.8] z-[11]"></div>
          <div className="bg-indigo-500 h-[20rem] opacity-[0.7] absolute w-[12rem] aspect-square rounded-full -right-[10rem] top-[80rem] blur-[8rem] mr-52 scale-[2.8] z-[11]"></div>

          {/* BLACK */}
          <div className="bg-black h-[20rem] absolute w-[12rem] aspect-square rounded-full -right-[20rem] top-[12rem] blur-[3rem] mr-52 scale-[3] z-[11]"></div>
          <div className="bg-black h-[20rem] absolute w-[12rem] aspect-square rounded-full -left-[16rem] top-[40rem] blur-[4rem] mr-52 scale-[5] z-[11]"></div>
          <div className="bg-black h-[20rem] absolute w-[12rem] aspect-square rounded-full -right-[10rem] top-[80rem] blur-[4rem] mr-52 scale-[3] z-[11]"></div>

          {/* REACT */}
          <div className="absolute hover:scale-x-[1.2] saturate-[1.4] contrast-[1.5] hover:scale-y-[1.8] transition-all duration-300 z-[20] scale-y-[1.5]">
            <div className="relative">
              <div className="floating-element">
                <Image
                  src="/ReactJsIcon.svg"
                  alt="ReactJS Icon"
                  width={120}
                  height={120}
                  className="aspect-square w-[10rem] relative top-0 left-0 z-[2]"
                />
                <Image
                  src="/ReactJsIcon.svg"
                  alt="ReactJS Icon"
                  width={120}
                  height={120}
                  className="aspect-square w-[10rem] absolute blur-[2rem] opacity-[0.7] top-0 left-0"
                />
              </div>
              <div className="w-[10rem] h-[10rem] scale-x-[0.7] blinking-shine-element scale-y-[0.2] rounded-full blur-[5rem] absolute -bottom-[7rem] right-0 bg-cyan-400"></div>
            </div>
          </div>
          {/* NEXT */}
          <div className="top-[20rem] absolute hover:scale-x-[1.2] brightness-[2] saturate-[3] contrast-[3] hover:scale-y-[1.8] transition-all duration-300 z-[20] scale-y-[1.5]">
            <div className="relative">
              <div className="floating-element invert">
                <Image
                  src="/NextJsIcon.svg"
                  alt="NextJs Icon"
                  width={120}
                  height={120}
                  className="aspect-square w-[10rem] relative top-0 left-0 z-[2]"
                />
                <Image
                  src="/NextJsIcon.svg"
                  alt="NextJs Icon"
                  width={120}
                  height={120}
                  className="aspect-square w-[10rem] absolute blur-[2rem] opacity-[0.3] top-0 left-0"
                />
              </div>
              <div className="w-[10rem] h-[10rem] scale-x-[0.7] blinking-shine-element scale-y-[0.2] rounded-full blur-[5rem] absolute -bottom-[7rem] right-0 bg-white"></div>
            </div>
          </div>
          {/* CSS */}
          <div className="top-[25rem] right-[20rem] absolute hover:scale-x-[1.2] saturate-[0.8] contrast-[1.5] hover:scale-y-[1.8] transition-all duration-300 z-[20] scale-y-[1.5]">
            <div className="relative">
              <div className="floating-element">
                <Image
                  src="/CSS3Icon.svg"
                  alt="CSS3 Icon"
                  width={120}
                  height={120}
                  className="aspect-square w-[10rem] relative top-0 left-0 z-[2]"
                />
                <Image
                  src="/CSS3Icon.svg"
                  alt="CSS3 Icon"
                  width={120}
                  height={120}
                  className="aspect-square w-[10rem] absolute blur-[2rem] opacity-[0.6] top-0 left-0"
                />
              </div>
              <div className="w-[10rem] h-[10rem] scale-x-[0.7] blinking-shine-element scale-y-[0.2] rounded-full blur-[5rem] absolute -bottom-[7rem] right-0 bg-blue-500"></div>
            </div>
          </div>
          {/* HTML */}
          <div className="top-[25rem] left-[20rem] absolute hover:scale-x-[1.2] saturate-[0.8] contrast-[1.5] hover:scale-y-[1.8] transition-all duration-300 z-[20] scale-y-[1.5]">
            <div className="relative">
              <div className="floating-element">
                <Image
                  src="/HTML5Icon.svg"
                  alt="HTML Icon"
                  width={120}
                  height={120}
                  className="aspect-square w-[10rem] relative top-0 left-0 z-[2]"
                />
                <Image
                  src="/HTML5Icon.svg"
                  alt="HTML Icon"
                  width={120}
                  height={120}
                  className="aspect-square w-[10rem] absolute blur-[2rem] opacity-[0.6] top-0 left-0"
                />
              </div>
              <div className="w-[10rem] h-[10rem] scale-x-[0.7] blinking-shine-element scale-y-[0.2] rounded-full blur-[5rem] absolute -bottom-[7rem] right-0 bg-orange-500"></div>
            </div>
          </div>
          {/* JAVASCRIPT */}
          <div className="top-[50rem] absolute hover:scale-x-[1.2] saturate-[0.8] contrast-[1.5] hover:scale-y-[1.8] transition-all duration-300 z-[20] scale-y-[1.5]">
            <div className="relative">
              <div className="floating-element">
                <Image
                  src="/JSIcon.svg"
                  alt="JD Icon"
                  width={120}
                  height={120}
                  className="aspect-square w-[10rem] relative top-0 left-0 z-[2]"
                />
                <Image
                  src="/JSIcon.svg"
                  alt="JD Icon"
                  width={120}
                  height={120}
                  className="aspect-square w-[10rem] absolute blur-[2rem] opacity-[0.5] top-0 left-0"
                />
              </div>
              <div className="w-[10rem] h-[10rem] scale-x-[0.7] blinking-shine-element scale-y-[0.2] rounded-full blur-[5rem] absolute -bottom-[7rem] right-0 bg-yellow-300"></div>
            </div>
          </div>
          {/* SOLIDITY */}
          <div className="top-[85rem] absolute hover:scale-x-[1.2] saturate-[0.8] contrast-[1.5] hover:scale-y-[1.8] transition-all duration-300 z-[20] scale-y-[1.5]">
            <div className="relative">
              <div className="floating-element">
                <Image
                  src="/SolidityIcon.svg"
                  alt="Solidity Icon"
                  width={120}
                  height={120}
                  className="aspect-square w-[10rem] relative top-0 left-0 z-[2]"
                />
                <div className="aspect-square w-[10rem] absolute scale-[0.8] blur-[4rem] bg-gray-200 opacity-[0.4] rounded-full top-0 left-0"></div>
              </div>
              <div className="w-[10rem] h-[10rem] scale-x-[0.7] blinking-shine-element scale-y-[0.2] rounded-full blur-[5rem] absolute -bottom-[7rem] right-0 bg-gray-300"></div>
            </div>
          </div>
          {/* NODEJS */}
          <div className="top-[68rem] left-[27rem] absolute hover:scale-x-[1.2] saturate-[0.8] contrast-[1.5] hover:scale-y-[1.8] transition-all duration-300 z-[20] scale-y-[1.5]">
            <div className="relative">
              <div className="floating-element">
                <Image
                  src="/NodeJsIcon.svg"
                  alt="NodeJS Icon"
                  width={120}
                  height={120}
                  className="aspect-square w-[10rem] relative top-0 left-0 z-[2]"
                />
                <Image
                  src="/NodeJsIcon.svg"
                  alt="NodeJS Icon"
                  width={120}
                  height={120}
                  className="aspect-square w-[10rem] absolute blur-[1rem] opacity-[0.8] top-0 left-0"
                />
              </div>
              <div className="w-[10rem] h-[10rem] scale-x-[0.7] blinking-shine-element scale-y-[0.2] rounded-full blur-[5rem] absolute -bottom-[7rem] right-0 bg-green-500"></div>
            </div>
          </div>
          {/* EXPRESS */}
          <div className="top-[52rem] left-[10rem] absolute hover:scale-x-[1.2] saturate-[0.8] contrast-[1.5] hover:scale-y-[1.8] transition-all duration-300 z-[20] scale-y-[1.5]">
            <div className="relative">
              <div className="floating-element">
                <Image
                  src="/ExpressIcon.svg"
                  alt="Express Icon"
                  width={120}
                  height={120}
                  className="aspect-square w-[10rem] relative top-0 left-0 z-[2]"
                />
                <div className="aspect-square w-[10rem] absolute scale-[0.8] blur-[4rem] bg-white opacity-[0.25] rounded-full top-0 left-0"></div>
              </div>
              <div className="w-[10rem] h-[10rem] scale-x-[0.7] blinking-shine-element scale-y-[0.2] rounded-full blur-[5rem] absolute -bottom-[7rem] right-0 bg-gray-300"></div>
            </div>
          </div>
          {/* NODEJS */}
          <div className="top-[68rem] right-[25rem] absolute hover:scale-x-[1.2] saturate-[0.8] contrast-[1.5] hover:scale-y-[1.8] transition-all duration-300 z-[20] scale-y-[1.5]">
            <div className="relative">
              <div className="floating-element">
                <Image
                  src="/MongoDBIcon.svg"
                  alt="MongoDB Icon"
                  width={120}
                  height={120}
                  className="aspect-square w-[10rem] relative top-0 left-0 z-[2]"
                />
                <Image
                  src="/MongoDBIcon.svg"
                  alt="MongoDB Icon"
                  width={120}
                  height={120}
                  className="aspect-square w-[10rem] absolute blur-[1rem] opacity-[0.8] top-0 left-0"
                />
              </div>
              <div className="w-[10rem] h-[10rem] scale-x-[0.7] blinking-shine-element scale-y-[0.2] rounded-full blur-[5rem] absolute -bottom-[7rem] right-0 bg-green-300"></div>
            </div>
          </div>
          {/* POSTGRESQL */}
          <div className="top-[52rem] right-[10rem] absolute hover:scale-x-[1.2] saturate-[0.8] contrast-[1.5] hover:scale-y-[1.8] transition-all duration-300 z-[20] scale-y-[1.5]">
            <div className="relative">
              <div className="floating-element">
                <Image
                  src="/PostgreSqlIcon.svg"
                  alt="PostgreSql Icon"
                  width={120}
                  height={120}
                  className="aspect-square w-[10rem] relative top-0 left-0 z-[2]"
                />
                <Image
                  src="/PostgreSqlIcon.svg"
                  alt="PostgreSql Icon"
                  width={120}
                  height={120}
                  className="aspect-square w-[10rem] absolute blur-[2rem] top-0 left-0"
                />
              </div>
              <div className="w-[10rem] h-[10rem] scale-x-[0.7] blinking-shine-element scale-y-[0.2] rounded-full blur-[5rem] absolute -bottom-[7rem] right-0 bg-sky-800"></div>
            </div>
          </div>

          {/* TECH CONTAINER */}
          <div className="w-[60vw] aspect-square rotate-[45deg] border-2 rounded-md  absolute  left-auto top-0 bg-black z-[10]"></div>
          <div className="w-[60vw] aspect-square rotate-[45deg] border-2 rounded-md  absolute  left-auto top-[15rem] bg-black z-[9]"></div>
          <div className="w-[60vw] aspect-square rotate-[45deg] border-2 rounded-md  absolute  left-auto top-[30rem] bg-black z-[8]"></div>
          <div className="w-[60vw] aspect-square rotate-[45deg] border-2 rounded-md  absolute  left-auto top-[45rem] bg-black z-[7]"></div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
