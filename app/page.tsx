import { Smooth } from "@/components/fx";
import { Nav, Hero } from "@/components/Sections";
import { AboutMe } from "@/components/AboutMe";
import { TechArsenal } from "@/components/TechArsenal";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { OpenSource } from "@/components/OpenSource";
import { Contact } from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Smooth />
      <Nav />
      <main>
        <Hero />
        <AboutMe />
        <TechArsenal />
        <FeaturedWork />
        <Experience />
        <Achievements />
        <OpenSource />
        <Contact />
      </main>
    </>
  );
}

