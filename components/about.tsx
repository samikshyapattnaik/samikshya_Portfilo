"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
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
            About Me
          </motion.h2>
          <div className="w-20 h-1 mt-2 bg-indigo-500 dark:bg-indigo-400 rounded-full"></div>
        </div>

        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto md:mx-0"
          >
            <div className="absolute inset-0 border-2 border-indigo-500 dark:border-indigo-400 rounded-lg transform translate-x-4 translate-y-4"></div>
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/samikshya.jpg"
                alt="samikshya portrait"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="mb-4 text-2xl font-bold">
              Full Stack Developer & Technology Enthusiast
            </h3>
            <p className="mb-6 text-muted-foreground">
              I&apos;m Samikshya Pattnaik, a passionate developer with expertise
              across multiple technologies. With One years of experience, I
              specialize in building scalable and performant applications that
              deliver exceptional user experiences across web and mobile
              platforms.
            </p>
            <p className="mb-6 text-muted-foreground">
              My journey as a developer began in college, where I discovered a deep interest in building things for the web. 
              That curiosity led me to an internship, where I started applying my skills in real-world projects and gained hands-on experience in full-stack development.
               After that, I joined a fast-paced eCommerce startup, where I took on the challenge of developing and optimizing web applications using the MERN stack. From responsive front-end interfaces to scalable back-end systems,
                I’ve worked across the full stack to create performant, user-focused solutions that help businesses grow online.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold">Name:</h4>
                <p className="text-muted-foreground">Samikshya Pattnaik</p>
              </div>
              <div>
                <h4 className="font-semibold">Email:</h4>
                <p className="text-muted-foreground">
                  samikshyapattnaik14@gmail.com
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Location:</h4>
                <p className="text-muted-foreground">Jajpur, Odisha</p>
              </div>
              <div>
                <h4 className="font-semibold">Availability:</h4>
                <p className="text-muted-foreground">Full-time</p>
              </div>
            </div>
            <Button
              className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              asChild
            >
              <a href="/samikshya.pdf" download="samikshya.pdf">
                <Download className="w-4 h-4 mr-2" /> Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
