export const PROFILE = {
  name: 'Niranjan Potter',
  realName: 'Niranjan Kumar Potter',
  first: 'NIRANJAN',
  last: 'POTTER',
  title: 'MULESOFT',
  subtitle: 'ARCHITECT',
  role: 'Senior Integration Engineer & Architect',
  summary:
    'Strategic Integration Architect and Senior Developer with 5 years of enterprise experience specializing in Mule ESB, API-led connectivity, CloudHub 2.0 modernization, and AI-driven agentic integration with Model Context Protocol (MCP) and MuleSoft Agent Fabric.',
  phone: '+91 8562096041',
  email: 'niranjanpotter1997@gmail.com',
  github: 'https://github.com/niranjanpotter',
  linkedin: 'https://www.linkedin.com/in/niranjan-potter-551b49171',
  resume: '/resume.pdf',
};

export type ProfileId = 'recruiter' | 'developer' | 'hackathon' | 'browsing';
export const VIEWERS: { id: ProfileId; name: string; color: string; icon: 'eye' | 'kunai' | 'leaf' | 'shuriken'; line: string }[] = [
  { id: 'recruiter', name: 'Recruiter', color: '#e50914', icon: 'eye', line: 'Looking for a Senior MuleSoft Architect? 5+ years enterprise integration, 5M+ transactions.' },
  { id: 'developer', name: 'Developer', color: '#2f6fed', icon: 'kunai', line: 'Fellow integration engineer — robust APIs, DataWeave 2.0, and clean ESB design await.' },
  { id: 'hackathon', name: 'Architect Lead', color: '#f5b301', icon: 'shuriken', line: 'Scaling enterprise microservices and CloudHub 2.0 migrations with 99.9% uptime.' },
  { id: 'browsing', name: 'Just Browsing', color: '#1db954', icon: 'leaf', line: 'Grab some popcorn. The enterprise integration story unfolds in a few scrolls.' },
];

export const SUBTITLES: { from: number; to: number; text: string; sfx?: boolean }[] = [
  { from: 0.05, to: 0.22, text: 'Everyone keeps asking how enterprise systems connect at scale.' },
  { from: 0.22, to: 0.38, text: 'API-led connectivity and Mule ESB, unmasked.' },
  { from: 0.38, to: 0.55, text: 'No more data silos. 5M+ monthly transactions at 99.9% uptime.' },
  { from: 0.55, to: 0.72, text: 'Modernizing CloudHub 2.0 and orchestrating AI agents with MCP.' },
  { from: 0.72, to: 0.905, text: 'Senior Integration Engineer & Architect. Shall we begin?' },
];

export const STATS = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 5, suffix: 'M+', label: 'Monthly Trans.' },
  { value: 60, suffix: '%', label: 'Latency Cut' },
  { value: 99.9, suffix: '%', label: 'Uptime SLA' },
];

export const TOP10 = [
  { name: 'Mule 4.x', genre: 'Integration', hue: 0 },
  { name: 'CloudHub 2.0', genre: 'Cloud', hue: 205 },
  { name: 'DataWeave 2.0', genre: 'Transform', hue: 120 },
  { name: 'Java 17', genre: 'Language', hue: 25 },
  { name: 'API-led Architecture', genre: 'Architecture', hue: 215 },
  { name: 'Anypoint Platform', genre: 'Platform', hue: 140 },
  { name: 'AWS (S3 & DynamoDB)', genre: 'Cloud', hue: 48 },
  { name: 'Azure DevOps & Maven', genre: 'DevOps', hue: 200 },
  { name: 'MCP & Agent Fabric', genre: 'AI Integration', hue: 30 },
  { name: 'MUnit & SonarQube', genre: 'Testing', hue: 280 },
];

export const SKILL_GENRES = [
  { name: 'Integration Platforms', items: ['MuleSoft Anypoint Platform', 'Mule ESB 4.x', 'CloudHub 2.0', 'Anypoint MQ', 'APIkit', 'API Manager'] },
  { name: 'API & Data Transformation', items: ['DataWeave 2.0', 'RESTful APIs', 'RAML Specifications', 'SOAP / WSDL', 'GraphQL', 'JSON & XML'] },
  { name: 'Cloud & DevOps', items: ['AWS S3', 'AWS Secrets Manager', 'AWS DynamoDB', 'Azure Pipelines', 'Maven', 'Git & Jenkins'] },
  { name: 'Languages & Databases', items: ['Java 17', 'SQL', 'PostgreSQL', 'Oracle DB', 'IBM DB2', 'MySQL'] },
  { name: 'Testing & Observability', items: ['MUnit Testing', 'SonarQube Quality Gates', 'Splunk Logging', 'Postman', 'JIRA', 'ServiceNow'] },
  { name: 'AI & Agentic Workflows', items: ['MuleSoft Agent Fabric', 'Model Context Protocol (MCP)', 'Agent-to-Agent (A2A)', 'Windsurf AI IDE', 'Dev Agent'] },
];

export const EPISODES = [
  {
    id: 'api-framework',
    ep: 1,
    name: 'Enterprise API Framework & High Availability',
    tagline: '5M+ monthly transactions for major Energy & Utility client.',
    still: '/stills/masked.jpg',
    tint: '#e50914',
    rank: 'S-Rank',
    match: 99,
    url: 'https://github.com/niranjanpotter',
    desc: 'Architected and implemented a high-availability API-led connectivity framework managing 5M+ monthly transactions with 99.9% uptime. Designed reusable enterprise logging, standardized error handling, and reduced latency by 35% with optimized DataWeave 2.0.',
    genres: ['API-led', 'High-Availability', 'Energy & Utility'],
    tech: ['Mule 4.x', 'DataWeave 2.0', 'Anypoint MQ', 'PostgreSQL', 'Oracle', 'IBM DB2'],
  },
  {
    id: 'cloud-modernization',
    ep: 2,
    name: 'CloudHub 2.0 & Java 17 Modernization',
    tagline: 'Zero downtime migration to next-gen cloud runtimes.',
    still: '/stills/face.jpg',
    tint: '#2f6fed',
    rank: 'S-Rank',
    match: 98,
    url: 'https://github.com/niranjanpotter',
    desc: 'Spearheaded legacy API modernization to CloudHub 2.0, upgrading runtimes from Java 8 to Java 17. Integrated AWS Secrets Manager across 50+ endpoints and established CI/CD with Maven and Azure DevOps quality gates.',
    genres: ['Cloud Modernization', 'Java 17', 'DevOps'],
    tech: ['CloudHub 2.0', 'Java 17', 'AWS Secrets Manager', 'Azure Pipelines', 'SonarQube'],
  },
  {
    id: 'ai-mcp-orchestration',
    ep: 3,
    name: 'AI Agent Workflows & MCP Orchestration',
    tagline: 'Agent-to-Agent (A2A) integration architectures.',
    still: '/stills/kunai.jpg',
    tint: '#f5b301',
    rank: 'S-Rank',
    match: 97,
    url: 'https://github.com/niranjanpotter',
    desc: 'Pioneered agentic integration workflows using Model Context Protocol (MCP) and MuleSoft Agent Fabric. Orchestrated real-time data feeds and parallel processing, cutting response time by 60% and delivery cycles by 20%.',
    genres: ['Agent Fabric', 'MCP Protocols', 'AI Orchestration'],
    tech: ['Model Context Protocol', 'MuleSoft Agent Fabric', 'A2A Communication', 'Windsurf', 'GraphQL'],
  },
];

export const AWARDS = [
  { laurel: 'TRAILHEAD', title: 'Double Star Ranger', sub: 'Salesforce Trailhead Community' },
  { laurel: 'ARCHITECT', title: 'Platform Architect', sub: 'Salesforce Certified MuleSoft Architect I' },
  { laurel: 'DEVELOPER', title: 'MuleSoft Developer', sub: 'Certified Developer (L1 & L2)' },
  { laurel: 'SPECIALIST', title: 'Data Cloud & AI', sub: 'Certified Data Cloud & AI Associate' },
];

export const CERTS = [
  { by: 'MuleSoft', title: 'Salesforce Certified MuleSoft Platform Architect I', hue: 0 },
  { by: 'MuleSoft', title: 'Salesforce Certified MuleSoft Developer (Level 1 & 2)', hue: 205 },
  { by: 'Salesforce', title: 'Salesforce Certified Data Cloud Consultant', hue: 215 },
  { by: 'Salesforce', title: 'Salesforce Certified AI Associate', hue: 45 },
  { by: 'Salesforce Trailhead', title: 'Double Star Ranger (Trailhead Profile)', hue: 140 },
];

export const SEASONS = [
  {
    label: 'Season 1',
    name: 'The Academic Arc',
    years: '2015 – 2019',
    episodes: [{ title: 'Bachelor of Technology (B.Tech)', where: 'Engineering Degree', note: 'Graduated with strong foundations in Computer Science & Engineering, core algorithms, and distributed systems.', still: '/stills/pull.jpg' }],
  },
  {
    label: 'Season 2',
    name: 'The Engineering Arc',
    years: 'May 2021 – July 2025',
    episodes: [{ title: 'Digital Engineering Senior Engineer', where: 'NTT DATA (Apisero.inc)', note: 'Designed scalable Mule 4 microservices for retail and finance enterprises, integrated AWS Cloud (S3, DynamoDB, Secrets Manager), and cut deployment cycles by 40% via Azure DevOps & MUnit.', still: '/stills/vest.jpg' }],
  },
  {
    label: 'Season 3',
    name: 'The Architecture Arc',
    years: 'July 2025 – Present',
    episodes: [
      { title: 'Senior MuleSoft Engineer & Technical Lead', where: 'Tech Mahindra', note: 'Leading API-led architectures for major Energy & Utility clients, handling 5M+ monthly transactions, CloudHub 2.0 migrations, custom plugin ecosystems, and AI agent orchestration.', still: '/stills/hand.jpg' },
    ],
  },
];
