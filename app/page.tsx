import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import GridBackground from "@/components/grid-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-background dark:bg-slate-950 relative overflow-hidden">
      <GridBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

