"use client";
import Title from "@/components/Title";
import ProjectSection from "./Organism/ProjectSection";
import Image from "next/image";
import { useRef, useState } from "react";
import { useIntersection } from "react-use";
import { useGSAP } from "@gsap/react";
import { fadeInAnimation, fadeOutAnimation } from "@/utils/animations";

const Projects = () => {
  // INTERSECTION
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "500px",
    threshold: 0.2,
  });

  // GSAP
  useGSAP(() => {
    intersection && intersection.intersectionRatio < 0.2
      ? fadeOutAnimation(["#project-title"])
      : fadeInAnimation(["#project-title"]);
  }, [intersection]);

  // DATA
  const data = {
    title: "Crafted for",
    titleAccent: "Success",
    image: "/Success.png",
    description1:
      "At the heart of our process lies collaboration. We see our clients as partners in every sense, valuing open communication, mutual respect, and shared goals. Throughout the journey, from the initial brainstorming sessions to the final delivery, we work closely with you, ensuring that your vision is not only realized but enhanced through our collaboration.",
    description2:
      "Our team takes the time to listen to your feedback, address your concerns, and incorporate your ideas into the project seamlessly. By fostering a collaborative environment, we're able to harness the collective wisdom of our team and yours, resulting in solutions that are not only technically sound but also aligned with your business objectives and values.",
  };
  const [projectNumberShow, setProjectNumberShow] = useState(1);

  return (
    <div ref={sectionRef} className="min-h-[50vh] w-[90%] my-[10rem] mx-auto ">
      <Title
        id="project-title"
        title={"Projects Showcase"}
        className={"opacity-0"}
        color="text-purple-500"
      >
        Dive Into Our Projects <br /> Portfolio
      </Title>

      <div className="h-[100vh] mt-10 flex flex-col ">
        {/* PROJECT */}
        <div className="h-full w-full ">
          <ProjectSection data={data} />
        </div>
        {/* HEADER */}
        <div className="flex items-center justify-between mt-3">
          {/* LEFT */}
          <div className="flex flex-col w-fit gap-2">
            <h1 className="text-6xl font-bold bg-clip-text text-transparent  bg-gradient-to-r from-pink-500 to-white">
              Project #1
            </h1>
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
          <div className="flex items-end justify-end text-center w-[50%] text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            numquam illo aliquid non laudantium dolorem, commodi laborum, veniam
            illum eaque maiores nam possimus expedita perspiciatis libero
            accusamus natus, laboriosam voluptates.
          </div>
          {/* RIGHT */}
          <div className="flex items-center justify-center gap-5">
            <div className="flex items-center gap-5 relative">
              <button
                onClick={() => setProjectNumberShow((prev) => prev - 1)}
                className="flex items-center justify-center  border-2 border-slate-200 hover:border-white rounded-full group transition-all duration-300 hover:scale-[0.97] opacity-[0.8] relative  bg-gradient-to-br from-[rgba(67,56,202,0.1)] to-[rgba(190,24,93,0.05)]"
              >
                <div className="h-full w-full rounded-full border-4 absolute border-slate-200 group-hover:bg-[rgba(255,255,255,0.25)] transition-all duration-300 ease-in-out group-hover:border-white blur-[0.25rem] opacity-[0.8] scale-[1.1]"></div>
                <div className="before:h-[120%] before:w-[2rem] before:bg-white before:opacity- before:absolute before:blur-[1.8rem]  before:left-[-5rem] delay-75 before:hover:translate-x-[19rem] before:transition-all before:z-[10] before:duration-500 before:rotate-[20deg] relative overflow-hidden h-full w-full p-7 rounded-full">
                  <Image
                    width={500}
                    height={500}
                    src="/WhiteArrow.svg"
                    className="h-10 w-10 opacity-[0.8] group-hover:opacity-100 duration-500 transition-all ease-in-out  rotate-[135deg]"
                    alt=""
                  />
                </div>
              </button>
              <button
                onClick={() => setProjectNumberShow((prev) => prev - 1)}
                className="flex items-center justify-center  border-2 border-slate-200 hover:border-white rounded-full group transition-all duration-300 hover:scale-[0.97] opacity-[0.8] relative  bg-gradient-to-br from-[rgba(67,56,202,0.1)] to-[rgba(190,24,93,0.05)]"
              >
                <div className="h-full w-full rounded-full border-4 absolute border-slate-200 group-hover:bg-[rgba(255,255,255,0.25)] transition-all duration-300 ease-in-out group-hover:border-white blur-[0.25rem] opacity-[0.8] scale-[1.1]"></div>
                <div className="before:h-[120%] before:w-[2rem] before:bg-white before:opacity- before:absolute before:blur-[1.8rem]  before:left-[-5rem] delay-75 before:hover:translate-x-[19rem] before:transition-all before:z-[10] before:duration-500 before:rotate-[20deg] relative overflow-hidden h-full w-full p-7 rounded-full">
                  <Image
                    width={500}
                    height={500}
                    src="/WhiteArrow.svg"
                    className="h-10 w-10 opacity-[0.8] group-hover:opacity-100 duration-500 transition-all ease-in-out  rotate-[-45deg]"
                    alt=""
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
