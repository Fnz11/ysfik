import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="w-[95%] flex flex-col items-center mt-[10rem] md:mt-[20rem] min-h-screen relative"
      >
        <div className="bg-blue-600 h-[12rem] absolute w-[12rem] aspect-square rounded-full z-[0] -right-32 top-[50rem] blur-[8rem] mr-52 scale-[1.5]"></div>
        <div className="bg-emerald-600 h-[12rem] absolute w-[12rem] aspect-square rounded-full z-[0] right-40 top-[120rem] blur-[10rem] mr-52 scale-[1.5]"></div>
        <div className="bg-purple-700 h-[12rem] absolute w-[12rem] aspect-square rounded-full z-[0] left-40 top-[10rem] blur-[8rem] mr-52 scale-[1.5]"></div>
        <h3 className="text-emerald-400 font-semibold uppercase">
          Apa yang Membuat Kami Berbeda?
        </h3>
        <h1 className="drop-shadow-xl text-3xl md:text-7xl mt-6 md:mt-10 mb-16 md:mb-32 flex flex-col text-center font-[800]">
          Temukan Kepuasan Properti <br />
          Bersama Kami.
        </h1>

        <div className="w-[80%] flex flex-col items-center justify-center mt-10 gap-20 md:gap-10">
          <div className="flex max-md:flex-col bgw w-full h-fit justify-between">
            <div className="md:w-[46%] h-fit relative rounded-[1rem] bg-gradient-to-b from-sky-500 to-[#131119] aspect-square p-[0.2rem]">
              <Image
                width={500}
                height={500}
                src="/Exclusive.png"
                className="w-full absolute blur-[4rem] scale-[0.9] z-[0] aspect-square object-cover rounded-[1rem]"
                alt=""
              />
              <Image
                width={500}
                height={500}
                src="/Exclusive.png"
                className="w-full z-[2] relative saturate-60 aspect-square object-cover rounded-[1rem]"
                alt=""
              />
            </div>
            <div className="max-md:hidden h-[80vh] w-[0.2rem] bg-gray-800 rounded-full relative flex justify-center">
              <div className="w-[1.8rem] aspect-square bg-sky-400 z-[10] flex items-center justify-center rounded-full absolute">
                <Image
                  width={500}
                  height={500}
                  src="/Check.svg"
                  className="w-[60%]"
                  alt=""
                />
              </div>
            </div>
            <div className="md:w-[46%] relative p-[0.2rem]">
              <h1 className="text-3xl max-md:mt-5 max-md:text-center md:text-5xl mb-10 font-bold drop-shadow-xl">
                Akses
                <span className="bg-clip-text text-transparent pb-3 bg-gradient-to-r from-purple-500 to-sky-500">
                  Eksklusif.
                </span>
              </h1>
              <p className="text-justify mb-5 opacity-90">
                Akses eksklusif ke properti berkualitas tinggi merupakan salah
                satu keunggulan utama dari layanan kami. Dengan jaringan yang
                luas dan kemitraan yang solid dengan para pemilik properti, kami
                memiliki akses yang luas ke berbagai properti yang belum
                terdaftar secara publik atau tidak tersedia di pasar terbuka.
                Hal ini memberi Anda kesempatan langka untuk menemukan properti
                yang langka dan berkualitas tinggi yang mungkin tidak dapat Anda
                temui di tempat lain.
              </p>
              <p className="text-justify opacity-90 max-md:hidden">
                Dari rumah-rumah mewah hingga hunian yang ramah lingkungan, kami
                memastikan bahwa setiap properti yang kami tawarkan memenuhi
                standar kualitas yang tinggi, sehingga Anda dapat menemukan
                rumah yang sesuai dengan selera dan kebutuhan Anda.
              </p>
            </div>
          </div>
          <div className="flex max-md:flex-col w-full h-fit justify-between mt-[-3rem]">
            <div className="md:w-[46%] h-fit relative rounded-[1rem] bg-gradient-to-b from-sky-500 to-[#131119] aspect-square p-[0.2rem]">
              <Image
                width={500}
                height={500}
                src="/Personal.png"
                className="w-full absolute blur-[4rem] scale-[0.9] z-[0] aspect-square object-cover rounded-[1rem]"
                alt=""
              />
              <Image
                width={500}
                height={500}
                src="/Personal.png"
                className="w-full z-[2] relative saturate-40 aspect-square object-cover rounded-[1rem]"
                alt=""
              />
            </div>
            <div className="max-md:hidden h-[80vh] w-[0.2rem] bg-gray-800 rounded-full relative flex justify-center">
              <div className="w-[1.8rem] aspect-square bg-sky-400 z-[10] flex items-center justify-center rounded-full absolute">
                <Image
                  width={500}
                  height={500}
                  src="/Check.svg"
                  className="w-[60%]"
                  alt=""
                />
              </div>
            </div>
            <div className="md:w-[46%] relative p-[0.2rem]">
              <h1 className="text-3xl max-md:text-center max-md:mt-5 md:text-5xl mb-10 font-bold drop-shadow-xl">
                Personal dan
                <span className="bg-clip-text text-transparent pb-3 bg-gradient-to-r from-purple-500 to-sky-500">
                  Profesional.
                </span>
              </h1>
              <p className="text-justify mb-5 opacity-90">
                Kami memahami betapa pentingnya pelayanan personal dan
                profesional yang unggul dalam proses pembelian properti. Tim
                kami terdiri dari para profesional properti yang berpengalaman
                dan berdedikasi, yang siap membantu Anda dengan segala aspek
                dalam proses pembelian. Dari pertemuan awal hingga penyelesaian
                transaksi, kami menyediakan layanan yang ramah, personal, dan
                terpercaya.
              </p>
              <p className="text-justify opacity-90 max-md:hidden">
                Kami mendengarkan dengan seksama kebutuhan dan keinginan Anda,
                dan berusaha keras untuk memastikan bahwa setiap langkah dalam
                proses pembelian Anda berjalan dengan lancar dan memuaskan.
              </p>
            </div>
          </div>
          <div className="flex max-md:flex-col w-full h-fit justify-between mt-[-3rem]">
            <div className="md:w-[46%] h-fit relative rounded-[1rem] bg-gradient-to-b from-sky-500 to-[#131119] aspect-square p-[0.2rem]">
              <Image
                width={500}
                height={500}
                src="/Pembayaran.png"
                className="w-full absolute blur-[4rem] scale-[0.9] z-[0] aspect-square object-cover rounded-[1rem]"
                alt=""
              />
              <Image
                width={500}
                height={500}
                src="/Pembayaran.png"
                className="w-full z-[2] relative saturate-40 aspect-square object-cover rounded-[1rem]"
                alt=""
              />
            </div>
            <div className="max-md:hidden h-[80vh] w-[0.2rem] bg-gray-800 rounded-full relative flex justify-center">
              <div className="w-[1.8rem] aspect-square bg-sky-400 z-[10] flex items-center justify-center rounded-full absolute">
                <Image
                  width={500}
                  height={500}
                  src="/Check.svg"
                  className="w-[60%]"
                  alt=""
                />
              </div>
            </div>
            <div className="md:w-[46%] relative p-[0.2rem]">
              <h1 className="text-3xl max-md:text-center max-md:mt-5 md:text-5xl mb-10 font-bold drop-shadow-xl">
                Proses Pembelian
                <span className="bg-clip-text text-transparent pb-3 bg-gradient-to-r from-purple-500 to-sky-500">
                  Mudah.
                </span>
              </h1>
              <p className="text-justify mb-5 opacity-90">
                Proses pembelian properti bisa menjadi rumit dan melelahkan,
                itulah mengapa kami berkomitmen untuk membuatnya seefisien dan
                sesederhana mungkin bagi Anda. Dengan pengalaman dan pengetahuan
                yang luas tentang industri properti, kami akan membimbing Anda
                melalui setiap langkah proses pembelian dengan hati-hati dan
                cermat
              </p>
              <p className="max-md:hidden text-justify opacity-90">
                Tim kami akan mengurus semua detail yang terkait dengan
                transaksi properti Anda, sehingga Anda dapat fokus pada
                menemukan rumah impian Anda.
              </p>
            </div>
          </div>
          <div className="flex max-md:flex-col w-full h-fit justify-between mt-[-3rem]">
            <div className="md:w-[46%] h-fit relative rounded-[1rem] bg-gradient-to-b from-sky-500 to-[#131119] aspect-square p-[0.2rem]">
              <Image
                width={500}
                height={500}
                src="/AfterServices.png"
                className="w-full absolute blur-[4rem] scale-[0.9] z-[0] aspect-square object-cover rounded-[1rem]"
                alt=""
              />
              <Image
                width={500}
                height={500}
                src="/AfterServices.png"
                className="w-full z-[2] relative aspect-square object-cover rounded-[1rem]"
                alt=""
              />
            </div>
            <div className="max-md:hidden h-auto mb-20 w-[0.2rem] bg-gray-800 rounded-full relative flex justify-center">
              <div className="w-[1.8rem] aspect-square bg-sky-400 z-[10] flex items-center justify-center rounded-full absolute">
                <Image
                  width={500}
                  height={500}
                  src="/Check.svg"
                  className="w-[60%]"
                  alt=""
                />
              </div>
            </div>
            <div className="md:w-[46%] relative p-[0.2rem]">
              <h1 className="text-3xl max-md:text-center max-md:mt-5 md:text-5xl mb-10 font-bold drop-shadow-xl">
                After
                <span className="bg-clip-text text-transparent pb-3 bg-gradient-to-r from-emerald-500 to-sky-500">
                  Sales.
                </span>
              </h1>
              <p className="text-justify mb-5 opacity-90">
                Komitmen kami tidak berhenti setelah penyelesaian transaksi.
                Kami menyadari bahwa pemilik properti seringkali memerlukan
                bantuan atau saran bahkan setelah pembelian selesai. Oleh karena
                itu, kami menawarkan dukungan yang berkelanjutan pasca-pembelian
                kepada semua klien kami.
              </p>
              <p className="text-justify opacity-90 max-md:hidden">
                Tim kami akan tetap tersedia untuk membantu Anda dengan segala
                pertanyaan atau kekhawatiran yang mungkin timbul setelah Anda
                menjadi pemilik properti. Dengan layanan yang berkelanjutan dan
                komitmen yang berkelanjutan terhadap kepuasan Anda
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
