import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Mail, Menu, X, Download,
  GraduationCap, ExternalLink, Award, MapPin, Phone, ArrowRight, Code2, ArrowDown,
} from "lucide-react";
import {
  SiGithub, SiInstagram, SiX, SiPython, SiJavascript, SiReact,
  SiHtml5, SiCss, SiNodedotjs, SiMysql, SiGit, SiExpress,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { profile, socials, about, skills, education, projects, certificates } from "@/data/portfolio";
import { ProfileAvatar360 } from "@/components/ProfileAvatar360";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dinesh Govindarasu — Creative Developer" },
      { name: "description", content: "Portfolio of Dinesh Govindarasu, CSE student and full-stack creative developer: projects, education, certificates and contact." },
      { property: "og:title", content: "Dinesh Govindarasu — Creative Developer" },
      { property: "og:description", content: "Projects, education, certificates and contact for Dinesh Govindarasu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  ["home", "Home"],
  ["about", "About"],
  ["education", "Education"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["certificates", "Certificates"],
  ["contact", "Contact"],
] as const;

const HERO_COPY = [
  {
    lines: ["CREATIVE", "DEVELOPER"],
    description:
      "Passionate about turning ideas into real-world solutions using modern web technologies and clean code.",
  },
  {
    lines: ["FULL STACK", "DEVELOPER"],
    description:
      "Building complete web experiences, from polished interfaces to reliable APIs and databases.",
  },
  {
    lines: ["SCALABLE", "SYSTEMS"],
    description:
      "Designing resilient systems that stay fast, dependable, and ready to grow.",
  },
] as const;

const SOCIAL = [
  { href: socials.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: socials.github, label: "GitHub", Icon: SiGithub },
  { href: socials.x, label: "X (Twitter)", Icon: SiX },
  { href: socials.instagram, label: "Instagram", Icon: SiInstagram },
];

const SKILL_ICONS: Record<string, IconType> = {
  Java: FaJava,
  Python: SiPython,
  JavaScript: SiJavascript,
  "React.js": SiReact,
  HTML: SiHtml5,
  CSS: SiCss,
  "Node.js": SiNodedotjs,
  MySQL: SiMysql,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": Code2,
  "Express.js": SiExpress,
};

const SKILL_ICON_COLORS: Record<string, string> = {
  Java: "#f89820",
  Python: "#3776ab",
  JavaScript: "#f7df1e",
  "React.js": "#61dafb",
  HTML: "#e34f26",
  CSS: "#1572b6",
  "Node.js": "#5fa04e",
  MySQL: "#4479a1",
  Git: "#f05032",
  GitHub: "#f4f4f5",
  "VS Code": "#007acc",
  "Express.js": "#f4f4f5",
};

function Socials({ size = "md" }: { size?: "sm" | "md" }) {
  const s = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  return (
    <div className="flex gap-2">
      {SOCIAL.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`${s} inline-flex items-center justify-center rounded-full border border-white/10 bg-white/3 text-zinc-400 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white`}
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

function SectionHead({ k, title }: { k: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">{k}</p>
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function Index() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [activeHeroCopy, setActiveHeroCopy] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let interval: number | undefined;

    const updateRotation = () => {
      if (interval !== undefined) window.clearInterval(interval);
      interval = undefined;

      if (!reducedMotion.matches) {
        interval = window.setInterval(() => {
          setActiveHeroCopy((current) => (current + 1) % HERO_COPY.length);
        }, 5600);
      }
    };

    updateRotation();
    reducedMotion.addEventListener("change", updateRotation);

    return () => {
      if (interval !== undefined) window.clearInterval(interval);
      reducedMotion.removeEventListener("change", updateRotation);
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    const rev = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((el) => rev.observe(el));
    return () => {
      obs.disconnect();
      rev.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#fafafa] selection:bg-white selection:text-black">
      {/* Cinematic Amber Ambient Backdrop Glow */}
      <div className="pointer-events-none fixed inset-0 studio-amber-backdrop opacity-80" />

      {/* Header - Matching reference with 'Dinesh.' and active amber underline */}
      <header className="sticky top-0 z-50 border-b border-white/6 bg-[#0c0d10]/80 backdrop-blur-md">
        <nav
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6"
          aria-label="Main"
        >
          {/* Brand Name with amber dot */}
          <a
            href="#home"
            className="font-display text-2xl font-bold tracking-tight text-white transition hover:opacity-90"
          >
            Dinesh<span className="text-amber-500">.</span>
          </a>

          {/* Centered Navigation with active amber underline */}
          <ul className="hidden items-center gap-7 md:flex">
            {NAV.map(([id, l]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`relative py-1 text-sm tracking-wide transition-all ${
                    active === id
                      ? "text-white font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-500"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action: Pill button Hire Me & Theme & Menu */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center rounded-full border border-white/20 bg-black/40 px-6 py-2 text-xs font-medium text-white backdrop-blur-md transition hover:bg-white/10 hover:border-white/40 active:scale-95"
            >
              Hire Me
            </a>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              aria-expanded={open}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/3 text-zinc-300 md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {open && (
          <ul className="border-t border-white/10 bg-[#0c0d10]/95 px-6 py-4 md:hidden backdrop-blur-xl">
            {NAV.map(([id, l]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm ${
                    active === id ? "text-amber-400 font-semibold bg-white/10" : "text-zinc-400"
                  }`}
                >
                  {l}
                </a>
              </li>
            ))}
            <li className="pt-4 mt-2 border-t border-white/10 flex justify-between items-center">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex rounded-full bg-white px-5 py-2 text-xs font-semibold text-black"
              >
                Hire Me
              </a>
              <Socials size="sm" />
            </li>
          </ul>
        )}
      </header>

      <main className="relative z-10">
        <section
          id="home"
          className="relative mx-auto flex min-h-[100vh] max-w-[1440px] flex-col justify-between px-6 pb-8 pt-5"
        >
          <div className="my-auto grid items-center gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,1.45fr)_minmax(0,0.75fr)]">
            <div className="text-center xl:text-left">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
                HI, I'M DINESH
              </p>
              <h1
                key={activeHeroCopy}
                className="hero-copy-enter mt-4 font-display text-4xl font-black uppercase tracking-[-0.06em] text-white sm:text-5xl md:text-6xl xl:text-[5.25rem]"
              >
                {HERO_COPY[activeHeroCopy].lines.map((line) => (
                  <span key={line} className="block leading-[0.9]">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-zinc-400 xl:mx-0">
                CSE student building high-performance web applications with clean architecture and modern user experiences.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 xl:justify-start">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-[0_8px_30px_rgba(255,255,255,0.14)] transition hover:bg-zinc-200 active:scale-95"
                >
                  <span>View My Work</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/4 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10 hover:border-white/30 active:scale-95"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="relative flex justify-center py-2">
              <div className="pointer-events-none absolute inset-x-[10%] bottom-10 top-6 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,168,78,0.26),rgba(255,168,78,0.08)_26%,transparent_58%)] blur-3xl" />
              <ProfileAvatar360
                photo={profile.photo}
                name={profile.name}
                title={profile.title}
              />
            </div>

            <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
              <div className="w-full max-w-xs border-l-2 border-amber-500/80 py-1 pl-4 text-left">
                <p
                  key={activeHeroCopy}
                  className="hero-copy-enter hero-copy-enter-delayed text-sm leading-relaxed text-zinc-300"
                >
                  {HERO_COPY[activeHeroCopy].description}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-center gap-3 xl:justify-start">
                {SOCIAL.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/2 text-zinc-400 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-white/6 pt-6 font-mono text-xs uppercase tracking-wider text-zinc-500">
            <a
              href="#about"
              className="inline-flex items-center gap-3 text-zinc-400 transition hover:text-white"
            >
              <div className="flex h-6 w-3.5 items-start justify-center rounded-full border border-zinc-500 p-0.5">
                <div className="h-1.5 w-0.5 rounded-full bg-zinc-300 animate-mouse-wheel" />
              </div>
              <span className="text-zinc-600">|</span>
              <span className="text-xs tracking-wider text-zinc-400">Scroll Down</span>
            </a>
            <div className="hidden sm:block text-[11px] text-zinc-600 tracking-widest">
              TAMIL NADU, INDIA · 2026
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="border-t border-white/8 bg-white/1">
          <div className="reveal mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
            <div>
              <SectionHead k="01 // ABOUT" title="About Me" />
              {about.paragraphs.map((p) => (
                <p key={p} className="mb-4 text-base leading-relaxed text-zinc-300">
                  {p}
                </p>
              ))}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={profile.resume}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black shadow-lg transition hover:bg-zinc-200 active:scale-95"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </div>
            </div>

            <div className="space-y-8 lg:pt-16">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#111216] shadow-soft">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-display text-xl font-bold text-white">{profile.name}</p>
                  <p className="mt-1 text-sm text-zinc-300">{profile.title}</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="reveal border-t border-white/8 bg-white/1 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHead k="02 // SKILLS" title="Tools I Work With" />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {skills.map((skill) => {
                const Icon = SKILL_ICONS[skill];
                return (
                  <div
                    key={skill}
                    className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/3 px-2 py-4 text-center transition hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/6"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/5 bg-white/5">
                      <Icon
                        aria-hidden="true"
                        className="h-8 w-8"
                        style={{ color: SKILL_ICON_COLORS[skill] }}
                      />
                    </span>
                    <span className="text-xs font-medium text-zinc-300">{skill}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Education & Timeline Section */}
        <section id="education" className="reveal border-t border-white/8 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <SectionHead k="03 // EDUCATION" title="Timeline & Academics" />
            <ol className="relative ml-4 border-l border-white/15">
              {education.map((e) => (
                <li key={e.degree} className="mb-10 ml-8">
                  <span className="absolute -left-4.25 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-[#14151b] text-white shadow-md">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <div className="rounded-2xl border border-white/10 bg-white/2 p-6 backdrop-blur-sm transition hover:border-white/25 hover:bg-white/4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                        {e.period}
                      </p>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-mono text-zinc-300">
                        Academic
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-xl font-bold text-white">
                      {e.degree}
                    </h3>
                    <p className="text-sm text-zinc-400">
                      {e.institution} · {e.university}
                    </p>
                    <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                      {e.details}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="border-t border-white/8 bg-white/1">
          <div className="reveal mx-auto max-w-7xl px-6 py-24">
            <SectionHead k="04 // PROJECTS" title="Featured Work" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => (
                <article
                  key={p.name}
                  className="group flex h-[360px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/2 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/4"
                >
                  <div className="relative flex h-24 shrink-0 items-end border-b border-white/6 bg-linear-to-br from-white/5 to-transparent p-4">
                    <Code2 className="absolute right-5 top-5 h-7 w-7 text-white/30 transition-transform group-hover:scale-110 group-hover:text-white" />
                    <span className="max-w-full truncate font-mono text-xs tracking-wider text-zinc-400">
                      0{i + 1} // {p.name.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex min-h-0 flex-1 flex-col p-4">
                    <h3 className="line-clamp-2 font-display text-lg font-bold text-white group-hover:text-white">
                      {p.name}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-300">
                      {p.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-white/10 bg-white/4 px-2 py-0.5 font-mono text-[11px] text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                      {p.tech.length > 4 && (
                        <span className="rounded-md border border-white/10 bg-white/4 px-2 py-0.5 font-mono text-[11px] text-zinc-400">
                          +{p.tech.length - 4}
                        </span>
                      )}
                    </div>
                    <div className="mt-auto flex items-center gap-2 border-t border-white/6 pt-3">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white transition hover:bg-white/10 hover:border-white/40"
                      >
                        <SiGithub className="h-3.5 w-3.5" /> Source Code
                      </a>
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-black transition hover:bg-zinc-200"
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="reveal mx-auto max-w-7xl border-t border-white/8 px-6 py-24">
          <SectionHead k="05 // CERTIFICATES" title="Certificates & Accreditations" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((c, i) => (
              <article
                key={i}
                className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/2 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/25"
              >
                <div className="flex h-40 items-center justify-center border-b border-white/6 bg-white">
                  {c.image ? (
                    <img src={c.image} alt={c.title} className="h-full w-full object-contain" />
                  ) : (
                    <Award className="h-10 w-10 text-zinc-400" />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display font-semibold text-white">{c.title}</h3>
                  <p className="text-xs text-zinc-400 mt-1">{c.issuer}</p>
                  <p className="mt-1 font-mono text-[11px] text-zinc-500">{c.date}</p>
                  <div className="mt-5 flex flex-wrap gap-3 text-xs">
                    {c.file ? (
                      <a
                        href={c.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white px-4 py-2 font-medium text-black transition hover:bg-zinc-200"
                      >
                        View Certificate
                      </a>
                    ) : (
                      <span className="rounded-full border border-dashed border-white/20 px-3 py-1.5 text-zinc-500 text-xs">
                        Verified
                      </span>
                    )}
                    {c.verify && (
                      <a
                        href={c.verify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 py-1.5 text-xs text-zinc-300 hover:text-white"
                      >
                        Verify <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/8 bg-[#090a0d]">
        <div className="mx-auto grid max-w-[1360px] gap-8 px-6 py-12 md:grid-cols-3 lg:grid-cols-[1fr_1.5fr_1fr]">
          <div>
            <p className="font-display text-lg font-bold text-white">
              Dinesh <span className="text-zinc-500">.</span>
            </p>
            <p className="mt-1 text-xs text-zinc-400">{profile.title}</p>
            <p className="mt-3 text-xs text-zinc-500">
              Designed & built with modern web technologies.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
              {NAV.map(([id, l]) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-zinc-400 transition hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-4">
            <Socials size="sm" />
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-xs text-zinc-400 transition hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" /> {profile.email}
            </a>
          </div>
        </div>
        <div className="border-t border-white/5 py-6 text-center font-mono text-[11px] text-zinc-600">
          <p>
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Contact() {
  const [err, setErr] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"" | "ok">("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v: Record<string, string> = Object.fromEntries(
      ["name", "email", "subject", "message"].map((k) => [k, String(f.get(k) || "").trim()])
    );
    const er: Record<string, string> = {};
    if (!v["name"]) er["name"] = "Please enter your full name.";
    if (!v["email"]) er["email"] = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v["email"]))
      er["email"] = "Please enter a valid email address.";
    if (!v["subject"]) er["subject"] = "Please enter a subject.";
    if (!v["message"]) er["message"] = "Please write a message.";
    setErr(er);
    if (Object.keys(er).length) {
      setStatus("");
      return;
    }
    const body = `${v["message"]}\n\n— ${v["name"]} (${v["email"]})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      v["subject"] ?? ""
    )}&body=${encodeURIComponent(body)}`;
    setStatus("ok");
  };

  const field =
    "mt-1.5 w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-white/30 focus:bg-white/6";

  const F = ({
    id,
    label,
    type = "text",
  }: {
    id: string;
    label: string;
    type?: string;
  }) => (
    <div>
      <label htmlFor={id} className="text-xs font-mono uppercase tracking-wider text-zinc-400">
        {label} *
      </label>
      <input
        id={id}
        name={id}
        type={type}
        aria-invalid={!!err[id]}
        aria-describedby={`${id}-e`}
        className={field}
      />
      {err[id] && (
        <p id={`${id}-e`} className="mt-1 text-xs text-red-400">
          {err[id]}
        </p>
      )}
    </div>
  );

  return (
    <section id="contact" className="border-t border-white/8 bg-[#090a0d]">
      <div className="reveal mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHead k="05 // CONTACT" title="Get In Touch" />
          <p className="text-base text-zinc-300 leading-relaxed">
            Open to full-time roles, internships, and project collaborations. Let's build something remarkable together.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3 text-zinc-300">
              <Mail className="h-4 w-4 text-white" />
              <a href={`mailto:${profile.email}`} className="hover:text-white transition">
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-zinc-300">
              <Phone className="h-4 w-4 text-white" />
              <span>{profile.phone}</span>
            </li>
            <li className="flex items-center gap-3 text-zinc-300">
              <MapPin className="h-4 w-4 text-white" />
              <span>{profile.location}</span>
            </li>
          </ul>
          <div className="mt-8">
            <Socials />
          </div>
        </div>

        <form
          onSubmit={submit}
          noValidate
          className="space-y-4 rounded-3xl border border-white/10 bg-white/2 p-8 backdrop-blur-md"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {F({ id: "name", label: "Your Name" })}
            {F({ id: "email", label: "Email Address", type: "email" })}
          </div>
          {F({ id: "subject", label: "Subject" })}
          <div>
            <label
              htmlFor="message"
              className="text-xs font-mono uppercase tracking-wider text-zinc-400"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              aria-invalid={!!err["message"]}
              className={field}
            />
            {err["message"] && (
              <p className="mt-1 text-xs text-red-400">
                {err["message"]}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg transition hover:bg-zinc-200 active:scale-95"
          >
            Send Message
          </button>
          {status === "ok" && (
            <p
              role="status"
              className="rounded-xl border border-white/20 bg-white/5 p-4 text-xs text-zinc-300"
            >
              Your email app will now open with the drafted message. You can also contact me directly at {profile.email}.
            </p>
          )}
          {Object.keys(err).length > 0 && (
            <p role="alert" className="text-xs text-red-400 font-medium">
              Please fill in all required fields.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
