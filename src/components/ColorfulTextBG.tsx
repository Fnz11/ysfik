const ColorfulTextBG = ({
  children,
  hidden = false,
  size = "w-full h-[30%]",
  position = "left-0 bottom-[10%]",
}: {
  children: React.ReactNode;
  hidden?: boolean;
  size?: string;
  position?: string;
}) => {
  return (
    <span className=" w-fit h-fit relative">
      <span className="z-[2] relative">{children}</span>
      <div
        className={`${size} ${position} absolute  bg-gradient-to-r from-[rgba(115,55,255,0.8)] to-[rgba(168,64,243,0.8)] saturate-[1.2] backdrop-blur-[0.3rem] border-b border-[rgba(255,84,169,0.06)] ${
          hidden && "translate-x-[-200%]"
        } transition-all duration-200 ease-in-out`}
      >
        <div className="relative overflow-hidden w-full h-full">
          <div className="w-[20%] h-[70%] bg-[#3487da] rounded-full absolute left-[20%] top-0 blur-[0.7rem] scale-[1.2]"></div>
          <div className="w-[40%] h-[40%] bg-[#e7aeff] rounded-full absolute left-[28%] top-0 blur-[0.7rem] scale-[1.3]"></div>
          <div className="w-[20%] h-[120%] bg-[#211064] rounded-full absolute right-[-10%] top-[-30%] blur-[0.7rem] scale-[2]"></div>
        </div>
      </div>
    </span>
  );
};

export default ColorfulTextBG;
