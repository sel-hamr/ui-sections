import { motion } from "framer-motion";
import Image from "next/image";

type CardProps = {
  index: number;
  indexActive: number;
  src: string;
  id: number;
};

export const Card = ({ index, indexActive, src, id }: CardProps) => {
  const currentIndex = index - indexActive;
  const isActive = index === indexActive;
  const rotate = !isActive ? (index > indexActive ? -25 : 25) : 0;
  const x = `calc(-50% + ${currentIndex * 210}px)`;
  return (
    <motion.div
      data-testid={`card/${id}`}
      className="absolute left-1/2 w-52 h-80 z-10"
      initial={{
        x,
        y: -45,
        opacity: 0,
      }}
      animate={{
        x,
        y: 0,
        opacity: 1,
        scale: isActive ? 1 : 0.9,
        rotateY: `${rotate}deg`,
      }}
      transition={{
        type: "spring",
        duration: 0.8,
        delay: Math.abs(currentIndex) * 0.1,
      }}
    >
      <Image src={src} alt="card" fill className="object-cover rounded-md" />
    </motion.div>
  );
};
