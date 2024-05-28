"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import ColorfulTextBG from "../../ColorfulTextBG";

const CardContainer = dynamic(() => import("./Atom/CardContainer"), {
  ssr: false,
});

const Gallery = () => {
  const targetRef = useRef<any>([]);
  const [isTouch, setIsTouch] = useState(false);

  const handleOnMouseMove = (e: any) => {
    if (targetRef.current.length === 0) return;
    for (let i = 1; i <= targetRef.current.length; i++) {
      if (targetRef.current[i] !== undefined) {
        if (!isTouch) {
          targetRef.current[i].style.setProperty("--mouse-x", `${-200}vh`);
          targetRef.current[i].style.setProperty("--mouse-y", `${-200}vh`);
          setIsTouch(true);
        }
        const rect = targetRef.current[i].getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        //   set delay
        setTimeout(() => {
          targetRef.current[i].style.setProperty("--mouse-x", `${x}px`);
          targetRef.current[i].style.setProperty("--mouse-y", `${y}px`);
        }, 25);
      }
    }
  };
  // ed
  return (
    <>
      <div
        onMouseMove={handleOnMouseMove}
        id="gallery-container"
        className=" w-[100vw] bg-black/80 border border-white/10 group relative md:mt-[10rem] md:p-20 "
      >
        <div className="absolute z-[0] h-[20rem] aspect-square bg-purple-600 blur-[19rem] rounded-full scale-[1.4] bottom-[20%] right-[20%]"></div>
        <div className="absolute z-[0] h-[20rem] aspect-square bg-pink-700 blur-[19rem] rounded-full scale-[1.4] top-[20%] left-[20%]"></div>

        <div className="w-full h-[250vh]  md:h-[172vh] grid gap-5 z-6 relative grid-cols-1 md:grid-cols-8 p-5 md:p-10">
          {/* 1 */}
          <CardContainer
            bg="bg-gradient-to-br"
            targetRef={targetRef}
            i={1}
            span="col-span-1 row-span-1 md:col-span-5 md:row-span-3"
            className={
              "flex flex-col  justify-center items-center text-center p-[1vw] "
            }
          >
            {/* video */}
            <video
              src="/ProfitIncrease.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover absolute left-0 top-0 z-[1] rounded-xl "
            />
            <div className="size-full relative flex flex-col justify-end p-5 z-[5]">
              <h1 className="text-2xl md:text-[4vw] md:leading-[4.5vw] flex gap-3 font-bold z-[5]">
                Maximize
                <ColorfulTextBG>Profit</ColorfulTextBG>
                Potential
              </h1>
              <h1 className="text-base opacity-[0.7] mt-[0.5vw] h-fit z-[5]">
                Elevate your online brand to attract higher-paying clients and
                increase sales.
              </h1>
            </div>
            <div className="h-[70%] w-full absolute top-0 left-0 z-[1] bg-gradient-to-b from-indigo-900/[0.2] from-[20%] to-transparent rounded-xl" />
            <div className="h-[70%] w-full absolute bottom-0 left-0 z-[1] bg-gradient-to-t from-pink-900/[0.2] from-[20%] to-transparent rounded-xl" />
          </CardContainer>

          {/* 2 */}
          <CardContainer
            bg="bg-gradient-to-tr"
            targetRef={targetRef}
            i={2}
            span="col-span-1 row-span-1 md:col-span-3 md:row-span-5 relative flex items-center justify-center text-center"
          >
            <Image
              src={"/Banner.png"}
              alt="BG"
              className="w-full h-full object-cover absolute left-0 top-0 brightness-[0.5]"
              width={500}
              height={500}
            />
            <div className="size-full relative flex flex-col justify-end p-5 z-[5]">
              <h1 className="text-5xl md:text-[4vw] md:leading-[4.4vw] h-fit font-bold z-[5]">
                Exactly what you
                <ColorfulTextBG size="w-full h-[30%]">needed.</ColorfulTextBG>
              </h1>
              <h1 className="text-base opacity-[0.7] mt-3 md:mt-[0.5vw] h-fit z-[5]">
                Transforming ideas into remarkable digital experiences.
              </h1>
            </div>
            <div className="h-[70%] w-full absolute top-0 left-0 z-[1] bg-gradient-to-b from-pink-900/[0.2] from-[20%] to-transparent rounded-xl" />
            <div className="h-[70%] w-full absolute bottom-0 left-0 z-[1] bg-gradient-to-t from-indigo-900/[0.3] from-[20%] to-transparent rounded-xl" />
          </CardContainer>

          {/* 3 */}
          <CardContainer
            bg="bg-gradient-to-r"
            targetRef={targetRef}
            i={3}
            span="col-span-1 row-span-1 md:col-span-3 md:row-span-2"
            className={
              "flex flex-col max-md:items-center justify-end max-md:text-center p-[1vw] "
            }
          >
            <Image
              src={"/Speed.png"}
              alt="BG"
              className="size-full object-cover absolute left-0 top-0 opacity-[0.3]"
              width={700}
              height={700}
            />
            <h1 className="text-5xl md:text-[3vw] md:leading-[3vw] h-fit font-bold z-[5]">
              Streamline Your Operations
            </h1>
            <h1 className="text-base opacity-[0.7] mt-3 md:mt-[0.5vw] h-fit z-[5]">
              Implementing efficient processes that save you time and resources.
            </h1>
            <div className="h-full w-[70%] absolute top-0 left-0 z-[1] bg-gradient-to-r from-indigo-900/[0.2] from-[10%] to-transparent rounded-xl" />
            <div className="h-full w-[70%] absolute bottom-0 right-0 z-[2] bg-gradient-to-l from-pink-900/[0.2] from-[10%] to-transparent rounded-xl" />
          </CardContainer>

          {/* 4 */}
          <div
            ref={(e) => (targetRef.current[4] = e)}
            className="col-span-1 row-span-1 md:col-span-2 md:row-span-2 opacity-[0.9]  transition-all duration-1000 rounded-[1rem]  relative  max-md:hidden"
          >
            <div
              className="border-inherit rounded-[1rem]  h-full w-full opacity-0 group-hover:opacity-100 duration-500 transition-all absolute left-0 top-0 z-[3] mix-blend-overlay"
              style={{
                background: `radial-gradient(
                50rem circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
                rgba(255, 255, 255, 0.5),
                transparent 40%
              )`,
              }}
            ></div>
            <Image
              alt="Logo"
              src="LogoSquare.svg"
              className="w-full h-full z-[-1] blur-[3.5rem] scale-[1.5] opacity-[0.3] animate-pulse object-cover rounded-[1rem] absolute pointer-events-none"
              width={1000}
              height={1000}
            />
            <Image
              alt="Logo"
              src="LogoSquare.svg"
              className="w-full h-full z-[10] object-cover rounded-[1rem] absolute"
              width={1000}
              height={1000}
            />
          </div>

          {/* 5 */}
          <CardContainer
            targetRef={targetRef}
            i={5}
            span="col-span-1 row-span-1 md:col-span-3 md:row-span-3 relative overflow-hidden flex flex-col  "
          >
            {/* video */}
            <video
              src="/Blockchain1.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover absolute left-0 top-0 z-[1] rounded-xl "
            />
            <div className="size-full relative flex flex-col justify-end p-5 z-[5]">
              <h1 className="text-2xl md:text-[2vw] md:leading-[3vw] h-fit font-bold z-[5] ">
                Cutting-Edge Technology
              </h1>
              <h1 className="text-base to-white/80 mt-[0.5vw] h-fit z-[5]">
                Stay ahead of the curve with the latest technology integrated
                into your solutions, keeping your business at the forefront of
                innovation.
              </h1>
            </div>
            <div className="h-[70%] w-full absolute top-0 left-0 z-[1] bg-gradient-to-b from-indigo-900/[0.2] from-[20%] to-transparent rounded-xl" />
            <div className="h-[70%] w-full absolute bottom-0 left-0 z-[2] bg-gradient-to-t from-pink-900/[0.2] from-[20%] to-transparent rounded-xl" />
          </CardContainer>

          {/* 6 */}
          <CardContainer
            bg="bg-gradient-to-b"
            targetRef={targetRef}
            i={6}
            span="col-span-1 row-span-1 md:col-span-3 md:row-span-3 "
            className={"flex flex-col  items-center pt-[3vw]  "}
          >
            <Image
              src={"/BG5.png"}
              alt="BG"
              className="w-full h-full object-cover absolute left-0 top-0 brightness-[0.5] rounded-xl"
              width={500}
              height={500}
            />

            <h1 className="text-3xl md:text-[3.3vw] md:leading-[4.4vw] h-fit font-bold z-[5] mt-auto">
              <span className="mr-2">Get More</span>
              <ColorfulTextBG size="w-full h-[40%]" position="left-0 bottom-0">
                Engage
              </ColorfulTextBG>
            </h1>
            <h1 className="text-base md:text-[1vw] opacity-[0.7] h-fit z-[5] mb-5">
              With Our Web Product.
            </h1>
            <div className="h-[70%] w-full absolute bottom-0 left-0 z-[1] bg-gradient-to-t from-pink-900/[0.3] from-[20%] to-transparent rounded-xl" />
            <div className="h-[70%] w-full absolute top-0 left-0 z-[1] bg-gradient-to-b from-indigo-900/[0.3] from-[20%] to-transparent rounded-xl" />
          </CardContainer>

          {/* 7 */}
          <CardContainer
            bg="bg-gradient-to-br"
            targetRef={targetRef}
            i={7}
            span="col-span-1 row-span-1 md:col-span-2 md:row-span-3 relative overflow-hidden flex flex-col  "
          >
            {/* video */}
            <video
              src="/Fast.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover absolute left-0 top-0 z-[1] rounded-xl "
            />
            <div className="size-full relative flex flex-col justify-end p-5 z-[5]">
              <h1 className="text-2xl md:text-[2vw] md:leading-[2vw] h-fit font-bold z-[5] ">
                Rapid Development
              </h1>
              <h1 className="text-base to-white/80 mt-[0.5vw] h-fit z-[5] text-justify">
                Experience swift project delivery without compromising on
                quality.
              </h1>
            </div>
            <div className="h-[70%] w-full absolute top-0 left-0 z-[1] bg-gradient-to-b from-indigo-900/[0.3] from-[20%] to-transparent rounded-xl" />
            <div className="h-[70%] w-full absolute bottom-0 left-0 z-[2] bg-gradient-to-t from-pink-900/[0.3] from-[20%] to-transparent rounded-xl" />
          </CardContainer>
        </div>
      </div>
    </>
  );
};

export default Gallery;
