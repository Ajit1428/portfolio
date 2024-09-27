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
        className="h-full w-full flex items-center justify-center active pt-[6rem] px-10 pb-32 md:px-[120px] xl:h-screen xl:pb-0 2xl:px-[150px]"
      >
        <section className="flex flex-col-reverse items-center justify-center gap-20 xl:gap-[4rem] xl:flex-row 2xl:gap-[6rem]">
          <Image
            className="rounded-lg w-[300px] h-[300px] md:w-[480px] md:h-[480px] xl:h-[520px] xl:w-[520px] 2xl:w-[600px] 2xl:h-[600px]"
            src="/images/about.jpg"
            alt="About section image"
            width={608}
            height={655}
          />
          <div className="flex flex-col items-start gap-[1.4rem] dark:text-white group">
            <h2 className="relative text-[30px] font-semibold mb-4 md:text-[34px] 2xl:text-[42px]">
              About Me
              <span className="absolute text-[12px] -bottom-3 left-[3.7rem] md:left-[4rem] md:text-[14px] 2xl:text-[16px] 2xl:left-[5.5rem] w-full text-light-primary dark:text-dark-primary">
                —- Who am I?
              </span>
            </h2>
            <p className="text-[16px] text-wrap md:text-[18px] 2xl:text-[22px]">
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
                    className="w-[30px] h-[30px] xl:w-[35px] xl:h-[35px] 2xl:w-[40px] 2xl:h-[40px]"
                  />
                  <span className="text-[12px] md:text-[14px] 2xl:text-[16px] text-center">
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
              <span className="font-semibold flex items-center gap-2 text-[16px] transition-all ease-in-out duration-300 mt-4 border-2 px-4 py-1 text-light-primary border-light-primary rounded-tl-md rounded-bl-[24px] rounded-br-md rounded-tr-[24px] shadow-lg hover:bg-light-primary hover:text-white cursor-pointer xl:text-[18px] 2xl:text-[22px] dark:text-dark-primary dark:border-dark-primary dark:hover:bg-dark-primary dark:hover:text-black">
                <ArrowDownToLine className="w-4 h-4 xl:w-6 xl:h-6" /> Download
                CV
              </span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};
