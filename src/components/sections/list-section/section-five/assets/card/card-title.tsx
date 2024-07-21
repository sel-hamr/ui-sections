import { cn } from "@/lib/utils";
import React from "react";

export const CardSubtitle = ({
  subtitle,
  className,
}: {
  subtitle: string;
  className?: string;
}) => {
  return (
    <h2 className={cn("font-normal my-3 text-sm text-zinc-500", className)}>
      {subtitle}
    </h2>
  );
};
