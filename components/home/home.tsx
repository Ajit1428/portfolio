"use client";

import { useEffect } from "react";

import { Rss } from "lucide-react";
import Image from "next/image";
import { useActiveSection } from "@/hooks/useActiveSection";

import { useInView } from "react-intersection-observer";
import { ReactTyped } from "react-typed";

export const HomePage = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setIsActive } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setIsActive("Home");
    }
  }, [inView, setIsActive]);

  return (
    <div
      id="home"
      ref={ref}
      className="active flex size-full items-center justify-center px-8 pb-10 pt-32 md:h-screen md:px-[30px] xl:px-[130px] xl:py-0 "
    >
      <section className="flex flex-col items-center justify-center gap-20 md:flex-row xl:gap-24">
        <div className="flex max-w-[50rem] flex-col items-start gap-4">
          <div className="text-[28px] font-bold text-light-primary dark:text-dark-primary md:text-[30px] xl:text-[40px] 2xl:text-[3rem]">
            <ReactTyped
              strings={[
                "Hey, I'm Ajit Thapa.",
                "A Software Engineer.",
                "A Web Developer.",
              ]}
              typeSpeed={100}
              backSpeed={100}
              loop
            />
          </div>
          <p className="text-wrap text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[22px]">
            I specialize in crafting immersive user experiences using the latest
            frontend technologies and frameworks to bring your vision to life.
            Additionally, my expertise extends to backend technologies as well,
            with combining both technologies it leads to developing a full
            fledge functional Web Application.
          </p>
          <div className="mt-6 flex w-full items-center gap-6 xl:gap-8">
            <a
              href="#contact"
              className="flex cursor-pointer items-center gap-2 rounded-bl-md rounded-br-[24px] rounded-tl-[24px] rounded-tr-md border-2 border-light-primary bg-light-primary px-4 py-1 text-[14px] font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:border-2 hover:bg-transparent hover:text-light-primary dark:border-dark-primary dark:bg-dark-primary dark:text-black dark:hover:bg-transparent dark:hover:text-dark-primary md:text-[16px] xl:text-[18px] 2xl:text-[22px]"
            >
              <span>Get in touch</span>
              <Rss className="size-4 xl:size-6" />
            </a>
            <div className="flex w-fit items-center gap-2 border-b-4 border-light-primary py-1 dark:border-dark-primary">
              <span className="rounded-full border border-white/20 bg-green-600 p-1 dark:bg-green-400 xl:p-[0.35rem] "></span>
              <span className="text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[22px]">
                Available now
              </span>
            </div>
          </div>
        </div>
        <Image
          src="/images/about.jpg"
          alt="About section image"
          width={400}
          height={400}
          className="size-[300px] rounded-full xl:my-4 xl:size-[350px] 2xl:size-[400px]"
        />
      </section>
    </div>
  );
};
