"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";
import { useRef, useState, useEffect, MouseEvent } from "react";
import { allProjectLists } from "@/utils/projects/static-project-list";
import { cn } from "@/utils/cn";

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
    <div className="w-full relative">
      <div
        className="flex flex-col overflow-hidden md:flex-row md:overflow-x-auto md:overflow-y-hidden gap-10 project-scroll-hidden"
        ref={sliderRef}
      >
        {allProjectLists.map((project) => (
          <div
            key={project.githubLink}
            className={`flex flex-col gap-4 bg-slate-200 rounded-2xl border-2 border-light-primary/30 shadow-sm shadow-light-primary overflow-hidden hover:cursor-pointer transition-all ease-in-out group max-w-[500px] pb-6 md:pb-0 md:w-full md:min-w-[500px] xl:gap-[25px] xl:h-[50rem] xl:min-w-[600px] dark:border-dark-primary/30 dark:shadow-dark-primary dark:bg-gray-700 hover:scale-105`}
          >
            <Image
              src={project?.projectImageUrl}
              alt="Project Screenshot"
              width={600}
              height={600}
              className="rounded-t-2xl w-full h-full md:w-[500px] md:h-[250px] xl:w-[600px] xl:h-[300px] xl:top-16 object-fit transition-all ease-in-out"
            />
            <div className="flex flex-col items-center gap-6 p-6 xl:px-10 xl:py-8 xl:gap-6">
              <h2 className="text-light-primary font-bold text-[28px] md:text-[32px] 2xl:text-[42px] dark:text-dark-primary ">
                {project?.title}
              </h2>
              <p className="text-[12px] md:text-[16px] xl:text-start 2xl:text-[18px] dark:text-white">
                {project?.description}
              </p>
              <h4 className="text-center text-light-primary font-bold text-[18px] md:text-[20px] dark:text-dark-primary mt-4">
                Technologies Used
              </h4>
              <div className="flex justify-center items-center gap-[25px]">
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
                      className="h-[22px] w-[22px] lg:w-[30px] lg:h-[30px]"
                    />
                  </div>
                ))}
              </div>
              <Link
                target="_blank"
                href={project.githubLink}
                className="w-fit font-semibold flex items-center mx-auto mt-4 gap-1 cursor-pointer border-2 rounded-tl-md rounded-bl-[24px] rounded-br-md rounded-t-[24px] px-4 py-1 transition-all ease-in-out duration-300 bg-light-primary text-white border-light-primary hover:bg-transparent hover:text-light-primary dark:bg-dark-primary dark:border-dark-primary dark:hover:text-dark-primary dark:hover:bg-transparent dark:text-black"
              >
                <Github className="w-4 h-4 lg:w-6 xl:h-6" />
                <span className="text-[14px] lg:text-[16px] 2xl:text-[18px]">
                  Github
                </span>
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
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
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
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
};
