import { AnimatePresence, motion } from "framer-motion";

export const Background = ({ src }: { src: string }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        src={src}
        className="object-cover  absolute inset-0 blur-sm"
      />
    </AnimatePresence>
  );
};
