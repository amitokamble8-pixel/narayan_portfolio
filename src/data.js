/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Narayan",
  last: "Sharma",
  fullName: "Narayan Sharma",
  tagline: "Curious about ideas. Motivated by challenges. Inspired to create solutions.",
  location: "", // TODO: not stated in the source document
  email: "", // TODO: not stated in the source document
  phone: "", // TODO: not stated in the source document
  headline: "Curious about ideas. Motivated by challenges. Inspired to create solutions.",
  subheadline:
    "From exploring financial markets to developing business ideas and competing in chess, I enjoy experiences that encourage analytical thinking, creativity, and continuous learning.",
  bio: [
    "From exploring financial markets to developing business ideas and competing in chess, I enjoy experiences that encourage analytical thinking, creativity, and continuous learning.",
    "Hi, I'm Narayan, an IB student with a growing interest in STEM, Finance, and Computer Science. I enjoy understanding how technology, mathematics, and business work together to solve real-world problems. Whether I'm researching financial systems, building new ideas, or playing competitive chess, I enjoy learning through challenges that strengthen my problem-solving and decision-making skills.",
    "As I continue my academic journey, I hope to explore new opportunities that allow me to apply my interests while expanding my perspective.",
    "I'm motivated by curiosity and the opportunity to learn something new. I enjoy asking questions, exploring different ideas, and understanding how thoughtful decisions can make a meaningful difference. Every experience encourages me to think critically, collaborate with others, and continue growing.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    instagram: "",
    twitter: "",
  },
  cv: "/placeholder.pdf", // "↓ Download Resume" button target
  photo: "/placeholder-profile.png", // profile photo
  aboutPhoto: "/placeholder-about.png", // about page photo
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Research & Programmes", to: "/work" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },
  { label: "Achievements", to: "/awards" },
  { label: "Activities & Participations", to: "/volunteering" },
  { label: "Chess Journey", to: "/sports" },
];

/* ---- Profile highlights (hero cards on the home page) ---- */

export const HIGHLIGHTS = [
  {
    icon: "♟️",
    title: "Competitive Chess Player",
    desc: "A state-level and FIDE-rated chess player, with a FIDE Rapid Rating of 1400.",
  },
  {
    icon: "📈",
    title: "Finance & Business Explorer",
    desc: "Contributed to research on fraud detection and market surveillance, and explored entrepreneurship at Oxford.",
  },
  {
    icon: "💻",
    title: "STEM Enthusiast",
    desc: "Growing interest in STEM, Finance, and Computer Science across the IB Curriculum.",
  },
];

/* ---- Experience (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "oxford-scholastica-research",
    role: "Research Publication",
    org: "Oxford Scholastica",
    logo: "",
    location: "",
    dates: "",
    meta: "",
    badge: "Research",
    desc: "Contributed to a research article on Fraud Detection and Market Surveillance on the London Stock Exchange, exploring financial systems and the role of technology in market analysis.",
    bullets: [
      "Financial Markets",
      "Research & Analysis",
      "Market Surveillance",
    ],
    tags: ["Financial Markets", "Research & Analysis", "Market Surveillance"],
    photoPlaceholder: "Publication & Certificate",
    featured: true,
  },
  {
    slug: "immerse-education",
    role: "Summer Programme Participant",
    org: "Immerse Education, Oxford University",
    logo: "",
    location: "Oxford University",
    dates: "Two-week summer programme",
    meta: "Two-week summer programme · Oxford University ·",
    badge: "Summer Program",
    desc: "Participated in a two-week summer programme where I collaborated with peers to develop and present a business idea while learning the fundamentals of entrepreneurship.",
    bullets: [
      "Business Creation",
      "Team Collaboration",
      "Entrepreneurship",
      "Presentation Skills",
    ],
    tags: ["Business Creation", "Team Collaboration", "Entrepreneurship", "Presentation Skills"],
    photoPlaceholder: "Programme Photos & Certificate",
    featured: true,
  },
];

/* ---- Interests (renders on the /projects route) ---- */
/* The source document contains no standalone writing/publication entries
   comparable to the reference format. Kept as an empty array so any
   component importing PROJECTS still renders safely. */

export const PROJECTS = [];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "♟️",
    title: "FIDE Rapid Rating — 1400",
    meta: "Chess",
    detail: "Achieved a FIDE Rapid Rating of 1400, reflecting a commitment to continuous improvement and competitive play.",
    link: "",
    featured: true,
  },
  {
    icon: "🏆",
    title: "State-Level Chess Player",
    meta: "Chess",
    detail: "Competed in state-level tournaments against experienced players while continuing to strengthen understanding of strategy and game planning.",
    link: "",
    featured: true,
  },
  {
    icon: "📈",
    title: "Oxford Scholastica Research Publication",
    meta: "Finance & Research",
    detail: "Contributed to a research article on Fraud Detection and Market Surveillance on the London Stock Exchange.",
    link: "",
    featured: true,
  },
  {
    icon: "🎓",
    title: "Immerse Education — Oxford University",
    meta: "Summer Programme",
    detail: "Selected to participate in a two-week summer programme developing and presenting a business idea.",
    link: "",
    featured: false,
  },
];

/* ---- Interests (renders on the /publications route) ---- */

export const ARTICLES = [
  {
    title: "Financial Markets",
    outlet: "Fraud detection and market surveillance on the London Stock Exchange",
    link: "",
  },
  {
    title: "Business & Entrepreneurship",
    outlet: "Developing and presenting business ideas, understanding entrepreneurship fundamentals",
    link: "",
  },
  {
    title: "Computer Science & STEM",
    outlet: "Exploring how technology, mathematics, and business work together to solve real-world problems",
    link: "",
  },
  {
    title: "Chess Strategy",
    outlet: "State-level and FIDE-rated competitive chess, strategic thinking and decision-making",
    link: "",
  },
];

/* ---- Activities & leadership ---- */

export const VOLUNTEER = {
  intro:
    "I enjoy participating in activities that encourage strategic thinking, collaboration, and continuous learning. These experiences have helped me develop confidence, resilience, and a willingness to take on new challenges.",
  stats: [
    { value: "1400", label: "FIDE Rapid Rating" },
    { value: "State", label: "Level Chess Player" },
  ],
  orgs: [
    {
      name: "Chess",
      role: "State-Level & FIDE-Rated Player",
      desc: "A state-level and FIDE-rated chess player, competing in tournaments that have strengthened my strategic thinking, patience, and decision-making.",
    },
    {
      name: "Academic Programmes",
      role: "Participant",
      desc: "Participated in programmes focused on business, finance, and entrepreneurship, expanding my understanding of these fields through collaborative learning.",
    },
  ],
  skills: ["Strategic Thinking", "Discipline", "Adaptability", "Collaboration", "Critical Thinking"],
};

/* ---- Chess Journey (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "♟️",
    name: "State-Level Player",
    desc: "Competed in state-level tournaments against experienced players while continuing to strengthen my understanding of strategy and game planning.",
  },
  {
    icon: "🏅",
    name: "FIDE Rated",
    desc: "Achieved a FIDE Rapid Rating of 1400, reflecting my commitment to continuous improvement and competitive play.",
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Skills Developed",
    items: ["Analytical Thinking", "Problem Solving", "Collaboration", "Business Fundamentals"],
  },
  {
    group: "Skills Strengthened",
    items: ["Strategic Thinking", "Discipline", "Adaptability", "Collaboration", "Critical Thinking"],
  },
  {
    group: "Lessons from Chess",
    items: ["Strategic Thinking", "Focus", "Problem Solving", "Resilience", "Sportsmanship"],
  },
  {
    group: "Languages",
    items: ["English", "French"],
  },
];

/* ---- Education ---- */

export const EDUCATION = [
  {
    school: "", // TODO: school name not stated in the source document
    location: "",
    level: "IB Curriculum",
    dates: "",
    gpa: "",
    coursework: [
      "Mathematics",
      "Science",
      "English",
      "French",
      "Music",
      "Design",
      "Physical & Health Education",
      "Integrated Humanities",
    ],
  },
];

/* ---- Test scores (none listed in the source document) ---- */

export const TEST_SCORES = [];

/* ---- Looking ahead ---- */

export const LOOKING_AHEAD =
  "I look forward to participating in more competitions, research opportunities, and collaborative projects that help me continue learning and developing new skills.";

/* ---- Photo / gallery placeholders from the source document ---- */

export const GALLERIES = [
  { key: "publication", label: "Publication & Certificate Gallery", images: [] },
  { key: "programme", label: "Programme Photos & Certificate Gallery", images: [] },
  { key: "tournament", label: "Tournament Photos", images: [], note: "A visual gallery of chess tournament photos." },
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Research & Programmes", to: "/work" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Activities & Participations", to: "/volunteering" },
  { label: "Chess Journey", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
