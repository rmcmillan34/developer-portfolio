import Link from "next/link";
import { projectStatusLabels } from "../lib/project-status";
import type { Project } from "../types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-white/10 bg-surface p-6 transition-colors hover:border-white/25">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            {projectStatusLabels[project.status]}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            {project.shortName ?? project.name}
          </h2>
        </div>
        {project.featured ? (
          <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
            Featured
          </span>
        ) : null}
      </div>

      <p className="mt-4 leading-7 text-muted">{project.summary}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
        {project.technologies.slice(0, 5).map((technology) => (
          <li
            key={technology}
            className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-muted"
          >
            {technology}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex text-sm font-semibold underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          View project →
        </Link>
      </div>
    </article>
  );
}
