import Image from "next/image";
import React, { useRef } from "react";
import StarsPreloader from "./Organism/StarsPreloader";
import LightPreloader from "./Organism/LightPreloader";
import gsap from "gsap";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  clickToStartAnimation,
  fadeInAnimation,
  fadeOutAnimation,
  panoramaAnimation,
  preloaderCloseAnimation,
  starsAnimation,
} from "@/utils/animations";
import View from "./Organism/View";

const PreloaderView = ({ show }) => {
  let runStarsAnimation = false;
  useFrame(() => {
    if (!runStarsAnimation && show) {
      panoramaAnimation(["#preloader-hole"], 45);
      starsAnimation([".preloader-stars1"], 48, 1.4);
      starsAnimation([".preloader-stars2"], 23, 1.9);
      starsAnimation([".preloader-stars3"], 30, 1);
      fadeInAnimation(["#preloader-logo"], {
        opacity: 0.6,
      });

      clickToStartAnimation(["#preloader-start"])
      setTimeout(() => {
        runStarsAnimation = true;
      }, [500]);
    }
  });

  return (
    <>
      <group>
        <group rotation={[0, 0, 0]}>
          <mesh>
            <Html
              // calculatePosition={() => [1000, 100, 1000]}
              // zIndexRange={[100, 200]}
              // position={[0, 0, -100]}
              fullscreen
              occlude
            >
              <div className="rotate-[10deg] relative w-full h-full pointer-events-none">
                <Image
                  width={50000}
                  height={50000}
                  id="preloader-hole"
                  src="/BlackHoleBackground.png"
                  className="absolute  max-md:w-[150vw] max-md:h-[100vw] w-full h-full rotate-[-10deg] z-[0] saturate-[0.5] hue-rotate-[20deg] opacity-[1] contrast-[0.96] brightness-[0.81] object-cover scale-[1.1]  "
                  alt=""
                />

                {/* STARS */}
                <StarsPreloader />

                {/* LIGHT */}
                <LightPreloader />
              </div>
            </Html>
          </mesh>
        </group>
      </group>
    </>
  );
};

export default PreloaderView;
