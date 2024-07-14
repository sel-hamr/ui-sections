import { cn } from "@/lib/utils";
import React from "react";
type BorderBeamProps = {
  children: React.ReactNode;
  className?: string;
  colorFrom?: string;
  colorTo?: string;
};

export const BorderBeam = ({
  children,
  className,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
}: BorderBeamProps) => {
  return (
    <div
      className={cn("w-full h-full")}
      style={
        {
          "--color-from": colorFrom,
          "--color-to": colorTo,
        } as React.CSSProperties
      }
    >
      <div className="cardBorderBeam">
        <div className={cn(" absolute inset-[2px] ", className)}>
          {children}
        </div>
      </div>
    </div>
  );
};
