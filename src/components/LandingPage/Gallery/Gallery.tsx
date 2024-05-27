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
        console.log(targetRef.current[i].getBoundingClientRect());
        const rect = targetRef.current[i].getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        //   set delay
        console.log(x, y);
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
        className="h-[170vh] w-[100vw] group relative mt-[10rem] px-20"
      >
        <div className="absolute z-[0] h-[20rem] aspect-square bg-purple-600 blur-[19rem] rounded-full scale-[1.4] bottom-[20%] right-[20%]"></div>
        <div className="absolute z-[0] h-[20rem] aspect-square bg-pink-700 blur-[19rem] rounded-full scale-[1.4] top-[20%] left-[20%]"></div>

        <div className="w-full h-[172vh] grid gap-5 z-6 relative grid-cols-8">
          {/* 1 */}
          <CardContainer
            bg="bg-gradient-to-br"
            targetRef={targetRef}
            i={1}
            span="col-span-5 row-span-3"
            className={
              "flex flex-col  justify-center items-center text-center p-[1vw] "
            }
          >
            <Image
              src={"/MoneyBG.png"}
              alt="BG"
              className="w-full h-full object-cover absolute left-0 top-0 opacity-[0.07] z-[2] contrast-[3]"
              width={500}
              height={500}
            />
            <div className="h-[30%] w-[30%] floating-left absolute left-10 top-2 z-[3] contrast-[1.1] opacity-[0.7] group-hover:opacity-90 transition-all duration-500">
              <div className="relative w-full h-full">
                <Image
                  src={"/Money.png"}
                  alt="BG"
                  className="  absolute z-[5]"
                  width={500}
                  height={500}
                />
                <Image
                  src={"/Money.png"}
                  alt="BG"
                  className="blur-[1rem]  absolute z-[3] opacity-[0.8] group-hover:scale-[1.2] group-hover:blur-[4rem] transition-all duration-700"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="h-[32%] w-[32%] floating-left absolute right-[2rem] skew-x-12 rotate-[30deg] bottom-2 z-[3] contrast-[1.1] opacity-[0.7] group-hover:opacity-90 transition-all duration-500">
              <div className="relative w-full h-full">
                <Image
                  src={"/Money.png"}
                  alt="BG"
                  className="  absolute z-[5]"
                  width={500}
                  height={500}
                />
                <Image
                  src={"/Money.png"}
                  alt="BG"
                  className="blur-[1rem]  absolute z-[3] opacity-[0.8] group-hover:scale-[1.2] group-hover:blur-[4rem] transition-all duration-700"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <h1 className="text-[6vw] leading-[5.5vw] h-fit font-bold z-[5]">
              Maximize
              <ColorfulTextBG>Profit</ColorfulTextBG>
              Potential
            </h1>
            <h1 className="text-base opacity-[0.7] mt-[0.5vw] h-fit z-[5]">
              Elevate your online brand to attract higher-paying clients and
              increase sales.
            </h1>
          </CardContainer>

          {/* 2 */}
          <CardContainer
            bg="bg-gradient-to-tr"
            targetRef={targetRef}
            i={2}
            span="col-span-3 row-span-5"
          >
            2
          </CardContainer>

          {/* 3 */}
          <CardContainer
            bg="bg-gradient-to-r"
            targetRef={targetRef}
            i={3}
            span="col-span-3 row-span-2"
            className={"flex flex-col  justify-center p-[1vw] "}
          >
            <Image
              src={"/BG4.png"}
              alt="BG"
              className="w-full h-full object-cover absolute left-0 top-0 opacity-[0.05] contrast-[2] saturate-0"
              width={500}
              height={500}
            />
            <h1 className="text-[4.5vw] leading-[4.4vw] h-fit font-bold z-[5]">
              Exactly what you
              <ColorfulTextBG size="w-full h-[30%]">needed.</ColorfulTextBG>
            </h1>
            <h1 className="text-base opacity-[0.7] mt-[0.5vw] h-fit z-[5]">
              Transforming ideas into remarkable digital experiences.
            </h1>
          </CardContainer>

          {/* 4 */}
          <div
            ref={(e) => (targetRef.current[4] = e)}
            className="col-span-2 row-span-2 opacity-[0.7]  transition-all duration-1000 rounded-[1rem]  relative  "
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
              className="w-full h-full rounded-[1rem] absolute"
              width={1000}
              height={1000}
            />
          </div>

          {/* 5 */}
          <CardContainer
            targetRef={targetRef}
            i={5}
            span="col-span-3 row-span-3"
          >
            4
          </CardContainer>

          {/* 6 */}
          <CardContainer
            bg="bg-gradient-to-b"
            targetRef={targetRef}
            i={6}
            span="col-span-3 row-span-3 "
            className={"flex flex-col  items-center pt-[3vw] p-[1vw] "}
          >
            <Image
              src={"/BG5.png"}
              alt="BG"
              className="w-full h-full object-cover absolute left-0 top-0 opacity-[0.05] contrast-[2] saturate-0"
              width={500}
              height={500}
            />

            <h1 className="text-[3.3vw] leading-[4.4vw] h-fit font-bold z-[5]">
              Get More
              <ColorfulTextBG size="w-full h-[40%]" position="left-0 bottom-0">
                Engage
              </ColorfulTextBG>
            </h1>
            <h1 className="text-[1vw] opacity-[0.7] h-fit z-[5]">
              With Our Web Product.
            </h1>
            <div className="w-full h-full relative scale-[0.9] mt-[1rem]">
              <Image
                src={"/GraphicUp.png"}
                alt="Up"
                className=" object-cover relative z-[12] contrast-[1.5] "
                width={500}
                height={500}
              />
              <Image
                src={"/GraphicUp.png"}
                alt="Up"
                className=" object-cover absolute top-0 left-0 blur-[0.15rem] z-[10] contrast-[1.5] "
                width={500}
                height={500}
              />
            </div>
          </CardContainer>

          {/* 7 */}
          <CardContainer
            bg="bg-gradient-to-br"
            targetRef={targetRef}
            i={7}
            span="col-span-2 row-span-3"
          >
            3
          </CardContainer>
        </div>
      </div>
    </>
  );
};

export default Gallery;
