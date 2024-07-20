import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/navbar";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-indigo-950">
      <Navbar />
      <div className="absolute right-0 top-14 sm:top-4 mix-blend-color-dodge opacity-70">
        <Image src="/images/top-left-img.png" alt="" width={400} height={400} />
      </div>
      <div className="mx-auto mt-24 px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
    </main>
  );
}
