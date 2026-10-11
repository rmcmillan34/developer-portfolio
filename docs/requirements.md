# V0 Requirements — Portfolio Foundation

## 1. Purpose

V0 shall deliver a professional, publicly accessible developer portfolio that demonstrates engineering capability through projects, capabilities, technical writing, and supporting evidence.

V0 shall prioritise simplicity, deployability, security, and strong engineering practice.

AI assistant functionality, persistent databases, dynamic lab deployment, and job-matching functionality are not required for V0.

---

# 2. Public Website

## FR-PORT-001 — Public Portfolio

The system shall provide a publicly accessible developer portfolio website.

## FR-PORT-002 — Primary Domain

The portfolio shall be deployed to:

`rizztech.au`

## FR-PORT-003 — Multi-Page Architecture

The portfolio shall use a multi-page architecture.

## FR-PORT-004 — Project-Centric Homepage

The homepage shall prioritise demonstrated engineering work over biography.

## FR-PORT-005 — Navigation

The site shall provide top-level navigation for:

- Projects
- Writing
- Capabilities
- About
- Resume

The RizzTech name or logo shall link to the homepage.

## FR-PORT-006 — Responsive Design

The public site shall function appropriately across desktop and mobile viewport sizes.

---

# 3. Homepage

## FR-HOME-001 — Professional Positioning

The homepage shall provide a concise professional positioning statement focused on:

- AI Engineering;
- Secure Software Engineering;
- AI Security.

## FR-HOME-002 — Featured Projects

The homepage shall display selected featured projects.

## FR-HOME-003 — Featured Capabilities

The homepage should display a concise subset of featured capabilities.

## FR-HOME-004 — Recent Writing

The homepage should support links to recent or featured technical writing.

## FR-HOME-005 — Primary Actions

The homepage shall provide easy access to:

- Projects;
- Resume;
- GitHub;
- LinkedIn.

---

# 4. Projects

## FR-PROJ-001 — Project Listing

The system shall provide a dedicated projects page.

## FR-PROJ-002 — Project Cards

Each project card shall support:

- project name;
- concise problem or "what I built" statement;
- technology tags;
- project status;
- thumbnail or screenshot;
- link to the project detail page.

## FR-PROJ-003 — Project Detail Pages

Each project shall support a dedicated project detail page.

## FR-PROJ-004 — Project Page Template

V0 project pages shall use a consistent template containing, where relevant:

- project name;
- project status;
- problem statement;
- what was built;
- architecture or approach;
- technologies;
- security considerations;
- verification or evidence;
- screenshots or demo media;
- GitHub repository;
- related technical writing;
- lessons learned.

## FR-PROJ-005 — Engineering Artifact Links

Project pages should support links to appropriate engineering artifacts such as:

- project charter;
- requirements;
- architecture documents;
- ADRs;
- threat models;
- V&V artifacts;
- test evidence.

## NFR-PROJ-001 — Extensibility

Project pages shall be structured so that future project-specific interactive functionality can be added without redesigning the core portfolio navigation or content model.

---

# 5. Capabilities

## FR-CAP-001 — Capabilities Page

The system shall provide a dedicated Capabilities page.

## FR-CAP-002 — Capability Information

Each capability shall support:

- name;
- domain/category;
- maturity;
- concise description;
- related projects;
- supporting evidence where available.

## FR-CAP-003 — Capability Categories

Capabilities shall be grouped into logical domains.

Candidate domains include:

- AI Engineering;
- AI Security;
- Secure Software Engineering;
- Security Engineering;
- Software Engineering;
- Infrastructure and Platform.

## FR-CAP-004 — Capability Maturity

Capabilities shall support the maturity model:

`Claimed → Studied → Implemented → Tested → Demonstrated`

## FR-CAP-005 — Developing Capabilities

The portfolio may include capabilities that are still developing.

Lack of demonstrated evidence shall not be represented as proof of inability.

## FR-CAP-006 — Manual V0 Management

Capability maturity and evidence relationships may be manually maintained in V0.

---

# 6. Evidence

## FR-EVD-001 — Evidence-Backed Claims

Professional capability claims should be supported by inspectable evidence wherever practical.

## FR-EVD-002 — Evidence Types

Evidence may include:

- projects;
- tests;
- V&V artifacts;
- certifications;
- education;
- technical writing;
- deployed systems;
- assessments.

## FR-EVD-003 — Evidence Strength

The content model shall recognise the following evidence hierarchy:

1. Demonstration evidence
2. Verification evidence
3. Formal evidence
4. Learning evidence
5. Claim only

## FR-EVD-004 — Structured Content

Portfolio content shall be represented in structured form suitable for future migration to a persistent datastore.

## NFR-EVD-001 — Future Data Migration

The V0 content model should not require redesign when a database is introduced later.

---

# 7. Education and Certifications

## FR-EDU-001 — Education Summary

The public site shall support high-level education information.

## FR-EDU-002 — Certification Summary

The public site shall support certification information.

## FR-EDU-003 — Status

Education and certification entries shall distinguish between:

- completed;
- in progress;
- planned.

## FR-EDU-004 — Public Data Minimisation

Detailed academic records such as grades, raw transcripts, and detailed unit-level evidence shall not be required for public display.

## FR-EDU-005 — Backend Evidence

Detailed education or certification metadata may be maintained as non-public supporting evidence.

---

# 8. Writing

## FR-WRITE-001 — Writing Section

The system shall provide a dedicated Writing section.

## FR-WRITE-002 — Git-Backed Content

V0 technical writing shall be authored as Markdown or MDX stored in source control.

No CMS or administrative publishing interface is required.

## FR-WRITE-003 — Article Metadata

Articles shall support:

- title;
- summary;
- publication date;
- updated date where relevant;
- article type;
- tags;
- related projects;
- related capabilities;
- publication status.

## FR-WRITE-004 — Internal and External Content

The writing system shall support both:

- internally hosted content;
- externally hosted technical content.

## FR-WRITE-005 — Project Relationships

Writing shall support links to related portfolio projects.

## FR-WRITE-006 — Capability Relationships

Writing may contribute evidence toward related capabilities.

## FR-WRITE-007 — Rich Media

Writing shall support structured references to media such as:

- YouTube videos;
- coding livestreams;
- repository links;
- diagrams;
- downloadable artifacts.

## SEC-WRITE-001 — Safe Media Embedding

Arbitrary HTML or iframe embedding shall not be enabled by default.

Rich embeds shall be restricted to explicitly supported providers.

---

# 9. Writeups

## FR-WRITEUP-001 — Specialised Writeup Type

The writing system shall support a specialised `writeup` content type.

## FR-WRITEUP-002 — Writeup Metadata

Writeups should support:

- platform;
- challenge or lab name;
- category;
- difficulty;
- related certification;
- technologies;
- capabilities;
- spoiler status;
- disclosure status.

## FR-WRITEUP-003 — Disclosure States

Writeups shall support states such as:

- public;
- sanitised;
- private;
- embargoed.

## FR-WRITEUP-004 — Publication Restrictions

Private and embargoed content shall not be published publicly.

## FR-WRITEUP-005 — Platform Compliance

The publishing workflow shall support withholding or sanitising content where certification rules, platform terms, NDAs, or examination restrictions prohibit disclosure.

---

# 10. Resume

## FR-RES-001 — Resume Download

V0 shall provide a downloadable resume PDF or clearly marked placeholder.

## FR-RES-002 — Resume Discoverability

The resume shall be easy to locate from the homepage or primary navigation.

## FR-RES-003 — Replaceable Artifact

The resume PDF should be replaceable without requiring application code changes.

---

# 11. About

## FR-ABOUT-001 — About Page

The portfolio shall provide a dedicated About page.

## FR-ABOUT-002 — About Content

The About page should provide:

- concise professional biography;
- current technical focus;
- career direction;
- education summary;
- certification summary;
- appropriate professional links.

## FR-ABOUT-003 — Minimal Homepage Biography

Detailed biography shall not dominate the homepage.

## PRIV-ABOUT-001 — Employment Disclosure Boundary

The portfolio shall not require disclosure of military or Defence employment history.

## PRIV-ABOUT-002 — Personal Data Minimisation

Only personal information that provides clear professional value should be published.

---

# 12. Contact

## FR-CONTACT-001 — LinkedIn Contact Funnel

LinkedIn shall be the primary contact mechanism for V0.

## FR-CONTACT-002 — LinkedIn Visibility

LinkedIn links shall be easily accessible from appropriate locations such as:

- homepage;
- About page;
- footer.

## FR-CONTACT-003 — Domain Email

The portfolio may expose a dedicated `rizztech.au` role-based email address.

## FR-CONTACT-004 — No Contact Form

V0 shall not require a public contact form.

---

# 13. Hosting and Deployment

## OPS-001 — Cloudflare Hosting

V0 shall be deployed using Cloudflare in accordance with the accepted hosting ADR.

## OPS-002 — HTTPS

The production website shall use HTTPS.

## OPS-003 — Local Development

The application shall support local development.

## OPS-004 — Production Environment

V0 shall maintain a production deployment environment.

## OPS-005 — No Permanent Staging Requirement

A permanent staging environment is not required for V0.

## OPS-006 — Preview Deployments

Ephemeral preview deployments should be used where supported and practical.

---

# 14. Git Workflow

## ENG-GIT-001 — Main Branch

`main` shall represent production-ready code.

## ENG-GIT-002 — Feature Branches

Development work should occur on feature or fix branches.

Example naming:

- `feature/...`
- `fix/...`
- `docs/...`

## ENG-GIT-003 — Pull Requests

Changes intended for production should be merged to `main` through pull requests.

## ENG-GIT-004 — Automatic Deployment

A successful merge to `main` shall automatically trigger production deployment.

## ENG-GIT-005 — Branch Protection

The project should use branch protection or equivalent controls to discourage unsafe direct changes to `main`.

---

# 15. CI/CD and SSDLC

## CICD-001 — Pull Request Pipeline

Pull requests shall execute automated quality and security checks.

## CICD-002 — Linting

CI shall run linting.

## CICD-003 — Type Checking

CI shall verify TypeScript correctness.

## CICD-004 — Tests

CI shall execute automated tests where available.

## CICD-005 — Production Build

CI shall verify that the production application builds successfully.

## CICD-006 — Dependency Scanning

CI shall include dependency vulnerability scanning.

## CICD-007 — Secret Scanning

The development workflow shall include automated secret scanning.

## CICD-008 — Static Analysis

The development workflow shall include appropriate static application security testing or code analysis.

## CICD-009 — Deployment Gate

Production deployment shall only occur after required CI checks pass.

---

# 16. Observability and Metrics

## OBS-001 — Website Analytics

The production website shall support privacy-conscious website analytics.

## OBS-002 — Engagement Metrics

The system should support collection of metrics such as:

- visitors;
- page views;
- popular content;
- referral sources.

## OBS-003 — Operational Metrics

The deployment should expose appropriate operational information such as:

- deployment health;
- request volume;
- errors;
- latency where available.

## OBS-004 — Public Engineering Metrics

Selected project health metrics should be suitable for publication on:

- the portfolio website;
- the repository README.

## OBS-005 — Engineering Metrics

Public engineering metrics may include:

- build status;
- test status;
- deployment status;
- security scan status;
- code coverage.

## OBS-006 — Engagement Separation

Engineering-health metrics shall be logically or visually separated from engagement metrics.

## SEC-OBS-001 — Safe Telemetry Disclosure

Public metrics shall not expose secrets, sensitive identifiers, detailed vulnerabilities, or unnecessary infrastructure information.

---

# 17. Security Baseline

## SEC-001 — Security by Design

Security shall be considered throughout design, development, deployment, and operation.

## SEC-002 — Data Minimisation

The system shall avoid collecting unnecessary personal information.

## SEC-003 — Secret Management

Secrets shall not be committed to source control.

## SEC-004 — Least Privilege

Deployment and application components shall use least privilege where practical.

## SEC-005 — Dependency Management

Third-party dependency vulnerabilities shall be identified, assessed, and tracked.

## SEC-006 — Risk Register

Project risks shall be maintained in the project risk register.

## SEC-007 — Public Risk Sanitisation

Publicly exposed risk information shall avoid unnecessary disclosure of exploitable operational detail.

## SEC-008 — Input Validation

Any public input introduced during V0 shall be appropriately validated.

## SEC-009 — Security Headers

The deployed application should use appropriate HTTP security headers.

## SEC-010 — No Unnecessary Attack Surface

V0 shall avoid unnecessary backend functionality, administrative interfaces, forms, or dynamic services where they do not provide sufficient value.

---

# 18. Verification

## VVR-001 — Local Lint Verification

The project shall pass configured linting before release.

## VVR-002 — Build Verification

The project shall successfully complete a production build before release.

## VVR-003 — CI Verification

Required CI checks shall pass before production deployment.

## VVR-004 — Link Verification

Public navigation and important external links should be verified.

## VVR-005 — Responsive Verification

Core pages shall be verified at representative desktop and mobile viewport sizes.

## VVR-006 — Deployment Verification

The deployed production site shall be verified after release.

---

# 19. Infrastructure as Code

## NFR-IAC-001 — V0 IaC

Infrastructure as Code is not required for V0 where Cloudflare-managed deployment requires minimal infrastructure configuration.

## NFR-IAC-002 — Future IaC

Persistent, non-trivial, or security-sensitive infrastructure shall be managed as code when introduced.

## NFR-IAC-003 — AWS Migration

IaC shall be introduced as part of a future AWS migration where infrastructure provisioning becomes a meaningful part of the system.

---

# 20. V0 Explicitly Out of Scope

The following are not required for V0:

- Ask My Portfolio LLM assistant;
- vector database;
- portfolio database;
- job-description analysis;
- tailored resume generation;
- dynamic AI Security Lab deployment;
- unrestricted backend API;
- user accounts;
- authentication;
- public contact form;
- CMS/admin portal;
- permanent staging environment;
- AWS infrastructure;
- autonomous agents.

---

# 21. V0 Success Criteria

V0 is complete when:

1. `rizztech.au` serves the portfolio over HTTPS.
2. The homepage professionally positions the portfolio.
3. Projects can be browsed through project cards and detail pages.
4. Capabilities are presented using the defined maturity model.
5. Education and certifications are represented appropriately.
6. Writing and specialised writeup content can be published.
7. A resume PDF or placeholder is available.
8. LinkedIn provides the primary contact path.
9. The application passes linting and production build checks.
10. Pull requests are subject to automated quality/security checks.
11. Merge to `main` results in automatic production deployment.
12. Basic observability and privacy-conscious analytics are available.
13. Selected engineering-health metrics can be surfaced publicly.
14. Sensitive/non-public information is not required for the public deployment.
15. The architecture remains suitable for later evidence, AI, and backend functionality.
