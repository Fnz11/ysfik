const LightPreloader = () => {
  return (
    <>
      <div className="preloader-light absolute z-[6] h-[20rem] aspect-square bg-indigo-600 blur-[10rem] rounded-full scale-[1.3] top-[20vh] left-0"></div>
      <div className="preloader-light absolute z-[6] h-[20rem] aspect-square bg-purple-600 blur-[14rem] rounded-full scale-[1.4] bottom-0 right-0"></div>
      <div className="preloader-light absolute z-[6] h-[20rem] aspect-square bg-purple-600 blur-[15rem] rounded-full max-md:hidden scale-[1.4] bottom-0 "></div>
      <div className="preloader-light absolute z-[6] h-[20rem] aspect-square bg-emerald-600 blur-[11rem] rounded-full scale-[1.4] top-[-25vh] "></div>
    </>
  );
};

export default LightPreloader;
