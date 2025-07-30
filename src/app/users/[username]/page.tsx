import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArticleCard from '@/components/ArticleCard';
import VideoCard from '@/components/VideoCard';
import PodcastCard from '@/components/PodcastCard';
import { mockArticles, mockVideos, mockPodcasts } from '@/data/mockData';
import { notFound } from 'next/navigation';

interface UserProfilePageProps {
  params: {
    username: string;
  };
}

export default function UserProfilePage({ params }: UserProfilePageProps) {
  // Find user from articles (in a real app, this would be a proper user lookup)
  const userArticles = mockArticles.filter(article => article.author.username === params.username);
  const userVideos = mockVideos.filter(video => video.author.username === params.username);
  const userPodcasts = mockPodcasts.filter(podcast => podcast.host.username === params.username);
  
  if (userArticles.length === 0 && userVideos.length === 0 && userPodcasts.length === 0) {
    notFound();
  }

  // Get user info from the first article if available
  const user = userArticles[0]?.author || userVideos[0]?.author || userPodcasts[0]?.host;
  if (!user) {
    notFound();
  }

  const totalContent = userArticles.length + userVideos.length + userPodcasts.length;
  const joinedDate = '2022-03-15'; // Mock join date

  return (
    <div className="min-h-screen bg-white">
      {/* Profile Header */}
      <section className="bg-bg-subtle py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex-shrink-0">
              <Image
                src={user.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'}
                alt={user.name}
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
                {user.name}
              </h1>
              
              {user.bio && (
                <p className="text-xl text-text-secondary mb-6 leading-relaxed">
                  {user.bio}
                </p>
              )}
              
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-text-muted mb-6">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Joined {new Date(joinedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{totalContent} published content</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-text-secondary hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-text-secondary hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-text-secondary hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-1 bg-bg-subtle rounded-lg p-1">
              <button className="px-6 py-3 text-sm font-medium rounded-md bg-primary text-white">
                Articles ({userArticles.length})
              </button>
              <button className="px-6 py-3 text-sm font-medium rounded-md text-text-secondary hover:text-text-primary transition-colors">
                Videos ({userVideos.length})
              </button>
              <button className="px-6 py-3 text-sm font-medium rounded-md text-text-secondary hover:text-text-primary transition-colors">
                Podcasts ({userPodcasts.length})
              </button>
            </div>
          </div>

          {/* Articles Section */}
          {userArticles.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-8">
                Articles by {user.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {userArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          )}

          {/* Videos Section */}
          {userVideos.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-8">
                Videos by {user.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {userVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          )}

          {/* Podcasts Section */}
          {userPodcasts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-8">
                Podcasts hosted by {user.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {userPodcasts.map((podcast) => (
                  <PodcastCard key={podcast.id} podcast={podcast} />
                ))}
              </div>
            </div>
          )}

          {/* Contact Author */}
          <div className="bg-bg-subtle rounded-lg p-8 text-center">
            <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">
              Want to get in touch with {user.name}?
            </h2>
            <p className="text-text-secondary mb-6">
              For professional inquiries, interview requests, or collaboration opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/get-involved/contact-us"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Contact Through Us
              </a>
              <a 
                href={`mailto:${user.name.toLowerCase().replace(' ', '.')}@mediawebsite.com`}
                className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
              >
                Email Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}