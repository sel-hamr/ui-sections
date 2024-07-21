import { cn } from "@/lib/utils";
import React from "react";

function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("px-4 pb-4", className)}>{children}</div>;
}

export default CardContent;
