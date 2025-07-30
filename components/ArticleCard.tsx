import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Eye, User, Tag } from 'lucide-react';
import { Article } from '@/lib/data';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'compact';
  showImage?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  article, 
  variant = 'default',
  showImage = true 
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (variant === 'featured') {
    return (
      <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {showImage && (
          <div className="relative h-64 md:h-80">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>
            {article.isEditorsPick && (
              <div className="absolute top-4 right-4">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Editor's Pick
                </span>
              </div>
            )}
          </div>
        )}
        <div className="p-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary transition-colors">
            <Link href={`/articles/${article.slug}`}>
              {article.title}
            </Link>
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} min read</span>
              </div>
              {article.views && (
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{article.views.toLocaleString()}</span>
                </div>
              )}
            </div>
            <span className="text-sm text-gray-500">
              {formatDate(article.publishedAt)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <Link
              href={`/users/${article.author.username}`}
              className="flex items-center space-x-2 group"
            >
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                {article.author.name}
              </span>
            </Link>
            
            <div className="flex items-center space-x-2">
              {article.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className="flex space-x-4 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200">
        {showImage && (
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover rounded-lg"
              sizes="96px"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">
              {article.category}
            </span>
            {article.isEditorsPick && (
              <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded-full">
                Editor's Pick
              </span>
            )}
          </div>
          <h3 className="font-serif font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-primary transition-colors">
            <Link href={`/articles/${article.slug}`}>
              {article.title}
            </Link>
          </h3>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{article.author.name}</span>
            <div className="flex items-center space-x-2">
              <span>{article.readTime} min</span>
              <span>{formatDate(article.publishedAt)}</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Default variant
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {showImage && (
        <div className="relative h-48">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
              {article.category}
            </span>
          </div>
          {article.isEditorsPick && (
            <div className="absolute top-3 right-3">
              <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Editor's Pick
              </span>
            </div>
          )}
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-primary transition-colors">
          <Link href={`/articles/${article.slug}`}>
            {article.title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{article.readTime} min</span>
            </div>
            {article.views && (
              <div className="flex items-center space-x-1">
                <Eye className="w-3 h-3" />
                <span>{article.views.toLocaleString()}</span>
              </div>
            )}
          </div>
          <span>{formatDate(article.publishedAt)}</span>
        </div>

        <div className="flex items-center justify-between">
          <Link
            href={`/users/${article.author.username}`}
            className="flex items-center space-x-2 group"
          >
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="text-xs font-medium text-gray-700 group-hover:text-primary transition-colors">
              {article.author.name}
            </span>
          </Link>
          
          <div className="flex items-center space-x-1">
            {article.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;