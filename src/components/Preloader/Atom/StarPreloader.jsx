import Image from "next/image";

const StarPreloader = ({ left, top, scale, name }) => {
  return (
    <Image
      width={5000}
      height={5000}
      src="/Stars.png"
      className={`${name} bgw  md:w-[80%] md:h-[80%] opacity-[0.9] brightness-[1.5] z-[1] absolute  object-cover`}
      style={{
        left: left,
        top: top,
        scale: scale,
      }}
      alt=""
    />
  );
};

export default StarPreloader;
