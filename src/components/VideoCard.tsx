import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Video } from '@/types';

interface VideoCardProps {
  video: Video;
  className?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, className = '' }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M views`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K views`;
    }
    return `${views} views`;
  };

  return (
    <div className={`group ${className}`}>
      <article className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="aspect-video relative">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div className="absolute bottom-2 right-2">
            <span className="bg-black/80 text-white px-2 py-1 text-xs rounded">
              {video.duration}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-2">
            <span className="text-primary font-medium text-sm">{video.category}</span>
          </div>
          <h3 className="text-lg font-heading font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {video.title}
          </h3>
          <p className="text-text-secondary text-sm line-clamp-2 mb-3">
            {video.description}
          </p>
          <div className="flex items-center space-x-2 text-xs text-text-muted mb-2">
            <span>By {video.author.name}</span>
            <span>•</span>
            <span>{formatDate(video.publishedAt)}</span>
          </div>
          <div className="text-xs text-text-muted">
            {formatViews(video.views)}
          </div>
        </div>
      </article>
    </div>
  );
};

export default VideoCard;