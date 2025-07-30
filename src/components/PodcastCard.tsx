import React from 'react';
import Image from 'next/image';
import { Podcast } from '@/types';

interface PodcastCardProps {
  podcast: Podcast;
  className?: string;
}

const PodcastCard: React.FC<PodcastCardProps> = ({ podcast, className = '' }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={`group ${className}`}>
      <article className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="aspect-square relative">
          <Image
            src={podcast.thumbnail}
            alt={podcast.title}
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
              {podcast.duration}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-primary font-medium text-sm">{podcast.category}</span>
            {podcast.season && podcast.episode && (
              <span className="text-text-muted text-xs">
                S{podcast.season}E{podcast.episode}
              </span>
            )}
          </div>
          <h3 className="text-lg font-heading font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {podcast.title}
          </h3>
          <p className="text-text-secondary text-sm line-clamp-3 mb-3">
            {podcast.description}
          </p>
          <div className="flex items-center space-x-2 text-xs text-text-muted">
            <span>Hosted by {podcast.host.name}</span>
            <span>•</span>
            <span>{formatDate(podcast.publishedAt)}</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PodcastCard;