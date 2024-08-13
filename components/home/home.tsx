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
      className="h-full w-full flex items-center justify-center active mt-[8rem] px-8 pb-10 xl:pb-0 xl:h-screen xl:mt-[initial] xl:px-[208px] "
    >
      <section className="flex flex-col items-center justify-center gap-20 xl:gap-[10rem] xl:flex-row">
        <div className="flex flex-col items-start gap-4 max-w-[50rem]">
          <div className="font-bold text-[28px] text-light-primary xl:text-[3rem] dark:text-dark-primary">
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
          <p className="text-[14px] text-wrap xl:text-[22px]">
            I specialize in crafting immersive user experiences using the latest
            frontend technologies and frameworks to bring your vision to life.
            Additionally, my expertise extends to backend technologies as well,
            with combining both technologies it leads to developing a full
            fledge functional Web Application.
          </p>
          <div className="w-full flex items-center gap-6 mt-6 xl:gap-8">
            <a
              href="#contact"
              className="font-bold cursor-pointer flex items-center gap-2 text-[14px] border-2 p-2 rounded-xl shadow-lg hover:border-2 bg-light-primary text-white hover:bg-transparent hover:border-light-primary hover:text-light-primary transition-all ease-in-out duration-300 xl:px-4 xl:py-2 xl:text-[22px] dark:bg-dark-primary dark:border-dark-primary dark:hover:text-dark-primary dark:hover:border-dark-primary dark:hover:bg-transparent dark:text-black"
            >
              <span>Get in touch</span>{" "}
              <Rss className="w-4 h-4 xl:w-6 xl:h-6" />
            </a>
            <div className="flex items-center gap-2 border-b-4 border-light-primary py-2 w-fit dark:border-dark-primary">
              <span className="border border-white/20 rounded-full p-[0.25rem] xl:p-[0.35rem] bg-green-600 dark:bg-green-400 "></span>
              <span className="text-[14px] xl:text-[22px]">Available now</span>
            </div>
          </div>
        </div>
        <Image
          src="/images/about.jpg"
          alt="About section image"
          width={400}
          height={400}
          className="rounded-full w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] xl:my-4"
        />
      </section>
    </div>
  );
};
