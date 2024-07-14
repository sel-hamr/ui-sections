import {
  useMotionTemplate,
  useMotionValue,
  animate,
  stagger,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

export const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = (e.target as HTMLDivElement)?.getBoundingClientRect();
  const xClient = e.clientX;
  const yClient = e.clientY;
  const width = rect.width;
  const height = rect.height;

  const mouseX = xClient - rect.left;
  const mouseY = yClient - rect.top;

  const XPct = mouseX / width - 0.5;
  const YPct = mouseY / height - 0.5;
  return { XPct, YPct };
};

function useHeroAnimation() {
  const color = useMotionValue(COLORS_TOP[0]);
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 60%, ${color})`;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const XMouse = useTransform(xSpring, [-0.5, 0.5], [-100, 100]);
  const YMouse = useTransform(ySpring, [-0.5, 0.5], [-100, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { XPct, YPct } = handleMouse(e);

    x.set(XPct);
    y.set(YPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  useEffect(() => {
    const animation = async () => {
      animate(color, COLORS_TOP, {
        ease: "easeInOut",
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
      });
    };
    animation();
  }, []);
  return {
    color,
    border,
    boxShadow,
    backgroundImage,
    cbOnMouseMove: {
      handleMouseMove,
      positionX: XMouse,
      positionY: YMouse,
      handleMouseLeave,
    },
  };
}

export default useHeroAnimation;
