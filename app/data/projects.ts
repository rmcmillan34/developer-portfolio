import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "sis-delta",
    name: "Secure Intelligent Systems / DELTA",
    shortName: "SIS / DELTA",
    featured: true,
    status: "planning",
    summary:
      "A security assessment platform and evidence-grounded copilot for structured testing, findings, evidence capture, and reporting.",
    problem:
      "Security assessment work is often fragmented across notes, evidence, testing workflows, findings, and reporting, making consistency and traceability difficult.",
    built:
      "A staged security-assessment platform concept centred on structured evidence, deterministic controls, tester approval, and AI assistance where it adds clear value.",
    technologies: ["Python", "FastAPI", "RAG", "Docker", "LLM Applications"],
    domains: ["AI Security", "Secure Software Engineering", "Security Engineering"],
    securityConsiderations: [
      "Evidence integrity and traceability",
      "Per-engagement data isolation",
      "Least-privilege model and tool access",
      "Human approval before findings become authoritative",
    ],
    evidence: [
      {
        label: "Architecture and roadmap",
        description: "Structured design work for DELTA and the broader SIS platform.",
        type: "documentation",
      },
    ],
    links: [],
    relatedWriting: [],
    lessonsLearned: [],
  },
  {
    slug: "tfact",
    name: "Technology-Facilitated Abuse Copilot",
    shortName: "TFACT",
    featured: true,
    status: "planning",
    summary:
      "A security-conscious AI support harness for workers responding to technology-facilitated abuse enquiries.",
    problem:
      "Frontline support workflows can involve complex technical concepts that need to be translated into safe, practical, trauma-informed guidance without overclaiming certainty.",
    built:
      "A staged application concept that combines structured playbooks, deterministic safeguards, and context-aware AI assistance for technical explanation and case preparation.",
    technologies: ["Python", "FastAPI", "LLM Applications", "Docker"],
    domains: ["AI Engineering", "Secure Software Engineering", "AI Safety"],
    securityConsiderations: [
      "Data minimisation",
      "Deterministic anonymisation controls where practical",
      "Restricted handling of sensitive case information",
      "Grounded technical explanations",
    ],
    evidence: [
      {
        label: "Project charter and requirements",
        description: "Initial product, safety, and engineering requirements.",
        type: "documentation",
      },
    ],
    links: [],
    relatedWriting: [],
    lessonsLearned: [],
  },
  {
    slug: "ai-security-labs",
    name: "AI Security Labs",
    featured: true,
    status: "in-progress",
    summary:
      "Progressive containerised labs for learning, testing, and demonstrating AI application security concepts.",
    problem:
      "AI security concepts are easier to understand and verify when they can be reproduced in small, intentionally constrained applications rather than studied only in theory.",
    built:
      "A progressive lab curriculum that repeatedly builds small AI applications, adds one capability at a time, and attaches explicit security outcomes and verification evidence.",
    technologies: ["Python", "Docker", "LLM Applications", "GitHub Actions"],
    domains: ["AI Security", "AI Engineering", "Red Teaming"],
    securityConsiderations: [
      "Intentional vulnerability boundaries",
      "Container isolation",
      "Safe lab deployment",
      "Clear separation between educational vulnerabilities and production patterns",
    ],
    evidence: [
      {
        label: "Lab curriculum and challenge design",
        description: "Progressive application and security-learning design.",
        type: "documentation",
      },
    ],
    links: [],
    relatedWriting: [],
    lessonsLearned: [],
  },
  {
    slug: "developer-portfolio",
    name: "Developer Portfolio",
    featured: false,
    status: "in-progress",
    summary:
      "An evidence-backed developer portfolio designed to demonstrate AI engineering, secure software development, and AI security capability.",
    problem:
      "Traditional portfolios often rely on unsupported skill claims instead of linking capability to inspectable projects, engineering artifacts, tests, and other evidence.",
    built:
      "A structured, project-first portfolio with a roadmap toward evidence-backed capability modelling and a constrained AI portfolio assistant.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare"],
    domains: ["Software Engineering", "Secure Software Engineering", "AI Engineering"],
    securityConsiderations: [
      "Public/non-public data separation",
      "Secure software development lifecycle",
      "Dependency risk management",
      "Future constrained AI assistant boundaries",
    ],
    evidence: [
      {
        label: "V0 requirements",
        href: "/docs/requirements.md",
        type: "documentation",
      },
      {
        label: "Architecture decision records",
        href: "/docs/adr/README.md",
        type: "documentation",
      },
    ],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/rmcmillan34/developer-portfolio",
        type: "repository",
      },
    ],
    relatedWriting: [],
    lessonsLearned: [],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
