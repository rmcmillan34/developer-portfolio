# ADR-0003: Use Cloudflare for Initial Portfolio Hosting

## Status

Accepted

## Context

The portfolio requires a public deployment target that supports:

- fast delivery of V0;
- custom domain hosting for `rizztech.au`;
- HTTPS;
- automated deployment from Git;
- preview deployments where practical;
- basic observability and analytics;
- a future path toward lightweight server-side and AI functionality;
- low operational overhead.

An AWS-first deployment would provide broader infrastructure flexibility but would increase setup and operational complexity before the portfolio requires substantial backend infrastructure.

The project should optimise for early delivery while preserving the ability to migrate to AWS when infrastructure complexity, compute requirements, or portfolio objectives justify it.

## Decision

Cloudflare will be used as the initial hosting platform for the developer portfolio.

The initial deployment should use Cloudflare-managed hosting suitable for the Next.js application and custom domain.

Cloudflare-native capabilities should be preferred for early requirements where appropriate, including:

- HTTPS;
- DNS;
- deployment;
- preview deployments;
- web analytics;
- request and operational telemetry;
- edge/serverless functionality where later required.

AWS will not be required for V0.

Migration to AWS may occur when justified by requirements such as:

- substantial backend services;
- persistent application infrastructure;
- complex networking;
- dedicated compute;
- container orchestration;
- AI Security Lab deployment;
- or the need to deliberately demonstrate AWS engineering capability.

## Consequences

### Positive

- Faster V0 delivery.
- Lower operational complexity.
- Strong integration with DNS and edge delivery.
- Low-cost or low-overhead hosting.
- Access to privacy-conscious web analytics.
- Future access to Workers and related serverless capabilities.
- Delays infrastructure complexity until justified.

### Negative

- Cloudflare-specific implementation decisions may need to be revisited during an AWS migration.
- Some future workloads may exceed the ideal use case for edge/serverless hosting.
- AWS infrastructure capability will not be demonstrated by V0.

## Alternatives Considered

### AWS First

Rejected for V0 because the additional infrastructure complexity does not provide sufficient value for the current static portfolio requirements.

### Vercel

Considered due to strong Next.js integration and low deployment friction.

Cloudflare was selected because its broader edge, security, analytics, and future AI capabilities align more closely with the portfolio's security-focused direction.
