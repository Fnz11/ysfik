"use client";
import Title from "@/components/Title";
import ProjectSection from "./Organism/ProjectSection";
import Image from "next/image";
import { useRef, useState } from "react";

const Projects = () => {
  // Data Dummy
  const data = {
    title: "Crafted for",
    titleAccent: "Success",
    image: "/Success.png",
    description1:
      "At the heart of our process lies collaboration. We see our clients as partners in every sense, valuing open communication, mutual respect, and shared goals. Throughout the journey, from the initial brainstorming sessions to the final delivery, we work closely with you, ensuring that your vision is not only realized but enhanced through our collaboration.",
    description2:
      "Our team takes the time to listen to your feedback, address your concerns, and incorporate your ideas into the project seamlessly. By fostering a collaborative environment, we're able to harness the collective wisdom of our team and yours, resulting in solutions that are not only technically sound but also aligned with your business objectives and values.",
  };

  return (
    <div className="min-h-[50vh] w-[90%] my-[10rem] mx-auto relative ">
      <Title
        id="project-title"
        title={"Projects Showcase"}
        color="text-purple-500"
        className="z-[10] relative"
      >
        Dive Into Our Projects <br /> Portfolio
      </Title>

      <div className="bg-[#a431ca] saturate-[1.5] h-[30rem] absolute w-[22rem] aspect-square rounded-full z-[1] top-[10rem] blur-[6rem]  opacity-[0.4] scale-[1.2] pointer-events-none"></div>
      <div className="bg-[#3c0271] saturate-[1.5]  h-[30rem] absolute w-[32rem] aspect-square rounded-full z-[1] top-[20rem] blur-[6rem] right-[5rem] opacity-[0.3] scale-[3] pointer-events-none"></div>
      <div className="bg-[#3c0271] saturate-[1.5]  h-[30rem] absolute w-[32rem] aspect-square rounded-full z-[1] top-[20rem] blur-[6rem] right-[5rem] opacity-[0.6] scale-[1] pointer-events-none"></div>

      <div className="h-[100vh] md:mt-10 flex flex-col z-[2] relative">
        {/* PROJECT */}
        <div className="h-full w-full mt-[-10rem]">
          <ProjectSection data={data} />
        </div>
        {/* HEADER */}
        <div className="flex max-md:flex-col items-center justify-between -mt-36 md:mt-3 relative">
          <div className="w-full aspect-square absolute left-0 bg-gradient-to-r opacity-[0.6] from-[#9436b9] via-[#3c0271] to-[#3c0271] blur-[15vw] rounded-full  scale-y-[0.2] z-[-1]" />
          {/* LEFT */}
          <div className="flex flex-col gap-2 md:w-[40%] max-md:text-center">
            <h1 className="text-6xl font-bold text-white">Project #1</h1>
            <div className="relative opacity-[0.9]">
              <h2 className="text-3xl absolute blur-[0.5rem] opacity-[0.5] font-bold  bg-clip-text text-transparent  bg-gradient-to-r from-indigo-600  to-pink-600">
                Cashier Rumah Atalla
              </h2>
              <h2 className="text-3xl font-bold  bg-clip-text text-transparent  bg-gradient-to-r from-indigo-600  to-pink-600">
                Cashier Rumah Atalla
              </h2>
            </div>
          </div>
          {/* MIDDLE */}
          <div className="flex items-end justify-end w-full text-base max-md:mt-3 max-md:text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            numquam illo aliquid non laudantium dolorem, commodi laborum, veniam
            illum eaque maiores nam possimus expedita perspiciatis libero
            accusamus natus, laboriosam voluptates.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
