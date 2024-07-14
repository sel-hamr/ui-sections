import {
  SiReact,
  SiActivision,
  SiNodedotjs,
  SiEa,
  SiAmd,
  SiAbusedotch,
  SiCisco,
  SiAmazonprime,
  SiAngular,
  SiAppletv,
  SiDotnet,
} from "react-icons/si";
import { LuArrowRightCircle } from "react-icons/lu";
import { FoldElement, FoldElements } from "@/components/ui/fold-element";
import { Intro } from "./assets/block-one";

export function SectionOne() {
  return (
    <section className="w-full h-full gap-5 grid grid-cols-7 px-5 py-2">
      <div className="h-[370px]  col-span-7 rounded-xl">
        <Intro />
      </div>
      <div className="h-[95px] col-span-5 grid grid-cols-3 rounded-md">
        <div className="h-full col-span-1">
          <FoldElements
            items={[
              <FoldElement key={1} className="bg-[#2e2e35]">
                <SiActivision fontSize="200px" fill="white" />
              </FoldElement>,
              <FoldElement key={2} className="bg-[#2e2e35]">
                <SiAmd fontSize="150px" fill="white" />
              </FoldElement>,
              <FoldElement key={3} className="bg-[#2e2e35]">
                <SiAbusedotch fontSize="150px" fill="white" />
              </FoldElement>,
              <FoldElement key={4} className="bg-[#2e2e35]">
                <SiCisco fontSize="100px" fill="white" />
              </FoldElement>,
              <FoldElement key={5} className="bg-[#2e2e35]">
                <SiAmazonprime fontSize="200px" fill="white" />
              </FoldElement>,
            ]}
          />
        </div>
        <div className="h-full col-span-1">
          <FoldElements
            delay={500}
            items={[
              <FoldElement key={1} className="bg-[#2e2e35]">
                <SiAmazonprime fontSize="200px" fill="white" />
              </FoldElement>,
              <FoldElement key={2} className="bg-[#2e2e35]">
                <SiAppletv fontSize="90px" fill="white" />
              </FoldElement>,
              <FoldElement key={3} className="bg-[#2e2e35]">
                <SiEa fontSize="90px" fill="white" />
              </FoldElement>,
            ]}
          />
        </div>
        <div className="h-full col-span-1">
          <FoldElements
            delay={1000}
            items={[
              <FoldElement key={1} className="bg-[#2e2e35]">
                <SiReact fontSize="70px" fill="white" />
              </FoldElement>,
              <FoldElement key={2} className="bg-[#2e2e35]">
                <SiDotnet fontSize="70px" fill="white" />
              </FoldElement>,
              <FoldElement key={3} className="bg-[#2e2e35]">
                <SiNodedotjs fontSize="70px" fill="white" />
              </FoldElement>,
              <FoldElement key={4} className="bg-[#2e2e35]">
                <SiAngular fontSize="70px" fill="white" />
              </FoldElement>,
            ]}
          />
        </div>
      </div>
      <div className="h-full col-span-2 flex items-center">
        <button className=" text-black flex items-center gap-3 justify-center text-2xl font-semibold px-5 py-2 rounded-md w-full h-full bg-white">
          Contact
          <LuArrowRightCircle fontSize="40px" />
        </button>
      </div>
    </section>
  );
}
