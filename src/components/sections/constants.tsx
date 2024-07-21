import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
  codeOne,
  codeTwo,
  codeThree,
  codeFour,
  codeFive,
} from "./list-section";

export const listSections = [
  {
    title: "Intro",
    className: "bg-[#2e2e35]",
    component: SectionOne,
    code: codeOne,
  },
  {
    title: "Hero colors Section ",
    className: "bg-[#2e2e35]",
    component: SectionTwo,
    code: codeTwo,
  },
  {
    title: "Hero drag cart Section",
    className: "bg-[#2e2e35]",
    component: SectionThree,
    code: codeThree,
  },
  {
    title: "jira board Section",
    className: "bg-[#2e2e35]",
    component: SectionFour,
    code: codeFour,
  },
  {
    title: "List of Cards Section",
    className: "bg-gray-900",
    component: SectionFive,
    code: codeFive,
  },
] as const;
