import Image from "next/image";
import React from "react";
import Title from "../../Title";
import FeatureSection from "./Organism/FeatureSection";

const Features = () => {
  const featuresData = [
    {
      title: "Crafted for",
      titleAccent: "Success",
      image: "/Success.png",
      description1:
        "At the heart of our process lies collaboration. We see our clients as partners in every sense, valuing open communication, mutual respect, and shared goals. Throughout the journey, from the initial brainstorming sessions to the final delivery, we work closely with you, ensuring that your vision is not only realized but enhanced through our collaboration.",
      description2:
        "Our team takes the time to listen to your feedback, address your concerns, and incorporate your ideas into the project seamlessly. By fostering a collaborative environment, we're able to harness the collective wisdom of our team and yours, resulting in solutions that are not only technically sound but also aligned with your business objectives and values.",
    },
    {
      title: "Innovation",
      titleAccent: "Redefined",
      image: "/Innovation.png",
      description1:
        "Innovation is the lifeblood of our organization. It's not just about adopting the latest trends; it's about challenging conventions, pushing boundaries, and redefining what's possible. Our team of forward-thinkers is constantly on the lookout for new technologies, methodologies, and approaches that can revolutionize the way we work.",
      description2:
        "We foster a culture of experimentation and exploration, where failure is seen as an opportunity to learn and grow. This relentless pursuit of innovation allows us to stay ahead of the curve and anticipate the needs of tomorrow, ensuring that your project is always at the forefront of technological advancement.",
    },
    {
      title: "Collaboration",
      titleAccent: "Elevated",
      image: "/Collaboration.png",
      description1:
        "Collaboration isn't just a buzzword for us—it's a core value that permeates everything we do. We view our clients as partners, not just customers, and believe that the best results are achieved through open communication, mutual respect, and shared goals.",
      description2:
        "From the initial brainstorming sessions to the final delivery, we work hand in hand with you every step of the way, ensuring that your vision is not only realized but enhanced through our collaboration. Our commitment is to build long-term relationships based on trust, transparency, and mutual respect.",
    },
    {
      title: "Committed to",
      titleAccent: "Excellence",
      image: "/Excellence.png",
      description1:
        "Excellence isn't achieved overnight—it's the result of unwavering dedication, meticulous attention to detail, and a relentless pursuit of perfection. That's why we approach every project with a commitment to excellence that is second to none.",
      description2:
        "We hold ourselves to the highest standards of professionalism and integrity. Your satisfaction is not just a goal for us—it's a benchmark by which we measure our success. We take pride in delivering solutions that not only meet but exceed your expectations, leaving a lasting impression on your customers and stakeholders.",
    },
  ];

  return (
    <>
      <section
        id="features"
        className="w-[95%] flex flex-col items-center mt-[10rem] md:mt-[20rem] min-h-screen relative"
      >
        {/* LIGHT */}
        <div className="bg-blue-600 h-[12rem] absolute w-[12rem] aspect-square rounded-full z-[0] -right-32 top-[50rem] blur-[9rem] mr-52 scale-[1.5]"></div>
        <div className="bg-indigo-500 h-[12rem] absolute w-[12rem] aspect-square rounded-full z-[0] ml-[40rem] top-[120rem] blur-[8rem] mr-52 scale-[1.5]"></div>
        <div className="bg-purple-700 h-[12rem] absolute w-[12rem] aspect-square rounded-full z-[0] left-40 top-[10rem] blur-[8rem] mr-52 scale-[1.5]"></div>
        <div className="bg-pink-500 h-[12rem] absolute w-[12rem] aspect-square rounded-full z-[0] -right-[20rem] bottom-[20rem] blur-[10rem] mr-52 scale-[1.5]"></div>

        {/* TITLE */}
        <Title color={"text-pink-500"} title={"Why Choose Us?"}>
          Discover Our Exceptional <br />
          Features.
        </Title>

        {/* CONTENT */}
        <div className="w-[80%] flex flex-col items-center justify-center mt-10 gap-20 md:gap-10">
          {featuresData.map((data, index) => (
            <FeatureSection key={index} index={index} data={data} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
