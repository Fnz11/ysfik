import Image from 'next/image'
import React from 'react'

const Quotes = () => {
  return (
    <>
        <section className="min-h-screen w-full md:my-[5rem] flex items-center justify-center">
          <div className="w-screen h-[80vh] bg-white flex relative">
            <Image
              width={500}
              height={500}
              src="/QuoteBG.png"
              className="w-full absolute top-0 scale-y-[0.7] blur-[15rem] h-[80vh] object-cover"
              alt=""
            />
            <Image
              width={500}
              height={500}
              src="/QuoteBG.png"
              className="w-full absolute -bottom-20 opacity-[0.3] blur-[4rem] h-[80vh] object-cover"
              alt=""
            />
            <Image
              width={500}
              height={500}
              src="/QuoteBG.png"
              className="w-full object-cover absolute h-[80vh] z-[2]"
              alt=""
            />
            <div className="w-full h-full bg-[rgba(0,0,0,0.5)] z-[2] absolute"></div>
            <div className="z-[4] w-[80%] mx-auto h-full flex flex-col items-center justify-center">
              <h1 className="text-3xl md:text-7xl md:leading-[5rem] mb-10 font-bold drop-shadow-xl text-center">
                {"Don't wait to buy real estate. Buy real estate and wait."}
              </h1>
              <h4 className="font-bold uppercase">- Will Rogers -</h4>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:scale-[0.98] hover:via-purple-400 hover:to-purple-500 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg px-10 py-2.5 text-center me-2 mb-2 flex items-center justify-center gap-3 transition-all ease-in-out duration-300 text-lg font-semibold mt-10"
              >
                List Property
                <Image
                  width={500}
                  height={500}
                  src="/WhiteArrow.svg"
                  className="h-3 -rotate-90"
                  alt=""
                />
              </button>
            </div>
          </div>
        </section>
    </>
  )
}

export default Quotes