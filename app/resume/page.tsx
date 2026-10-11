import Link from "next/link";
import { publicProfile } from "../data/profile";

export const metadata = {
  title: "Resume",
  description:
    "Resume and supporting evidence for AI engineering, secure software, and AI security work.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
      <section className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-muted">
            Resume
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
            PDF status
          </p>
          <h2 className="mt-3 text-xl font-semibold">Resume artifact pending</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            The final public resume PDF has not yet been supplied to this
            repository. This page is the V0 placeholder required by the
            portfolio specification and will link the final static PDF once it
            is available.
          </p>
        </aside>
      </section>

      <section className="grid gap-10 border-b border-white/10 py-14 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Current direction
          </p>
          <ul className="mt-5 space-y-3">
            {publicProfile.careerDirection.map((item) => (
              <li key={item} className="rounded-lg border border-white/10 bg-surface px-5 py-4 text-sm font-medium">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Evidence alongside the resume
          </p>
          <p className="mt-5 leading-7 text-muted">
            The resume is intentionally only one part of the professional
            record. The portfolio links claims to projects, capability maturity,
            technical writing, security considerations, and verification
            artifacts where practical.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-md border border-foreground/20 px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground/5"
            >
              Projects
            </Link>
            <Link
              href="/capabilities"
              className="rounded-md border border-foreground/20 px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground/5"
            >
              Capabilities
            </Link>
            <Link
              href="/writing"
              className="rounded-md border border-foreground/20 px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground/5"
            >
              Writing
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Public profile
        </p>
        <p className="mt-5 max-w-2xl leading-7 text-muted">
          Additional professional background is intentionally kept concise here.
          The public portfolio publishes only information that provides clear
          professional value and is appropriate for public disclosure.
        </p>
        <Link
          href="/about"
          className="mt-6 inline-flex text-sm font-semibold underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
        >
          Read the About page →
        </Link>
      </section>
    </div>
  );
}
