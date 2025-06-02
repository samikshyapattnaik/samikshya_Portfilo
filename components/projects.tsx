"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Job Portal",
      description:
        "I developed a full-featured Job Portal website that connects job seekers with employers in an intuitive, user-friendly platform. The goal was to create a modern solution for managing job listings, applications, and candidate profiles, mimicking real-world platforms like Indeed or LinkedIn",
      
      image: "/images/jobpotal.png",
      tags: ["React", "Node.js", "Express", "MongoDB", "Redux", "Tailwind CSS"],
      liveUrl: "https://job-portal-mern-project-green.vercel.app/login/",
      githubUrl: "https://github.com/samikshyapattnaik/Job-portal-MERN-Project",
    },
     {
      title: "Food Stall",
      description:
        "I designed and developed a fully responsive Food Ordering App using only frontend technologies. The goal was to create an attractive and interactive UI that showcases food items, allows users to explore menus, and simulate the ordering process.",
      image: "/images/food-app.png",
      tags: ["React", "Node.js", "Javascript", "Tailwind css", "Material UI"],
      liveUrl: "https://food-stall-rho.vercel.app/",
      githubUrl: "https://github.com/samikshyapattnaik/Food-Stall",
    },
    {
      title: "News App",
      description:
        " I created a dynamic News App that delivers the latest headlines from various categories in real-time. The app was built to provide users with a clean, fast, and responsive way to stay updated on current events, using real-time data from news APIs.",
      image: "/images/newsapp.png",
      tags: ["React", "Tailwind css", "API", "Javasript","css"],
      // liveUrl: "https://",
      githubUrl: "https://github.com/samikshyapattnaik/NewsApp",
    },
    {
      title: "CURD Application",
      description:
        "I built a CRUD Operation App that allows users to create, read, update, and delete data entries in a simple and interactive interface. This project was focused on implementing core data management functionalities with a clean user experience.",
      image: "/images/task-manager.jpg",
      tags: [
        "Next.js",
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
      ],
      // liveUrl: "https://example.com",
      githubUrl: "https://github.com/samikshyapattnaik/CRUD-Operation-App",
    },
   {
      title: "Employee Management System",
      description:
        "A responsive Employee Management web application built using React and Tailwind CSS. The app allows users to add, view, edit, and delete employee records. Data is managed using React Context API for global state and stored in-memory for simplicity.",
      image: "/images/employee.png",
      tags: [
        "Javascript",
        "React.js",
        "Tailwind CSS",
        "Context API",
      ],
      // liveUrl: "https://example.com",
      githubUrl: "https://github.com/samikshyapattnaik/Employee-Management-System",
    },
   
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-muted/30 dark:bg-slate-900/50"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            My Projects
          </motion.h2>
          <div className="w-20 h-1 mt-2 bg-indigo-500 dark:bg-indigo-400 rounded-full"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl"
          >
            Here are some of my recent projects that showcase my skills and
            expertise in full-stack development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="overflow-hidden h-full dark:bg-slate-800/50 dark:border-slate-700">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="mb-4 text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950/50"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" /> Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950/50"
            asChild
          >
            <a
              href="https://github.com/samikshyapattnaik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" /> View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
