import { AboutMe } from "@/components/about/about";
import { ContactMePage } from "@/components/contact/contact";
import { ExperiencePage } from "@/components/experience/experience";
import { HomePage } from "@/components/home/home";
import { ProjectsPage } from "@/components/projects/projects";

export default function Home() {
  return (
    <>
      <div className="border-b-2 border-[#a6e3a1]">
        <HomePage />;
      </div>
      <div className="border-b-2 border-[#a6e3a1]">
        <AboutMe />;
      </div>
      {/* <div className="border-b-2 border-[#a6e3a1]"> */}
      {/*   <ProjectsPage />; */}
      {/* </div> */}
      {/* <div className="border-b-2 border-[#a6e3a1]"> */}
      {/*   <ExperiencePage />; */}
      {/* </div> */}
      {/* <div className="border-b-2 border-[#a6e3a1]"> */}
      {/*   <ContactMePage />; */}
      {/* </div> */}
    </>
  );
}
