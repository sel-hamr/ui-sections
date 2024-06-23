import { Intro, Scrolling } from "@/components/home";
import Info from "@/components/home/info";
import RetroGrid from "@/components/ui/RetroGrid";
export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-center h-[calc(100vh-48px)] mx-auto overflow-hidden gap-6 relative">
      <Intro />
      <Info />
      <div className="space-y-2 z-10">
        <h1 className="max-w-4xl  text-center text-2xl font-black leading-[1.15] md:text-3xl md:leading-[1.15] tracking-tighter text-balance">
          What People Are Saying
        </h1>
        <p className=" max-w-lg text-center">
          Don't just take our word for it. Here's what <b>real people</b> are
          saying about UI HUB on Twitter.
        </p>
      </div>

      <Scrolling />
      <RetroGrid />
    </main>
  );
}
