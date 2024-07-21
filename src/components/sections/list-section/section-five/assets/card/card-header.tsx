import { cn } from "@/lib/utils";
import React from "react";

export const CardHeader = ({
  icon,
  className,
  color,
}: {
  icon: React.ReactNode;
  className?: string;
  color?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full h-44 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative",
        className
      )}
    >
      <div
        className={cn(
          "w-full h-full flex items-center justify-center group-hover:scale-95 group-hover:rounded-2xl transform transition duration-200",
          color
        )}
      >
        {icon}
      </div>
    </div>
  );
};
