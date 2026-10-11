export type PublicProfileStatus =
  | "completed"
  | "in-progress"
  | "planned"
  | "historical";

export type PublicProfileEntry = {
  title: string;
  organisation?: string;
  status: PublicProfileStatus;
  summary?: string;
};

export const publicProfile = {
  name: "Ryan McMillan",
  headline: "AI Engineering • Secure Software • AI Security",
  summary:
    "Building practical, inspectable systems that combine AI engineering, secure software development, and security engineering. This portfolio focuses on evidence: projects, requirements, architecture decisions, verification, technical writing, and deployed artifacts.",
  currentFocus: [
    "Engineering secure AI applications and supporting infrastructure",
    "Building evidence-backed AI security and secure-software projects",
    "Developing deeper capability in applied AI through postgraduate study",
    "Turning project work into reusable engineering patterns and technical writing",
  ],
  careerDirection: [
    "AI Engineering",
    "AI Security Engineering",
    "Secure Software Engineering",
  ],
  education: [
    {
      title: "Master of Applied Artificial Intelligence",
      organisation: "Deakin University",
      status: "in-progress",
      summary:
        "Postgraduate study focused on applied AI engineering, machine learning, mathematics, and intelligent systems.",
    },
  ] satisfies PublicProfileEntry[],
  certifications: [
    {
      title: "CASE: Java",
      status: "historical",
      summary:
        "Secure-coding certification retained as historical evidence while newer practical security capability is developed through projects and future certifications.",
    },
  ] satisfies PublicProfileEntry[],
  links: {
    github: "https://github.com/rmcmillan34",
  },
} as const;
