"use client";

import { useEffect, useState } from "react";

import { useActiveSection } from "@/hooks/useActiveSection";

import { useInView } from "react-intersection-observer";
import { ProjectButtons } from "@/utils/projects/project-buttons";
import { cn } from "@/utils/cn";
import { ProjectSection } from "./project-section";

export const ProjectsPage = () => {
  const [isActiveButton, setIsActiveButton] = useState("All");
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
      className="h-auto w-full active px-4 pb-10 pt-[8rem] xl:px-[159px] xl:py-[10rem] "
    >
      <section className="flex flex-col">
        <div className="flex flex-col items-center justify-center gap-14 xl:gap-[50px] ">
          <h2 className="text-[32px] font-bold text-white xl:text-[42px]">
            Projects
          </h2>
          <div className="flex items-center gap-4 xl:gap-[59px]">
            {ProjectButtons.map((button) => (
              <button
                key={button.label}
                onClick={() => setIsActiveButton(button.label)}
                className={cn(
                  "border-2 border-[#a6e3a1] py-1 px-4 rounded-lg transition-all ease-in-out duration-300 bg-transparent text-white/80  hover:bg-[#a6e3a1] hover:text-black xl:text-lg ",
                  isActiveButton === button.label &&
                    "bg-[#a6e3a1] text-black hover:bg-transparent hover:text-white/80 hover:border-white/80",
                )}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid mt-14 gap-14 xl:grid-cols-2 xl:gap-20 xl:mt-24">
          {(isActiveButton === "Fullstack" || isActiveButton === "All") && (
            <>
              <ProjectSection
                projectImageUrl="/images/projects/Ecommerce.png"
                title="MERN Ecommerce"
                description="Feature packed MERN Stack Ecommerce which I developed during my learning phase and one of my very first complete project."
                technologies={[
                  {
                    technologyImageUrl: "/images/technologies/React.png",
                  },
                  {
                    technologyImageUrl: "/images/technologies/Node.js.png",
                  },
                  {
                    technologyImageUrl: "/images/technologies/Expressjs.png",
                  },
                  {
                    technologyImageUrl: "/images/technologies/JS.png",
                  },
                  {
                    technologyImageUrl: "/images/technologies/MongoDB.png",
                  },
                  {
                    technologyImageUrl: "/images/technologies/CSS3.png",
                  },
                ]}
                githubLink="https://github.com/Ajit1428/Ecommerce"
              />
              <ProjectSection
                projectImageUrl="/images/projects/KBSL.png"
                title="CMS"
                description="A simple CMS developed for K.B.L Securities Limited, requested technologies were used and it's one of my on-going project."
                technologies={[
                  {
                    technologyImageUrl: "/images/technologies/Next.js.png",
                  },
                  {
                    technologyImageUrl: "/images/technologies/Typescript.png",
                  },
                  {
                    technologyImageUrl: "/images/technologies/MongoDB.png",
                  },
                  {
                    technologyImageUrl: "/images/technologies/Clerk.png",
                  },
                  {
                    technologyImageUrl: "/images/technologies/Shadcn.svg",
                  },
                ]}
                githubLink="https://github.com/Ajit1428/kbl-securities-kumari-bank"
              />
            </>
          )}
          {(isActiveButton === "All" || isActiveButton === "Frontend") && (
            <>
              <ProjectSection
                projectImageUrl="/images/projects/MiniFood.png"
                title="Mini Recipe Food App"
                description="A simple Mini Food Recipe App developed by using Svelte, tested out the functionality as well as the free API's"
                technologies={[
                  {
                    technologyImageUrl: "/images/technologies/Svelte.png",
                  },
                  {
                    technologyImageUrl: "/images/technologies/Typescript.png",
                  },
                  {
                    technologyImageUrl: "/images/technologies/JS.png",
                  },
                  {
                    technologyImageUrl: "/images/technologies/Clerk.png",
                  },
                  {
                    technologyImageUrl: "/images/technologies/Material UI.png",
                  },
                  {
                    technologyImageUrl: "/images/technologies/Tailwind CSS.png",
                  },
                ]}
                githubLink="https://github.com/Ajit1428/svelte-simple-mini-food-recipe"
              />
              <ProjectSection
                projectImageUrl="/images/projects/WeatherApp.png"
                title="Weather App"
                description="A simple weather app that shows the current weather of cities. It is a progressive web application where free weather API is used "
                technologies={[
                  {
                    technologyImageUrl: "/images/technologies/React.png",
                  },
                  {
                    technologyImageUrl: "/images/technologies/JS.png",
                  },
                  {
                    technologyImageUrl: "/images/technologies/Tailwind CSS.png",
                  },
                ]}
                githubLink="https://github.com/Ajit1428/pwa-react-weather"
              />
            </>
          )}
          {(isActiveButton === "All" || isActiveButton === "Linux") && (
            <ProjectSection
              projectImageUrl="/images/projects/Linux-Rice.png"
              title="Arch-Hyprland"
              description="Linux ricing is not cosidered as development but it's one of my personal projects. 
                Arch is a customizable distro which can be turned into own liking where I have used Hyprland as a Window Manager "
              technologies={[
                {
                  technologyImageUrl: "/images/technologies/Arch Linux.png",
                },
                {
                  technologyImageUrl: "/images/technologies/Hyprland.png",
                },
                {
                  technologyImageUrl: "/images/technologies/Lua.png",
                },
                {
                  technologyImageUrl: "/images/technologies/Vim.png",
                },
              ]}
              githubLink="https://github.com/Ajit1428/dotfiles"
            />
          )}
        </div>
      </section>
    </div>
  );
};
