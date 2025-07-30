import React from 'react';
import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import VideoCard from '@/components/VideoCard';
import PodcastCard from '@/components/PodcastCard';
import { mockArticles, mockVideos, mockPodcasts } from '@/data/mockData';

export default function HomePage() {
  const featuredArticle = mockArticles.find(article => article.isFeatured);
  const editorsPicks = mockArticles.filter(article => article.isEditorsPick && !article.isFeatured).slice(0, 3);
  const latestNews = mockArticles.filter(article => !article.isEditorsPick && !article.isFeatured).slice(0, 6);
  const featuredVideo = mockVideos[0];
  const featuredPodcast = mockPodcasts[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {featuredArticle && (
        <section className="relative bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
                Independent Journalism
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Your trusted source for in-depth analysis, compelling stories, and quality content 
                across articles, videos, and podcasts.
              </p>
            </div>
            <ArticleCard article={featuredArticle} featured className="max-w-4xl mx-auto" />
          </div>
        </section>
      )}

      {/* Editor's Picks Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-heading font-bold text-text-primary">
              Editor's Picks
            </h2>
            <Link 
              href="/articles" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View all articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {editorsPicks.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-heading font-bold text-text-primary">
              Latest News
            </h2>
            <Link 
              href="/articles" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View all articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video & Podcast Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-8 text-center">
            Featured Multimedia Content
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Featured Video */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-heading font-semibold text-text-primary">
                  Featured Video
                </h3>
                <Link 
                  href="/videos" 
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  View all videos →
                </Link>
              </div>
              {featuredVideo && <VideoCard video={featuredVideo} />}
            </div>

            {/* Featured Podcast */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-heading font-semibold text-text-primary">
                  Featured Podcast
                </h3>
                <Link 
                  href="/podcasts" 
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  View all podcasts →
                </Link>
              </div>
              {featuredPodcast && <PodcastCard podcast={featuredPodcast} />}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
            Stay Informed
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Subscribe to our newsletter for the latest updates, exclusive content, and behind-the-scenes insights.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-text-muted mt-3">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Quick Access */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-8 text-center">
            Explore by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Politics', icon: '🏛️', count: 24 },
              { name: 'Technology', icon: '💻', count: 18 },
              { name: 'Environment', icon: '🌱', count: 15 },
              { name: 'Business', icon: '💼', count: 22 },
              { name: 'Health', icon: '🏥', count: 12 },
              { name: 'Science', icon: '🔬', count: 16 }
            ].map((category) => (
              <Link 
                key={category.name}
                href={`/articles?category=${category.name.toLowerCase()}`}
                className="group p-6 bg-bg-subtle hover:bg-primary/10 rounded-lg text-center transition-all duration-300 hover:shadow-md"
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="font-heading font-semibold text-text-primary group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-text-muted mt-1">
                  {category.count} articles
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}