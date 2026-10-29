// All the words on the site live here. Edit this file, not the components.
// Images live in /public/images. File names match your folder (A01.png, B01.jpg ...).
// If a file is missing, that spot shows a labelled placeholder instead of breaking.
// Lines marked TODO are where only you know the details; edit or delete them.

export type Category = 'product' | 'code' | 'spatial';

export const categories: { id: Category; label: string; blurb: string }[] = [
  { id: 'product', label: 'Product & UX', blurb: 'Interfaces and objects, designed from how people actually behave.' },
  { id: 'code', label: 'AI & Code', blurb: 'Things I designed and then built myself.' },
  { id: 'spatial', label: 'Spatial', blurb: 'Where I started: interiors and light.' },
];

// focus: which part of the image stays visible when it is cropped into a box.
//   'center' (default), 'top', 'bottom', 'left', 'right', or 'x% y%' e.g. '20% 10%'.
// fit: 'cover' (default) fills the box and crops; 'contain' shows the whole image with margins.
export type Shot = { src?: string; label: string; caption?: string; wide?: boolean; focus?: string; fit?: 'cover' | 'contain' };
export type Section = { heading: string; body: string[] };

export type CaseStudy = {
  slug: string;
  category: Category;
  title: string;
  oneLiner: string;
  year: string;
  role: string;
  team: string;
  tools: string[];
  links: { label: string; href: string }[];
  facts: { value: string; label: string }[];
  cover: Shot; // 1600 x 1000, used on the work list and the case page
  square?: Shot; // 1000 x 1000, used in the homepage mosaic
  sections: Section[];
  gallery: Shot[];
};

export const profile = {
  name: 'Jiajun Xiao',
  role: 'Designer who builds',
  roleLong: 'UX and frontend · React, TypeScript, AI products',
  location: 'Dublin, Ireland',
  status: 'Stamp 1G · Full right to work in Ireland · No sponsorship needed',
  email: 'jiajunxiao.work@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jiajun-work',
  github: 'https://github.com/jiajunxiao-work',
  behance: 'https://www.behance.net/jiajunxiao1',
  cv: '/Jiajun_Xiao_CV.pdf',
  intro: "I trained as a designer, then taught myself to code so I could build what I was drawing. I work across UX, interface design and React front ends, and lately on AI products where the hard part is making the answer something a person can act on.",
};

export const cases: CaseStudy[] = [
  {
    slug: 'godirect',
    category: 'product',
    title: 'GoDirect',
    oneLiner: 'A booking layer for Google Maps, so you stop queuing at the bank and waiting outside restaurants.',
    year: 'TODO year',
    role: 'UX research, interaction and UI design',
    team: 'TODO solo or team',
    tools: ['Figma', 'User research', 'Prototyping'],
    links: [{ label: 'Full case on Behance', href: 'https://www.behance.net/gallery/257139919/GoDirect-Booking-Concept-for-Google-Maps' }],
    facts: [],
    cover: { src: '/images/C1600.png', label: 'GoDirect cover' },
    square: { src: '/images/C1000.png', label: 'GoDirect' },
    sections: [
      {
        heading: 'The problem',
        body: [
          "People already open Google Maps to find a bank branch or a restaurant. Then they get there and queue. The information about the place is one tap away, but the wait isn't something you can do anything about.",
        ],
      },
      {
        heading: 'The idea',
        body: [
          "Instead of a separate booking app, GoDirect lives inside Maps, where the decision is already being made. Find the place, book a slot, turn up on time.",
          'TODO: one or two lines on a key design decision, e.g. why a plugin rather than a new app, or how you handled places that do not take bookings.',
        ],
      },
    ],
    gallery: [
      { src: '/images/C1.jpg', label: 'C1', wide: true },
      { src: '/images/C2.jpg', label: 'C2' },
      { src: '/images/C3.jpg', label: 'C3' },
      { src: '/images/C4.jpg', label: 'C4', wide: true },
    ],
  },
  {
    slug: 'blink',
    category: 'code',
    title: 'Blink',
    oneLiner: 'Pick the best photo from a burst. Designed, built and deployed alone in 24 hours.',
    year: 'Mar 2026',
    role: 'Design, build and deploy',
    team: 'Solo · Give(a)Go Agent Hackathon, Dublin',
    tools: ['Next.js', 'TypeScript', 'Vercel AI SDK', 'Vision model', 'Vercel'],
    links: [{ label: 'Try the live demo', href: 'https://v0-blink123.vercel.app' }],
    facts: [
      { value: '24h', label: 'idea to deployed' },
      { value: 'Final', label: 'out of 65 teams' },
      { value: '1', label: 'person' },
    ],
    cover: { src: '/images/diagram-blink.svg', label: 'How Blink works' },
    sections: [
      {
        heading: 'The idea',
        body: [
          "Everyone has a camera roll full of near-identical shots, and choosing one is weirdly hard. Blink's tagline: your first reaction is the honest one.",
        ],
      },
      {
        heading: 'How it works',
        body: [
          'First you teach the agent: upload one to three photos of yourself that you like, so it learns your taste. Or skip, and let it judge cold.',
          "Then upload the burst you can't decide between, five to thirty photos. A vision model compares them against what it learned and picks one.",
          "I also added a 'try with sample photos' path, because judges at a hackathon won't have their own photos ready.",
        ],
      },
      {
        heading: 'Working alone',
        body: [
          'Most teams had three or four people. Doing design, code and deployment myself meant being strict about scope: one flow, two steps, nothing extra.',
        ],
      },
    ],
    gallery: [],
  },
  {
    slug: 'equine-health',
    category: 'code',
    title: 'Equine Health Guidance',
    oneLiner: 'An LLM agent that answers one question for horse owners: do I call the vet?',
    year: 'Jun – Aug 2026',
    role: 'Research, product decisions, front end, agent logic',
    team: 'Solo, built on my MSc capstone',
    tools: ['React', 'TypeScript', 'LLM API', 'Agent skills'],
    links: [],
    facts: [
      { value: '2', label: 'possible answers, on purpose' },
      { value: 'Vets', label: 'interviewed for the knowledge base' },
    ],
    cover: { src: '/images/diagram-equine-health.svg', label: 'From vet knowledge to two answers' },
    sections: [
      {
        heading: 'The problem',
        body: [
          "Amateur horse owners can usually see that something is off. What they can't tell is whether it's serious enough to call a vet. A detailed analysis doesn't help in that moment. They need a decision.",
        ],
      },
      {
        heading: 'The decision that shaped it',
        body: [
          'I limited the model to two outputs: call a vet, or normal and no action needed.',
          "That's really a guardrail. A free-text answer from an LLM can sound confident and still be wrong. Two fixed outcomes are easy to check, easy to test, and easy for a worried owner to act on.",
        ],
      },
      {
        heading: 'Where the knowledge came from',
        body: [
          "I'm not a vet, so it had to come from people who are. I turned published clinical guidelines, research papers and my interviews with practising vets into agent skills the model works through before it answers.",
          "I've ridden and cared for horses for most of my life, which is why I picked this problem.",
        ],
      },
      {
        heading: "What I'd do next",
        body: ['Build a proper set of test scenarios and record how often the agent makes the right call, so the guardrail is measured rather than assumed.'],
      },
    ],
    gallery: [{ label: 'TODO: screenshot of the input or result screen' }],
  },
  {
    slug: 'embrace',
    category: 'product',
    title: 'Embrace',
    oneLiner: 'A sleep pillow that imitates being held by your mother.',
    year: 'TODO year',
    role: 'Product and interaction design',
    team: 'TODO solo or team',
    tools: ['Product design', 'Interaction design', 'TODO tools'],
    links: [{ label: 'Full case on Behance', href: 'https://www.behance.net/gallery/257116101/Embrace-Biomimetic-Sleep-Airbag' }],
    facts: [],
    cover: { src: '/images/B1600.png', label: 'Embrace cover' },
    square: { src: '/images/B1000.png', label: 'Embrace' },
    sections: [
      {
        heading: 'The idea',
        body: [
          "Being held is one of the first ways any of us learned to fall asleep. Embrace takes that feeling, the shape and pressure of a mother's arms, and turns it into a sleep aid.",
          'TODO: who it is for, and what the interaction is (e.g. how it inflates or responds).',
        ],
      },
    ],
    gallery: [
      { src: '/images/B01.jpg', label: 'B01', wide: true },
      { src: '/images/B02.jpg', label: 'B02' },
      { src: '/images/B03.jpg', label: 'B03' },
      { src: '/images/B04.jpg', label: 'B04' },
      { src: '/images/B05.jpg', label: 'B05' },
      { src: '/images/B06.jpg', label: 'B06', wide: true },
    ],
  },
  {
    slug: 'equine-sustainability',
    category: 'code',
    title: 'Equine Sustainability',
    oneLiner: 'The survey said our first idea was wrong, so we changed the product.',
    year: 'May – Aug 2026',
    role: 'Data analysis and front end',
    team: 'Team of 5 · UCD MSc HCI capstone',
    tools: ['JavaScript', 'R', 'SQL', 'Python', 'Figma', 'Git'],
    links: [],
    facts: [
      { value: '90', label: 'owner surveys analysed' },
      { value: 'p = 0.88', label: 'awareness did not predict behaviour' },
      { value: '63%', label: 'said the barrier was unclear guidance' },
    ],
    cover: { src: '/images/diagram-sustainability.svg', label: 'Awareness vs. clear guidance' },
    sections: [
      {
        heading: 'Starting assumption',
        body: ['If horse owners knew more about sustainability, they would act more sustainably. So the obvious product was an awareness app.'],
      },
      {
        heading: 'What the data said',
        body: ['I analysed 90 owner surveys in R and SQL. Awareness did not predict sustainable behaviour (p = 0.88). And 63% said their biggest barrier was a lack of clear guidance, not a lack of information.'],
      },
      {
        heading: 'What changed',
        body: ['The product moved from raising awareness to telling people exactly what to do. I built the interface and front end around that: short, specific actions instead of explanations.'],
      },
    ],
    gallery: [{ label: 'TODO: app screenshot' }],
  },
  {
    slug: 'take-over-the-earth',
    category: 'product',
    title: 'Take Over the Earth!',
    oneLiner: 'A mug design.',
    year: 'TODO year',
    role: 'Product design',
    team: 'TODO',
    tools: ['Product design', 'TODO tools'],
    links: [{ label: 'Full case on Behance', href: 'https://www.behance.net/gallery/257563313/Product-DesignTake-Over-the-Earth-Mug-Design' }],
    facts: [],
    cover: { src: '/images/A1600.png', label: 'Mug cover' },
    sections: [
      {
        heading: 'The idea',
        body: ['TODO: two or three sentences. What is the idea behind the name, and what makes the form or the way you use it different?'],
      },
    ],
    gallery: [{ src: '/images/A01.png', label: 'A01', wide: true },
      { src: '/images/A02.png', label: 'A02', wide: true }],
  },
  {
    slug: 'vegan-restaurant',
    category: 'spatial',
    title: 'Sustainable Vegan Restaurant',
    oneLiner: 'An interior built around sustainability. Awarded at the Milan Design Week exhibition of Chinese university design work.',
    year: 'TODO year',
    role: 'Interior design',
    team: 'TODO',
    tools: ['TODO e.g. SketchUp, rendering'],
    links: [],
    facts: [{ value: '3rd prize', label: 'Milan Design Week exhibition of Chinese university design work' }],
    cover: { src: '/images/D1600.png', label: 'Restaurant cover' },
    square: { src: '/images/D1000.png', label: 'Vegan restaurant' },
    sections: [
      {
        heading: 'The idea',
        body: ['TODO: one or two sentences on how sustainability shows up in the space (materials, layout, light).'],
      },
    ],
    gallery: [
      { src: '/images/D1.png', label: 'D1', wide: true },
      { src: '/images/D2.png', label: 'D2' },
      { src: '/images/D3.png', label: 'D3' },
    ],
  },
  {
    slug: 'cafe-lighting',
    category: 'spatial',
    title: 'Café Lighting, Taichung',
    oneLiner: 'Relighting a real café in Taichung, simulated in DIALux before anything changed.',
    year: 'TODO year',
    role: 'Lighting design',
    team: 'TODO',
    tools: ['DIALux'],
    links: [{ label: 'Full case on Behance', href: 'https://www.behance.net/gallery/257270843/Warm-Grain-Caf-Interior-Renovation-Lightening' }],
    facts: [],
    cover: { src: '/images/E1600.png', label: 'Café lighting cover' },
    square: { src: '/images/E1000.png', label: 'Café lighting' },
    sections: [
      {
        heading: 'The brief',
        body: [
          'A café in Taichung needed its lighting reworked. I modelled the space in DIALux to test the changes before they were made.',
          'TODO: what was wrong with the old lighting, and what changed.',
        ],
      },
    ],
    gallery: [{ src: '/images/E1.png', label: 'E1', wide: true },
      { src: '/images/E2.png', label: 'E2', wide: true }],
  },
];

export const smallProjects = [
  {
    title: 'Job Tracker Agent',
    note: 'Open source',
    desc: 'Paste a job description and it pulls out the details, scores the fit against my profile, checks whether the role works with Stamp 1G, and drafts a cover letter opener. Built for my own job search.',
    stack: ['Python', 'Gemini API', 'CLI'],
    href: 'https://github.com/jiajunxiao-work/job-tracker-agent',
  },
];

export const experience = [
  {
    when: 'Oct 2022 – Sep 2023',
    role: 'Front-End Development Intern',
    org: 'Shanghai Museum of Modern Art (MAM)',
    line: 'Built multi-screen digital exhibition interfaces in HTML, CSS and JavaScript. They ran every day for three months, for around 1,000 visitors a day. Ran acceptance testing and pre-launch QA for two exhibitions, with no visual defects reported after launch.',
  },
  {
    when: 'Nov 2023 – May 2025',
    role: 'Project Lead, AI Interior Design App',
    org: 'Shanghai student innovation programme · team of 5',
    line: 'Take a photo of a room, get furniture that fits, buy it. Ran three rounds of testing with 800 people and re-ranked the roadmap after each. Brought in two furniture companies for real 3D models and prices. Selected from 68 teams for city funding.',
  },
  {
    when: 'Oct – Nov 2024',
    role: 'Bilingual Technical Consultant (part-time)',
    org: 'China Telecom Cloud · China International Import Expo',
    line: 'Handled 60+ enquiries from visitors in 10+ countries, explaining cloud and AI services to non-technical decision makers in English and Mandarin, and ran live demos with the engineers.',
  },
  {
    when: 'Jun – Sep 2022',
    role: 'UX Intern',
    org: 'Shanghai Himalayas Museum',
    line: 'Interviewed and surveyed 200 visitors, mapped the visit journey, and produced two rounds of prototypes for the engineering and fabrication teams.',
  },
];

export const education = [
  { what: 'MSc Human Computer Interaction', where: 'University College Dublin · 2:1' },
  { what: 'BA Environmental Design', where: 'Shanghai Jian Qiao University · ranked 1st of 143' },
  { what: 'Exchange semester', where: 'Chaoyang University of Technology, Taiwan · where I started coding' },
];

export const skills = [
  { group: 'Design', items: ['Figma', 'Prototyping', 'User research', 'Usability testing', 'Journey mapping'] },
  { group: 'Build', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Python', 'Git'] },
  { group: 'AI', items: ['LLM APIs', 'Agent skills', 'Vision models', 'Vercel AI SDK'] },
  { group: 'Data & spatial', items: ['R', 'SQL', 'DIALux', 'Rendering'] },
];

export const about = [
  "I came to code through design. My first degree was environmental design, where I finished first of 143. On exchange in Taiwan I took product and interaction design classes and started teaching myself to program, because I wanted to build the things I was drawing.",
  "That's still how I work: start from the person using the thing, and go all the way to something that's live. I like presenting the result too.",
  "Outside work I ride horses, I founded a student community of 30+ designers and engineers called Starting Point Studio, and I speak English, Mandarin and some Korean.",
];

export const awards = [
  'Finalist, Give(a)Go Agent Hackathon Dublin 2026 (65 teams)',
  'Third prize, Milan Design Week exhibition of Chinese university design work',
  'Third prize, 9th China Decoration Cup national environmental design competition',
  'IBM Enterprise Design Thinking Practitioner',
];
