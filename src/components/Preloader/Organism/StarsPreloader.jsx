import Image from "next/image";
import StarPreloader from "../Atom/StarPreloader";

const StarsPreloader = () => {
  return (
    <div className="pointer-events-none">
      <div
        className="absolute z-[2] h-full w-full"
        id="preloader-container-stars1"
      >
        <StarPreloader
          name="preloader-stars1"
          left="20%"
          top="0vh"
          scale="1"
        />
        <StarPreloader
          name="preloader-stars3"
          left="80vw"
          top="-80vh"
          scale="0.5"
        />
      </div>
      <div
        className="absolute z-[2] h-full w-full"
        id="preloader-container-stars2"
      >
        <StarPreloader
          name="preloader-stars1"
          left="-30%"
          top="70vh"
          scale="0.3"
        />
        <StarPreloader
          name="preloader-stars2"
          left="30vw"
          top="45vh"
          scale="0.8"
        />
      </div>
      <div
        className="absolute z-[2] h-full w-full"
        id="preloader-container-stars3"
      >
        <StarPreloader
          name="preloader-stars3"
          left="-30vw"
          top="0"
          scale="0.4"
        />
      </div>
    </div>
  );
};

export default StarsPreloader;
