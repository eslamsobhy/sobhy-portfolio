"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonialsData } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const items = testimonialsData.items;

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
    if (!cardRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [active]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative bg-[#0a0a0a] py-28 lg:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(16,185,129,0.04)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={titleRef} className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-emerald-400">
            {testimonialsData.subtitle}
          </span>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            {testimonialsData.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-emerald-400" />
        </div>

        <div className="mx-auto max-w-3xl">
          <div
            ref={cardRef}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 text-center md:p-12"
          >
            <svg
              className="mx-auto mb-6 h-10 w-10 text-emerald-400/40"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p className="mb-8 text-lg leading-relaxed text-zinc-300 italic md:text-xl">
              &ldquo;{items[active].quote}&rdquo;
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-lg font-bold text-emerald-400">
                {items[active].name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">{items[active].name}</p>
                <p className="text-sm text-zinc-500">{items[active].role}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  active === i
                    ? "w-8 bg-emerald-400"
                    : "w-2.5 bg-zinc-700 hover:bg-zinc-600"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
