import React from 'react';
import VideoCard from '@/components/VideoCard';
import { mockVideos } from '@/data/mockData';

export default function VideosPage() {
  const categories = ['All', 'Environment', 'Business', 'Science', 'Technology', 'Politics'];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-bg-subtle py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
              Videos
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Watch our latest video content featuring expert interviews, documentary-style reports, and in-depth analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-8 text-center">
            Featured Video
          </h2>
          
          {mockVideos[0] && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Video Player */}
              <div className="aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/dQw4w9WgXcQ`}
                  title={mockVideos[0].title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className="text-primary font-medium text-sm mb-2 block">
                      {mockVideos[0].category}
                    </span>
                    <h3 className="text-2xl font-heading font-bold text-text-primary mb-3">
                      {mockVideos[0].title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      {mockVideos[0].description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-text-muted">
                      <span>By {mockVideos[0].author.name}</span>
                      <span>•</span>
                      <span>{new Date(mockVideos[0].publishedAt).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{mockVideos[0].views.toLocaleString()} views</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-bg-subtle border-y border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search videos..."
                  className="w-full pl-10 pr-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All' 
                      ? 'bg-primary text-white' 
                      : 'bg-white text-text-secondary hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-text-secondary">Sort by:</span>
              <select className="border border-border-light rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white">
                <option>Latest</option>
                <option>Most Viewed</option>
                <option>Oldest</option>
                <option>Duration</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-heading font-bold text-text-primary">
              All Videos ({mockVideos.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Load More Videos
            </button>
          </div>
        </div>
      </section>

      {/* Video Categories */}
      <section className="py-16 bg-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-8 text-center">
            Video Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                category: 'Documentary Features',
                count: 8,
                description: 'In-depth documentary-style reports on important issues',
                image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=250&fit=crop'
              },
              {
                category: 'Expert Interviews',
                count: 12,
                description: 'One-on-one conversations with industry leaders and experts',
                image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop'
              },
              {
                category: 'News Analysis',
                count: 15,
                description: 'Breaking down complex news stories and current events',
                image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop'
              }
            ].map((item) => (
              <div key={item.category} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
                <div className="aspect-[16/10] relative">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-heading font-bold mb-1">{item.category}</h3>
                    <p className="text-sm opacity-90">{item.count} videos</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-text-secondary text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
            Never Miss a Video
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Subscribe to get notified when we release new video content.
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
          </div>
        </div>
      </section>
    </div>
  );
}