import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Calendar, Users, BookOpen, Video, Headphones, Mail, Star, Globe, Award, ChevronRight, Search } from 'lucide-react';
import ArticleCard from '@/components/ArticleCard';
import VideoCard from '@/components/VideoCard';
import PodcastCard from '@/components/PodcastCard';
import { featuredContent, articles, videos, podcasts, categories } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section - Newsletter Style */}
      <section className="relative bg-gradient-to-br from-primary-light via-primary to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary-dark opacity-60"></div>
        
                 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
           <div className="text-center">
             <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8">
               <Star className="w-4 h-4 text-yellow-300" />
               <span className="text-sm font-medium">The Middle East's Leading Academic Journal</span>
             </div>
             
             <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-8">
               X Times
             </h1>
             
             <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12">
               Student-led academic journalism delivering trustworthy insights across STEM, politics, philosophy, and social justice through articles, videos, and podcasts.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link 
                 href="/articles"
                 className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
               >
                 Explore Latest Articles
               </Link>
               <Link 
                 href="#newsletter"
                 className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 text-center"
               >
                 Subscribe to Newsletter
               </Link>
             </div>
           </div>
         </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section id="newsletter" className="py-16 bg-gradient-to-r from-accent to-accent-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <Mail className="w-12 h-12 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Stay Updated with X Times
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get our weekly newsletter with the latest articles, research insights, and thought-provoking content delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            
            <p className="text-sm text-white/70 mt-4">
              Join 5,000+ readers. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>



      {/* Editor's Picks */}
      <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                Editor's Picks
              </h2>
              <p className="text-lg text-gray-700">
                Hand-selected articles that showcase the best of our journalism and research.
              </p>
            </div>
            <Link 
              href="/articles?filter=editors-pick"
              className="hidden sm:flex items-center space-x-2 text-primary hover:text-primary-dark font-semibold transition-colors duration-200 bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md"
            >
              <span>View All</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredContent.editorsPicks.map((article) => (
              <ArticleCard key={article.id} article={article} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Explore by Category
            </h2>
            <p className="text-lg text-white/90">
              Dive deep into the subjects that matter most to you.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const icons = [BookOpen, TrendingUp, Users, Calendar, Video, Headphones, Globe];
              const IconComponent = icons[index % icons.length];
              
              return (
                <Link
                  key={category}
                  href={`/articles?category=${encodeURIComponent(category)}`}
                  className="group bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 text-center"
                >
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-white transition-colors duration-300">
                    {category}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Multimedia Content */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Videos & Podcasts
            </h2>
            <p className="text-lg text-white/90">
              Engage with our content through multiple formats - watch, listen, and learn.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Featured Video */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-serif font-bold text-white">Featured Video</h3>
                <Link 
                  href="/videos"
                  className="text-white/80 hover:text-white font-semibold transition-colors duration-200"
                >
                  View All Videos
                </Link>
              </div>
              <VideoCard video={featuredContent.featuredVideo} variant="featured" />
            </div>
            
            {/* Featured Podcast */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-serif font-bold text-white">Featured Podcast</h3>
                <Link 
                  href="/podcasts"
                  className="text-white/80 hover:text-white font-semibold transition-colors duration-200"
                >
                  View All Podcasts
                </Link>
              </div>
              <PodcastCard podcast={featuredContent.featuredPodcast} variant="featured" />
            </div>
          </div>
        </div>
      </section>

      {/* Community & Involvement */}
      <section className="py-16 bg-gradient-to-br from-accent-light to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Become part of our vibrant community of writers, thinkers, and change-makers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/about-us/our-team"
              className="bg-white p-8 rounded-xl hover:shadow-lg transition-all duration-300 text-center group border-2 border-transparent hover:border-primary"
            >
              <Users className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-serif font-bold mb-3 text-gray-900">Meet the Team</h3>
              <p className="text-gray-600">
                Get to know the passionate individuals behind X Times and their areas of expertise.
              </p>
            </Link>
            
            <Link
              href="/submit"
              className="bg-white p-8 rounded-xl hover:shadow-lg transition-all duration-300 text-center group border-2 border-transparent hover:border-primary"
            >
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-serif font-bold mb-3 text-gray-900">Submit Your Work</h3>
              <p className="text-gray-600">
                Share your research, articles, and insights with our growing community of readers.
              </p>
            </Link>
            
            <Link
              href="/contact"
              className="bg-white p-8 rounded-xl hover:shadow-lg transition-all duration-300 text-center group border-2 border-transparent hover:border-primary"
            >
              <Mail className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-serif font-bold mb-3 text-gray-900">Contact Us</h3>
              <p className="text-gray-600">
                Have a story idea, feedback, or want to collaborate? We'd love to hear from you.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
