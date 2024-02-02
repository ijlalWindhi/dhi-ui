"use client";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <div className="flex items-center justify-center gap-2 relative">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold inter-var text-center">
          Dhisa
        </p>
        <span className="py-1 lg:py-2 px-2 lg:px-4 text-sm md:text-base lg:text-2xl border-2 md:border-3 lg:border-4 border-white rounded-lg lg:rounded-xl">
          UI
        </span>
      </div>
      <p className="text-xs sm:text-base md:text-lg mt-2 md:mt-4 text-white font-normal inter-var text-center">
        Unleashing Modern UI Magic with Tailwind CSS
      </p>
      <div className="absolute top-28 sm:top-24 md:top-28 lg:top-36 xl:top-40 left-1/2 transform -translate-x-1/2">
        <div className="text-xs sm:text-sm md:text-base inline-flex h-9 md:h-12 animate-shimmer items-center min-w-max justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000000,45%,#1e2631,55%,#000000)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors">
          Under Development
        </div>
      </div>
    </WavyBackground>
  );
}
