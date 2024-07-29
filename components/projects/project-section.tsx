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
    <div className="flex flex-col w-[400px] gap-8 bg-[#26313F] border-[#26313F] shadow-lg shadow-black/40 rounded-lg hover:cursor-pointer hover:shadow-xl hover:scale-105 transition-all xl:w-[750px] xl:h-[830px] xl:gap-[25px]">
      <Image
        src={projectImageUrl}
        alt="Project Screenshot"
        width={764}
        height={300}
        className="rounded-t-xl h-[200px] xl:h-[300px]"
      />
      <div className="flex flex-col items-center justify-center pb-8 px-10 gap-6 xl:gap-[30px] xl:px-20">
        <h2 className="text-center text-[#a6e3a1] font-bold text-[32px] xl:text-[42px]">
          {title}
        </h2>
        <p className="text-white text-center text-[16px] xl:text-start xl:text-[22px]">
          {description}
        </p>
        <h4 className="text-center text-[#a6e3a1] font-semibold text-[20px] xl:text-[22px]">
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
                className="w-[30px] h-[30px]"
              />
            </div>
          ))}
        </div>
        <Link
          target="_blank"
          href={githubLink}
          className="flex items-center mt-4 gap-1 cursor-pointer border-2 bg-[#a6e3a1] border-white rounded-full p-2 hover:bg-transparent hover:text-[#a6e3a1] hover:border-[#a6e3a1] transition-all ease-in-out duration-300 "
        >
          <Github className="w-6 h-6" />
          <span className="text-[14px] xl:text-lg">Github</span>
        </Link>
      </div>
    </div>
  );
};
