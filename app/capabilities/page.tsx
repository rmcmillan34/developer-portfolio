import { CapabilityCard } from "../components/capability-card";
import {
  capabilityDomains,
  getCapabilitiesByDomain,
} from "../data/capabilities";

const maturityModel = [
  "Claimed",
  "Studied",
  "Implemented",
  "Tested",
  "Demonstrated",
];

export default function CapabilitiesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
      <section className="border-b border-white/10 pb-12">
        <p className="font-mono text-sm uppercase tracking-[0.22em] text-muted">
          Capabilities
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Evidence-backed capability, not a keyword cloud.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
          Capabilities are grouped by engineering domain and assigned a manually
          maintained maturity level. Evidence links show what currently supports
          each claim and make developing areas explicit rather than overstating
          them.
        </p>

        <div className="mt-8 rounded-lg border border-white/10 bg-surface p-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Maturity model
          </p>
          <ol className="mt-4 flex flex-wrap gap-2">
            {maturityModel.map((level, index) => (
              <li
                key={level}
                className="rounded-full border border-white/10 px-3 py-1.5 text-sm"
              >
                <span className="mr-2 font-mono text-xs text-muted">
                  {index + 1}
                </span>
                {level}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="space-y-16 py-16">
        {capabilityDomains.map((domain) => {
          const domainCapabilities = getCapabilitiesByDomain(domain);

          if (domainCapabilities.length === 0) {
            return null;
          }

          return (
            <section key={domain}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                    Capability domain
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                    {domain}
                  </h2>
                </div>
                <p className="text-sm text-muted">
                  {domainCapabilities.length} {domainCapabilities.length === 1 ? "capability" : "capabilities"}
                </p>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {domainCapabilities.map((capability) => (
                  <CapabilityCard
                    key={capability.slug}
                    capability={capability}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
