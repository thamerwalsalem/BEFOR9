# BEFOR9 V2 — Product roadmap

Status: planning and public catalog prototype. No payment or account system is live.

## Business model (approved)
- Free lessons and introductory resources
- Individual course purchases
- Optional all-access subscription (monthly/yearly; pricing TBD)
- Arabic and English support from the start

## Phase 1 — Public catalog (current)
- Landing page with clear value proposition
- Course cards with Free / Paid labels
- Learning paths, categories and search/filter
- Course detail pages with sample syllabus
- Pricing explanation with *no fake checkout*
- Responsive RTL/LTR and accessibility

## Phase 2 — Learning experience
- Real lessons, quizzes and practical exercises
- Content management strategy
- Progress tracking design
- Course completion criteria and certificate policy

## Phase 3 — Accounts and commerce
- Secure authentication and user profiles
- Database and access entitlements (free, purchased, subscribed)
- Payment provider evaluation for Saudi Arabia and target markets
- Server-side payment confirmation/webhooks; no client-side-only authorization
- Refunds, subscription lifecycle, invoices, tax/privacy/legal review
- Security testing and operational monitoring

## Phase 4 — Launch
- Pilot cohort, feedback, analytics and accessibility QA
- Connect befor9.com after signoff; preserve existing Hostinger/WordPress until migration is approved

## Decisions pending
- Course catalog and lesson owners
- Currency and price points
- Countries served and payment provider
- Subscription inclusion/exclusions
- Credential/certificate wording and issuance criteria

## Architecture note
GitHub Pages hosts static prototypes only. It does not provide secure user accounts, paid-content access control, or payment processing. Those require a backend and appropriate services. Do not collect payment information or credentials in the static prototype.
