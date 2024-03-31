import Image from "next/image";

const StarsPreloader = () => {
  return (
    <>
      <Image
        width={5000}
        height={5000}
        src="/Stars.png"
        className="preloader-stars1  md:w-[80%]md: h-[80%] opacity-[0.9] brightness-[1.5] z-[1] absolute left-[-70%] top-0  object-cover"
        alt=""
      />
      <Image
        width={5000}
        height={5000}
        src="/Stars.png"
        className="preloader-stars3  md:w-[50%] md:h-[50%] -bottom-[35vh] opacity-[0.9] brightness-[1.5] z-[1] absolute  object-cover"
        alt=""
      />
      <Image
        width={5000}
        height={5000}
        src="/Stars.png"
        className="preloader-stars2  md:w-[80%] md:h-[80%] opacity-[0.9] brightness-[1.5] z-[1] absolute right-[-50%] top-0  object-cover"
        alt=""
      />
    </>
  );
};

export default StarsPreloader;
