import { Intro, Scrolling } from "@/components/home";
import Info from "@/components/home/info";
import RetroGrid from "@/components/ui/RetroGrid";
export default function Home() {
  return (
    <main className="md:h-[calc(100vh-48px)] h-full relative flex flex-col items-center justify-center mx-auto overflow-hidden gap-8 ">
      <Intro />
      <Info />
      <Scrolling />
      <RetroGrid />
    </main>
  );
}
