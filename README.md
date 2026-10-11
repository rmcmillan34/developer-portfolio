# Developer Portfolio

Professional developer portfolio for showcasing AI Engineering, Secure Software Development, and AI Security capability.
The portfolio is intended to provide evidence of capability through projects, technical documentation, verification and validation artifacts, security engineering, and an embedded evidence-backed AI assistant.

---

## Current Status

**Version** V0 - Portfolio Foundation

Current focus:

- Next.js application scaffold
- Core engineering project documentation
- Initial portfolio structure
- Deployment to `rizztech.au`

Planed later:

- Structured capability and evidence model
- Ask My Portfolio assistant
- AI security controls and evaluation
- Job description fit analysis

---

## Technology Stack

- Next.js
- React
- Typescript
- Tailwind CSS
- Node.js 22
- Docker - planned
- AWS Deployment - planned

---

## Project Structure

```text
developer-portfolio/
├── docs/
│   ├── charter.md
│   ├── requirements.md
│   ├── architecture.md
│   ├── risk-register.md
│   └── security/
├── public/
├── src/
├── package.json
└── README.md

```

---

## Local Development
Use Node.js 22

```bash
nvm use
npm install
npm run dev

```

Then open:

```plaintext
http://localhost:3000

```

---

## Verification

```bash
npm run lint
npm run build

```

---

## Documentation
Project documentation is maintained under `/docs`.

Key documents include:

- [Project Charter](/docs/charter.md)
- [Requirements](/docs/requirements.md)
- [Architecture](/docs/architecture.md)
- [Risk Register](/docs/risk-register.md)

---

## Security
This project is being developed using a security-first approach.

Security work will include:

- threat modelling
- input and output validation
- least privilege
- secret management
- AI security evaluation
- prompt injection testing
- abuse controls
- monitoring and logging

---

## Roadmap

### V0 - Portfolio Foundation
Static progessional portfolio and deployment

### V1 - Structured Evidence
Skills, projects, requirements, tests and evidence relationships

### V2 - Ask My Portfolio
Portfolio assistant with citations and unsupported claim handling

### V3 - Secure AI Assistant
Threat model, controls, red team suite, evaluation, and monitoring

### V4 - Job analysis
Job requirement extraction, evidence matching and gap analysis.

---

## Licence

TBD






This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
