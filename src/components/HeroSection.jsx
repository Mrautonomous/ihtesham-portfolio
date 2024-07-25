"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-14">
      <div className="grid grid-cols-1 sm:grid-col-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-2 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I am {"  "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Ihtesham Ahmad",
                1000,
                "a Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Welcome to the portfolio website of a seasoned web developer. Here,
            you will find a showcase of my work, demonstrating proficiency in
            HTML, CSS, JavaScript, React.js, Next.js, and Node.js. From sleek
            and modern designs to powerful web applications, I specialize in
            creating engaging digital experiences. Take a look at my portfolio
            to see examples of my projects, and lets discuss how I can help
            bring your ideas to life online.
          </p>

          <div className="rounded-full place-self-center shadow-slate-500 shadow-lg bg-[#181818] w-[250px] h-[250px] lg:w-[250px] lg:h[300px] relative">
            <Image
              className="mx-auto rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 shadow-purple-400 shadow-xl"
              src="/images/DP2.png"
              alt="DP"
              width={200}
              height={200}
            />
          </div>

          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mt-6 mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
