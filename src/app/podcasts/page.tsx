import React from 'react';
import PodcastCard from '@/components/PodcastCard';
import { mockPodcasts } from '@/data/mockData';

export default function PodcastsPage() {
  const categories = ['All', 'Technology', 'Politics', 'Health', 'Business', 'Science'];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-bg-subtle py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
              Podcasts
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Listen to our engaging podcast series featuring expert interviews, deep-dive discussions, and compelling stories.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Podcast */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-8 text-center">
            Featured Episode
          </h2>
          
          {mockPodcasts[0] && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Podcast Player */}
                <div className="bg-gray-900 p-8 flex items-center justify-center">
                  <iframe 
                    src="https://open.spotify.com/embed/episode/4uLU6hMCjMI75M1A2tKUQC?utm_source=generator&theme=0" 
                    width="100%" 
                    height="352" 
                    frameBorder="0" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    className="rounded-lg"
                  />
                </div>
                
                {/* Episode Info */}
                <div className="p-8">
                  <span className="text-primary font-medium text-sm mb-2 block">
                    {mockPodcasts[0].category}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-text-primary mb-3">
                    {mockPodcasts[0].title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {mockPodcasts[0].description}
                  </p>
                  <div className="space-y-3 text-sm text-text-muted">
                    <div className="flex items-center space-x-4">
                      <span>Hosted by {mockPodcasts[0].host.name}</span>
                      <span>•</span>
                      <span>{new Date(mockPodcasts[0].publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span>Duration: {mockPodcasts[0].duration}</span>
                      {mockPodcasts[0].season && mockPodcasts[0].episode && (
                        <>
                          <span>•</span>
                          <span>Season {mockPodcasts[0].season}, Episode {mockPodcasts[0].episode}</span>
                        </>
                      )}
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
                  placeholder="Search podcasts..."
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
                <option>Most Popular</option>
                <option>Oldest</option>
                <option>Duration</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-heading font-bold text-text-primary">
              All Episodes ({mockPodcasts.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockPodcasts.map((podcast) => (
              <PodcastCard key={podcast.id} podcast={podcast} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Load More Episodes
            </button>
          </div>
        </div>
      </section>

      {/* Podcast Series */}
      <section className="py-16 bg-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-8 text-center">
            Our Podcast Series
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'The Digital Transformation Series',
                episodes: 12,
                description: 'Exploring how technology is reshaping industries and society',
                image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&h=300&fit=crop'
              },
              {
                title: 'Global Politics Weekly',
                episodes: 8,
                description: 'Weekly analysis of political developments around the world',
                image: 'https://images.unsplash.com/photo-1541872705-1f73c6400ec9?w=300&h=300&fit=crop'
              },
              {
                title: 'Health & Wellness Today',
                episodes: 15,
                description: 'Expert insights on health, wellness, and medical breakthroughs',
                image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=300&fit=crop'
              }
            ].map((series) => (
              <div key={series.title} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
                <div className="aspect-square relative">
                  <img
                    src={series.image}
                    alt={series.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-heading font-bold mb-1">{series.title}</h3>
                    <p className="text-sm opacity-90">{series.episodes} episodes</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-text-secondary text-sm">{series.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
            Subscribe to Our Podcasts
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Get notified about new episodes and never miss an important conversation.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.6 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.48.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.297.479-1.02.658-1.559.359z"/>
              </svg>
              <span>Spotify</span>
            </a>
            <a href="#" className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm4.243 17.243c-.195.195-.512.195-.707 0L12 13.707l-3.536 3.536c-.195.195-.512.195-.707 0s-.195-.512 0-.707L11.293 13l-3.536-3.536c-.195-.195-.195-.512 0-.707s.512-.195.707 0L12 12.293l3.536-3.536c.195-.195.512-.195.707 0s.195.512 0 .707L12.707 13l3.536 3.536c.195.195.195.512 0 .707z"/>
              </svg>
              <span>Apple Podcasts</span>
            </a>
            <a href="#" className="flex items-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              <span>RSS Feed</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}