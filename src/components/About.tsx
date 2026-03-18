"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutData } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current?.children ?? [], {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        immediateRender: false,
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      gsap.from(contentRef.current?.children ?? [], {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out",
        immediateRender: false,
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (statsRef.current) {
        const cards = gsap.utils.toArray<HTMLElement>(statsRef.current.children);
        gsap.from(cards, {
          y: 30,
          opacity: 0,
          scale: 0.9,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          immediateRender: false,
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-[#0a0a0a] py-28 lg:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.03)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={titleRef} className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-emerald-400">
            {aboutData.subtitle}
          </span>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            {aboutData.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-emerald-400" />
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div ref={contentRef} className="space-y-6">
            {aboutData.paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed text-zinc-400"
              >
                {para}
              </p>
            ))}
          </div>

          <div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {aboutData.stats.map((stat, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 text-center transition-all duration-300 hover:border-emerald-500/30 hover:bg-zinc-900"
              >
                <div className="mb-2 text-4xl font-bold text-emerald-400 transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-zinc-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
