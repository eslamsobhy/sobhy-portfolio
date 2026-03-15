"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { educationData } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      const cards = cardsRef.current?.querySelectorAll("[data-education-card]");
      cards?.forEach((card, i) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.1,
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
      id="education"
      className="relative bg-[#050505] py-28 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.05)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={titleRef} className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-emerald-400">
            {educationData.subtitle}
          </span>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            {educationData.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-emerald-400" />
        </div>

        <div
          ref={cardsRef}
          className="grid gap-8 md:grid-cols-3"
        >
          {educationData.items.map((item) => (
            <article
              key={item.id}
              data-education-card
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:border-emerald-500/40 hover:bg-zinc-900/80"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18)_0%,_transparent_55%)]" />
              <div className="relative">
                <span className="mb-3 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                  {item.period}
                </span>
                <h3 className="mb-1 text-lg font-semibold text-white">
                  {item.degree}
                </h3>
                <p className="mb-3 text-sm font-medium text-zinc-400">
                  {item.institution}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
                <ul className="space-y-1.5 text-xs text-zinc-400">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

