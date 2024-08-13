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
      <div
        id="about"
        ref={ref}
        className="h-full w-full flex items-center justify-center active pt-[6rem] px-10 pb-10 xl:pb-0 xl:h-screen xl:px-[208px] "
      >
        <section className="flex flex-col-reverse items-center justify-center gap-20 xl:gap-[10rem] xl:flex-row">
          <Image
            className="rounded-lg w-[300px] h-[300px] xl:w-[608px] xl:h-[655px]"
            src="/images/about.jpg"
            alt="About section image"
            width={0}
            height={0}
          />
          <div className="flex flex-col items-start gap-[1.4rem] dark:text-white group">
            <h2 className="relative text-[30px] font-semibold mb-4 xl:text-[42px]">
              About Me
              <span className="absolute text-[12px] -bottom-3 left-[3.7rem] xl:text-[16px] xl:left-[5.5rem] w-full text-light-primary dark:text-dark-primary">
                —- Who am I?
              </span>
            </h2>
            <p className="text-[16px] text-wrap xl:text-[22px]">
              I am currently working as an Associate Software Engineer at Hamro
              Patro Inc. I have a keen interest in Fullstack development. My
              goal is to use my expertise in building exciting and functional
              user interfaces. Additionally, employ my analysis, modeling, and
              process automation skills to engineer innovative, customizable,
              and sustainable software solutions. The following are tech stacks
              that I use regularly:
            </p>
            <div className="grid grid-cols-4 items-center gap-4 xl:grid-cols-8">
              {SkillImages.map((skill) => (
                <div
                  key={skill.skillSrc}
                  className="flex flex-col items-center gap-2 pt-4"
                >
                  <Image
                    src={skill.skillSrc}
                    alt="Skills"
                    width={0}
                    height={0}
                    className="w-[40px] h-[40px]"
                  />
                  <span className="text-[12px] xl:text-[16px] text-center">
                    {skill.skillTitle}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="/CV.pdf"
              download
              className="w-full flex justify-center items-center xl:justify-normal"
            >
              <span className="font-semibold flex items-center gap-2 text-[16px] transition-all ease-in-out duration-300 mt-4 border-2 px-4 py-2 text-light-primary border-light-primary rounded-lg shadow-lg hover:bg-light-primary hover:text-white cursor-pointer xl:text-[22px] dark:text-dark-primary dark:border-dark-primary dark:hover:bg-dark-primary dark:hover:text-black">
                <ArrowDownToLine className="w-6 h-6" /> Download CV
              </span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};
