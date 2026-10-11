import Link from "next/link";
import { publicProfile } from "../data/profile";

export const metadata = {
  title: "About",
  description:
    "Professional profile, technical focus, education, certifications, and contact links.",
};

const statusLabels = {
  completed: "Completed",
  "in-progress": "In progress",
  planned: "Planned",
  historical: "Historical",
} as const;

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
      <section className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-muted">
            About
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {publicProfile.name}
          </h1>
          <p className="mt-4 text-lg font-medium">{publicProfile.headline}</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            {publicProfile.summary}
          </p>
        </div>

        <aside className="rounded-lg border border-white/10 bg-surface p-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Career direction
          </p>
          <ul className="mt-4 space-y-3">
            {publicProfile.careerDirection.map((item) => (
              <li key={item} className="text-sm font-medium">
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="grid gap-8 border-b border-white/10 py-14 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Current focus
          </p>
          <ul className="mt-5 space-y-4 text-muted">
            {publicProfile.currentFocus.map((item) => (
              <li key={item} className="flex gap-3 leading-7">
                <span aria-hidden="true" className="mt-0.5 text-foreground">
                  →
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            How this portfolio is different
          </p>
          <p className="mt-5 leading-7 text-muted">
            The site is designed around inspectable evidence rather than a long
            list of self-asserted skills. Projects, capability maturity,
            requirements, verification, technical writing, and engineering
            artifacts are intended to show what has actually been studied,
            implemented, tested, or demonstrated.
          </p>
          <Link
            href="/capabilities"
            className="mt-6 inline-flex text-sm font-semibold underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
          >
            View evidence-backed capabilities →
          </Link>
        </div>
      </section>

      <section className="grid gap-10 border-b border-white/10 py-14 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Education
          </p>
          <div className="mt-5 space-y-4">
            {publicProfile.education.map((entry) => (
              <article
                key={`${entry.title}-${entry.organisation ?? ""}`}
                className="rounded-lg border border-white/10 bg-surface p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="font-semibold">{entry.title}</h2>
                    {entry.organisation ? (
                      <p className="mt-1 text-sm text-muted">{entry.organisation}</p>
                    ) : null}
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    {statusLabels[entry.status]}
                  </span>
                </div>
                {entry.summary ? (
                  <p className="mt-4 text-sm leading-6 text-muted">{entry.summary}</p>
                ) : null}
              </article>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Certifications
          </p>
          <div className="mt-5 space-y-4">
            {publicProfile.certifications.map((entry) => (
              <article
                key={entry.title}
                className="rounded-lg border border-white/10 bg-surface p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h2 className="font-semibold">{entry.title}</h2>
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    {statusLabels[entry.status]}
                  </span>
                </div>
                {entry.summary ? (
                  <p className="mt-4 text-sm leading-6 text-muted">{entry.summary}</p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-14">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Professional links
        </h2>
        <p className="mt-5 max-w-2xl leading-7 text-muted">
          GitHub is available now. LinkedIn is the intended primary public
          contact path and will be linked here once the canonical public profile
          URL is supplied.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={publicProfile.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-foreground/20 px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground/5"
          >
            GitHub ↗
          </a>
          <Link
            href="/resume"
            className="rounded-md border border-foreground/20 px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground/5"
          >
            Resume
          </Link>
        </div>
      </section>
    </div>
  );
}
