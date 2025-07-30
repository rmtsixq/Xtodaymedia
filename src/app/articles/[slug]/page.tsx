import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArticleCard from '@/components/ArticleCard';
import { mockArticles } from '@/data/mockData';
import { notFound } from 'next/navigation';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = mockArticles.find(a => a.slug === params.slug);
  
  if (!article) {
    notFound();
  }

  const relatedArticles = mockArticles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  const moreFromCategory = mockArticles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(3, 6);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-text-muted">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/articles" className="hover:text-primary transition-colors">Articles</Link></li>
            <li>/</li>
            <li className="text-primary">{article.category}</li>
          </ol>
        </nav>

        {/* Article Meta */}
        <div className="mb-6">
          <span className="inline-block bg-primary text-white px-3 py-1 text-sm font-medium rounded-full mb-4">
            {article.category}
          </span>
          {article.isEditorsPick && (
            <span className="inline-block bg-yellow-500 text-white px-3 py-1 text-sm font-medium rounded-full mb-4 ml-2">
              Editor's Pick
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-text-secondary mb-8 leading-relaxed">
          {article.excerpt}
        </p>

        {/* Author and Date */}
        <div className="flex items-center justify-between border-y border-border-light py-6 mb-8">
          <div className="flex items-center space-x-4">
            <Image
              src={article.author.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face'}
              alt={article.author.name}
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h3 className="font-medium text-text-primary">
                <Link href={`/users/${article.author.username}`} className="hover:text-primary transition-colors">
                  {article.author.name}
                </Link>
              </h3>
              <p className="text-sm text-text-secondary">{article.author.bio}</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-text-muted">
                <span>Published {formatDate(article.publishedAt)}</span>
                <span>•</span>
                <span>{article.readTime} min read</span>
              </div>
            </div>
          </div>
          
          {/* Share Buttons */}
          <div className="flex items-center space-x-3">
            <span className="text-sm text-text-secondary">Share:</span>
            <button className="p-2 rounded-full bg-bg-subtle hover:bg-primary/10 transition-colors">
              <svg className="w-5 h-5 text-text-secondary hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </button>
            <button className="p-2 rounded-full bg-bg-subtle hover:bg-primary/10 transition-colors">
              <svg className="w-5 h-5 text-text-secondary hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </button>
            <button className="p-2 rounded-full bg-bg-subtle hover:bg-primary/10 transition-colors">
              <svg className="w-5 h-5 text-text-secondary hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-[16/9] relative mb-8 rounded-lg overflow-hidden">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-text-primary leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-border-light">
          <h3 className="text-lg font-heading font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-bg-subtle text-text-secondary text-sm rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Sidebar and Related Content */}
      <div className="bg-bg-subtle py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Main Content - Author Bio */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-heading font-bold mb-6">About the Author</h3>
                <div className="flex items-start space-x-6">
                  <Image
                    src={article.author.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face'}
                    alt={article.author.name}
                    width={120}
                    height={120}
                    className="rounded-full flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-heading font-semibold mb-2">
                      <Link href={`/users/${article.author.username}`} className="hover:text-primary transition-colors">
                        {article.author.name}
                      </Link>
                    </h4>
                    <p className="text-text-secondary mb-4">{article.author.bio}</p>
                    <Link 
                      href={`/users/${article.author.username}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      View all articles by {article.author.name} →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Related Articles */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-heading font-semibold mb-6">Related Articles</h3>
                <div className="space-y-6">
                  {relatedArticles.map((relatedArticle) => (
                    <Link key={relatedArticle.id} href={`/articles/${relatedArticle.slug}`} className="block group">
                      <div className="aspect-[16/9] relative mb-3 rounded-lg overflow-hidden">
                        <Image
                          src={relatedArticle.featuredImage}
                          alt={relatedArticle.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="font-medium text-text-primary group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {relatedArticle.title}
                      </h4>
                      <p className="text-sm text-text-muted">
                        {formatDate(relatedArticle.publishedAt)}
                      </p>
                    </Link>
                  ))}
                </div>
                <Link 
                  href={`/articles?category=${article.category.toLowerCase()}`}
                  className="block mt-6 text-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  View all {article.category} articles →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More from Category */}
      {moreFromCategory.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-8">
              More from {article.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {moreFromCategory.map((categoryArticle) => (
                <ArticleCard key={categoryArticle.id} article={categoryArticle} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link 
                href={`/articles?category=${article.category.toLowerCase()}`}
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                View all {article.category} articles
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}