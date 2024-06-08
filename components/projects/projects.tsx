"use client";

import { useEffect, useState } from "react";

import { useActiveSection } from "@/hooks/useActiveSection";

import { useInView } from "react-intersection-observer";
import { ProjectButtons } from "@/utils/projects/project-buttons";
import { cn } from "@/utils/cn";
import { ProjectSection } from "./project-section";

export const ProjectsPage = () => {
  const [isActiveButton, setIsActiveButton] = useState("All Projects");
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
      className="active px-[10rem] h-auto py-[10rem]"
    >
      <section className="flex flex-col items-center justify-center gap-[6rem]">
        <h2 className="text-[3rem] text-white">Projects</h2>
        <div className="flex items-center gap-4">
          {ProjectButtons.map((button) => (
            <button
              key={button.label}
              onClick={() => setIsActiveButton(button.label)}
              className={cn(
                "border-2 border-[#a6e3a1] text-lg py-1 px-4 rounded-lg transition-all ease-in-out duration-300 bg-transparent text-white/80  hover:bg-[#a6e3a1] hover:text-black",
                isActiveButton === button.label &&
                  "bg-[#a6e3a1] text-black hover:bg-transparent hover:text-white/80 hover:border-white/80",
              )}
            >
              {button.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-20 mt-10">
          {(isActiveButton === "Fullstack" ||
            isActiveButton === "All Projects") && (
            <>
              <ProjectSection
                projectImageUrl="/images/projects/KBSL.png"
                title="K.B.L. Securities Limited CMS"
                description="A simple CMS developed for K.B.L Securities Limited, requested technologies were used and it's one of my on-going project."
                technologies={[
                  {
                    technologyImageUrl: "/images/technologies/Next.js.png",
                    technologyTitle: "Nextjs",
                  },
                  {
                    technologyImageUrl: "/images/technologies/Typescript.png",
                    technologyTitle: "Typescript",
                  },
                  {
                    technologyImageUrl: "/images/technologies/MongoDB.png",
                    technologyTitle: "MongoDB",
                  },
                  {
                    technologyImageUrl: "/images/technologies/Clerk.png",
                    technologyTitle: "Clerk",
                  },
                  {
                    technologyImageUrl: "/images/technologies/Shadcn.svg",
                    technologyTitle: "Shadcn UI",
                  },
                ]}
                githubLink="https://github.com/Ajit1428/kbl-securities-kumari-bank"
              />
              <ProjectSection
                projectImageUrl="/images/projects/Ecommerce.png"
                title="MERN Ecommerce"
                description="Feature packed MERN Stack Ecommerce which I developed during my learning phase and one of my very first complete project."
                technologies={[
                  {
                    technologyImageUrl: "/images/technologies/React.png",
                    technologyTitle: "React",
                  },
                  {
                    technologyImageUrl: "/images/technologies/Node.js.png",
                    technologyTitle: "Node.js",
                  },
                  {
                    technologyImageUrl: "/images/technologies/Expressjs.png",
                    technologyTitle: "Express.js",
                  },
                  {
                    technologyImageUrl: "/images/technologies/JS.png",
                    technologyTitle: "Javascript",
                  },
                  {
                    technologyImageUrl: "/images/technologies/MongoDB.png",
                    technologyTitle: "MongoDB",
                  },
                  {
                    technologyImageUrl: "/images/technologies/CSS3.png",
                    technologyTitle: "CSS",
                  },
                ]}
                githubLink="https://github.com/Ajit1428/Ecommerce"
              />
            </>
          )}
          {(isActiveButton === "All Projects" ||
            isActiveButton === "Frontend") && (
            <>
              <ProjectSection
                projectImageUrl="/images/projects/MiniFood.png"
                title="Mini Recipe Food App"
                description="A simple Mini Food Recipe App developed by using Svelte, tested out the functionality as well as the free API's"
                technologies={[
                  {
                    technologyImageUrl: "/images/technologies/Svelte.png",
                    technologyTitle: "Svelte",
                  },
                  {
                    technologyImageUrl: "/images/technologies/Typescript.png",
                    technologyTitle: "Typescript",
                  },
                  {
                    technologyImageUrl: "/images/technologies/JS.png",
                    technologyTitle: "Javascript",
                  },
                  {
                    technologyImageUrl: "/images/technologies/Clerk.png",
                    technologyTitle: "Clerk",
                  },
                  {
                    technologyImageUrl: "/images/technologies/Material UI.png",
                    technologyTitle: "Material UI",
                  },
                  {
                    technologyImageUrl: "/images/technologies/Tailwind CSS.png",
                    technologyTitle: "Tailwind CSS",
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
                    technologyTitle: "React",
                  },
                  {
                    technologyImageUrl: "/images/technologies/JS.png",
                    technologyTitle: "Javascript",
                  },
                  {
                    technologyImageUrl: "/images/technologies/Tailwind CSS.png",
                    technologyTitle: "Tailwind CSS",
                  },
                ]}
                githubLink="https://github.com/Ajit1428/pwa-react-weather"
              />
            </>
          )}
          {(isActiveButton === "All Projects" ||
            isActiveButton === "Linux") && (
            <ProjectSection
              projectImageUrl="/images/projects/Linux-Rice.png"
              title="Arch-Hyprland"
              description="Linux ricing is not cosidered as development but it's one of my personal projects. 
                Arch is a customizable distro which can be turned into own liking where I have used Hyprland as a Window Manager "
              technologies={[
                {
                  technologyImageUrl: "/images/technologies/Arch Linux.png",
                  technologyTitle: "Arch",
                },
                {
                  technologyImageUrl: "/images/technologies/Hyprland.png",
                  technologyTitle: "Hyprland",
                },
                {
                  technologyImageUrl: "/images/technologies/Lua.png",
                  technologyTitle: "Lua",
                },
                {
                  technologyImageUrl: "/images/technologies/Vim.png",
                  technologyTitle: "Neovim",
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
