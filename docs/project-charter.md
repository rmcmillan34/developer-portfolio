# Project Charter

## Project

Developer Portfolio Website for Ryan McMillan

## Purpose

Build a professional developer portfolio that demonstrates capability in AI Engineering, Secure Software Development, and AI Security through inspectable projects, engineering evidence, technical documentation, and a secure AI-powered portfolio assistant.

The portfolio will act as the primary public entry point to the broader RizzTech / Secure Intelligent Systems body of work.

---

## Problem Statement

Traditional developer portfolios frequently rely on self-asserted skill claims, screenshots, and project descriptions.

This project aims to provide stronger evidence of capability by linking professional claims to actual implementations, requirements, verification activities, repositories, technical documentation, and other supporting artifacts.

The portfolio itself will also serve as a demonstrable engineering project.

---

## Objectives

The project will:

- provide a professional public developer portfolio;
- showcase AI Engineering, Secure Software Development, and AI Security capability;
- link skills and capability claims to supporting evidence;
- showcase engineering artifacts such as requirements, ADRs, threat models, and V&V;
- provide a secure evidence-backed portfolio assistant;
- demonstrate secure LLM application engineering;
- support employment, consulting, and professional positioning;
- provide a reusable platform for future projects and technical writing.

---

## Key Principles

### Evidence Over Claims

Professional capability should be supported by inspectable evidence wherever practical.

### Deterministic First

Use deterministic software mechanisms where they adequately solve the problem.

LLMs should be introduced where they provide clear additional value.

### LLMs Are Not the Source of Truth

Structured portfolio data and evidence are authoritative.

LLMs may retrieve, reason over, and explain that evidence but must not invent professional claims.

### Security by Design

Security considerations should be incorporated throughout design, implementation, deployment, and operation rather than added after development.

### Incremental Delivery

The project should remain deployable and useful throughout development.

---

## Scope

### In Scope

- public portfolio website;
- project showcases;
- skills and capability evidence;
- education and certification information;
- technical writing;
- engineering documentation;
- structured portfolio data;
- portfolio search and retrieval;
- Ask My Portfolio AI assistant;
- AI security evaluation;
- public project health metrics;
- job-description analysis in later versions;
- cloud deployment and CI/CD.

### Out of Scope

For initial versions:

- general-purpose chatbot functionality;
- unrestricted AI agent capability;
- autonomous job applications;
- private personal data;
- production use of other RizzTech/SIS applications through the portfolio;
- complex social-network or community functionality.

---

## Target Users

Primary users include:

- technical recruiters;
- hiring managers;
- engineers and security practitioners;
- prospective consulting clients;
- professional peers;
- the project owner.

---

## High-Level Deliverables

### V0 — Portfolio Foundation

- deployed portfolio website;
- project pages;
- skills;
- education;
- certifications;
- technical writing;
- GitHub and professional links.

### V1 — Structured Evidence

- capability model;
- project/evidence relationships;
- maturity model;
- structured portfolio data.

### V2 — Ask My Portfolio

- constrained portfolio assistant;
- evidence retrieval;
- grounded responses;
- citations;
- unsupported-claim handling.

### V3 — Secure AI Assistant

- threat model;
- security controls;
- evaluation framework;
- red-team testing;
- monitoring.

### V4 — Job Analysis

- job-description ingestion;
- requirement extraction;
- evidence matching;
- gap analysis.

---

## Success Criteria

A visitor should be able to determine:

1. What can Ryan build?
2. What security capability is demonstrated?
3. What evidence supports those claims?
4. How are AI systems engineered securely?
5. Can engineering decisions be clearly explained?
6. What capability gaps remain?
7. Why should Ryan be interviewed or hired?

The project should itself provide evidence of:

- software engineering;
- AI engineering;
- secure software development;
- AI security;
- testing and verification;
- technical communication;
- deployment and operational practices.

---

## Constraints

- public-facing information must be appropriate for public disclosure;
- sensitive operational information must not be exposed;
- unnecessary personal information must not be collected or published;
- early versions should remain simple and inexpensive to operate;
- architecture should support incremental development;
- the system should avoid unnecessary LLM dependency.

---

## Current Phase

**V0 — Portfolio Foundation**

Current priorities:

- establish project documentation;
- build the static portfolio;
- establish CI/CD;
- deploy to `rizztech.au`;
- establish basic project health telemetry.

---

## Related Documentation

- [Requirements](./requirements.md)
- [Architecture](./architecture.md)
- [Risk Register](./risk-register.md)
- [Architecture Decision Records](./adr/README.md)
- [Threat Model](./security/threat-model.md)
- [Security Controls](./security/security-controls.md)
