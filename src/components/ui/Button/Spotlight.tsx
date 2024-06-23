import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps {
  title: string;
  handleClick?: () => void;
  pending?: boolean;
  className?: string;
}

export const SpotlightButton = ({ title, pending, className }: ButtonProps) => {
  const clipPath =
    "polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% 100%, calc(100% - 12px) 100%, 12px 100%, 0px 100%, 0px 0px)";
  return (
    <div className={cn("relative w-full h-full ", className)}>
      <button
        disabled={pending}
        data-loading={pending}
        className="bg-white data-[loading=true]:bg-background-foreground group  hover:-translate-x-1 hover:-translate-y-1 z-[2] w-full h-full text-black text-lg font-semibold absolute block border-2 border-black  border-solid tracking-widest active:translate-x-1 active:translate-y-1 active:shadow-lg active:scale-95 transition-transform duration-200 ease-in-out"
        style={{
          clipPath,
        }}
      >
        {!pending ? (
          title
        ) : (
          <Loader2 className="mx-auto size-6 text-white animate-spin " />
        )}
        <span className="absolute block origin-top-right rotate-45 object-cover z-20 bg-black -right-[1px] top-[9px] w-[16px] h-[2px] "></span>
      </button>
      <div
        className="absolute z-[1] w-full h-full bg-black translate-x-1 translate-y-1"
        style={{
          clipPath,
        }}
      ></div>
    </div>
  );
};
