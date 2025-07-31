export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  featuredImage: string;
  isEditorsPick: boolean;
  views?: number;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  category: string;
  duration: string;
  views: number;
  publishedAt: string;
  thumbnail: string;
}

export interface Podcast {
  id: string;
  title: string;
  description: string;
  spotifyId: string;
  season: number;
  episode: number;
  duration: string;
  publishedAt: string;
  thumbnail: string;
}

export interface TeamMember {
  id: string;
  name: string;
  username: string;
  role: string;
  bio: string;
  avatar: string;
  expertise: string[];
  social: {
    twitter?: string;
    linkedin?: string;
    email: string;
  };
}

export const categories = [
  'STEM', 
  'Social Studies', 
  'Politics', 
  'Philosophy', 
  'Art & Literature', 
  'Women Rights',
  'Science & Technology'
];

export const articles: Article[] = [];

export const videos: Video[] = [];

export const podcasts: Podcast[] = [];

export const teamMembers: TeamMember[] = [];

export const featuredContent = {
  hero: {
    title: 'The Middle East\'s largest student-led academic journal',
    subtitle: 'Delivering trustworthy journalism through articles, videos, and podcasts with a focus on user experience and accessibility.',
    image: '/images/hero-bg.jpg'
  },
  editorsPicks: [],
  latestArticles: [],
  featuredVideo: null,
  featuredPodcast: null
};