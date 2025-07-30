export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    username: string;
    avatar?: string;
    bio?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  featuredImage: string;
  readTime: number;
  isEditorsPick?: boolean;
  isFeatured?: boolean;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  thumbnail: string;
  author: {
    name: string;
    username: string;
    avatar?: string;
  };
  publishedAt: string;
  category: string;
  duration: string;
  views: number;
}

export interface Podcast {
  id: string;
  title: string;
  description: string;
  spotifyEpisodeId: string;
  thumbnail: string;
  host: {
    name: string;
    username: string;
    avatar?: string;
  };
  publishedAt: string;
  category: string;
  duration: string;
  season?: number;
  episode?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  email?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface User {
  username: string;
  name: string;
  bio: string;
  avatar: string;
  joinedAt: string;
  articles: Article[];
  videos: Video[];
  podcasts: Podcast[];
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}