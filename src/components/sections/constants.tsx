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
  SectionSix,
  codeSeven,
  codeSix,
  SectionSeven,
  SectionEight,
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
  {
    title: "Reveal Bento Section",
    className: "bg-zinc-900",
    component: SectionSix,
    code: codeSix,
  },
  {
    title: "Tinder cards Section",
    className: "bg-zinc-900",
    component: SectionSeven,
    code: codeSeven,
  },
  {
    title: "infinite cards Section",
    className: "bg-zinc-900",
    component: SectionEight,
    code: codeSeven,
  },
] as const;
