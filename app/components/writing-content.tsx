import type { ReactNode } from "react";

function renderInline(text: string): ReactNode[] {
  const pattern = /(\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|`([^`]+)`|\*\*([^*]+)\*\*)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));

    if (match[2] && match[3]) {
      nodes.push(
        <a
          key={`${match.index}-${match[3]}`}
          href={match[3]}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
        >
          {match[2]}
        </a>,
      );
    } else if (match[4]) {
      nodes.push(
        <code
          key={`${match.index}-${match[4]}`}
          className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.9em]"
        >
          {match[4]}
        </code>,
      );
    } else if (match[5]) {
      nodes.push(<strong key={`${match.index}-${match[5]}`}>{match[5]}</strong>);
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

export function WritingContent({ body }: { body: string }) {
  const lines = body.split("\n");
  const blocks: ReactNode[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];
  let codeLines: string[] = [];
  let inCode = false;
  let codeLanguage = "";

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const text = paragraph.join(" ");
    blocks.push(
      <p key={`p-${blocks.length}`} className="leading-8 text-muted">
        {renderInline(text)}
      </p>,
    );
    paragraph = [];
  };

  const flushList = () => {
    if (!listItems.length) return;
    blocks.push(
      <ul key={`ul-${blocks.length}`} className="list-disc space-y-2 pl-6 text-muted">
        {listItems.map((item) => (
          <li key={item}>{renderInline(item)}</li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  const flushCode = () => {
    blocks.push(
      <pre
        key={`code-${blocks.length}`}
        className="overflow-x-auto rounded-lg border border-white/10 bg-surface p-5 text-sm leading-6"
      >
        <code data-language={codeLanguage || undefined}>{codeLines.join("\n")}</code>
      </pre>,
    );
    codeLines = [];
    codeLanguage = "";
  };

  for (const rawLine of lines) {
    const line = rawLine.replace(/\s+$/, "");

    if (line.startsWith("```")) {
      flushParagraph();
      flushList();
      if (inCode) {
        flushCode();
        inCode = false;
      } else {
        inCode = true;
        codeLanguage = line.slice(3).trim();
      }
      continue;
    }

    if (inCode) {
      codeLines.push(rawLine);
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      flushList();
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push(
        <h3 key={`h3-${blocks.length}`} className="pt-4 text-xl font-semibold tracking-tight">
          {renderInline(line.slice(4))}
        </h3>,
      );
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push(
        <h2 key={`h2-${blocks.length}`} className="pt-6 text-2xl font-semibold tracking-tight">
          {renderInline(line.slice(3))}
        </h2>,
      );
      continue;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      blocks.push(
        <h1 key={`h1-${blocks.length}`} className="pt-6 text-3xl font-semibold tracking-tight">
          {renderInline(line.slice(2))}
        </h1>,
      );
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      listItems.push(line.slice(2));
      continue;
    }

    if (line.startsWith("> ")) {
      flushParagraph();
      flushList();
      blocks.push(
        <blockquote
          key={`quote-${blocks.length}`}
          className="border-l-2 border-white/20 pl-5 italic leading-8 text-muted"
        >
          {renderInline(line.slice(2))}
        </blockquote>,
      );
      continue;
    }

    paragraph.push(line.trim());
  }

  if (inCode) flushCode();
  flushParagraph();
  flushList();

  return <div className="space-y-6">{blocks}</div>;
}
