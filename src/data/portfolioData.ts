import { ExperienceItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Alex Rivera',
  title: 'Senior Full-Stack & Systems Engineer',
  tagline: 'Designing resilient distributed systems, modern web architectures, and high-performance developer platforms.',
  bio: 'With over 8 years of engineering experience, I specialize in bridging high-concurrency backend infrastructure with crisp, responsive frontend user interfaces. I focus on system reliability, type safety, low-latency performance, and building clean developer experiences.',
  location: 'San Francisco, CA (Remote & Hybrid)',
  email: 'alex.rivera.eng@example.com',
  github: 'https://github.com/alexrivera-dev',
  linkedin: 'https://linkedin.com/in/alexrivera-eng',
  twitter: 'https://x.com/alexrivera_tech',
  status: 'Available for high-impact roles & technical consulting',
  yearsExperience: '8+ Years',
  projectsShipped: '35+',
  productionDeployments: '120+',
  uptimeRecord: '99.99%'
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Staff Software Engineer',
    company: 'ScaleGrid Cloud Systems',
    location: 'San Francisco, CA',
    period: '2023 — Present',
    type: 'Full-time',
    description: 'Lead technical architect across multi-region streaming and event infrastructure serving over 40M daily API transactions.',
    achievements: [
      'Architected NexusMesh orchestrator reducing distributed batch job failure rates by 91%.',
      'Spearheaded Kubernetes migration across 4 global cloud regions, saving $420k annually in compute costs.',
      'Mentored 12 mid-level and senior engineers; established RFC technical specification culture.'
    ],
    technologies: ['Go', 'Kubernetes', 'Kafka', 'TypeScript', 'gRPC', 'PostgreSQL', 'Datadog']
  },
  {
    id: 'exp-2',
    role: 'Senior Full-Stack Engineer',
    company: 'Kroma Labs',
    location: 'New York, NY (Remote)',
    period: '2021 — 2023',
    type: 'Full-time',
    description: 'Drove core web architecture, real-time collaboration canvas, and client-side performance optimization.',
    achievements: [
      'Built WebAssembly vector math engine bringing canvas rendering from 24fps to solid 60fps.',
      'Integrated Yjs CRDT real-time synchronization, cutting document conflict incidents to zero.',
      'Constructed modern design token system and component library adopted across 4 product suites.'
    ],
    technologies: ['React', 'TypeScript', 'Rust (Wasm)', 'WebSockets', 'Tailwind CSS', 'Node.js']
  },
  {
    id: 'exp-3',
    role: 'Software Engineer II',
    company: 'Vanguard Systems',
    location: 'Austin, TX',
    period: '2019 — 2021',
    type: 'Full-time',
    description: 'Engineered high-volume payments infrastructure, banking API integrations, and checkout optimization pipelines.',
    achievements: [
      'Developed optimistic concurrency checkout flow that survived 4x peak holiday traffic spikes with 0 duplicate payments.',
      'Overhauled database query indexing, cutting p95 response times from 340ms to 65ms.',
      'Automated CI/CD deployment pipelines cutting staging verification cycles from 2 hours to 14 minutes.'
    ],
    technologies: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS ECS', 'Jest', 'GraphQL']
  },
  {
    id: 'exp-4',
    role: 'Frontend & UI Engineer',
    company: 'PixelCraft Agency',
    location: 'Seattle, WA',
    period: '2017 — 2019',
    type: 'Full-time',
    description: 'Delivered bespoke web applications, interactive dashboards, and design systems for high-growth tech startups.',
    achievements: [
      'Built 18 custom customer-facing web applications with strict WCAG AA accessibility compliance.',
      'Authored internal responsive UI boilerplate that cut client project bootstrapping time by 40%.'
    ],
    technologies: ['JavaScript', 'React', 'HTML5/CSS3', 'REST APIs', 'Webpack', 'Figma']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend & Client Architecture',
    iconName: 'Layout',
    skills: [
      { name: 'TypeScript & Modern JS', level: 'Expert', years: 8, description: 'Deep type-system mastery, generics, AST transformations, strict type safety' },
      { name: 'React 19 & Next.js', level: 'Expert', years: 7, description: 'Server components, concurrent mode, custom hooks, micro-frontends' },
      { name: 'State Architecture (Zustand / CRDT)', level: 'Advanced', years: 5, description: 'Local-first sync, optimistic updates, conflict-free replicated data types' },
      { name: 'Performance & Canvas (WebGL / Wasm)', level: 'Advanced', years: 4, description: 'Sub-frame rendering, memory optimization, bundle splitting, Web Workers' },
      { name: 'Design Systems & Tailwind CSS', level: 'Expert', years: 6, description: 'Token architecture, accessible UI primitives, fluid responsive layouts' }
    ]
  },
  {
    title: 'Backend & Distributed Systems',
    iconName: 'Server',
    skills: [
      { name: 'Go (Golang)', level: 'Expert', years: 5, description: 'Goroutine concurrency patterns, low-alloc high-throughput microservices, gRPC' },
      { name: 'Node.js & Express / Fastify', level: 'Expert', years: 8, description: 'Event loop tuning, streaming APIs, resilient service middleware' },
      { name: 'Message Brokers (Kafka / RabbitMQ)', level: 'Advanced', years: 5, description: 'Partitioning, offset management, consumer group scaling, schema registries' },
      { name: 'PostgreSQL & Relational Design', level: 'Expert', years: 7, description: 'Complex indexing, EXPLAIN ANALYZE tuning, connection pooling, migrations' },
      { name: 'Redis & In-Memory Caching', level: 'Advanced', years: 6, description: 'Distributed locking, pub/sub, rate-limiting, pipeline batching' }
    ]
  },
  {
    title: 'Cloud, DevOps & Observability',
    iconName: 'Cloud',
    skills: [
      { name: 'Docker & Kubernetes (K8s)', level: 'Advanced', years: 5, description: 'Helm charts, zero-downtime rolling deploys, ingress controllers, resource limits' },
      { name: 'AWS & Cloud Run Architecture', level: 'Advanced', years: 6, description: 'Multi-region architectures, VPC peering, IAM least privilege, serverless' },
      { name: 'CI/CD & GitHub Actions', level: 'Expert', years: 7, description: 'Automated test matrixes, artifact caching, container scanning, canary releases' },
      { name: 'OpenTelemetry & Prometheus', level: 'Advanced', years: 4, description: 'Distributed trace propagation, custom Grafana dashboards, SLI/SLO alerting' },
      { name: 'Terraform & IaC', level: 'Proficient', years: 3, description: 'Declarative cloud provisioning, state locks, immutable infrastructure' }
    ]
  },
  {
    title: 'Engineering Practices & Methodologies',
    iconName: 'CheckCircle2',
    skills: [
      { name: 'System Design & RFC Culture', level: 'Expert', years: 8, description: 'Architectural documentation, trade-off analysis, capacity planning' },
      { name: 'Zero-Downtime Database Migrations', level: 'Expert', years: 6, description: 'Expand-and-contract patterns, backwards-compatible API versions' },
      { name: 'Automated Testing (E2E / Unit / Chaos)', level: 'Expert', years: 8, description: 'TDD, contract testing with Pact, integration test suites with Testcontainers' },
      { name: 'Web Security & Compliance', level: 'Advanced', years: 5, description: 'OWASP Top 10 mitigation, OAuth 2.0 / OIDC, zero-trust token verification' }
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    quote: 'Alex has the rare ability to architect high-throughput backend infrastructure while simultaneously ensuring the web client UI feels feather-light and responsive. One of the most reliable engineering partners I have worked with.',
    author: 'Sarah Chen',
    title: 'VP of Engineering, ScaleGrid Systems',
    relationship: 'Managed Alex directly'
  },
  {
    id: 't-2',
    quote: 'The collaborative canvas Alex designed for Kroma Studio transformed our product from a laggy prototype to an industry-grade vector platform. His attention to frame rates, edge-case sync bugs, and code cleanliness is unmatched.',
    author: 'Marcus Vance',
    title: 'Co-Founder & Chief Product Officer, Kroma Labs',
    relationship: 'Direct collaborator'
  }
];
