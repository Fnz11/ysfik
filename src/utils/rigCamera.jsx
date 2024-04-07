"use client";
import { useFrame, useThree } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";
import { cameraStarsAnimation, starsAnimation } from "./animations";
import gsap from "gsap";

const { CameraShake } = require("@react-three/drei");

export const RigCamera = () => {
  const [vec] = useState(() => new THREE.Vector3());
  const { camera, mouse } = useThree();
  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 1.5, mouse.y * 1.5, 15), 0.1);
    cameraStarsAnimation(["#preloader-container-stars1"], mouse, 15);
    cameraStarsAnimation(["#preloader-container-stars2"], mouse, 35);
    cameraStarsAnimation(["#preloader-container-stars3"], mouse, 100);
  });
  console.log("MOMO", mouse);
  return (
    <CameraShake
      maxYaw={0.03}
      maxPitch={0.03}
      maxRoll={0.05}
      yawFrequency={0.1}
      pitchFrequency={0.1}
      rollFrequency={0}
    />
  );
};
