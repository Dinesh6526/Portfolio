export const profile = {
  name: "Dinesh Govindarasu",
  title: "Full-Stack Developer",
  intro:
    "CSE student building clean, reliable web apps — from responsive interfaces to the APIs and databases behind them.",
  photo: "/profile.png",
  email: "dineshd6526@gmail.com",
  phone: "+91 8122956166",
  location: "Tamil Nadu, India",
  resume: "Resume.pdf",
};

export const socials = {
  linkedin: "https://www.linkedin.com/in/dinesh-g-b00518380",
  github: "https://github.com/Dinesh6526",
  x: "https://x.com/Dinesh6526d",
  instagram: "https://www.instagram.com/invites/contact/?utm_content=hm1dc0p&dlrf=311q38atlsbf",
};

export const about = {
  paragraphs: [
    "I'm a Computer Science and Engineering student who enjoys turning ideas into real-world applications. I focus on building modern web experiences using JavaScript, React.js, Node.js, Express.js, and MySQL.",
    "I learn best by building projects, solving problems, and exploring new technologies. From designing user-friendly interfaces to developing backend functionality, I enjoy understanding how every part of an application works together.",
    "My goal is to grow as a Full-Stack Developer, build meaningful software, and continuously improve my technical and problem-solving skills."
  ],
  goals: [
    "Grow into a full-stack engineer shipping production-grade products",
    "Contribute to real-world teams through internships and open source",
    "Deepen skills in system design, databases and modern frameworks",
  ],
};

export const skills = [
  "Java",
  "Python",
  "JavaScript",
  "React.js",
  "HTML",
  "CSS",
  "Node.js",
  "MySQL",
  // "Git",
  "GitHub",
  // "VS Code",
  "Express.js",
];
export const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "PGP College Engineering and Technology, Namakkal",
    university: "Anna University",
    period: "2024 – 2028",
    details: "CGPA: 8.1/ 10 · Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: " Government Higher Secondary School, Dharmapuri",
    university: "Tamil Nadu State Board",
    period: "2020 – 2024",
    details: "Percentage: 70%",
  },
];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string; // add only when a real deployment exists
};

export const projects: Project[] = [
  {
    name: "Project Management Tool",
    description: "A web app for organising projects and tasks, backed by a Node.js/Express server and MySQL database.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL"],
    github: "https://github.com/Dinesh6526/Project-_Management-Tool.git",
  },
  {
    name: "E-Commerce Website",
    description: "A storefront-style website for browsing and presenting products.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dinesh6526/E-Commerce-.git",
  },
  {
    name: "GitHub Finder",
    description: "Look up GitHub users and view their public profile information.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dinesh6526/GitHub-Finder.git",
  },
  {
    name: "ToDo App",
    description: "A simple task list for adding and managing everyday to-dos.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dinesh6526/ToDoApp",
  },

// {
//   name: "InfraGuard AI",
//   description:"An AI-powered infrastructure risk prediction platform that predicts cost overruns and project delays, generates risk scores, explains risk factors using Explainable AI, and provides early-warning alerts with recommended corrective actions.",
//   tech: ["HTML","CSS","JavaScript","Python","TypeScript","MySQL",],
//   github: "https://github.com/Dinesh6526/infraguard-ai.git",
// },

{
  name: "TravelApp Website",
  description:"A responsive travel website that showcases destinations with attractive visuals and useful travel information, helping users explore and discover new places through an engaging interface.",
  tech: ["HTML", "CSS", "JavaScript","java"],
  github: "https://github.com/Dinesh6526/TravelApp-Website.git",
},

{
  name: "Tech Minds - Wallet & Contract Reputation",
  description:"An intelligent Web3 security platform that analyzes wallet and smart-contract behavior, detects suspicious transactions, assesses risk levels, and provides evidence-based security recommendations for safer blockchain interactions.",
  tech: ["HTML","CSS","JavaScript","React.js","Node.js","Python","Ethereum","Web3.js","MySQL",],
  github: "https://github.com/Dinesh6526/Tech-Minds.git",
},

];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image?: string; 
  file?: string; 
  verify?: string; 
};

export const certificates: Certificate[] = [
  {
    title: "Multi Hackathon Participation - graviTAs'26",
    issuer: "VIT Vellore",
    date: "September 2026",
    image: "/image-1792435833737.jpeg",
    file: "/image-1792435833737.jpeg",
  },
  {
    title: "Basics of Python",
    issuer: "Infosys Springboard",
    date: "July 6, 2025",
    image: "/image-1792435882014.png",
    file: "/image-1792435882014.png",
  },
  {
    title: "Full Stack Development Internship Offer",
    issuer: "CodeAlpha",
    date: "September 2026",
    image: "/image-1792435976500.png",
    file: "/image-1792435976500.png",
  },
  {
    title: "Full Stack Development Internship",
    issuer: "NoviTech R&D Private Limited",
    date: "June 8 - July 8, 2026",
    image: "/image-1792436032311.png",
    file: "/image-1792436032311.png",
  },
  {
    title: "UI/UX Design Internship",
    issuer: "NoviTech R&D Private Limited",
    date: "June 8 - July 8, 2026",
    image: "/image-1792436068757.png",
    file: "/image-1792436068757.png",
  },
  {
    title: "MERN Stack Courses Internship",
    issuer: "NoviTech R&D Private Limited",
    date: "June 8 - September 18, 2026",
    image: "/image-1792436103138.png",
    file: "/image-1792436103138.png",
  },
];
