"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Github, Globe } from "lucide-react";
import { useRef, useState, useEffect, MouseEvent } from "react";
import { allProjectLists } from "@/utils/projects/static-project-list";
import { cn } from "@/utils/cn";
import { ProjectType } from "@/utils/types";

export const ProjectSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const timerId = useRef<ReturnType<typeof setInterval> | null>(null);
  const defaultScrollValue = window.innerWidth > 1280 ? 634 : 540;
  const [activeChevronButton, setActiveChevronButton] = useState<{
    right: boolean;
    left: boolean;
  }>({
    right: true,
    left: false,
  });
  const elem = sliderRef.current;
  const diff1 = elem?.scrollWidth! - elem?.offsetWidth!;

  const handleSlideOnClick = (
    e: MouseEvent<HTMLButtonElement>,
    right: boolean,
  ) => {
    e.stopPropagation();
    const elem = sliderRef.current;
    if (elem) {
      elem.style.scrollBehavior = "smooth";
      if (right) {
        elem.scrollLeft += defaultScrollValue + 1;
      } else {
        elem.scrollLeft -= defaultScrollValue + 1;
      }
    }
  };

  useEffect(() => {
    if (elem) {
      elem?.addEventListener("scroll", () => {
        if (elem?.scrollLeft <= 0) {
          let val = { left: false, right: true };
          setActiveChevronButton(() => val);
          return;
        }
        if (elem?.scrollLeft > 0) {
          let val = { left: true, right: false };
          if (diff1 !== elem?.scrollLeft) {
            val = { left: true, right: true };
          }
          setActiveChevronButton(() => val);
          return;
        }
      });
    }
  }, [elem, diff1]);

  return (
    <div className="relative w-full">
      <div
        className="project-scroll-hidden flex flex-col gap-16 overflow-hidden md:h-[900px] md:flex-row md:overflow-x-auto md:overflow-y-hidden"
        ref={sliderRef}
      >
        {allProjectLists.map((project: ProjectType) => (
          <div
            key={project.githubLink}
            className={`group mt-10 flex h-[37rem] max-w-[500px] flex-col gap-4 overflow-hidden rounded-2xl border border-light-primary/30 bg-slate-200 pb-6 shadow-sm shadow-light-primary transition-all duration-200 ease-in-out hover:cursor-pointer dark:border-dark-primary/30 dark:bg-gray-700 dark:shadow-dark-primary md:h-[42rem] md:w-full md:min-w-[500px] md:pb-0 md:hover:scale-110 xl:h-[50rem] xl:min-w-[600px] xl:gap-[25px]`}
          >
            <Image
              src={project?.projectImageUrl}
              alt="Project Screenshot"
              width={600}
              height={600}
              className="object-fit h-[200px] w-full rounded-t-2xl transition-all ease-in-out md:h-[250px] md:w-[500px] xl:top-16 xl:h-[300px] xl:w-[600px]"
            />
            <div className="flex flex-col items-center gap-6 p-6 xl:gap-6 xl:px-10 xl:py-8">
              <h2 className="text-[28px] font-bold text-light-primary dark:text-dark-primary md:text-[32px] 2xl:text-[42px] ">
                {project?.title}
              </h2>
              <p className="text-[12px] dark:text-white md:text-[16px] xl:text-start 2xl:text-[18px]">
                {project?.description}
              </p>
              <h4 className="mt-4 text-center text-[18px] font-bold text-light-primary dark:text-dark-primary md:text-[20px]">
                Technologies Used
              </h4>
              <div className="flex items-center justify-center gap-[25px]">
                {project?.technologies.map((src) => (
                  <div
                    key={src.technologyImageUrl}
                    className="flex flex-col items-center gap-2"
                  >
                    <Image
                      src={src.technologyImageUrl}
                      alt={src.technologyImageUrl}
                      width={30}
                      height={30}
                      className="size-[22px] lg:size-[30px]"
                    />
                  </div>
                ))}
              </div>
              <Link
                target="_blank"
                href={
                  project.githubLink ? project.githubLink : project.websiteLink
                }
                className="mx-auto mt-4 flex w-fit cursor-pointer items-center gap-[0.3rem] rounded-t-[24px] rounded-bl-[24px] rounded-br-md rounded-tl-md border-2 border-light-primary bg-light-primary px-4 py-1 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-transparent hover:text-light-primary dark:border-dark-primary dark:bg-dark-primary dark:text-black dark:hover:bg-transparent dark:hover:text-dark-primary"
              >
                {project.githubLink !== "" && (
                  <>
                    <Github className="size-4 lg:w-[1.4rem] xl:h-[1.4rem]" />
                    <span className="text-[14px] lg:text-[16px] 2xl:text-[18px]">
                      Github
                    </span>
                  </>
                )}
                {project.websiteLink !== "" && (
                  <>
                    <Globe className="size-4 lg:w-[1.4rem] xl:h-[1.4rem]" />
                    <span className="text-[14px] lg:text-[16px] 2xl:text-[18px]">
                      Website
                    </span>
                  </>
                )}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:block">
        <button
          className={cn(
            "absolute p-2 rounded-full bg-[#1e1e2e] text-white dark:bg-white dark:text-black -left-[14px] md:-left-[20px] top-1/2 transition-all ease-in-out delay-300",
            activeChevronButton.left ? "group-hover:block" : "hidden",
          )}
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            handleSlideOnClick(e, false);
            clearInterval(timerId?.current!);
          }}
        >
          <ChevronLeft className="size-4 md:size-6" />
        </button>
        <button
          className={cn(
            "absolute p-2 rounded-full bg-[#1e1e2e] text-white dark:bg-white dark:text-black -right-[14px] md:-right-[20px] top-1/2 transition-all ease-in-out delay-300",
            activeChevronButton.right ? "md:group-hover:block" : "hidden",
          )}
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            handleSlideOnClick(e, true);
            clearInterval(timerId?.current!);
          }}
        >
          <ChevronRight className="size-4 md:size-6" />
        </button>
      </div>
    </div>
  );
};
