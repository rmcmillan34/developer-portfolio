import Link from "next/link";
import type { WritingEntry } from "../types/writing";

const typeLabels: Record<WritingEntry["frontmatter"]["type"], string> = {
  article: "Article",
  "project-retrospective": "Project retrospective",
  "architecture-note": "Architecture note",
  "security-research": "Security research",
  "threat-model": "Threat model",
  "lab-writeup": "Lab writeup",
  writeup: "Writeup",
  "lessons-learned": "Lessons learned",
  opinion: "Opinion",
};

export function WritingCard({ entry }: { entry: WritingEntry }) {
  const { frontmatter } = entry;

  return (
    <article className="flex h-full flex-col rounded-lg border border-white/10 bg-surface p-6">
      <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted">
        <span>{typeLabels[frontmatter.type]}</span>
        <span aria-hidden="true">/</span>
        <time dateTime={frontmatter.published}>{frontmatter.published}</time>
        {frontmatter.disclosure === "sanitised" ? (
          <>
            <span aria-hidden="true">/</span>
            <span>Sanitised</span>
          </>
        ) : null}
      </div>

      <h2 className="mt-4 text-2xl font-semibold tracking-tight">
        {frontmatter.title}
      </h2>
      <p className="mt-4 leading-7 text-muted">{frontmatter.summary}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Article tags">
        {frontmatter.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        {frontmatter.hosting === "external" && frontmatter.externalUrl ? (
          <a
            href={frontmatter.externalUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
          >
            Read externally →
          </a>
        ) : (
          <Link
            href={`/writing/${entry.slug}`}
            className="text-sm font-semibold underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
          >
            Read article →
          </Link>
        )}
      </div>
    </article>
  );
}
