export const profile = {
  name: "Yash Hirudkar", role: "Full Stack Developer", email: "yashhirudkar100@gmail.com", phone: "+91 76664 07114",
  location: "Nagpur, India", linkedin: "#", github: "#",
  intro: "I build enterprise-grade platforms — CRM/ERP systems, real-time collaboration and payment infrastructure — that stay fast and secure at scale.",
  about: ["I'm a Full Stack Developer with two years of experience shipping B2B SaaS and enterprise systems end to end: schema design, REST APIs, real-time layers, polished React interfaces and the DevOps that keeps it all running.",
    "My strength is the hard backend middle — RBAC, workflow engines, idempotent payments and query optimization — paired with front-ends that feel as good as they perform."],
};
export const stats = [
  { v: 30, s: "+", l: "Enterprise modules shipped" }, { v: 100, s: "k+", l: "Records served at low latency" },
  { v: 60, s: "%", l: "Faster DB execution" }, { v: 40, s: "%", l: "Fewer deployment errors" },
];
export const skills = [
  { n: "Backend & APIs", p: 92, t: "Node.js · Express · NestJS · REST · Webhooks" },
  { n: "Databases", p: 90, t: "PostgreSQL · MySQL · MongoDB · Sequelize" },
  { n: "Frontend", p: 88, t: "React · Next.js · TypeScript · Tailwind" },
  { n: "DevOps", p: 82, t: "Docker · Ansible · GitHub Actions · DigitalOcean" },
  { n: "Security", p: 85, t: "JWT · RBAC · HMAC · OWASP" },
  { n: "Real-time", p: 86, t: "Socket.IO · live notifications · chat" },
];
export const stack = ["React", "Next.js", "TypeScript", "Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB", "Socket.IO", "Docker", "Ansible", "GitHub Actions", "Cloudflare", "Tailwind"];
export const experience = [
  { role: "Software Developer", org: "Agricom Impex", when: "Jun 2026 — Present", pts: [
    "Architected an agribusiness CRM & ERP platform with 30+ modules spanning HR, tasks, partners, enquiries and follow-ups.",
    "Built a hierarchical RBAC and approval-workflow engine powering organization-wide access control.",
    "Delivered real-time chat, notifications and activity timelines with Socket.IO.",
    "Tuned PostgreSQL with indexing, transaction tuning and cursor pagination for high-volume workloads."] },
  { role: "Full Stack Developer", org: "BizProspex Pvt Ltd", when: "Jun 2025 — Jun 2026", pts: [
    "Shipped MERN/PERN apps serving 1,000+ active users at 99.9% uptime.",
    "Automated multi-server provisioning with Docker + Ansible; CI/CD cut deployment errors by 40%.",
    "Cut query execution time by 60% on 100k+ record datasets.",
    "Secured APIs with JWT, HMAC verification, RBAC and OWASP practices."] },
];
export const projects = [
  { n: "Agribusiness CRM & ERP", d: "A unified platform for buyers, suppliers, partners and staff — with attendance, approvals, enquiries and live collaboration.", t: ["Node.js", "PostgreSQL", "React", "Socket.IO"], f: ["30+ modules", "Dynamic RBAC", "Approval engine", "Real-time chat"], g: "from-primary to-secondary" },
  { n: "B2B Data Marketplace", d: "An Apollo-style list builder where users filter 100k+ records and unlock contacts with credits, with automated order delivery.", t: ["PostgreSQL", "Sequelize", "React", "Node.js"], f: ["Multi-filter search", "Credit model", "Dedup engine", "Batch allocation"], g: "from-secondary to-accent" },
  { n: "Checkout & Payments", d: "Multi-gateway checkout with idempotent flows, HMAC-verified webhooks, coupon engine and a permissioned admin dashboard.", t: ["Node.js", "Webhooks", "HMAC", "React"], f: ["No duplicate charges", "Coupon rules", "Bulk CSV ingest", "Analytics"], g: "from-accent to-primary" },
  { n: "DevOps Automation", d: "One-command provisioning of multiple DigitalOcean droplets with Dockerized parity between staging and production.", t: ["Docker", "Ansible", "GitHub Actions", "Cloudflare"], f: ["Zero manual setup", "CI/CD", "DDoS + CDN", "Env parity"], g: "from-success to-accent" },
];
export const achievements = [
  { v: 99.9, s: "%", l: "Uptime across 1,000+ active users" }, { v: 40, s: "%", l: "Deployment errors eliminated" },
  { v: 60, s: "%", l: "Database execution time saved" }, { v: 30, s: "+", l: "Enterprise modules architected" },
];
export const education = [
  { n: "B.Tech, Computer Science & Engineering", o: "Prof. Ram Meghe College of Engineering & Management", w: "2022 — 2025", e: "CGPA 7.7 / 10" },
  { n: "HSC — Science", o: "Hutatma Rashtriya Vidyalaya, Ashti", w: "2020 — 2021", e: "95.17%" },
];
