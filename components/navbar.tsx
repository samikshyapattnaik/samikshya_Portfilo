"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"]
      const currentPosition = window.scrollY + 200 // Offset for better UX

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          const offset = window.scrollY + top

          if (currentPosition >= offset && currentPosition < window.scrollY + bottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Prevent scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      // Add offset for fixed header
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ]

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
        )}
      >
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400"
          >
            Samikshya <span className="text-indigo-500 dark:text-indigo-300">Pattnaik</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 relative",
                  activeSection === link.href ? "text-indigo-600 dark:text-indigo-400" : "",
                )}
              >
                {link.name}
                {activeSection === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 dark:bg-indigo-400 rounded-full" />
                )}
              </button>
            ))}
            <ThemeToggle />
            <Button
              size="sm"
              className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              asChild
            >
              <a href="/samikshya.pdf" download="samikshya.pdf">
                Resume
              </a>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex md:hidden bg-black/60 backdrop-blur-sm overflow-hidden"
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute inset-y-0 right-0 w-full max-w-sm bg-gradient-to-br from-indigo-900 to-indigo-700 shadow-xl overflow-hidden"
            >
              <div className="flex justify-end p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-indigo-800/50"
                >
                  <X className="w-6 h-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
              </div>

              <nav className="relative flex flex-col items-center justify-center h-[80vh] gap-8">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={cn(
                      "text-xl font-medium transition-colors text-white hover:text-indigo-200 relative",
                      activeSection === link.href ? "text-indigo-200" : "",
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                    {activeSection === link.href && (
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-indigo-300 rounded-full" />
                    )}
                  </motion.button>
                ))}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="mt-4 bg-white text-indigo-700 hover:bg-indigo-100" asChild>
                    <a href="/samikshya.pdf" download="samikshya.pdf">
                      Resume
                    </a>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
