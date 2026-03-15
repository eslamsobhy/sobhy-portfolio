"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experienceData } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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

      const cards = timelineRef.current?.querySelectorAll("[data-timeline-card]");
      cards?.forEach((card, i) => {
        gsap.from(card, {
          x: i % 2 === 0 ? -60 : 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative bg-[#0a0a0a] py-28 lg:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.04)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={titleRef} className="mb-20 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-emerald-400">
            {experienceData.subtitle}
          </span>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            {experienceData.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-emerald-400" />
        </div>

        <div ref={timelineRef} className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-zinc-800 md:left-1/2 md:-translate-x-px" />

          {experienceData.items.map((item, i) => (
            <div
              key={item.id}
              data-timeline-card
              className={`relative mb-12 flex flex-col md:flex-row ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 top-8 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-emerald-400 bg-[#0a0a0a] md:left-1/2" />

              <div className={`w-full pl-12 md:w-1/2 md:pl-0 ${
                i % 2 === 0 ? "md:pr-16" : "md:pl-16"
              }`}>
                <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-emerald-500/20 hover:bg-zinc-900">
                  <span className="mb-2 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                    {item.period}
                  </span>
                  <h3 className="mb-1 text-xl font-bold text-white">
                    {item.role}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-zinc-500">
                    {item.company}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
