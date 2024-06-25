"use client";
import { motion } from "framer-motion";

export default function Sonner() {
  return (
    <motion.div
      className="hidden md:flex mb-1.5 rounded-full bg-zinc-600 cursor-pointer relative z-10"
      initial={{ rotate: -2, scale: 0.9, opacity: 0 }}
      animate={{ rotate: 0, scale: 1, opacity: 1 }}
      transition={{
        duration: 0.7,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <motion.div
        className="ps-1 pe-2 py-1 flex origin-top-left items-center rounded-full border border-zinc-900 bg-white p-0.5 text-sm "
        initial={{ rotate: 6 }}
        animate={{ rotate: 0 }}
        whileHover={{ rotate: -2 }}
      >
        <span className="rounded-full bg-black px-2 py-0.5 font-medium text-white me-1">
          Hey !
        </span>
        We&apos;re have Trusted by 500+ Devs, Agencies
      </motion.div>
    </motion.div>
  );
}
