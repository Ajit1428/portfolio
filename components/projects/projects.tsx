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
      className="active flex h-auto w-full justify-center px-4 py-24 md:block md:px-8 lg:px-16 xl:p-40 "
    >
      <section className="flex flex-col">
        <div className="flex flex-col items-center justify-center gap-14 xl:gap-[50px] ">
          <h2 className="text-[32px] font-bold dark:text-white xl:text-[32px] 2xl:text-[42px] ">
            Projects
          </h2>
          <ProjectSection />
        </div>
      </section>
    </div>
  );
};
