import { cn } from "@/lib/utils";

export default function RetroGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute h-full w-full overflow-hidden  [perspective:250px]",
        className
      )}
      style={{ clipPath: "polygon(0 27%, 100% 27%, 100% 100%, 0 100%)" }}
    >
      <div className="absolute inset-0 [transform:rotateX(32deg)]">
        <div
          className={cn(
            "animate-grid",

            "[background-repeat:repeat] [background-size:60px_60px] [height:200vh]  [margin-left:-80%]  [width:600vw]",

            "[background-image:linear-gradient(to_right,rgba(0,0,0,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.3)_1px,transparent_0)]"
          )}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% " />
    </div>
  );
}
