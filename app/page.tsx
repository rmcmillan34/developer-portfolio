import Link from "next/link";
import { getFeaturedProjects } from "./data/projects";

const featuredCapabilities = [
  "AI Engineering",
  "Secure Software Engineering",
  "AI Security",
  "Python",
  "FastAPI",
  "Docker",
];

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
      <section className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:pb-20">
        <div className="max-w-3xl">
          <p className="mb-5 font-mono text-sm uppercase tracking-[0.22em] text-muted">
            RizzTech / Developer Portfolio
          </p>
          <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Building and securing intelligent systems.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            AI Engineering, Secure Software Engineering, and AI Security — backed
            by projects, technical writing, and inspectable engineering evidence.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              View Projects
            </Link>
            <Link
              href="/resume"
              className="rounded-md border border-foreground/20 px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground/5"
            >
              Resume
            </Link>
            <Link
              href="https://github.com/rmcmillan34"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-foreground/20 px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground/5"
            >
              GitHub
            </Link>
            <Link
              href="/about#contact"
              className="rounded-md border border-foreground/20 px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground/5"
            >
              LinkedIn / Contact
            </Link>
          </div>
        </div>

        <aside className="rounded-lg border border-white/10 bg-surface p-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Current focus
          </p>
          <p className="mt-4 text-lg font-medium leading-7">
            Developing practical evidence across AI engineering, secure software,
            and AI security through inspectable projects.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex text-sm font-semibold underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
          >
            About this portfolio
          </Link>
        </aside>
      </section>

      <section className="border-b border-white/10 py-16 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.22em] text-muted">
              Featured projects
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Engineering work first.
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-semibold underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
          >
            View all projects
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href="/projects"
              className="group rounded-lg border border-white/10 bg-surface p-6 transition-colors hover:border-white/25"
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {project.shortName ?? project.name}
              </h3>
              <p className="mt-3 leading-7 text-muted">{project.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies and domains">
                {[...project.domains, ...project.technologies].slice(0, 3).map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex text-sm font-semibold transition-transform group-hover:translate-x-1">
                Explore project →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-muted">
            Featured capabilities
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Capability backed by evidence.
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-muted">
            The portfolio tracks capability maturity from study through to
            implementation, testing, and public demonstration.
          </p>
          <Link
            href="/capabilities"
            className="mt-6 inline-flex text-sm font-semibold underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
          >
            Explore capabilities
          </Link>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {featuredCapabilities.map((capability) => (
            <li
              key={capability}
              className="rounded-lg border border-white/10 bg-surface px-5 py-4 text-sm font-medium"
            >
              {capability}
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-8 py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:py-20">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-muted">
            Technical writing
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Decisions, experiments, writeups, and lessons learned.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-muted">
            Writing will document engineering decisions, project retrospectives,
            security research, lab work, and the reasoning behind the systems on
            this portfolio.
          </p>
        </div>
        <Link
          href="/writing"
          className="inline-flex w-fit rounded-md border border-foreground/20 px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground/5"
        >
          Browse Writing
        </Link>
      </section>
    </div>
  );
}
