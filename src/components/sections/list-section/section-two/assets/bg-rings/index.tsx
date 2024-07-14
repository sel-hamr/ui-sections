import { motion, MotionValue } from "framer-motion";

function BgRings({
  positionX,
  positionY,
}: {
  positionX: MotionValue<any>;
  positionY: MotionValue<any>;
}) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  const item = {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.ul
      className="absolute inset-0"
      variants={container}
      initial="hidden"
      whileInView="show"
    >
      <motion.li
        className="absolute size-1 top-1/3 right-1/3  bg-white rounded-full rings opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-2 top-1/2 left-[15%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-1 top-1/4 right-[15%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-2 top-2/3 left-2/4  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-1 top-[65%] right-[30%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-0.5 top-[25%] left-[25%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-3 top-[15%] left-1/2  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-1.5 top-3/4 left-1/3  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-1 top-[25%] left-[35%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-2 top-[62%] left-[25%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />

      <motion.li
        className="absolute size-1 top-[15%] left-[60%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-2 top-[10%] left-1/2  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-1 top-40 left-1/3  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-1.5 top-[25%] left-[5%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-2 top-[62%] left-[15%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-3 top-[62%] right-[15%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-1 top-[65%] right-[10%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-2 top-[70%] right-[25%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-2 top-[40%] right-[5%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
    </motion.ul>
  );
}

export default BgRings;
