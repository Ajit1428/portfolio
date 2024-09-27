"use client";

import { useEffect } from "react";

import { useActiveSection } from "@/hooks/useActiveSection";

import { useInView } from "react-intersection-observer";
import { ProjectSection } from "./project-section";

export const ProjectsPage = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const { setIsActive } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setIsActive("Projects");
    }
  }, [inView, setIsActive]);

  return (
    <div
      id="projects"
      ref={ref}
      className="h-auto w-full active flex justify-center px-4 py-[6rem] md:block md:px-8 lg:px-[4rem] xl:px-[10rem] xl:py-[10rem] "
    >
      <section className="flex flex-col">
        <div className="flex flex-col items-center justify-center gap-14 xl:gap-[50px] ">
          <h2 className="text-[32px] font-bold xl:text-[32px] 2xl:text-[42px] dark:text-white ">
            Projects
          </h2>
          <ProjectSection />
        </div>
      </section>
    </div>
  );
};
