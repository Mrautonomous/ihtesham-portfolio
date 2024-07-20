"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Content } from "next/font/google";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQl</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Secondary School in Computer Sciences.</li>
        <li>Higher Secondary School in Computer Sciences.</li>
        <li>Bachelors in Computer Sciences.</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certificate in Information Technologies.</li>
        <li>Javascript Course from Code with Harry, Youtube.</li>
        <li>MERN Stack Web Development Bootcamp from Dr.Angela Yu, Udemy.</li>
        <li>React Course from Maximilian Schwarzmüller, Udemy.</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-2 xl:gap-16 sm:py-16">
        <Image
          className="rounded-md"
          src="/images/about-image.png"
          width={500}
          height={500}
          alt=""
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl text-white font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Web Applications Developer with a passion for creating
            interactive and responsive Web Applications. I have experience
            working with Javascript, React.js, Redux, Next.js, Node.js,
            Express.js, MongoDB, HTML, CSS, Tailwind CSS and Git. I am a quick
            learner I am always looking to expand my knowledge and skill set. I
            have created multiple projects in Freelance and also with teams. I
            am a team player and I am excited to work with others to create
            amazing applications.
          </p>
          <div className="flex justify-start flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""}
              Skills{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {""}
              Education{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {""}
              Certifications{""}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
