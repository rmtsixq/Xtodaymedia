export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
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
    name: 'Mehmet Arda Gün',
    username: 'mehmet.arda.gun',
    role: 'Editor-in-Chief & Founder',
    bio: 'Student at Ruzgar Science School and founder of XTimes. A passionate young entrepreneur in academic publishing and student leadership. Driven by the vision of creating the Middle East\'s largest student-led academic journal. Specialized in STEM fields and focused on supporting youth academic development.',
    avatar: '/avatars/mehmet-arda.jpg',
    expertise: ['Academic Publishing', 'Student Leadership', 'Entrepreneurship', 'STEM', 'Project Management'],
    social: {
      twitter: 'https://twitter.com/mehmetardagun',
      linkedin: 'https://linkedin.com/in/mehmetardagun',
      email: 'mehmet.arda@xtimes.org'
    }
  },
  {
    id: '2',
    name: 'Rumet Asan',
    username: 'rumet.asan',
    role: 'Technology Editor & Website Developer',
    bio: 'Student at Ruzgar Science School, specialized in web technologies and digital platform development. Manages XTimes\' technology-focused content and actively participates in website development processes. Strengthens the platform\'s technical infrastructure with deep knowledge in modern web technologies and user experience.',
    avatar: '/avatars/rumet-asan.jpg',
    expertise: ['Web Technologies', 'Website Development', 'Digital Platform', 'User Experience'],
    social: {
      twitter: 'https://twitter.com/rumetasan',
      linkedin: 'https://linkedin.com/in/rumetasan',
      email: 'rumet.asan@xtimes.org'
    }
  },
  {
    id: '3',
    name: 'Buse Altunbağ',
    username: 'buse.altunbag',
    role: 'Content Director & Social Media Manager',
    bio: 'Student at Ruzgar Science School, specialized in content management and social media strategies. Manages XTimes\' social media presence and focuses on improving content quality. Experienced in user engagement and community building.',
    avatar: '/avatars/buse-altunbag.jpg',
    expertise: ['Content Management', 'Social Media', 'Community Management', 'Digital Marketing'],
    social: {
      twitter: 'https://twitter.com/busealtunbag',
      linkedin: 'https://linkedin.com/in/busealtunbag',
      email: 'buse.altunbag@xtimes.org'
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