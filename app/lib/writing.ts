import "server-only";

import fs from "node:fs";
import path from "node:path";
import type { WritingEntry, WritingFrontmatter } from "../types/writing";

const writingDirectory = path.join(process.cwd(), "content", "writing");

function parseScalar(value: string): unknown {
  const trimmed = value.trim();

  if (!trimmed) return "";

  if (
    trimmed.startsWith('"') ||
    trimmed.startsWith("[") ||
    trimmed === "true" ||
    trimmed === "false" ||
    trimmed === "null"
  ) {
    return JSON.parse(trimmed);
  }

  return trimmed;
}

function parseFrontmatter(source: string): {
  frontmatter: WritingFrontmatter;
  body: string;
} {
  const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/m.exec(source);

  if (!match) {
    throw new Error("Writing content is missing frontmatter delimiters.");
  }

  const [, frontmatterSource, body] = match;
  const values: Record<string, unknown> = {};

  for (const line of frontmatterSource.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separator = trimmed.indexOf(":");
    if (separator === -1) {
      throw new Error(`Invalid frontmatter line: ${line}`);
    }

    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1);
    values[key] = parseScalar(value);
  }

  const requiredStringFields = [
    "title",
    "summary",
    "published",
    "type",
    "status",
    "disclosure",
  ] as const;

  for (const field of requiredStringFields) {
    if (typeof values[field] !== "string" || !values[field]) {
      throw new Error(`Writing frontmatter requires ${field}.`);
    }
  }

  const arrayFields = ["tags", "relatedProjects", "relatedCapabilities"] as const;

  for (const field of arrayFields) {
    if (!Array.isArray(values[field])) {
      throw new Error(`Writing frontmatter requires ${field} to be an array.`);
    }
  }

  return {
    frontmatter: values as unknown as WritingFrontmatter,
    body: body.trim(),
  };
}

function readWritingFile(filename: string): WritingEntry {
  const slug = filename.replace(/\.mdx$/, "");
  const source = fs.readFileSync(path.join(writingDirectory, filename), "utf8");
  const { frontmatter, body } = parseFrontmatter(source);

  return { slug, frontmatter, body };
}

export function getAllWriting(): WritingEntry[] {
  if (!fs.existsSync(writingDirectory)) return [];

  return fs
    .readdirSync(writingDirectory)
    .filter((filename) => filename.endsWith(".mdx"))
    .map(readWritingFile)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.published).getTime() -
        new Date(a.frontmatter.published).getTime(),
    );
}

export function getPublishedWriting(): WritingEntry[] {
  return getAllWriting().filter(
    (entry) =>
      entry.frontmatter.status === "published" &&
      ["public", "sanitised"].includes(entry.frontmatter.disclosure),
  );
}

export function getWritingBySlug(slug: string): WritingEntry | undefined {
  return getPublishedWriting().find((entry) => entry.slug === slug);
}
