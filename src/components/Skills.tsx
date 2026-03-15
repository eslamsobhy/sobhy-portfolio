"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillsData } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current?.children ?? [], {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!barsRef.current) return;
    const bars = barsRef.current.querySelectorAll("[data-bar]");
    gsap.fromTo(
      bars,
      { width: "0%" },
      {
        width: (i) => `${skillsData.categories[activeTab].skills[i].level}%`,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative bg-[#0f0f0f] py-28 lg:py-36"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={titleRef} className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-emerald-400">
            {skillsData.subtitle}
          </span>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            {skillsData.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-emerald-400" />
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex justify-center gap-2">
            {skillsData.categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(i)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeTab === i
                    ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/25"
                    : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div ref={barsRef} className="space-y-6">
            {skillsData.categories[activeTab].skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-300">
                    {skill.name}
                  </span>
                  <span className="text-sm font-semibold text-emerald-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    data-bar
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
