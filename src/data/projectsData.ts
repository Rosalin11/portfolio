import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'nexusmesh',
    title: 'NexusMesh Orchestrator',
    tagline: 'High-throughput event mesh and distributed task orchestration engine',
    description: 'Designed and deployed a fault-tolerant event broker orchestration layer capable of routing, deduplicating, and executing asynchronous distributed jobs with strict order preservation across Kubernetes clusters.',
    category: 'systems',
    categoryLabel: 'Distributed Systems',
    featured: true,
    year: '2025',
    role: 'Principal Architect & Lead Engineer',
    duration: '9 months',
    clientOrOrg: 'ScaleGrid Systems',
    tags: ['Go', 'Apache Kafka', 'Redis Streams', 'gRPC', 'Kubernetes', 'Prometheus'],
    metrics: [
      { label: 'Throughput', value: '45,000 evt/s' },
      { label: 'p99 Latency', value: '< 14ms' },
      { label: 'Uptime SLA', value: '99.995%' },
    ],
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    architectureHighlights: [
      'Multi-tenant event partitioner using consistent hashing rings to avoid partition hotspots.',
      'Custom zero-copy gRPC serialisation stream between worker nodes and Kafka brokers.',
      'Automatic leader election with raft consensus fallback for stateful workflow supervisors.',
      'Comprehensive Prometheus metrics exporter with distributed OpenTelemetry tracing.'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Event storm starvation during unexpected consumer downstream failures.',
        solution: 'Implemented dynamic leaky-bucket rate limiters with jittered exponential backoff and localized dead-letter queues.'
      },
      {
        challenge: 'High GC pauses in Go under 60k req/sec peak loads.',
        solution: 'Refactored allocation paths with sync.Pool buffer reuse, reducing garbage collection pause times by 78%.'
      }
    ],
    keyFeatures: [
      'Dead-letter queue inspection dashboard with single-click replays',
      'Configurable backoff strategies (exponential, linear, jittered)',
      'Real-time streaming topologies visualization',
      'Zero-downtime blue/green rolling cluster updates'
    ],
    liveUrl: 'https://github.com/example/nexusmesh-orchestrator',
    githubUrl: 'https://github.com/example/nexusmesh-orchestrator',
    caseStudyAvailable: true
  },
  {
    id: 'kroma-studio',
    title: 'Kroma Studio Engine',
    tagline: 'Browser-based real-time collaborative canvas with WebAssembly vector rendering',
    description: 'An interactive design workspace supporting real-time multi-cursor collaboration, infinite canvas rendering via WebAssembly, and local-first conflict resolution with CRDTs.',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Web',
    featured: true,
    year: '2024 - 2025',
    role: 'Lead Full-Stack Engineer',
    duration: '12 months',
    clientOrOrg: 'Kroma Labs',
    tags: ['TypeScript', 'React', 'WebAssembly', 'Rust', 'WebSockets', 'Yjs CRDT'],
    metrics: [
      { label: 'Active Users', value: '140k/mo' },
      { label: 'Frame Rate', value: '60 fps stable' },
      { label: 'Sync Latency', value: '< 28ms' },
    ],
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    architectureHighlights: [
      'Rust-compiled WebAssembly math engine powering path booleans and bezier bezier calculations.',
      'WebGL/Canvas hybrid viewport rendering with spatial hash-grid viewport culling.',
      'Decentralized state replication utilizing Yjs CRDT over encrypted WebSocket multiplexing.'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Rendering 10,000+ vector shapes simultaneously caused major frame drops on mid-tier hardware.',
        solution: 'Implemented quad-tree spatial indexing and dynamic level-of-detail (LOD) simplifications, keeping viewport render loop under 12ms.'
      },
      {
        challenge: 'Handling simultaneous offline edits without split-brain document states.',
        solution: 'Architected state transitions on top of state-vector differential sync with cryptographic version vectors.'
      }
    ],
    keyFeatures: [
      'Infinite zoom-and-pan canvas with sub-pixel snap grid',
      'Real-time cursor presence and participant live audio indicator',
      'SVG, PDF, and high-DPI raster export directly in-browser',
      'Version history checkpoints with visual diff scrubbing'
    ],
    liveUrl: 'https://kroma-studio-demo.example.com',
    githubUrl: 'https://github.com/example/kroma-studio',
    caseStudyAvailable: true
  },
  {
    id: 'aura-intelligence',
    title: 'Aura Vector Indexer & RAG Hub',
    tagline: 'Enterprise semantic search, hybrid vector retrieval, and prompt observability',
    description: 'Engineered an end-to-end knowledge ingestion pipeline and semantic search platform. Indexing millions of technical docs and internal wikis with dense/sparse hybrid reranking.',
    category: 'ai-data',
    categoryLabel: 'AI & Data Systems',
    featured: true,
    year: '2024',
    role: 'AI Systems Architect',
    duration: '7 months',
    clientOrOrg: 'Synthetix AI',
    tags: ['Python', 'FastAPI', 'pgvector', 'React', 'Docker', 'OpenTelemetry'],
    metrics: [
      { label: 'Vector Query Time', value: '72ms p95' },
      { label: 'Documents Indexed', value: '6.2 Million' },
      { label: 'Retrieval Recall', value: '94.8% NDCG@10' },
    ],
    heroImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    architectureHighlights: [
      'Hybrid Reciprocal Rank Fusion (RRF) blending BM25 lexical search with dense vector embeddings.',
      'Asynchronous chunking and token optimization pipeline utilizing RabbitMQ and Celery.',
      'Guardrail evaluation hooks measuring prompt drift, hallucination scores, and latency budgets.'
    ],
    challengesAndSolutions: [
      {
        challenge: 'High indexing cost and token waste when documents experienced minor punctuation edits.',
        solution: 'Developed a content-addressed chunk hashing mechanism that skips reprocessing identical paragraphs.'
      },
      {
        challenge: 'Cold-start latency spikes when loading vector indexes into memory.',
        solution: 'Implemented memory-mapped HNSW index caching with proactive page pre-warming during container boots.'
      }
    ],
    keyFeatures: [
      'Visual query debugger showing semantic similarity distance matrices',
      'Prompt iteration playground with side-by-side model comparison',
      'Automated PII redaction and enterprise access control filters',
      'Webhook notifications for dataset re-indexing events'
    ],
    liveUrl: 'https://aura-rag.example.com',
    githubUrl: 'https://github.com/example/aura-rag-observability',
    caseStudyAvailable: true
  },
  {
    id: 'pulse-commerce',
    title: 'Pulse Commerce Engine',
    tagline: 'High-concurrency headless checkout & optimistic inventory management platform',
    description: 'Built a resilient headless checkout backend and payment processing hub capable of sustaining intense flash-sale traffic without double-selling inventory or dropping transaction records.',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Web',
    featured: false,
    year: '2023 - 2024',
    role: 'Staff Backend Engineer',
    duration: '10 months',
    clientOrOrg: 'Meridian Global',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe API', 'BullMQ'],
    metrics: [
      { label: 'Gross Volume', value: '$18M+ peak' },
      { label: 'Cart Conversion', value: '+19.4%' },
      { label: 'Duplicate Orders', value: '0 recorded' },
    ],
    heroImage: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
    architectureHighlights: [
      'Two-phase commit inventory reservation with atomic Redis Lua scripts.',
      'Idempotent webhook pipeline verifying Stripe cryptographic signatures and ledger consistency.',
      'Edge-cached product catalog with stale-while-revalidate caching invalidation triggers.'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Race conditions during flash sales when multiple users checked out the last available item in the exact same millisecond.',
        solution: 'Engineered optimistic concurrency locking combined with distributed Redis redlock tokens to guarantee strictly single-ownership cart claims.'
      }
    ],
    keyFeatures: [
      'One-click guest checkout with localized payment providers',
      'Automated reconciliation engine matching bank settlement logs',
      'Dynamic currency conversion with real-time foreign exchange feeds',
      'Comprehensive merchant analytics dashboard'
    ],
    liveUrl: 'https://pulse-commerce.example.com',
    githubUrl: 'https://github.com/example/pulse-commerce-engine',
    caseStudyAvailable: true
  },
  {
    id: 'sentinel-ci',
    title: 'Sentinel Ephemeral Sandboxes',
    tagline: 'Lightweight micro-VM isolation for secure automated test and security execution',
    description: 'A developer security platform spinning up disposable, microsecond-boot isolated environments to run untrusted third-party code and automated vulnerability scanners.',
    category: 'devtools',
    categoryLabel: 'DevTools & Infra',
    featured: false,
    year: '2023',
    role: 'Infrastructure & Security Engineer',
    duration: '6 months',
    clientOrOrg: 'OpenSource Initiative',
    tags: ['Rust', 'Docker API', 'TypeScript', 'GitHub Actions', 'eBPF', 'Tailwind'],
    metrics: [
      { label: 'Startup Time', value: '180ms' },
      { label: 'Vuln Scan Time', value: '3.5 min' },
      { label: 'Cost Reduction', value: '62%' },
    ],
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    architectureHighlights: [
      'Linux cgroup v2 and seccomp profile enforcement to constrain container syscalls.',
      'eBPF kernel probe monitor capturing unauthorized network connections or filesystem modifications.',
      'Seamless GitHub App integration posting inline PR review security annotations.'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Malicious npm/pip packages attempting host container breakouts or credential harvesting.',
        solution: 'Isolated network namespaces with zero-egress network policies and synthetic DNS spoofing for honeypot telemetry.'
      }
    ],
    keyFeatures: [
      'Instant interactive web terminal into isolated runner sandbox',
      'Automated SBOM (Software Bill of Materials) generation',
      'Diff visualizer highlighting modified dependencies and vulnerability CVEs',
      'Zero-configuration GitHub Action workflow drop-in'
    ],
    liveUrl: 'https://sentinel-ci.example.com',
    githubUrl: 'https://github.com/example/sentinel-sandboxes',
    caseStudyAvailable: true
  },
  {
    id: 'veloce-db',
    title: 'Veloce Data Studio',
    tagline: 'Modern desktop and web GUI for distributed relational and key-value datastores',
    description: 'An open-source desktop client built for database engineers, providing lightning-fast table inspection, visual EXPLAIN query planning, and virtualized dataset editing.',
    category: 'devtools',
    categoryLabel: 'DevTools & Infra',
    featured: false,
    year: '2023',
    role: 'Creator & Maintainer',
    duration: 'Ongoing',
    tags: ['React', 'Electron', 'TypeScript', 'Monaco Editor', 'Tailwind CSS'],
    metrics: [
      { label: 'GitHub Stars', value: '4.8k+' },
      { label: 'Row Virtualization', value: '1M+ rows' },
      { label: 'Memory Footprint', value: '< 90MB' },
    ],
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    architectureHighlights: [
      'Virtualized canvas grid rendering capable of scrolling millions of rows at 60fps.',
      'Embedded SQL parser providing contextual syntax highlighting, autocomplete, and linter warnings.',
      'Local-first encrypted credential vault with biometric OS keychain integration.'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Rendering massive query result sets of 500,000+ rows choked standard DOM tables.',
        solution: 'Built a specialized windowed virtualization engine that only mounts cells currently visible inside the viewport.'
      }
    ],
    keyFeatures: [
      'Visual query execution plan graph with bottleneck highlights',
      'Live schema migration generator with rollback scripting',
      'Multi-connection tab manager with SSH bastion tunneling',
      'Dark and light syntax themes tailored for long debugging sessions'
    ],
    liveUrl: 'https://veloce-studio.example.com',
    githubUrl: 'https://github.com/example/veloce-data-studio',
    caseStudyAvailable: false
  }
];
