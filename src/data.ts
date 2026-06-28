import { Project, MethodologyStep, Capability } from './types';
import medioImg from './assets/medio.png';
import cafeErpImg from './assets/cafe-erp.png';

export const PROJECTS_DATA: Project[] = [
  {
    id: '01',
    title: 'Medio',
    category: 'BRAND IDENTITY & ART DIRECTION',
    description: 'Minimalist brand identity, packaging design, and visual system created for Medio.',
    image: medioImg,
    client: 'Medio Partner',
    year: '2025',
    metrics: [
      { label: 'Brand Recognition', value: '+142%' },
      { label: 'Design Score', value: '99.9%' },
      { label: 'Visual Reach', value: '1.2M+' }
    ],
    fullDetails: 'A high-end minimal visual identity, brand guidelines, and art direction system designed for Medio. Replaces generic layouts with strict grid geometry, gorgeous packaging, and bespoke packaging materials.',
    services: ['Art Direction & Identity', 'Packaging Layouts', 'Typography System', 'Visual Production']
  },
  {
    id: '02',
    title: 'Cafe ERP',
    category: 'ERP SYSTEM & POS WORKFLOWS',
    description: 'Custom-built resources management platform and POS workflow suite optimized for cafe chains.',
    image: cafeErpImg,
    client: 'Cafe ERP Partner',
    year: '2025',
    metrics: [
      { label: 'Operational Speed', value: '+45%' },
      { label: 'Revenue Tracking Accuracy', value: '100%' },
      { label: 'Daily Transaction Capacity', value: '10k+' }
    ],
    fullDetails: 'A comprehensive resources planning and POS software suite created specifically to optimize daily cafe operations. Integrates real-time inventory updates, smart scheduling, financial dashboards, and automated ingredient replenishment loops.',
    services: ['POS System Architecture', 'Real-time Stock Management', 'Interactive Analytics Dashboard', 'Ingredient Auto-restock API']
  }
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    stepNum: '01',
    title: 'Discover',
    description: 'In-depth analysis of business requirements.',
    detailedScope: 'We deep dive into your business model, audit existing infrastructure, map out user personas, and conduct competitive analysis. We ask the difficult questions early.',
    duration: 'Week 1-2',
    deliverables: ['System Architecture Brief', 'Technical Feasibility Study', 'Competitor Landscape Analysis']
  },
  {
    stepNum: '02',
    title: 'Plan',
    description: 'Strategic architecture and roadmap definition.',
    detailedScope: 'We outline the complete database schemas, select the optimal cloud infrastructure, set strict security protocols, and draft a granular release timeline with clear milestones.',
    duration: 'Week 2',
    deliverables: ['Visual Roadmap & Milestones', 'Database Entity diagrams', 'Cloud Budget Estimation']
  },
  {
    stepNum: '03',
    title: 'Design',
    description: 'Prototyping and user experience engineering.',
    detailedScope: 'We structure high-fidelity interactive designs, craft micro-interactions, establish visual tokens, and validate font choices, working with absolute geometric precision.',
    duration: 'Week 3-5',
    deliverables: ['Figma High-Fi Prototypes', 'Design System Specifications', 'User Journey Maps']
  },
  {
    stepNum: '04',
    title: 'Develop',
    description: 'High-performance coding and integration.',
    detailedScope: 'Our developers write scalable TypeScript, deploy optimized server pipelines, integrate robust APIs, and maintain 100% test coverage across core application workflows.',
    duration: 'Week 5-10',
    deliverables: ['Clean, Documented Source Code', 'Production API Documentation', 'CI/CD Pipelines']
  },
  {
    stepNum: '05',
    title: 'Test',
    description: 'Rigorous QA and performance validation.',
    detailedScope: 'We run automated end-to-end tests, execute stress testing of database connections, run security audits, and optimize for 100/100 Google Lighthouse scores.',
    duration: 'Week 10-11',
    deliverables: ['Performance Reports', 'Penetration Security Audits', 'Bug Log Resolution Sheet']
  },
  {
    stepNum: '06',
    title: 'Deploy',
    description: 'Seamless transition to live environments.',
    detailedScope: 'We containerize applications using Docker, provision self-scaling cloud clusters (AWS/GCP), implement live-traffic switching, and establish automated database backups.',
    duration: 'Week 12',
    deliverables: ['Cloud Infrastructure Setup', 'Live Monitoring Dashboards', 'Disaster Recovery Plan']
  },
  {
    stepNum: '07',
    title: 'Scale',
    description: 'Continuous monitoring and evolution.',
    detailedScope: 'We track active user telemetry, optimize queries as data scales, implement security patches, and collaborate on feature expansions as your business targets grow.',
    duration: 'Ongoing',
    deliverables: ['Monthly Telemetry Audits', 'Iterative Feature Roadmaps', 'Server Cost Optimization Reviews']
  }
];

export const CAPABILITIES: Capability[] = [
  {
    title: 'Custom Website Development',
    description: 'High-conversion, custom digital experiences.',
    detailedTech: 'Built using React, Vite, Tailwind CSS, NextJS, and Motion, optimized for maximum speed and exceptional visual hierarchy.',
    features: ['Responsive UI', 'Lighthouse score optimization', 'Static Generation / Server Components', 'Dynamic asset management']
  },
  {
    title: 'Enterprise Web Applications',
    description: 'Complex systems for internal operations.',
    detailedTech: 'Stateful React applications with fast state synchronization, granular access control, interactive tables, and analytical views.',
    features: ['Role-Based Access (RBAC)', 'Complex spreadsheets / data tables', 'Optimized state management', 'Historical auditing logs']
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile solutions.',
    detailedTech: 'Built via Flutter or React Native with shared codebases, integrated deeply with native OS capabilities (biometrics, local sync).',
    features: ['Offline-First architecture', 'Instant push notifications', 'Biometric login', 'Smooth gestures and custom canvas layout']
  },
  {
    title: 'Custom Software Development',
    description: 'Tailored software to solve unique problems.',
    detailedTech: 'No templates. We construct exact digital workflows that reflect how your business actually executes operations.',
    features: ['API-first philosophy', 'Custom business engine logic', 'Legacy data migration tools', 'Secure hosting isolation']
  },
  {
    title: 'SaaS Product Development',
    description: 'Building and scaling software-as-a-service.',
    detailedTech: 'Multi-tenant cloud architecture, robust subscription billing integrations (Stripe), and metrics tracking dashboards.',
    features: ['Multi-tenant isolation', 'Stripe Billing integration', 'Usage metering APIs', 'Team management portals']
  },
  {
    title: 'AI Automation Solutions',
    description: 'Leveraging AI to streamline workflows.',
    detailedTech: 'Automated content parsing, smart categorization, intelligent routing using Gemini, and specialized NLP processors.',
    features: ['Automatic PDF processing', 'Smart email categorizers', 'Repetitive task handlers', 'Predictive recommendation engines']
  },
  {
    title: 'AI Agents & Chatbots',
    description: 'Intelligent conversational interfaces.',
    detailedTech: 'Retrieval Augmented Generation (RAG) models, secure memory stores, multi-turn AI assistants, and customer service routers.',
    features: ['Contextual RAG engines', 'Customer support routing', 'Multi-channel integration', 'Analytics dashboard']
  },
  {
    title: 'Workflow Automation',
    description: 'Connecting tools for seamless operations.',
    detailedTech: 'Orchestrating workflows between Slack, Salesforce, internal DBs, and Google Workspace for hands-free productivity.',
    features: ['Trigger-based automation pipelines', 'Third-party API connectors', 'Real-time error notifications', 'Execution flow visualizers']
  },
  {
    title: 'CRM & ERP Systems',
    description: 'Centralized resource and customer management.',
    detailedTech: 'Tailor-made software matching your specific sales funnel, inventory requirements, and customer lifecycle touchpoints.',
    features: ['Custom CRM dashboards', 'Inventory forecasting models', 'Financial statement generation', 'Client portal systems']
  },
  {
    title: 'API Development',
    description: 'Robust integrations and custom APIs.',
    detailedTech: 'Clean RESTful and GraphQL APIs built in Node.js/Go with complete OpenAPI/Swagger documentation, rate limiting, and caching.',
    features: ['Strict rate-limiting and authorization', 'GraphQL / REST architectures', 'Self-documenting Swagger/OpenAPI', 'Redis caching integration']
  },
  {
    title: 'Cloud Solutions',
    description: 'Secure and scalable cloud infrastructure.',
    detailedTech: 'Containerized architectures (Docker, Kubernetes) deployed to Google Cloud or AWS with automated infrastructure-as-code.',
    features: ['Infrastructure-as-Code (Terraform)', 'CI/CD automated testing', 'Auto-scaling load balancers', 'Encrypted continuous backups']
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric design that drives engagement.',
    detailedTech: 'Precise Figma design layouts, deep user testing protocols, responsive grid calculations, and custom visual assets.',
    features: ['Interactive figma designs', 'High-contrast accessible designs', 'Motion prototyping studies', 'User persona validation']
  }
];

export const ESTIMATION_FACTORS = {
  platforms: [
    { id: 'website', name: 'Custom Website / Landing Space', baseCost: 12000, baseWeeks: 4, icon: 'web' },
    { id: 'enterprise', name: 'Enterprise Web Application', baseCost: 35000, baseWeeks: 8, icon: 'corporate_fare' },
    { id: 'mobile', name: 'Mobile Application (iOS & Android)', baseCost: 28000, baseWeeks: 6, icon: 'phone_iphone' },
    { id: 'saas', name: 'SaaS Product / Platform', baseCost: 42000, baseWeeks: 10, icon: 'cloud' },
    { id: 'ai', name: 'AI Automation / Agent Solution', baseCost: 24000, baseWeeks: 6, icon: 'psychology' }
  ],
  features: [
    { id: 'auth', name: 'User Authentication & RBAC', cost: 3500, weeks: 1, category: 'security' },
    { id: 'billing', name: 'Stripe Subscription Billing & Multi-tenant Core', cost: 4800, weeks: 1.5, category: 'commerce' },
    { id: 'ai_gen', name: 'Gemini AI Content / Extraction Integration', cost: 6500, weeks: 2, category: 'ai' },
    { id: 'analytics', name: 'Interactive Recharts & High-Frequency Canvas Graphs', cost: 5000, weeks: 1.5, category: 'visual' },
    { id: 'realtime', name: 'Real-time WebSocket Collaboration or Chat Hub', cost: 5500, weeks: 1.5, category: 'realtime' },
    { id: 'multilingual', name: 'Multilingual Support & Localization', cost: 2500, weeks: 0.5, category: 'global' },
    { id: 'cloud', name: 'Kubernetes Container Orchestration & IaC Setup', cost: 8000, weeks: 2, category: 'infrastructure' }
  ],
  timelines: [
    { id: 'standard', name: 'Standard Delivery (Normal Pace)', costMultiplier: 1.0, timeMultiplier: 1.0 },
    { id: 'expedited', name: 'Expedited (Highly Focused, Multi-dev)', costMultiplier: 1.35, timeMultiplier: 0.7 }
  ]
};
