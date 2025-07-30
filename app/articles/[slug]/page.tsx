import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Clock, Eye, User, Tag, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/lib/data';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find(a => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out this article: ${article.title}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/articles"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Articles</span>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          {/* Category and Editor's Pick */}
          <div className="flex items-center space-x-3 mb-4">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
            {article.isEditorsPick && (
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Editor's Pick
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-b border-gray-200 py-6">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              {/* Author */}
              <Link
                href={`/users/${article.author.username}`}
                className="flex items-center space-x-3 group"
              >
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {article.author.name}
                  </div>
                  <div className="text-sm text-gray-500">Author</div>
                </div>
              </Link>

              {/* Date and Reading Time */}
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(article.publishedAt)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} min read</span>
                </div>
                {article.views && (
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{article.views.toLocaleString()} views</span>
                  </div>
                )}
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">Share:</span>
              <div className="flex items-center space-x-2">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-blue-700 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div 
            className="text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: article.content.replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>').replace(/## /g, '</p><h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">').replace(/\n/g, '<br/>') 
            }}
          />
        </div>

        {/* Tags */}
        <div className="border-t border-gray-200 pt-8 mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Link
                key={tag}
                href={`/articles?search=${encodeURIComponent(tag)}`}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors duration-200"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="border-t border-gray-200 pt-8 mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
          <Link
            href={`/users/${article.author.username}`}
            className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
          >
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={64}
              height={64}
              className="rounded-full flex-shrink-0"
            />
            <div>
              <h4 className="text-xl font-serif font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2">
                {article.author.name}
              </h4>
              <p className="text-gray-600">
                Learn more about {article.author.name} and explore their other articles.
              </p>
            </div>
          </Link>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.id} article={relatedArticle} />
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}

// Generate static params for all articles
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate metadata for each article
export async function generateMetadata({ params }: ArticlePageProps) {
  const article = articles.find(a => a.slug === params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | Hevsel Times`,
    description: article.excerpt,
    keywords: article.tags.join(', '),
    authors: [{ name: article.author.name }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    },
  };
}