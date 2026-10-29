import { Smooth } from "@/components/fx";
import { Nav, Hero, Skills, Experience, Projects, Achievements, Education, Contact, Footer } from "@/components/Sections";
import { AboutMe } from "@/components/AboutMe";

export default function Page() {
  return (
    <>
      <Smooth />
      <Nav />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

