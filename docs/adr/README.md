# Architecture Decision Records

Architecture Decision Records (ADRs) capture significant technical and architectural decisions made during this project.
They preserve the context and reasoning behind decisions so that future maintainers and AI-assisted development workflows can understand **why** the system was designed a particular way.

---

## ADR Index

| ADR | Decision | Status |
| --- | --- | --- |
| [ADR-0001](./0001-use-nextjs.md) | Use Next.js for the portfolio | Accepted |
| [ADR-0002](./0002-public-project-metrics.md) | Expose selected public metrics | Accepted |

---

## When to Create an ADR

Create an ADR for decisions that are:

- architecturally significant;
- difficult or expensive to reverse;
- likely to affect multiple parts of the system;
- relevant to security, deployment, data, interfaces, or major dependencies;
- useful context for future maintainers or AI-assisted development.

Do not create ADRs for trivial implementation details that are clear from the code.

Each ADR should capture:

- the context or problem;
- the decision made;
- the consequences of the decision;
- relevant alternatives where useful.

---

## ADR Lifecycle

Accepted ADRs form part of the project's architectural history.
Once accepted, an ADR should generally not be rewritten simply because the architecture later changes. Instead, create a new ADR and mark the previous decision as **Superseded**.
Minor corrections, formatting changes, and clarifications that do not alter the decision are acceptable.

---

## ADR Status Definitions

### Proposed

The decision is being considered but has not yet been accepted.
Use this while options are still being evaluated.

### Accepted

The decision has been approved and represents the current intended architecture.
Implementation should align with accepted ADRs unless a later ADR supersedes the decision.

### Rejected

The proposal was considered but deliberately not adopted.
Rejected ADRs are retained so the reasoning remains available and unsuitable approaches are not repeatedly reconsidered.

### Superseded

The decision was previously accepted but has been replaced by a newer ADR.
The superseded ADR should reference its replacement.

Example:

> Superseded by [ADR-0007](./0007-new-decision.md)

### Deprecated

The decision still exists within part of the system but should not be used for new development.
This is useful during migrations where an older architectural approach has not yet been completely removed.

---

## ADR Naming Convention

ADRs use a four-digit sequential identifier followed by a descriptive filename:

```text
0001-use-nextjs.md
0002-public-project-metrics.md
0003-portfolio-evidence-model.md
```

---

## ADR Template

```
# ADR-XXXX: Decision Title

## Status

Proposed

## Context

Describe the problem, constraints, and relevant background.

## Decision

Describe the architectural decision.

## Consequences

Describe the positive and negative consequences of the decision.

## Alternatives Considered

Optional. Record significant alternatives and why they were not selected.

```

---
