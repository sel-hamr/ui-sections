import { cn } from "@/lib/utils";
import React from "react";

export const CardTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h2 className={cn("font-bold my-3 text-lg text-zinc-700", className)}>
      {title}
    </h2>
  );
};
