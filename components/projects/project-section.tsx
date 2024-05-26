import Image from "next/image";
import Link from "next/link";

import { Github } from "lucide-react";

type ProjectSectionType = {
  projectImageUrl: string;
  title: string;
  description: string;
  technologies: {
    technologyImageUrl: string;
    technologyTitle: string;
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
    <div className="flex flex-col gap-[2rem] bg-[#26313F] border-[#26313F] shadow-lg shadow-black/40 rounded-lg hover:cursor-pointer hover:shadow-xl hover:scale-105 transition-all">
      <Image
        src={projectImageUrl}
        alt="Project Screenshot"
        width={800}
        height={800}
        className="rounded-t-xl"
      />
      <div className="flex flex-col items-center justify-center gap-8 px-32 pb-8">
        <h2 className="text-center text-[#a6e3a1] font-bold text-[1.8rem] border-2 border-[#a6e3a1] p-4 rounded-full">
          {title}
        </h2>
        <p className="text-white text-[1.4rem]">{description}</p>
        <h4 className="text-center text-[#a6e3a1] font-semibold text-[1.2rem] border-2 border-[#a6e3a1] rounded-full p-4">
          Technologies Used
        </h4>
        <div className="flex items-center gap-6 mt-4">
          {technologies.map((src) => (
            <div
              key={src.technologyImageUrl}
              className="flex flex-col items-center gap-2"
            >
              <Image
                src={src.technologyImageUrl}
                alt={src.technologyTitle}
                width={40}
                height={40}
              />
              <span className="text-white">{src.technologyTitle}</span>
            </div>
          ))}
        </div>
        <Link
          target="_blank"
          href={githubLink}
          className="flex items-center gap-1 cursor-pointer border-2 bg-[#a6e3a1] border-white rounded-full p-2 hover:bg-transparent hover:text-[#a6e3a1] hover:border-[#a6e3a1] transition-all ease-in-out duration-300 "
        >
          <Github className="w-6 h-6" />
          <span className="text-xl">Github</span>
        </Link>
      </div>
    </div>
  );
};
