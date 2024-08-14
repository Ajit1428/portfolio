import Image from "next/image";
import Link from "next/link";

import { Github } from "lucide-react";

type ProjectSectionType = {
  projectImageUrl: string;
  title: string;
  description: string;
  technologies: {
    technologyImageUrl: string;
  }[];
  githubLink: string;
};

export const ProjectSection = ({
  projectImageUrl,
  title,
  description,
  technologies,
  githubLink,
}: ProjectSectionType) => {
  return (
    <div className="flex flex-col w-full gap-6 bg-slate-200 rounded-lg border-2 border-light-primary/30 shadow-sm shadow-light-primary overflow-hidden hover:cursor-pointer hover:scale-105 transition-all ease-in-out relative group xl:gap-[25px] xl:flex-row xl:h-[30rem] dark:border-dark-primary/30 dark:shadow-dark-primary dark:bg-gray-700">
      <Image
        src={projectImageUrl}
        alt="Project Screenshot"
        width={624}
        height={400}
        className="hidden xl:flex absolute top-10 -right-[2rem] rounded-xl w-[624px] h-[25rem] object-cover transition-all ease-in-out delay-50 group-even:right-[initial] group-even:-left-[2rem] group=hover:-translate-x-1 group-hover:translate-y-1 group-hover:-rotate-1 group-even:group-hover:translate-x-1 group-even:group-hover:translate-y-1 group-even:group-hover:rotate-1 group-hover:scale-105"
      />
      <div className="flex flex-col items-center justify-center gap-6 p-6 xl:py-0 xl:px-10 xl:gap-6 xl:group-even:ml-[40rem] xl:max-w-[624px]">
        <h2 className="text-center text-light-primary font-bold text-[32px] xl:text-[42px] dark:text-dark-primary ">
          {title}
        </h2>
        <p className="text-center text-[16px] xl:text-start xl:text-[18px] dark:text-white">
          {description}
        </p>
        <h4 className="text-center text-light-primary font-bold text-[20px] xl:text-[20px] dark:text-dark-primary">
          Technologies Used
        </h4>
        <div className="flex items-center gap-[25px]">
          {technologies.map((src) => (
            <div
              key={src.technologyImageUrl}
              className="flex flex-col items-center gap-2"
            >
              <Image
                src={src.technologyImageUrl}
                alt={src.technologyImageUrl}
                width={30}
                height={30}
                className="h-[22px] w-[22px] xl:w-[30px] xl:h-[30px]"
              />
            </div>
          ))}
        </div>
        <Link
          target="_blank"
          href={githubLink}
          className="font-semibold flex items-center mt-4 gap-1 cursor-pointer border-2 rounded-full p-2 transition-all ease-in-out duration-300 bg-light-primary text-white border-light-primary hover:bg-transparent hover:border-light-primary hover:text-light-primary dark:bg-dark-primary dark:border-dark-primary dark:hover:text-dark-primary dark:hover:border-dark-primary dark:hover:bg-transparent dark:text-black"
        >
          <Github className="w-6 h-6" />
          <span className="text-[14px] xl:text-lg">Github</span>
        </Link>
      </div>
    </div>
  );
};
