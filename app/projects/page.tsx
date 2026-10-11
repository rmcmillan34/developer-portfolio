import { ProjectCard } from "../components/project-card";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
      <div className="max-w-3xl">
        <p className="font-mono text-sm uppercase tracking-[0.22em] text-muted">
          Projects
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Engineering work and evidence.
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          Projects are presented as inspectable engineering work: what problem was
          addressed, what was built, how it was secured, and what evidence supports
          the result.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
