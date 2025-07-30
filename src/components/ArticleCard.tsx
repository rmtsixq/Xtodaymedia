import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured = false, className = '' }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (featured) {
    return (
      <Link href={`/articles/${article.slug}`} className={`block group ${className}`}>
        <article className="relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="aspect-[16/9] relative">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {article.isEditorsPick && (
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white px-3 py-1 text-xs font-semibold rounded-full">
                  Editor's Pick
                </span>
              </div>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="mb-2">
              <span className="text-primary font-medium text-sm">{article.category}</span>
            </div>
            <h2 className="text-2xl font-heading font-bold mb-2 line-clamp-2">
              {article.title}
            </h2>
            <p className="text-gray-200 text-sm line-clamp-2 mb-3">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-3">
                <span>By {article.author.name}</span>
                <span>•</span>
                <span>{formatDate(article.publishedAt)}</span>
              </div>
              <span>{article.readTime} min read</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/articles/${article.slug}`} className={`block group ${className}`}>
      <article className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="aspect-[16/9] relative">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {article.isEditorsPick && (
            <div className="absolute top-3 left-3">
              <span className="bg-primary text-white px-2 py-1 text-xs font-semibold rounded">
                Editor's Pick
              </span>
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="mb-2">
            <span className="text-primary font-medium text-sm">{article.category}</span>
          </div>
          <h3 className="text-lg font-heading font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-text-secondary text-sm line-clamp-2 mb-3">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-text-muted">
            <div className="flex items-center space-x-2">
              <span>By {article.author.name}</span>
              <span>•</span>
              <span>{formatDate(article.publishedAt)}</span>
            </div>
            <span>{article.readTime} min read</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;