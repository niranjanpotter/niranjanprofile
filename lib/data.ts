export const PROFILE = {
  name: 'Niranjan Potter',
  realName: 'Niranjan Kumar Potter',
  first: 'NIRANJAN',
  last: 'POTTER',
  title: 'MULESOFT',
  subtitle: 'INTEGRATION',
  role: 'Senior MuleSoft Developer & Technical Lead',
  summary:
    'Senior MuleSoft Developer and Technical Lead with enterprise integration experience since 2021. Specializing in API-led connectivity, CloudHub 2.0 modernization, DataWeave optimization, and robust multi-cloud architecture.',
  email: 'niranjanpotter1997@gmail.com',
  github: 'https://github.com/niranjanpotter',
  linkedin: 'https://www.linkedin.com/in/niranjan-potter-551b49171',
  resume: '/resume.pdf',
};

export type ProfileId = 'recruiter' | 'developer' | 'hackathon' | 'browsing';
export const VIEWERS: { id: ProfileId; name: string; color: string; icon: 'eye' | 'kunai' | 'leaf' | 'shuriken'; line: string }[] = [
  { id: 'recruiter', name: 'Recruiter', color: '#e50914', icon: 'eye', line: 'Looking for a Senior MuleSoft Lead? You found the right architect.' },
  { id: 'developer', name: 'Developer', color: '#2f6fed', icon: 'kunai', line: 'Fellow integration engineer — robust APIs and clean DataWeave await.' },
  { id: 'hackathon', name: 'Architect Lead', color: '#f5b301', icon: 'shuriken', line: 'Scaling enterprise microservices and cloud migrations with zero downtime.' },
  { id: 'browsing', name: 'Just Browsing', color: '#1db954', icon: 'leaf', line: 'Grab some popcorn. The integration story unfolds in a few scrolls.' },
];

export const SUBTITLES: { from: number; to: number; text: string; sfx?: boolean }[] = [
  { from: 0.05, to: 0.22, text: 'Everyone keeps asking how enterprise systems connect.' },
  { from: 0.22, to: 0.38, text: 'Fine. API-led connectivity, unmasked.' },
  { from: 0.38, to: 0.55, text: 'No more data silos. No more fragmented workflows.' },
  { from: 0.55, to: 0.72, text: 'These days… I orchestrate the cloud.' },
  { from: 0.72, to: 0.905, text: 'Senior MuleSoft Tech Lead. Shall we begin?' },
];

export const STATS = [
  { value: 50, suffix: '+', label: 'API Endpoints' },
  { value: 15, suffix: '+', label: 'Microservices' },
  { value: 60, suffix: '%', label: 'Latency Reduced' },
  { value: 4, suffix: 'x', label: 'Star Performer' },
];

export const TOP10 = [
  { name: 'Mule 4', genre: 'Integration', hue: 0 },
  { name: 'CloudHub 2.0', genre: 'Cloud', hue: 205 },
  { name: 'DataWeave 2.0', genre: 'Transform', hue: 120 },
  { name: 'Java 17', genre: 'Language', hue: 25 },
  { name: 'API-led Connectivity', genre: 'Architecture', hue: 215 },
  { name: 'Anypoint Platform', genre: 'Platform', hue: 140 },
  { name: 'AWS S3 & DynamoDB', genre: 'Cloud', hue: 48 },
  { name: 'Azure DevOps', genre: 'DevOps', hue: 200 },
  { name: 'GraphQL & REST', genre: 'API', hue: 30 },
  { name: 'MUnit & SonarQube', genre: 'Testing', hue: 280 },
];

export const SKILL_GENRES = [
  { name: 'Integration', items: ['Mule 4', 'Anypoint Platform', 'CloudHub 2.0', 'Anypoint MQ', 'API Manager', 'APIkit'] },
  { name: 'API & Data', items: ['REST', 'SOAP', 'RAML', 'DataWeave 2.0', 'JSON', 'XML', 'GraphQL'] },
  { name: 'Languages & DB', items: ['Java 17', 'SQL', 'PostgreSQL', 'Oracle', 'IBM DB2', 'SQL Server'] },
  { name: 'AWS & Cloud', items: ['AWS S3', 'DynamoDB', 'AWS Secrets Manager', 'CloudHub 2.0'] },
  { name: 'DevOps & Testing', items: ['Azure DevOps', 'Maven', 'Git', 'Jenkins', 'MUnit', 'SonarQube'] },
  { name: 'Operations', items: ['Splunk', 'Jira', 'Confluence', 'Anypoint Studio', 'Anypoint Code Builder'] },
];

export const EPISODES = [
  {
    id: 'api-framework',
    ep: 1,
    name: 'Enterprise API Framework & Orchestration',
    tagline: 'Standardizing microservices across the enterprise.',
    still: '/stills/masked.jpg',
    tint: '#e50914',
    rank: 'S-Rank',
    match: 99,
    url: 'https://github.com/niranjanpotter',
    desc: 'Architected and implemented an API-led integration framework using Mule 4 and DataWeave 2.0, connecting legacy systems with downstream applications and reducing latency by 35%.',
    genres: ['Enterprise', 'API-led', 'Microservices'],
    tech: ['Mule 4', 'DataWeave 2.0', 'Anypoint MQ', 'GraphQL', 'PostgreSQL', 'Oracle', 'IBM DB2'],
  },
  {
    id: 'cloud-modernization',
    ep: 2,
    name: 'CloudHub 2.0 & Java 17 Modernization',
    tagline: 'Zero downtime migration to modern runtimes.',
    still: '/stills/face.jpg',
    tint: '#2f6fed',
    rank: 'S-Rank',
    match: 97,
    url: 'https://github.com/niranjanpotter',
    desc: 'Led the migration of legacy APIs to CloudHub 2.0, upgraded applications from Java 8 to Java 17, integrated AWS Secrets Manager, and established CI/CD pipelines with Maven and Azure DevOps.',
    genres: ['Cloud Modernization', 'Java 17', 'DevOps'],
    tech: ['CloudHub 2.0', 'Java 17', 'AWS Secrets Manager', 'Azure Pipelines', 'Maven', 'SonarQube'],
  },
  {
    id: 'crm-erp-integration',
    ep: 3,
    name: 'CRM-to-ERP & Employee Data Sync',
    tagline: 'Synchronizing enterprise operations in real time.',
    still: '/stills/kunai.jpg',
    tint: '#f5b301',
    rank: 'S-Rank',
    match: 98,
    url: 'https://github.com/niranjanpotter',
    desc: 'Developed robust scheduled and real-time flows synchronizing Workday employee data with Salesforce, Active Directory, and Concur, plus CRM-to-ERP order integration with post-go-live hypercare.',
    genres: ['EAI', 'Salesforce', 'Workday'],
    tech: ['Mule 4', 'Salesforce', 'Workday', 'Active Directory', 'REST/SOAP', 'Anypoint Platform'],
  },
];

export const AWARDS = [
  { laurel: 'RECOGNITION', title: 'Star Performer', sub: 'Awarded Twice for Excellence' },
  { laurel: 'ACHIEVEMENT', title: 'Rookie of the Quarter', sub: 'Outstanding Delivery Milestone' },
  { laurel: 'EXCELLENCE', title: 'Ace Award', sub: 'Received Multiple Times' },
  { laurel: 'RANGER', title: 'Double Star Ranger', sub: 'Salesforce Trailhead' },
];

export const CERTS = [
  { by: 'Salesforce & MuleSoft', title: 'Certified MuleSoft Platform Architect I', hue: 0 },
  { by: 'Salesforce', title: 'Certified Platform Developer I', hue: 205 },
  { by: 'Salesforce & MuleSoft', title: 'Certified MuleSoft Integration Foundations', hue: 140 },
  { by: 'Salesforce', title: 'Certified Data Cloud Consultant', hue: 215 },
  { by: 'Salesforce', title: 'Certified AI Associate', hue: 45 },
  { by: 'Workato', title: 'Technical Developer & Architect (Agentic)', hue: 270 },
];

export const SEASONS = [
  {
    label: 'Season 1',
    name: 'The Foundation Arc',
    years: '2015 – 2019',
    episodes: [{ title: 'Bachelor of Technology (B.Tech)', where: 'Engineering Degree', note: 'Graduated with strong foundations in computer science and engineering.', still: '/stills/pull.jpg' }],
  },
  {
    label: 'Season 2',
    name: 'The Integration Arc',
    years: '2021 – 2025',
    episodes: [{ title: 'Digital Engineering Senior Engineer', where: 'NTT DATA / Apisero', note: 'Designed Mule 4 integrations, CloudHub 2.0 migrations, Java 17 upgrades, and enterprise API lifecycles.', still: '/stills/vest.jpg' }],
  },
  {
    label: 'Season 3',
    name: 'The Leadership Arc',
    years: '2025 – Present',
    episodes: [
      { title: 'Senior MuleSoft Engineer & Technical Lead', where: 'Tech Mahindra', note: 'Leading enterprise integration for energy & utilities, architectural reviews, CI/CD pipelines, and developer mentoring.', still: '/stills/hand.jpg' },
    ],
  },
];
