export type ProjectStatus =
  | "concept"
  | "planning"
  | "in-progress"
  | "operational"
  | "complete"
  | "archived";

export type ProjectLink = {
  label: string;
  href: string;
  type: "repository" | "demo" | "documentation" | "writing" | "external";
};

export type ProjectEvidence = {
  label: string;
  description?: string;
  href?: string;
  type:
    | "implementation"
    | "verification"
    | "documentation"
    | "deployment"
    | "writing";
};

export type Project = {
  slug: string;
  name: string;
  shortName?: string;
  featured: boolean;
  status: ProjectStatus;
  summary: string;
  problem: string;
  built: string;
  technologies: string[];
  domains: string[];
  securityConsiderations: string[];
  evidence: ProjectEvidence[];
  links: ProjectLink[];
  relatedWriting: string[];
  lessonsLearned: string[];
  thumbnail?: {
    src: string;
    alt: string;
  };
};
