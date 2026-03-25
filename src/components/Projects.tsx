"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

function GithubLogoIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projectsData.items
    : projectsData.items.filter((p) => p.featured);

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
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll("[data-project-card]");
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
      }
    );
  }, [showAll]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative bg-[#0f0f0f] py-28 lg:py-36"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={titleRef} className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-emerald-400">
            {projectsData.subtitle}
          </span>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            {projectsData.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-emerald-400" />
        </div>

        <div
          ref={gridRef}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleProjects.map((project) => {
            const githubHref = project.githubUrl?.trim() ?? "";
            const hasGithubUrl = githubHref !== "" && githubHref !== "#";
            return (
            <div
              key={project.id}
              data-project-card
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-all duration-500 hover:border-emerald-500/20 hover:bg-zinc-900 hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-emerald-500/20 to-blue-500/20">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white/5">
                      {String(project.id).padStart(2, "0")}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-black transition-transform duration-300 hover:scale-110"
                    aria-label="View live project"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  {hasGithubUrl ? (
                    <a
                      href={githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-700 text-white transition-transform duration-300 hover:scale-110"
                      aria-label="View source code"
                    >
                      <GithubLogoIcon />
                    </a>
                  ) : (
                    <span
                      title="Confidential"
                      className="flex h-12 w-12 cursor-not-allowed items-center justify-center rounded-full bg-zinc-700/50 text-white/50"
                      aria-label="Source code confidential"
                    >
                      <GithubLogoIcon />
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-zinc-500">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {projectsData.items.length > projectsData.items.filter((p) => p.featured).length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-3 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-emerald-500/30 hover:text-emerald-400"
            >
              {showAll ? "Show Less" : "View All Projects"}
              <svg
                className={`h-4 w-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
