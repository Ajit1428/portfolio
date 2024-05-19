"use client";

import { useEffect } from "react";

import Image from "next/image";
import { SkillImages } from "./skills-images";
import { ArrowDownToLine } from "lucide-react";

import { useActiveSection } from "@/hooks/useActiveSection";

import { useInView } from "react-intersection-observer";

export const AboutMe = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setIsActive } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setIsActive("About");
    }
  }, [inView, setIsActive]);
  return (
    <>
      <div id="about" ref={ref} className="py-[16rem] px-[10rem] h-screen">
        <section className="flex item-center justify-center gap-[10rem] ">
          <Image
            src="/images/about.jpg"
            alt="About section image"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <div className="flex flex-col items-start text-white gap-10 pr-[10rem] group">
            <h2 className="relative text-[2.5rem] mb-4">
              About Me
              <span className="absolute text-sm font-semibold -bottom-3 left-[5.9rem] w-full text-[#a6e3a1]">
                — Who am I?
              </span>
            </h2>
            <p className="text-[1.3rem]">
              I am currently working as an Intern at Hamro Patro Inc. I have a
              keen interest in Fullstack development. My goal is to use my
              expertise in building exciting and functional user interfaces.
              Additionally, employ my analysis, modeling, and process automation
              skills to engineer innovative, customizable, and sustainable
              software solutions. The following are tech stacks that I use
              regularly:
            </p>
            <div className="flex flex-wrap items-center gap-8">
              {SkillImages.map((skill) => (
                <div
                  key={skill.skillSrc}
                  className="flex flex-col items-center gap-2"
                >
                  <Image
                    src={skill.skillSrc}
                    alt="Skills"
                    width={50}
                    height={50}
                  />
                  <span>{skill.skillTitle}</span>
                </div>
              ))}
            </div>
            <a href="/CV.pdf" download>
              <button className="cursor-pointer flex items-center gap-2 text-[#a6e3a1] transition-all ease-in-out mt-4 text-[1.3rem] border-2 border-[#a6e3a1] px-4 py-2  rounded-lg shadow-lg hover:bg-[#a6e3a1] hover:text-black">
                <ArrowDownToLine className="w-6 h-6" /> Download CV
              </button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};
