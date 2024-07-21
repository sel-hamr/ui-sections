import { cn } from "@/lib/utils";
import React from "react";

function CardAction({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-row justify-between items-center px-4 pb-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export default CardAction;
