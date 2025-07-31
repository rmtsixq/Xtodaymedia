import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDocs, 
  getDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from './firebase';

// Firebase için güncellenmiş Article interface
export interface FirebaseArticle {
  id?: string;
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
  customCategory?: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  featuredImage: string;
  isEditorsPick: boolean;
  views?: number;
  status: 'draft' | 'published' | 'archived';
  createdBy: string;
  createdAt?: any;
  updatedAt?: any;
}

// Firebase için güncellenmiş Video interface
export interface FirebaseVideo {
  id?: string;
  title: string;
  description: string;
  youtubeUrl: string;
  youtubeId?: string;
  category: string;
  customCategory?: string;
  duration?: string;
  views?: number;
  publishedAt: string;
  thumbnail?: string;
  status: 'draft' | 'published' | 'archived';
  createdBy: string;
  createdAt?: any;
  updatedAt?: any;
}

// YouTube URL'sinden ID çıkarma
export const extractYouTubeId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// Slug oluşturma
export const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// ARTICLES
export const createArticle = async (articleData: Omit<FirebaseArticle, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, 'articles'), {
      ...articleData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

export const getPublishedArticles = async (): Promise<FirebaseArticle[]> => {
  try {
    const q = query(
      collection(db, 'articles'), 
      where('status', '==', 'published'),
      orderBy('publishedAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as FirebaseArticle));
  } catch (error) {
    return [];
  }
};

export const getEditorsPicks = async (): Promise<FirebaseArticle[]> => {
  try {
    const q = query(
      collection(db, 'articles'), 
      where('status', '==', 'published'),
      where('isEditorsPick', '==', true),
      orderBy('publishedAt', 'desc'),
      limit(6)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as FirebaseArticle));
  } catch (error) {
    return [];
  }
};

// VIDEOS
export const createVideo = async (videoData: Omit<FirebaseVideo, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
  try {
    const youtubeId = extractYouTubeId(videoData.youtubeUrl);
    if (!youtubeId) {
      throw new Error('Geçersiz YouTube URL');
    }

    const videoWithMetadata = {
      ...videoData,
      youtubeId,
      thumbnail: `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    const docRef = await addDoc(collection(db, 'videos'), videoWithMetadata);
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

export const getPublishedVideos = async (): Promise<FirebaseVideo[]> => {
  try {
    const q = query(
      collection(db, 'videos'), 
      where('status', '==', 'published'),
      orderBy('publishedAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as FirebaseVideo));
  } catch (error) {
    return [];
  }
};
