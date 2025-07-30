'use client';

import React, { useState, useMemo } from 'react';
import { Search, Headphones, Calendar, Clock } from 'lucide-react';
import PodcastCard from '@/components/PodcastCard';
import { podcasts } from '@/lib/data';

export default function PodcastsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const seasons = Array.from(new Set(podcasts.map(p => p.season))).sort((a, b) => b - a);

  const filteredAndSortedPodcasts = useMemo(() => {
    let filtered = podcasts.filter(podcast => {
      const matchesSearch = podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           podcast.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSeason = selectedSeason === 'All' || podcast.season.toString() === selectedSeason;
      
      return matchesSearch && matchesSeason;
    });

    // Sort podcasts
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
        break;
      case 'season':
        filtered.sort((a, b) => {
          if (a.season !== b.season) return b.season - a.season;
          return b.episode - a.episode;
        });
        break;
      case 'title':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return filtered;
  }, [searchTerm, selectedSeason, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Podcasts
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Listen to our podcast episodes featuring expert interviews, deep dives into current topics, 
              and thoughtful discussions on the issues that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search episodes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Season Filter */}
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="All">All Seasons</option>
                {seasons.map(season => (
                  <option key={season} value={season.toString()}>Season {season}</option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="season">By Season & Episode</option>
                <option value="title">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episode */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Latest Episode
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-600 rounded-lg p-8 text-white text-center mb-6">
              <div className="aspect-square w-64 mx-auto mb-6 rounded-lg overflow-hidden bg-white bg-opacity-20">
                <iframe
                  src={`https://open.spotify.com/embed/episode/${podcasts[0].spotifyId}?utm_source=generator&theme=0`}
                  width="100%"
                  height="100%"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2">
                {podcasts[0].title}
              </h3>
              <div className="text-green-100 mb-4">
                Season {podcasts[0].season}, Episode {podcasts[0].episode}
              </div>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                {podcasts[0].description}
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-green-100">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{podcasts[0].duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(podcasts[0].publishedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Episodes */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredAndSortedPodcasts.length} of {podcasts.length} episodes
              {searchTerm && ` for "${searchTerm}"`}
              {selectedSeason !== 'All' && ` in Season ${selectedSeason}`}
            </p>
          </div>

          {/* Episodes Grid */}
          {filteredAndSortedPodcasts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedPodcasts.map((podcast) => (
                <PodcastCard key={podcast.id} podcast={podcast} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="mb-4">
                  <Headphones className="w-16 h-16 text-gray-300 mx-auto" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                  No episodes found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedSeason('All');
                  }}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Spotify CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Follow Us on Spotify
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Never miss an episode! Follow our podcast on Spotify to get notified when we release new content. 
            Listen to thoughtful discussions and expert interviews on the go.
          </p>
          <a
            href="https://open.spotify.com/show/your-podcast-id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            <Headphones className="w-6 h-6" />
            <span>Follow on Spotify</span>
          </a>
        </div>
      </section>

      {/* Seasons Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Browse by Season
            </h2>
            <p className="text-lg text-gray-600">
              Explore episodes organized by season and discover themed content.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seasons.map((season) => {
              const seasonEpisodes = podcasts.filter(p => p.season === season);
              const totalDuration = seasonEpisodes.reduce((acc, ep) => {
                const [minutes] = ep.duration.split(':').map(Number);
                return acc + minutes;
              }, 0);
              
              return (
                <button
                  key={season}
                  onClick={() => setSelectedSeason(season.toString())}
                  className={`p-6 rounded-lg border transition-all duration-200 text-left ${
                    selectedSeason === season.toString()
                      ? 'border-primary bg-primary-light text-primary'
                      : 'border-gray-200 hover:border-primary hover:bg-gray-50'
                  }`}
                >
                  <h3 className="text-xl font-serif font-bold mb-2">Season {season}</h3>
                  <div className="text-sm text-gray-500 space-y-1">
                    <div>{seasonEpisodes.length} episodes</div>
                    <div>~{Math.round(totalDuration / 60)} hours total</div>
                    <div>Latest: {new Date(Math.max(...seasonEpisodes.map(ep => new Date(ep.publishedAt).getTime()))).toLocaleDateString()}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}