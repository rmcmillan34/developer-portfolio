import Link from "next/link";

const navigation = [
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-background/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-3 font-semibold tracking-tight"
          aria-label="RizzTech home"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-foreground/15 bg-foreground text-sm font-bold text-background">
            RT
          </span>
          <span>RizzTech</span>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
