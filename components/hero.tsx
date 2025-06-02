"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">
              Hi, I&apos;m{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                Samikshya Pattnaik
              </span>
            </span>
            <span className="block mt-2">Full Stack Developer</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
           I create modern, scalable web applications that combine speed, functionality,
            and design. With a strong foundation in full-stack development and deep experience across a range of frameworks and tools, 
            I focus on building responsive user experiences and powerful backend systems. Every project I take on is driven by clean code, 
            performance-first thinking, and a commitment to delivering value through technology.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              asChild
            >
              <a href="#skills">View My Skills</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950/50"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 mt-12">
            <a
              href="https://github.com/samikshyapattnaik"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/samikshya177/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/samikshya_2002"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="mailto:samikshyapattnaik14@gmail.com"
              className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          <ArrowDown className="w-6 h-6" />
          <span className="sr-only">Scroll Down</span>
        </a>
      </div>
    </section>
  );
}
