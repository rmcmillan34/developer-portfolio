import type { Capability, CapabilityDomain } from "../types/capability";

export const capabilities: Capability[] = [
  {
    slug: "ai-engineering",
    name: "AI Engineering",
    domain: "AI Engineering",
    maturity: "studied",
    description:
      "Designing and building practical AI-enabled applications with an emphasis on structured systems, grounded outputs, and incremental delivery.",
    featured: true,
    evidence: [
      { label: "TFACT", type: "project", projectSlug: "tfact" },
      { label: "AI Security Labs", type: "project", projectSlug: "ai-security-labs" },
    ],
  },
  {
    slug: "ai-security",
    name: "AI Security",
    domain: "AI Security",
    maturity: "studied",
    description:
      "Applying security engineering principles to LLM and AI-enabled systems, including abuse resistance, retrieval security, and constrained system design.",
    featured: true,
    evidence: [
      { label: "SIS / DELTA", type: "project", projectSlug: "sis-delta" },
      { label: "AI Security Labs", type: "project", projectSlug: "ai-security-labs" },
    ],
  },
  {
    slug: "secure-software-engineering",
    name: "Secure Software Engineering",
    domain: "Secure Software Engineering",
    maturity: "implemented",
    description:
      "Building software with security incorporated into requirements, architecture, implementation, verification, and delivery workflows.",
    featured: true,
    evidence: [
      { label: "Developer Portfolio", type: "project", projectSlug: "developer-portfolio" },
      { label: "V0 requirements", type: "documentation", href: "/docs/requirements.md" },
    ],
  },
  {
    slug: "requirements-engineering",
    name: "Requirements Engineering",
    domain: "Software Engineering",
    maturity: "demonstrated",
    description:
      "Turning product goals, constraints, security needs, and operational expectations into explicit, traceable requirements.",
    featured: true,
    evidence: [
      { label: "Developer Portfolio requirements", type: "documentation", href: "/docs/requirements.md" },
      { label: "Developer Portfolio", type: "project", projectSlug: "developer-portfolio" },
    ],
  },
  {
    slug: "architecture-decision-records",
    name: "Architecture Decision Records",
    domain: "Software Engineering",
    maturity: "demonstrated",
    description:
      "Capturing significant architecture decisions, alternatives, consequences, and decision history in version-controlled ADRs.",
    featured: false,
    evidence: [
      { label: "Portfolio ADRs", type: "documentation", href: "/docs/adr/README.md" },
      { label: "Developer Portfolio", type: "project", projectSlug: "developer-portfolio" },
    ],
  },
  {
    slug: "git-github-workflow",
    name: "Git & GitHub Workflow",
    domain: "Software Engineering",
    maturity: "demonstrated",
    description:
      "Using feature branches, pull requests, incremental delivery, and reviewable commits as the default development workflow.",
    featured: true,
    evidence: [
      { label: "Developer Portfolio repository", type: "project", projectSlug: "developer-portfolio" },
    ],
  },
  {
    slug: "nextjs",
    name: "Next.js",
    domain: "Software Engineering",
    maturity: "implemented",
    description:
      "Building typed multi-page web applications using the Next.js App Router and reusable React components.",
    featured: false,
    evidence: [
      { label: "Developer Portfolio", type: "project", projectSlug: "developer-portfolio" },
    ],
  },
  {
    slug: "typescript",
    name: "TypeScript",
    domain: "Software Engineering",
    maturity: "implemented",
    description:
      "Using static types to model application content, reduce ambiguity, and make refactoring safer.",
    featured: false,
    evidence: [
      { label: "Developer Portfolio", type: "project", projectSlug: "developer-portfolio" },
    ],
  },
  {
    slug: "python",
    name: "Python",
    domain: "AI Engineering",
    maturity: "implemented",
    description:
      "Using Python for application development, automation, AI engineering workflows, and security-focused tooling.",
    featured: true,
    evidence: [
      { label: "TFACT", type: "project", projectSlug: "tfact" },
      { label: "AI Security Labs", type: "project", projectSlug: "ai-security-labs" },
    ],
  },
  {
    slug: "fastapi",
    name: "FastAPI",
    domain: "AI Engineering",
    maturity: "studied",
    description:
      "Designing lightweight typed APIs for AI-enabled and security-conscious applications.",
    featured: false,
    evidence: [
      { label: "TFACT", type: "project", projectSlug: "tfact" },
      { label: "SIS / DELTA", type: "project", projectSlug: "sis-delta" },
    ],
  },
  {
    slug: "docker",
    name: "Docker",
    domain: "Infrastructure & Platform",
    maturity: "studied",
    description:
      "Containerising applications and labs to make environments reproducible, isolated, and easier to deploy consistently.",
    featured: false,
    evidence: [
      { label: "AI Security Labs", type: "project", projectSlug: "ai-security-labs" },
    ],
  },
  {
    slug: "threat-modelling",
    name: "Threat Modelling",
    domain: "Security Engineering",
    maturity: "studied",
    description:
      "Identifying assets, trust boundaries, threats, and controls early enough to influence architecture and verification.",
    featured: false,
    evidence: [
      { label: "SIS / DELTA", type: "project", projectSlug: "sis-delta" },
      { label: "Developer Portfolio", type: "project", projectSlug: "developer-portfolio" },
    ],
  },
];

export const capabilityDomains: CapabilityDomain[] = [
  "AI Engineering",
  "AI Security",
  "Secure Software Engineering",
  "Security Engineering",
  "Infrastructure & Platform",
  "Software Engineering",
];

export function getFeaturedCapabilities() {
  return capabilities.filter((capability) => capability.featured);
}

export function getCapabilitiesByDomain(domain: CapabilityDomain) {
  return capabilities.filter((capability) => capability.domain === domain);
}
