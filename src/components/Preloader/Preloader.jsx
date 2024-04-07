"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import PreloaderView from "./PreloaderView";
import { RigCamera } from "../../utils/rigCamera";
import Image from "next/image";
import { fadeOutAnimation, preloaderCloseAnimation } from "@/utils/animations";
import { Environment, OrbitControls } from "@react-three/drei";
import View from "./Organism/View";
import { useRef } from "react";

function Light() {
  const ref = useRef();
  useFrame((_) => (ref.current.rotation.x = _.clock.elapsedTime / 3));
  return (
    <group ref={ref}>
      <rectAreaLight
        color={"rgba(155, 2, 5, 0.5)"}
        width={15}
        height={100}
        position={[30, 30, -10]}
        intensity={5}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />
    </group>
  );
}

const Preloader = ({ setPreloader, show }) => {
  const handleClose = () => {
    fadeOutAnimation([".preloader-light"], { delay: 1.2, duration: 0.5 });
    fadeOutAnimation(["#preloader-logo", "#preloader-start"]);
    preloaderCloseAnimation(["#preloader"]);
    setPreloader(false);
  };
  return (
    <section
      id="preloader"
      onClick={handleClose}
      className={`${
        !show && "pointer-events-none select-none cursor-default"
      } fixed z-[1000] w-full h-full flex items-center justify-center bg-[#111325] `}
    >
      {/* LOGO */}
      <div
        id="preloader-logo"
        className="fixed flex items-center justify-center gap-1 font-bold text-lg leading-5 text-white top-10 opacity-[0] z-[1500]"
      >
        <Image
          width={500}
          height={500}
          src="/Favicon.svg"
          className="h-[18vh] w-[15vh]"
          alt=""
        />
        <i className="max-md:hidden text-[13vh] ">YSFIK</i>
      </div>

      {/* TEXT */}
      <div
        id="preloader-start"
        className="fixed bottom-10 opacity-0 z-[1500]"
      >
        <div className="  w-fit h-fit flex items-center  justify-center relative text-white text-lg mb-10">
          <h1 className="">Click To Start The Journey</h1>
          <h1 className="absolute blur-[0.2rem] opacity-[0.5]">
            Click To Start The Journey
          </h1>
        </div>
      </div>
      <Canvas
        camera={{}}
        className="w-full h-full flex items-center justify-center z-[1000]"
      >
        <color attach="background" args={["#111325"]} />
        {/* <Environment
          background
          blur={0.2}
          near={5}
          files={[
            "/px.png",
            "/nx.png",
            "/py.png",
            "/ny.png",
            "/pz.png",
            "/nz.png",
          ]}
        /> */}
        <directionalLight
          intensity={0.6}
          position={[22, -25, 50]}
          color="rgba(220, 110, 200, 0.2)"
        />
        <Light />
        {/* <View /> */}
        <PreloaderView show={show} />

        <RigCamera />
      </Canvas>
    </section>
  );
};

export default Preloader;
