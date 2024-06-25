import { Intro, Scrolling } from "@/components/home";
import Info from "@/components/home/info";
import RetroGrid from "@/components/ui/RetroGrid";
export default function Home() {
  return (
    <main className=" h-[calc(100vh-48px)]  relative flex flex-col items-center justify-center  mx-auto overflow-hidden gap-6">
      <Intro />
      <Info />
      <Scrolling />
      <RetroGrid />
    </main>
  );
}
