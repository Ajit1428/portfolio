"use client";

import { useEffect } from "react";

import { useActiveSection } from "@/hooks/useActiveSection";

import { useInView } from "react-intersection-observer";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LucideGraduationCap } from "lucide-react";

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
      <section className="flex flex-col items-center justify-center gap-[10rem]">
        <h2 className="text-[3rem] text-white">Experiences</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            visible={true}
            contentStyle={{
              background: "#1e1e2e",
              color: "white",
              border: "1px solid #a6e3a1",
              boxShadow: "1px 2px 10px #a6e3a1",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<LucideGraduationCap />}
          >
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            contentStyle={{ background: "red", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
          >
            <h3>Creative Director</h3>
            <h4>Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </div>
  );
};
