import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WritingContent } from "../../components/writing-content";
import { getPublishedWriting, getWritingBySlug } from "../../lib/writing";

export function generateStaticParams() {
  return getPublishedWriting()
    .filter((entry) => entry.frontmatter.hosting !== "external")
    .map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/writing/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = getWritingBySlug(slug);

  if (!entry) return { title: "Writing not found" };

  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.summary,
  };
}

export default async function WritingDetailPage({
  params,
}: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const entry = getWritingBySlug(slug);

  if (!entry || entry.frontmatter.hosting === "external") {
    notFound();
  }

  const { frontmatter } = entry;

  return (
    <article className="mx-auto w-full max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
      <Link
        href="/writing"
        className="text-sm font-semibold text-muted underline decoration-foreground/20 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
      >
        ← Back to writing
      </Link>

      <header className="mt-8 border-b border-white/10 pb-10">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted">
          <span>{frontmatter.type.replaceAll("-", " ")}</span>
          <span aria-hidden="true">/</span>
          <time dateTime={frontmatter.published}>{frontmatter.published}</time>
          {frontmatter.updated && frontmatter.updated !== frontmatter.published ? (
            <>
              <span aria-hidden="true">/</span>
              <span>Updated {frontmatter.updated}</span>
            </>
          ) : null}
          {frontmatter.disclosure === "sanitised" ? (
            <>
              <span aria-hidden="true">/</span>
              <span>Sanitised</span>
            </>
          ) : null}
        </div>

        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          {frontmatter.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
          {frontmatter.summary}
        </p>

        <ul className="mt-7 flex flex-wrap gap-2" aria-label="Article tags">
          {frontmatter.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <div className="py-10">
        <WritingContent body={entry.body} />
      </div>

      {(frontmatter.relatedProjects.length > 0 || frontmatter.media?.length) ? (
        <footer className="grid gap-5 border-t border-white/10 pt-10 sm:grid-cols-2">
          {frontmatter.relatedProjects.length > 0 ? (
            <section className="rounded-lg border border-white/10 bg-surface p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                Related projects
              </p>
              <ul className="mt-4 space-y-3">
                {frontmatter.relatedProjects.map((project) => (
                  <li key={project}>
                    <Link
                      href={`/projects/${project}`}
                      className="text-sm font-semibold underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                    >
                      {project.replaceAll("-", " ")} →
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {frontmatter.media?.length ? (
            <section className="rounded-lg border border-white/10 bg-surface p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                Related media
              </p>
              <ul className="mt-4 space-y-3">
                {frontmatter.media.map((media) => (
                  <li key={`${media.type}-${media.url}`}>
                    <a
                      href={media.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                    >
                      {media.title} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </footer>
      ) : null}
    </article>
  );
}
