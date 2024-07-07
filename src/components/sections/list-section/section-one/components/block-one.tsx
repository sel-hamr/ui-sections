import CloudIcon from "@/components/ui/CloudIcon";
import { SiIcloud } from "react-icons/si";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function Intro() {
  return (
    <div className=" grid grid-cols-10 h-full bg-white rounded-xl px-10">
      <div className="col-span-7 flex gap-5 flex-col w-[90%] mt-6">
        <div className="flex items-center relative w-4/5 justify-center">
          <p className="text-gray-400 font-semibold">XLS</p>
          <div className=" border border-dashed border-gray-400 mx-6 w-full"></div>
          <SiIcloud
            fontSize="20px"
            className="absolute left-0 text-gray-400 animate-cloud-section-one"
          />
          <p className="text-gray-400 font-semibold">RNW</p>
        </div>
        <h1 className="text-7xl font-semibold line-clamp-2">
          What is Lorem Ipsum?
        </h1>
        <p className="text-sm leading-6 line-clamp-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
        </p>
      </div>
      <div className="col-span-3 flex items-center">
        <CloudIcon iconSlugs={slugs} />
      </div>
    </div>
  );
}
