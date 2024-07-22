"use client";

import { useEffect } from "react";

import { useActiveSection } from "@/hooks/useActiveSection";

import { useInView } from "react-intersection-observer";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Landmark, Globe, Terminal } from "lucide-react";

export const ExperiencePage = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const { setIsActive } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setIsActive("Experiences");
    }
  }, [inView, setIsActive]);
  return (
    <div
      id="experiences"
      ref={ref}
      className="active px-[10rem] h-auto py-[10rem]"
    >
      <section className="flex flex-col items-center justify-center gap-[6rem]">
        <h2 className="text-[42px] text-white font-bold">Experiences</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            visible={true}
            contentStyle={{
              background: "#fab387",
              color: "black",
              boxShadow: "1px 2px 10px black",
              textAlign: "left",
            }}
            contentArrowStyle={{ borderRight: "7px solid #fab387" }}
            date="July 2019 - Jun 2021"
            dateClassName="!font-bold !text-[1.1rem] !text-white"
            iconStyle={{ background: "#fab387", color: "black" }}
            icon={<Globe />}
          >
            <div>
              <h2 className="!text-black !text-[1.4rem] mb-2 font-semibold">
                Subisu Cablenet Limited
              </h2>
              <p className="!text-[1.1rem]">
                Subisu and wholly the team helped me build up my communication
                as well as soft skills. Strengthen my networking and technical
                knowledge. Understand how the organization functions in
                real-time
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            contentStyle={{
              background: "#89dceb",
              color: "black",
              boxShadow: "1px 2px 10px black",
              textAlign: "left",
            }}
            contentArrowStyle={{ borderRight: "7px solid #89dceb" }}
            date="Dec 2023 - Apr 2024"
            dateClassName="!font-bold !text-[1.1rem] !text-white"
            iconStyle={{ background: "#89dceb", color: "black" }}
            icon={<Landmark />}
          >
            <div>
              <h2 className="!text-black !text-[1.4rem] mb-2 font-semibold">
                K.B.L. Securities Limited
              </h2>
              <p className="!text-[1.1rem]">
                Besides my expertise in software development, I got to explore
                the field of brokerage. I experienced the thrills, met new
                people having completely different mindset and learned about
                share markets. Automated the workflow, handled the overall
                networking and maintained their website.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            contentStyle={{
              background: "#f38ba8",
              color: "black",
              boxShadow: "1px 2px 10px black",
              textAlign: "left",
            }}
            contentArrowStyle={{ borderRight: "7px solid #f38ba8" }}
            date="Apr 2024 - Present"
            dateClassName="!font-bold !text-[1.1rem] !text-white"
            iconStyle={{ background: "#f38ba8", color: "black" }}
            icon={<Terminal />}
          >
            <div>
              <h2 className="!text-black !text-[1.4rem] mb-2 font-semibold">
                Hamro Patro Inc.
              </h2>
              <p className="!text-[1.1rem]">
                Dedicated, focused and determined in becoming a Software
                Engineer. Thriving in my chosen career path and following my
                longed dream at Hamro Patro Inc.
              </p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </div>
  );
};
