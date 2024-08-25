import { motion, useMotionValue, useTransform } from "framer-motion";
import { CardType } from ".";

export const Card = ({
  id,
  url,
  cards,
  setList,
  setStatus,
}: {
  id: number;
  url: string;
  cards: CardType[];
  setList: React.Dispatch<React.SetStateAction<CardType[]>>;
  setStatus: React.Dispatch<React.SetStateAction<null | "like" | "unlike">>;
}) => {
  const isFront = id === cards[cards.length - 1].id;
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;

    return `${rotateRaw.get() + offset}deg`;
  });
  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 150) {
      setList((prev) => prev.filter((card) => card.id !== id));
    }
    setStatus(null);
  };

  const handleDragStart = () => {
    if (x.get() > 0) {
      setStatus("like");
    } else {
      setStatus("unlike");
    }
  };

  return (
    <motion.img
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      src={url}
      key={id}
      style={{
        gridRow: 1,
        gridColumn: 1,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
        x,
        opacity,
        rotate,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
          x: id % 2 ? -55 : 50,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
          x: 0,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      className="h-96 w-72 origin-bottom relative rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing "
    />
  );
};
