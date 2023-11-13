// import Image from 'next/image'
import React from "react";
import Hero from "../components/main/Hero"
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import Contact from "@/components/main/Contact";
import StarCanvas from "../components/main/Starbackground";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[900px] gap-20">
      <StarCanvas />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
