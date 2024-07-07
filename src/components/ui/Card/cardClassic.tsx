import { cn } from "@/lib/utils";
import React from "react";

type CardClassicProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function CardClassic({ children, className }: CardClassicProps) {
  const clipPath =
    "polygon(calc(100% - 25px) 0%, 100% 25px, 100% 100%, calc(100% - 33px) 100%, 0px 100%, 0px 0px)";
  return (
    <div
      className={cn(
        "bg-white p-3 border-2 border-black border-solid flex relative z-50",
        className
      )}
      style={{
        clipPath,
      }}
    >
      {children}
      <span className="absolute block origin-top-right rotate-45 object-cover z-20 bg-black -right-[1px] top-[21px] w-[32px] h-[2px] "></span>
    </div>
  );
}
