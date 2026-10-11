import Link from "next/link";

const primaryActions = [
  { href: "/projects", label: "View Projects" },
  { href: "/resume", label: "Resume" },
];

export default function Home() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-10rem)] w-full max-w-6xl items-center px-6 py-20 lg:px-8">
      <section className="max-w-3xl">
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
          {primaryActions.map((action, index) => (
            <Link
              key={action.href}
              href={action.href}
              className={
                index === 0
                  ? "rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85"
                  : "rounded-md border border-foreground/20 px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground/5"
              }
            >
              {action.label}
            </Link>
          ))}
          <Link
            href="https://github.com/rmcmillan34"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-foreground/20 px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground/5"
          >
            GitHub
          </Link>
        </div>
      </section>
    </div>
  );
}
