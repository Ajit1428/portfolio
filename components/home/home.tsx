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
    <div id="home" ref={ref} className="active px-[15rem] h-screen py-[20rem]">
      <section className="flex item-center justify-center gap-[20rem]">
        <div className="flex flex-col items-start text-white gap-4 max-w-[50rem]">
          <span className="text-[1.6rem]">Ajit Thapa</span>
          <h2 className="text-[3rem] text-[#a6e3a1] border-dashed border-b-2 border-white mb-4">
            Software Engineer
          </h2>
          <p className="text-[1.3rem] text-wrap">
            I specialize in crafting immersive user experiences using the latest
            frontend technologies and frameworks to bring your vision to life.
            Additionally, my expertise extends to backend technologies as well,
            with combining both technologies it leads to developing a full
            fledge functional Web Application.
          </p>
          <div className="flex items-center mt-6 gap-8">
            <a
              href="#contact"
              className="cursor-pointer flex items-center gap-2 text-black text-[1.3rem] bg-[#a6e3a1] border-2 px-4 py-2  rounded-lg shadow-lg  hover:bg-transparent hover:text-white/80 hover:border-2 hover:border-white/80 transition-all ease-in-out duration-300"
            >
              Get in touch <Rss className="w-6 h-6" />
            </a>
            <div className="flex items-center gap-2 border-b-2 border-[#a6e3a1] py-2 w-fit">
              <span className="border border-white/20 rounded-full bg-green-400 p-[0.35rem]"></span>
              <span className="text-[1.3rem]">Available now</span>
            </div>
          </div>
        </div>
        <Image
          src="/images/about.jpg"
          alt="About section image"
          width={400}
          height={400}
          className="rounded-full"
        />
      </section>
    </div>
  );
};
