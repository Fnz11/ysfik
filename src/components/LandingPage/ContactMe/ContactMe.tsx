"use client";
import Image from "next/image";
import React from "react";
import Title from "../../Title";
import Button from "../../Button";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { socialLinks } from "@/const/linkData";
import ScrollReveallComponent from "@/components/ScrollReveallComponent";

const ContactMe = () => {
  if (typeof window === "undefined") return null;
  return (
    <>
      <section
        id="contact"
        className="flex flex-col items-center justify-center min-h-[35rem] gap-2 md:gap-5  mt-32 md:px-44 shadow m-4"
      >
        <Title title="Get in touch" color="text-purple-600">
          Let{"'"}s work together
        </Title>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20 ">
          <ScrollReveallComponent far={700} delay={200}>
            <Button
              onClick={() => window.open(socialLinks.whatsapp, "_blank")}
              bordered
              square="max-md:aspect-square max-md:h-[6rem] aspect-square h-[6vw] flex flex-col items-center justify-center"
            >
              <div className="size-full font-medium text-sm absolute z-2 flex flex-col items-center justify-center">
                <FaWhatsapp className="h-[45%] w-[45%] text-white text-2xl" />
                Whatsapp
              </div>
            </Button>
          </ScrollReveallComponent>

          <ScrollReveallComponent far={700} delay={400}>
            <Button
              onClick={() => window.open(socialLinks.email, "_blank")}
              bordered
              square="max-md:aspect-square max-md:h-[6rem] aspect-square h-[6vw] flex flex-col items-center justify-center"
            >
              <div className="size-full font-medium text-sm absolute z-2 flex flex-col items-center justify-center">
                <MdOutlineEmail className="h-[45%] w-[45%] text-white text-2xl" />
                Email
              </div>
            </Button>
          </ScrollReveallComponent>

          <ScrollReveallComponent far={700} delay={600}>
            <Button
              onClick={() => window.open(socialLinks.github, "_blank")}
              bordered
              square="max-md:aspect-square max-md:h-[6rem] aspect-square h-[6vw] flex flex-col items-center justify-center"
            >
              <div className="size-full font-medium text-sm absolute z-2 flex flex-col items-center justify-center">
                <FaGithub className="h-[45%] w-[45%] text-white text-2xl" />
                Github
              </div>
            </Button>
          </ScrollReveallComponent>

          <ScrollReveallComponent far={700} delay={800}>
            <Button
              onClick={() => window.open(socialLinks.instagram, "_blank")}
              bordered
              square="max-md:aspect-square max-md:h-[6rem] aspect-square h-[6vw] flex flex-col items-center justify-center"
            >
              <div className="size-full font-medium text-sm absolute z-2 flex flex-col items-center justify-center">
                <FaInstagram className="h-[45%] w-[45%] text-white text-2xl" />
                Instagram
              </div>
            </Button>
          </ScrollReveallComponent>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
