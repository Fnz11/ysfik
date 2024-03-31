const LightPreloader = () => {
  return (
    <>
      <div className="preloader-light absolute z-[6] h-[20rem] aspect-square bg-indigo-600 blur-[12rem] rounded-full scale-[1.2] top-[30vh] left-0"></div>
      <div className="preloader-light absolute z-[6] h-[20rem] aspect-square bg-purple-600 blur-[17rem] rounded-full scale-[1.2] bottom-0 right-0"></div>
      <div className="preloader-light absolute z-[6] h-[20rem] aspect-square bg-purple-600 blur-[15rem] rounded-full max-md:hidden scale-[1.2] bottom-0 "></div>
      <div className="preloader-light absolute z-[6] h-[20rem] aspect-square bg-emerald-600 blur-[17rem] rounded-full scale-[1.2] top-[-25vh] "></div>
    </>
  );
};

export default LightPreloader;
