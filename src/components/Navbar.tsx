"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { navLinks, siteConfig } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      const scrollPos = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (!section) return;
        const el = section as HTMLElement;
        if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(navLinks[index].href.replace("#", ""));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(logoRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      gsap.from(linksRef.current?.children ?? [], {
        y: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.3,
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (isOpen) {
      gsap.to(mobileMenuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.from(mobileMenuRef.current.children, {
        x: -20,
        opacity: 0,
        stagger: 0.06,
        duration: 0.3,
        delay: 0.1,
        ease: "power2.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a
            ref={logoRef}
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#home");
            }}
            className="text-2xl font-bold tracking-tight"
          >
            <span className="text-white">{siteConfig.name}</span>
            <span className="text-emerald-400">.</span>
          </a>

          <div ref={linksRef} className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                  activeSection === link.href.replace("#", "")
                    ? "text-emerald-400"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-emerald-400" />
                )}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        className="h-0 overflow-hidden opacity-0 md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(link.href);
            }}
            className={`block px-6 py-3 text-sm font-medium transition-colors ${
              activeSection === link.href.replace("#", "")
                ? "text-emerald-400 bg-emerald-400/5"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
