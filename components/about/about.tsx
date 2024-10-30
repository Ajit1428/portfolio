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
        className="active flex size-full items-center justify-center px-10 pb-32 pt-24 md:px-[120px] xl:h-screen xl:pb-0 2xl:px-[150px]"
      >
        <section className="flex flex-col-reverse items-center justify-center gap-20 xl:flex-row xl:gap-16 2xl:gap-24">
          <Image
            className="size-[300px] rounded-lg md:size-[480px] xl:size-[520px] 2xl:size-[600px]"
            src="/images/about.jpg"
            alt="About section image"
            width={608}
            height={655}
          />
          <div className="group flex flex-col items-start gap-[1.4rem] dark:text-white">
            <h2 className="relative mb-4 text-[30px] font-semibold md:text-[34px] 2xl:text-[42px]">
              About Me
              <span className="absolute -bottom-3 left-[3.7rem] w-full text-[12px] text-light-primary dark:text-dark-primary md:left-16 md:text-[14px] 2xl:left-[5.5rem] 2xl:text-[16px]">
                —- Who am I?
              </span>
            </h2>
            <p className="text-wrap text-[16px] md:text-[18px] 2xl:text-[22px]">
              I am currently working as an Associate Software Engineer at Hamro
              Patro Inc. My goal is to use my expertise in building exciting and
              functional user interfaces. The following are tech stacks that I
              use regularly:
            </p>
            <div className="grid grid-cols-4 items-center gap-4 md:grid-cols-6 xl:grid-cols-5 2xl:grid-cols-7">
              {SkillImages.map((skill) => (
                <div
                  key={skill.skillSrc}
                  className="flex flex-col items-center gap-2 pt-4"
                >
                  <Image
                    src={skill.skillSrc}
                    alt="Skills"
                    width={40}
                    height={40}
                    className="size-[30px] xl:size-[35px] 2xl:size-[40px]"
                  />
                  <span className="text-center text-[12px] md:text-[14px] 2xl:text-[16px]">
                    {skill.skillTitle}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="/CV.pdf"
              download
              className="flex w-full items-center justify-center xl:justify-normal"
            >
              <span className="mt-4 flex cursor-pointer items-center gap-2 rounded-bl-[24px] rounded-br-md rounded-tl-md rounded-tr-[24px] border-2 border-light-primary px-4 py-1 text-[16px] font-semibold text-light-primary shadow-lg transition-all duration-300 ease-in-out hover:bg-light-primary hover:text-white dark:border-dark-primary dark:text-dark-primary dark:hover:bg-dark-primary dark:hover:text-black xl:text-[18px] 2xl:text-[22px]">
                <ArrowDownToLine className="size-4 xl:size-6" /> Download CV
              </span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};
