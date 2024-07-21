import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
} from "./list-section";

export const listSections = [
  {
    title: "Intro",
    className: "bg-[#2e2e35]",
    component: SectionOne,
  },
  {
    title: "Hero colors Section ",
    className: "bg-[#2e2e35]",
    component: SectionTwo,
  },
  {
    title: "Hero drag cart Section",
    className: "bg-[#2e2e35]",
    component: SectionThree,
  },
  {
    title: "jira board Section",
    className: "bg-[#2e2e35]",
    component: SectionFour,
  },
  {
    title: "List of Cards Section",
    className: "bg-gray-900",
    component: SectionFive,
  },
] as const;
