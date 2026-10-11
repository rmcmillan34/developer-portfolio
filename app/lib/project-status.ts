import type { ProjectStatus } from "../types/project";

export const projectStatusLabels: Record<ProjectStatus, string> = {
  concept: "Concept",
  planning: "Planning",
  "in-progress": "In progress",
  operational: "Operational",
  complete: "Complete",
  archived: "Archived",
};
