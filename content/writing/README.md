# Writing Content

Public technical writing is stored as `.mdx` files in this directory.

V0 intentionally uses a constrained MDX/Markdown subset rather than arbitrary JSX or HTML. This keeps the content pipeline dependency-light and reduces the risk of unsafe embeds or executable content entering the public site.

## Supported body syntax

- headings (`#`, `##`, `###`)
- paragraphs
- unordered lists
- blockquotes
- fenced code blocks
- inline code
- bold text
- HTTPS links

Arbitrary HTML, JSX, scripts, and iframes are not supported.

## Required frontmatter

```text
---
title: "Example"
summary: "Short summary"
published: "2026-10-11"
type: "article"
status: "published"
disclosure: "public"
tags: ["AI Security"]
relatedProjects: []
relatedCapabilities: []
hosting: "internal"
---
```

Supported disclosure values are `public`, `sanitised`, `private`, and `embargoed`, but **private or embargoed source content must never be committed to this public repository**. The loader fails closed if such a file is detected.

External content can be represented with `hosting: "external"` and an `externalUrl`.

Structured media metadata is supported by the content model, but arbitrary embeds are intentionally excluded from V0.
