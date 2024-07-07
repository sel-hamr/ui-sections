import { cn } from "@/lib/utils";

type CardBorderProps = {
  children?: React.ReactNode;
  className?: string;
};
export const CardBorder = ({ children, className }: CardBorderProps) => {
  return (
    <div className="relative w-full h-[500px]">
      <div className={cn("z-10 absolute inset-0 w-full h-full", className)}>
        {children}
      </div>
      <div className="absolute z-[1] w-full h-full bg-black translate-x-1 translate-y-1 inset-0"></div>
    </div>
  );
};
