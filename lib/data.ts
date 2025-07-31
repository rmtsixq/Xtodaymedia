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

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    username: 'sarah.johnson',
    role: 'Editor-in-Chief',
    bio: 'Leading our editorial vision with over 10 years of experience in academic publishing and cultural studies.',
    avatar: '/avatars/sarah.jpg',
    expertise: ['Cultural Studies', 'Academic Writing', 'Editorial Leadership'],
    social: {
      twitter: 'https://twitter.com/sarahjohnson',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      email: 'sarah.johnson@xtimes.org'
    }
  },
  {
    id: '2',
    name: 'Prof. Michael Chen',
    username: 'michael.chen',
    role: 'Senior Editor',
    bio: 'Environmental policy expert with a passion for sustainability and interdisciplinary research.',
    avatar: '/avatars/michael.jpg',
    expertise: ['Environmental Policy', 'Sustainability', 'Policy Analysis'],
    social: {
      twitter: 'https://twitter.com/michaelchen',
      linkedin: 'https://linkedin.com/in/michaelchen',
      email: 'michael.chen@xtimes.org'
    }
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    username: 'emily.rodriguez',
    role: 'Technology Editor',
    bio: 'AI ethics researcher and digital innovation specialist focused on responsible technology development.',
    avatar: '/avatars/emily.jpg',
    expertise: ['AI Ethics', 'Digital Innovation', 'Technology Policy'],
    social: {
      twitter: 'https://twitter.com/emilyrodriguez',
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      email: 'emily.rodriguez@xtimes.org'
    }
  }
];

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