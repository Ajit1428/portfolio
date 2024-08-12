import { AboutMe } from "@/components/about/about";
import { ContactMePage } from "@/components/contact/contact";
import { ExperiencePage } from "@/components/experience/experience";
import { Footer } from "@/components/footer/footer";
import { HomePage } from "@/components/home/home";
import { ProjectsPage } from "@/components/projects/projects";

export default function Home() {
  return (
    <>
      <div className="border-b-2 border-light-primary dark:border-dark-primary">
        <HomePage />
      </div>
      <div className="border-b-2 border-light-primary dark:border-dark-primary">
        <AboutMe />
      </div>
      <div className="border-b-2 border-light-primary dark:border-dark-primary">
        <ExperiencePage />
      </div>
      <div className="border-b-2 border-light-primary dark:border-dark-primary">
        <ProjectsPage />
      </div>
      {/* <div className="border-b-2 border-light-primary dark:border-dark-primary"> */}
      {/*   <ContactMePage />; */}
      {/* </div> */}
    </>
  );
}
