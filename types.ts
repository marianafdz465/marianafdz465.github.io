
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  link?: string;
  abstract: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
}

export interface Update {
  id: string;
  date: string;
  content: string;
  type: 'achievement' | 'writing' | 'life' | 'research';
}

export interface Writing {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
}
