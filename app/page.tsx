import ContactMe from "@/components/ContactMe";
import CustomDock from "@/components/CustomDock";
import Education from "@/components/Education";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Meteors } from "@/components/ui/meteors";
import WorkerExperience from "@/components/WorkerExperience";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full justify-center bg-background font-sans">
      <main
        className="
        relative
        flex
        min-h-screen
        w-full
        max-w-4xl
        flex-col
        gap-8
        px-4
        py-24
        items-center

        sm:px-8
        md:px-12
        md:items-start
      "
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors angle={250} number={50} />
        </div>

        <Intro />
        <WorkerExperience />
        <Education />
        <Skills />
        <Projects />
        {/* <ContactMe /> */}

        <CustomDock orientation="vertical" />
      </main>
    </div>
  );
}
