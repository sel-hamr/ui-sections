import { SpotlightButton } from "@/components/ui/Button";
import { CardBorder } from "@/components/ui/Card/cardBorder";
import { cn } from "@/lib/utils";
import React from "react";

type SectionProps = {
  title: string;
  copyText?: string;
  children: React.ReactNode;
  className?: string;
};

export const Section = ({
  children,
  title,
  copyText,
  className,
}: SectionProps) => {
  return (
    <div className="flex gap-3 w-full flex-col">
      <div className="flex items-center justify-between">
        <p className="font-semibold">{title}</p>
        <SpotlightButton
          title="Copy code"
          className="w-32 h-8 [&>button]:text-xs"
        />
      </div>
      <CardBorder className={cn("w-full bg-slate-900", className)}>
        {children}
      </CardBorder>
    </div>
  );
};
