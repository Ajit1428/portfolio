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
    <div className="flex flex-col w-fit gap-8 bg-gray-800 border-2 border-light-primary shadow-lg shadow-light-primary hover:shadow-light-primary hover:shadow-lg rounded-lg hover:cursor-pointer hover:scale-105 transition-all ease-in-out xl:w-[750px] xl:h-[830px] xl:gap-[25px] dark:border-dark-primary dark:shadow-dark-primary">
      <Image
        src={projectImageUrl}
        alt="Project Screenshot"
        width={200}
        height={300}
        className="rounded-t-xl h-[200px] xl:h-[300px]"
      />
      <div className="flex flex-col items-center justify-center pb-8 px-10 gap-6 xl:gap-[30px] xl:px-20">
        <h2 className="text-center text-light-primary font-bold text-[32px] xl:text-[42px] dark:text-dark-primary ">
          {title}
        </h2>
        <p className="text-white text-center text-[16px] xl:text-start xl:text-[22px]">
          {description}
        </p>
        <h4 className="text-center text-light-primary font-bold text-[20px] xl:text-[22px] dark:text-dark-primary">
          Technologies Used
        </h4>
        <div className="flex items-center gap-[25px] mt-4">
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
