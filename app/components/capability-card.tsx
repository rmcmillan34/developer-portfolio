import Link from "next/link";
import type { Capability } from "../types/capability";

const maturityLabels: Record<Capability["maturity"], string> = {
  claimed: "Claimed",
  studied: "Studied",
  implemented: "Implemented",
  tested: "Tested",
  demonstrated: "Demonstrated",
};

export function CapabilityCard({ capability }: { capability: Capability }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-white/10 bg-surface p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            {capability.domain}
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight">
            {capability.name}
          </h3>
        </div>
        <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
          {maturityLabels[capability.maturity]}
        </span>
      </div>

      <p className="mt-4 leading-7 text-muted">{capability.description}</p>

      <div className="mt-6 border-t border-white/10 pt-5">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Evidence
        </p>
        <ul className="mt-3 space-y-2 text-sm">
          {capability.evidence.length > 0 ? (
            capability.evidence.map((evidence) => {
              const href = evidence.projectSlug
                ? `/projects/${evidence.projectSlug}`
                : evidence.href;

              return (
                <li key={`${evidence.type}-${evidence.label}`}>
                  {href ? (
                    <Link
                      href={href}
                      className="underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
                    >
                      {evidence.label}
                    </Link>
                  ) : (
                    evidence.label
                  )}
                  <span className="ml-2 text-muted">({evidence.type})</span>
                </li>
              );
            })
          ) : (
            <li className="text-muted">No public evidence linked yet.</li>
          )}
        </ul>
      </div>
    </article>
  );
}
