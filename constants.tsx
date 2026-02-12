
import { Publication, Project, Update, Writing } from './types';

export const BIO = {
  name: "Mariana Fernandez-Espinosa",
  role: "PhD Student in Computer Science",
  university: "University of Notre Dame",
  focus: "Human-Centered AI & Digital Ethics",
  description: "I am a third-year PhD student at the University of Notre Dame. My research is focused on human-centered AI and digital ethics, specifically investigating how algorithmic transparency affects user trust.",
};

export const PUBLICATIONS: Publication[] = [
  {
    id: '1',
    title: "The Creative Loop: Interactive Refinement of Generative Art",
    authors: ["Fernandez-Espinosa, M.", "Smith, J.", "Doe, L."],
    venue: "CHI 2024",
    year: 2024,
    link: "#",
    abstract: "This paper explores a novel interface for guiding latent space exploration in diffusion models through semantic sketching.",
    tags: ["HCI", "Generative AI"]
  },
  {
    id: '2',
    title: "Latent Whispers: Understanding Prompt Engineering Patterns",
    authors: ["Fernandez-Espinosa, M.", "Chen, X."],
    venue: "NeurIPS 2023",
    year: 2023,
    link: "#",
    abstract: "We categorize and evaluate common prompt structures used in large-scale language model deployments.",
    tags: ["NLP", "Prompt Engineering"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: "PastelGraph",
    description: "A data visualization tool that prioritizes aesthetic accessibility and soft color palettes for scientific communication.",
    imageUrl: "https://picsum.photos/seed/pastel/600/400",
    link: "#",
    tags: ["React", "D3.js", "Design"]
  },
  {
    id: 'p2',
    title: "MindGarden AI",
    description: "A personal knowledge management system that uses LLMs to find unexpected connections between your notes.",
    imageUrl: "https://picsum.photos/seed/garden/600/400",
    link: "#",
    tags: ["Python", "OpenAI", "Vector DB"]
  }
];

export const UPDATES: Update[] = [
  { id: 'u1', date: "Oct 2024", content: "Presented 'The Creative Loop' at CHI 2024! 🌴", type: 'achievement' },
  { id: 'u2', date: "Sep 2024", content: "Started my 3rd year at the University of Notre Dame.", type: 'research' },
  { id: 'u3', date: "Aug 2024", content: "New field notes published: 'The Ethics of Transparency'.", type: 'writing' },
  { id: 'u4', date: "Jul 2024", content: "Exploring the local trails around South Bend. 🚲", type: 'life' }
];

export const WRITINGS: Writing[] = [
  {
    id: 'w1',
    title: "The Silent Architecture of LLMs",
    excerpt: "Exploring the invisible structures that define how models respond to our queries...",
    date: "Oct 12, 2023",
    readTime: "6 min read",
    content: "Full content here..."
  },
  {
    id: 'w2',
    title: "Why Pastels Matter in Data Viz",
    excerpt: "Cognitive load and color theory in the age of information overload...",
    date: "Sep 05, 2023",
    readTime: "4 min read",
    content: "Full content here..."
  }
];

export const INTERESTS = [
  "Analog Photography",
  "Tea Ceremonies",
  "Nordic Noir Literature",
  "Modular Synthesizers",
  "High-altitude Hiking",
  "Sustainable Architecture"
];
