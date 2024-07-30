"use client";

import { useEffect } from "react";

import { Rss } from "lucide-react";
import Image from "next/image";
import { useActiveSection } from "@/hooks/useActiveSection";

import { useInView } from "react-intersection-observer";

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
        <div className="flex flex-col items-start text-white gap-4 max-w-[50rem]">
          <span className="text-[22px] font-bold">Ajit Thapa</span>
          <h2 className="text-[30px] text-[#a6e3a1] border-dashed border-b-2 border-white mb-4 xl:text-[42px]">
            Software Engineer
          </h2>
          <p className="text-[18px] text-wrap xl:text-[22px]">
            I specialize in crafting immersive user experiences using the latest
            frontend technologies and frameworks to bring your vision to life.
            Additionally, my expertise extends to backend technologies as well,
            with combining both technologies it leads to developing a full
            fledge functional Web Application.
          </p>
          <div className="w-full flex items-center gap-6 mt-6 xl:gap-8">
            <a
              href="#contact"
              className="cursor-pointer flex items-center gap-2 text-black text-[16px] bg-[#a6e3a1] border-2 p-2 rounded-xl shadow-lg  hover:bg-transparent hover:text-white/80 hover:border-2 hover:border-white/80 transition-all ease-in-out duration-300 xl:px-4 xl:py-2 xl:text-[22px]"
            >
              <span>Get in touch</span>{" "}
              <Rss className="w-4 h-4 xl:w-6 xl:h-6" />
            </a>
            <div className="flex items-center gap-2 border-b-4 border-[#a6e3a1] py-2 w-fit">
              <span className="border border-white/20 rounded-full bg-green-400 p-[0.35rem]"></span>
              <span className="text-[16px] xl:text-[22px]">Available now</span>
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
