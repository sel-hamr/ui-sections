"use client";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";

export function useAnimationHome() {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const animationHomePage = async () => {};
    animationHomePage();
  });
  return { scope };
}
