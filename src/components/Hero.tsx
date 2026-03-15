"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { heroData, siteConfig } from "@/data/portfolio";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const greetingRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % heroData.taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!taglineRef.current) return;
    gsap.fromTo(
      taglineRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [taglineIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(greetingRef.current, { y: 40, opacity: 0, duration: 0.8 })
        .from(nameRef.current, { y: 50, opacity: 0, duration: 0.8 }, "-=0.4")
        .from(taglineRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(descRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.2")
        .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.2")
        .from(
          decorRef.current,
          { scale: 0, opacity: 0, duration: 1.2, ease: "elastic.out(1, 0.5)" },
          "-=0.8"
        );

      gsap.to(decorRef.current, {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0a]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.06)_0%,_transparent_60%)]" />

      <div
        ref={decorRef}
        className="pointer-events-none absolute right-[10%] top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <div className="relative h-[500px] w-[500px]">
          <div className="absolute inset-0 rounded-full border border-emerald-500/20" />
          <div className="absolute inset-8 rounded-full border border-emerald-500/10" />
          <div className="absolute inset-16 rounded-full border border-blue-500/10" />
          <div className="absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
          <div className="absolute bottom-1/4 right-0 h-2 w-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />
          <div className="absolute bottom-0 left-1/4 h-2.5 w-2.5 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <span
            ref={greetingRef}
            className="mb-4 inline-block text-lg font-medium text-emerald-400"
          >
            {heroData.greeting}
          </span>

          <h1
            ref={nameRef}
            className="mb-4 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {heroData.name}
            <span className="text-emerald-400">.</span>
          </h1>

          <div className="mb-6 h-12 overflow-hidden">
            <div
              ref={taglineRef}
              className="text-2xl font-semibold text-zinc-400 sm:text-3xl lg:text-4xl"
            >
              {heroData.taglines[taglineIndex]}
            </div>
          </div>

          <p
            ref={descRef}
            className="mb-10 max-w-xl text-lg leading-relaxed text-zinc-500"
          >
            {heroData.description}
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <a
              href={heroData.cta.href}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(heroData.cta.href)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              {heroData.cta.label}
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={heroData.ctaSecondary.href}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(heroData.ctaSecondary.href)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-4 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-zinc-500 hover:text-white"
            >
              {heroData.ctaSecondary.label}
            </a>
          </div>

          <div className="mt-16 flex items-center gap-5">
            {siteConfig.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 transition-colors duration-200 hover:text-emerald-400"
                aria-label={link.label}
              >
                <SocialIcon name={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-zinc-600">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-10 w-5 rounded-full border border-zinc-700 p-1">
            <div className="h-2 w-full animate-bounce rounded-full bg-emerald-400" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "github":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "twitter":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    default:
      return null;
  }
}
