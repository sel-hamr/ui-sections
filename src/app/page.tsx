import { Intro, Scrolling } from "@/components/home";
import Info from "@/components/home/info";
import RetroGrid from "@/components/ui/RetroGrid";
export default function Home() {
  return (
    <main className="md:h-[calc(100vh-48px)] h-full mt-5 relative flex flex-col items-center justify-center mx-auto overflow-x-hidden gap-8 md:gap-5">
      <Intro />
      <Info />
      <Scrolling />
      <RetroGrid />
    </main>
  );
}
