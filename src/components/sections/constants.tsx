import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
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
] as const;
