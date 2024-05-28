"use client";
import Title from "@/components/Title";
import ProjectSection from "./Organism/ProjectSection";
import Image from "next/image";
import { useRef, useState } from "react";

const Projects = () => {
  // Data Dummy
  const data = [
    {
      title: "START",
      link: "#START",
      image: "/START",
      description: "START",
    },
    {
      title: "Rumah Atalla Cashier",
      link: "https://rumahatalla.my.id",
      image: "/Success.png",
      description:
        "At the heart of our process lies collaboration. We see our clients as partners in every sense, valuing open communication, mutual respect, and shared goals. Throughout the journey, from the initial brainstorming sessions to the final delivery, we work closely with you, ensuring that your vision is not only realized but enhanced through our collaboration.",
    },
    {
      title: "Affeto Studio.",
      link: "#",
      image: "/Success.png",
      description:
        "At the heart of our process lies collaboration. We see our clients as partners in every sense, valuing open communication, mutual respect, and shared goals. Throughout the journey, from the initial brainstorming sessions to the final delivery, we work closely with you, ensuring that your vision is not only realized but enhanced through our collaboration.",
    },
    {
      title: "Solana Token",
      link: "/projects/solana",
      image: "/Success.png",
      description:
        "At the heart of our process lies collaboration. We see our clients as partners in every sense, valuing open communication, mutual respect, and shared goals. Throughout the journey, from the initial brainstorming sessions to the final delivery, we work closely with you, ensuring that your vision is not only realized but enhanced through our collaboration.",
    },
    {
      title: "Smart Contract EVM",
      link: "/projects/evm",
      image: "/Success.png",
      description:
        "At the heart of our process lies collaboration. We see our clients as partners in every sense, valuing open communication, mutual respect, and shared goals. Throughout the journey, from the initial brainstorming sessions to the final delivery, we work closely with you, ensuring that your vision is not only realized but enhanced through our collaboration.",
    },
    {
      title: "END",
      link: "#END",
      image: "/END",
      description: "END",
    },
  ];

  // Project Show State
  const [projectNumberShow, setProjectNumberShow] = useState(2);

  return (
    <section id="projects" className="min-h-[50vh] w-[87%] my-[10rem] mx-auto relative ">
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

      <div className="h-[100vh] w-full md:mt-10 flex flex-col items-center justify-center z-[2] relative">
        {/* PROJECT */}
        <div className="h-full w-[92%] mt-[-10rem]">
          <ProjectSection
            data={data}
            projectNumberShow={projectNumberShow}
            setProjectNumberShow={setProjectNumberShow}
          />
        </div>
        {/* HEADER */}
        <div className="w-[92%] flex max-md:flex-col items-center justify-between -mt-36 md:mt-3 relative">
          <div className="w-full aspect-square absolute left-0 bg-gradient-to-r opacity-[0.6] from-[#9436b9] via-[#3c0271] to-[#3c0271] blur-[15vw] rounded-full  scale-y-[0.2] z-[-1]" />
          {/* LEFT */}
          <div className="flex flex-col gap-2 md:w-[40%] mr-5 max-md:text-center">
            <h1 className="text-6xl font-bold text-white">
              Project #{projectNumberShow}
            </h1>
            <div className="relative opacity-[0.9] truncate">
              <h2 className="text-3xl absolute blur-[0.7rem] opacity-[0.3] font-bold  bg-clip-text text-transparent  bg-gradient-to-r from-indigo-600  to-pink-600">
                {data[projectNumberShow].title}
              </h2>
              <h2 className="text-3xl font-bold  bg-clip-text text-transparent  bg-gradient-to-r from-indigo-600  to-pink-600">
                {data[projectNumberShow].title}
              </h2>
            </div>
          </div>
          {/* MIDDLE */}
          <div className="flex items-end justify-end w-full text-base max-md:mt-3 max-md:text-justify">
            {data[projectNumberShow].description}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
