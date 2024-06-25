"use client";
import CardClassic from "@/components/ui/Card/cardClassic";
import Marquee from "@/components/ui/marquee";
import { motion } from "framer-motion";

const reviews = [
  "I've never seen anything like this before. It's amazing. I love it.",
  "I don't know what to say. I'm speechless. This is amazing.",
  "I'm at a loss for words. This is amazing. I love it.",
  "Thank fucking god someone made this. You're the best💯",
  "Sick dude. Can’t wait to build with these once they’re all done",
  "Bro these are cleeeaann",
];
const animate = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.7 },
  },
};
export function Scrolling() {
  return (
    <motion.div
      className="relative bg-white w-full z-10 overflow-hidden rotate-2 border-t-2 border-b-2 border-black mt-10"
      variants={animate}
      animate={"visible"}
      initial={"hidden"}
    >
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <CardClassic key={review} className="z-10">
            <span className="text-xs text-black">{review}</span>
          </CardClassic>
        ))}
      </Marquee>
    </motion.div>
  );
}
