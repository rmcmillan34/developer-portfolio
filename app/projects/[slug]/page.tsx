import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "../../data/projects";
import { projectStatusLabels } from "../../lib/project-status";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.shortName ?? project.name,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
      <Link
        href="/projects"
        className="text-sm font-semibold text-muted underline decoration-foreground/20 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
      >
        ← Back to projects
      </Link>

      <header className="mt-8 border-b border-white/10 pb-12">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
          <span>{projectStatusLabels[project.status]}</span>
          {project.featured ? <span>• Featured</span> : null}
        </div>

        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          {project.name}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
          {project.summary}
        </p>

        <ul className="mt-7 flex flex-wrap gap-2" aria-label="Project domains">
          {project.domains.map((domain) => (
            <li
              key={domain}
              className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-muted"
            >
              {domain}
            </li>
          ))}
        </ul>
      </header>

      <div className="grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="space-y-12">
          <section>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Problem
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              What this project addresses
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-muted">{project.problem}</p>
          </section>

          <section>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Approach
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              What is being built
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-muted">{project.built}</p>
          </section>

          <section>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Security considerations
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Security by design
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.securityConsiderations.map((consideration) => (
                <li
                  key={consideration}
                  className="rounded-lg border border-white/10 bg-surface p-4 leading-7 text-muted"
                >
                  {consideration}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Evidence
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Inspectable supporting artifacts
            </h2>
            <div className="mt-5 grid gap-3">
              {project.evidence.length > 0 ? (
                project.evidence.map((item) => (
                  <div
                    key={`${item.type}-${item.label}`}
                    className="rounded-lg border border-white/10 bg-surface p-5"
                  >
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                      {item.type}
                    </p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="mt-2 inline-flex font-semibold underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                      >
                        {item.label} ↗
                      </Link>
                    ) : (
                      <h3 className="mt-2 font-semibold">{item.label}</h3>
                    )}
                    {item.description ? (
                      <p className="mt-2 leading-7 text-muted">{item.description}</p>
                    ) : null}
                  </div>
                ))
              ) : (
                <p className="text-muted">No public evidence artifacts are listed yet.</p>
              )}
            </div>
          </section>

          {project.lessonsLearned.length > 0 ? (
            <section>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                Lessons learned
              </p>
              <ul className="mt-5 space-y-3 text-muted">
                {project.lessonsLearned.map((lesson) => (
                  <li key={lesson}>• {lesson}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <aside className="space-y-8 lg:sticky lg:top-8 lg:self-start">
          <section className="rounded-lg border border-white/10 bg-surface p-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Technologies
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-white/10 px-3 py-1 text-sm text-muted"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-lg border border-white/10 bg-surface p-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Project links
            </p>
            {project.links.length > 0 ? (
              <ul className="mt-4 space-y-3">
                {project.links.map((link) => (
                  <li key={`${link.type}-${link.href}`}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className="text-sm font-semibold underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                    >
                      {link.label} ↗
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm leading-6 text-muted">
                No public project links are listed yet.
              </p>
            )}
          </section>

          {project.relatedWriting.length > 0 ? (
            <section className="rounded-lg border border-white/10 bg-surface p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                Related writing
              </p>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {project.relatedWriting.map((writing) => (
                  <li key={writing}>{writing}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </aside>
      </div>
    </article>
  );
}
