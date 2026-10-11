import { WritingCard } from "../components/writing-card";
import { getPublishedWriting } from "../lib/writing";

export const metadata = {
  title: "Writing",
  description:
    "Technical writing, project retrospectives, security research, and engineering writeups.",
};

export default function WritingPage() {
  const entries = getPublishedWriting();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
      <p className="font-mono text-sm uppercase tracking-[0.22em] text-muted">Writing</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        Technical writing and writeups.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
        Engineering decisions, project retrospectives, security research, lab work,
        and lessons learned. Published content is intentionally separated from
        internal engineering documentation.
      </p>

      {entries.length ? (
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {entries.map((entry) => (
            <WritingCard key={entry.slug} entry={entry} />
          ))}
        </div>
      ) : (
        <p className="mt-12 rounded-lg border border-white/10 bg-surface p-6 text-muted">
          No public writing has been published yet.
        </p>
      )}
    </section>
  );
}
