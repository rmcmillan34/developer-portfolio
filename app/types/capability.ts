export type CapabilityMaturity =
  | "claimed"
  | "studied"
  | "implemented"
  | "tested"
  | "demonstrated";

export type CapabilityDomain =
  | "AI Engineering"
  | "AI Security"
  | "Secure Software Engineering"
  | "Security Engineering"
  | "Infrastructure & Platform"
  | "Software Engineering";

export type CapabilityEvidence = {
  label: string;
  type: "project" | "documentation" | "education" | "certification" | "writing" | "verification";
  projectSlug?: string;
  href?: string;
};

export type Capability = {
  slug: string;
  name: string;
  domain: CapabilityDomain;
  maturity: CapabilityMaturity;
  description: string;
  featured: boolean;
  evidence: CapabilityEvidence[];
};
