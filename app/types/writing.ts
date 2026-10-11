export type WritingType =
  | "article"
  | "project-retrospective"
  | "architecture-note"
  | "security-research"
  | "threat-model"
  | "lab-writeup"
  | "writeup"
  | "lessons-learned"
  | "opinion";

export type WritingStatus = "draft" | "published" | "archived";

export type DisclosureStatus =
  | "public"
  | "sanitised"
  | "private"
  | "embargoed";

export type WritingMedia = {
  type: "youtube" | "twitch" | "repository" | "diagram" | "download";
  url: string;
  title: string;
};

export type WritingFrontmatter = {
  title: string;
  summary: string;
  published: string;
  updated?: string;
  type: WritingType;
  status: WritingStatus;
  disclosure: DisclosureStatus;
  tags: string[];
  relatedProjects: string[];
  relatedCapabilities: string[];
  hosting?: "internal" | "external";
  externalUrl?: string;
  platform?: string;
  challenge?: string;
  category?: string;
  difficulty?: string;
  certification?: string;
  spoilers?: boolean;
  media?: WritingMedia[];
};

export type WritingEntry = {
  slug: string;
  frontmatter: WritingFrontmatter;
  body: string;
};
