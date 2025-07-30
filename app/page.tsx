import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Calendar, Users, BookOpen, Video, Headphones } from 'lucide-react';
import ArticleCard from '@/components/ArticleCard';
import VideoCard from '@/components/VideoCard';
import PodcastCard from '@/components/PodcastCard';
import { featuredContent, articles, videos, podcasts, categories } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-light via-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                {featuredContent.hero.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                {featuredContent.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/articles"
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-center"
                >
                  Explore Articles
                </Link>
                <Link 
                  href="/about-us/aim-and-scope"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200 text-center"
                >
                  About Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Logo.png"
                alt="Hevsel Times"
                width={400}
                height={300}
                className="w-full max-w-md mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Highlight */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Hevsel Weekly
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay informed with a concise roundup of the week's most important stories. In just six minutes every Monday, 
              we bring you the latest news and insights from around the world.
            </p>
          </div>
          <div className="bg-gradient-to-r from-primary-light to-primary p-8 rounded-2xl text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                Subscribe to Our Weekly Newsletter
              </h3>
              <p className="text-white/90 mb-6">
                Get the most important stories delivered to your inbox every Monday morning.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white text-gray-900"
                />
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                Editor's Picks
              </h2>
              <p className="text-lg text-gray-600">
                Hand-selected articles that showcase the best of our journalism and research.
              </p>
            </div>
            <Link 
              href="/articles?filter=editors-pick"
              className="hidden sm:flex items-center space-x-2 text-primary hover:text-primary-dark font-semibold transition-colors duration-200"
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
          
          <div className="text-center mt-8 sm:hidden">
            <Link 
              href="/articles?filter=editors-pick"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark font-semibold transition-colors duration-200"
            >
              <span>View All Editor's Picks</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Explore by Category
            </h2>
            <p className="text-lg text-gray-600">
              Dive deep into the subjects that matter most to you.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const icons = [BookOpen, TrendingUp, Users, Calendar, Video, Headphones];
              const IconComponent = icons[index % icons.length];
              
              return (
                <Link
                  key={category}
                  href={`/articles?category=${encodeURIComponent(category)}`}
                  className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {category}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                Recent Articles
              </h2>
              <p className="text-lg text-gray-600">
                Stay up to date with our latest research and insights.
              </p>
            </div>
            <Link 
              href="/articles"
              className="hidden sm:flex items-center space-x-2 text-primary hover:text-primary-dark font-semibold transition-colors duration-200"
            >
              <span>View All</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.latestArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          
          <div className="text-center mt-8 sm:hidden">
            <Link 
              href="/articles"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark font-semibold transition-colors duration-200"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Multimedia Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Videos & Podcasts
            </h2>
            <p className="text-lg text-gray-600">
              Engage with our content through multiple formats - watch, listen, and learn.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Featured Video */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-serif font-bold text-gray-900">Featured Video</h3>
                <Link 
                  href="/videos"
                  className="text-primary hover:text-primary-dark font-semibold transition-colors duration-200"
                >
                  View All Videos
                </Link>
              </div>
              <VideoCard video={featuredContent.featuredVideo} variant="featured" />
            </div>
            
            {/* Featured Podcast */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-serif font-bold text-gray-900">Featured Podcast</h3>
                <Link 
                  href="/podcasts"
                  className="text-primary hover:text-primary-dark font-semibold transition-colors duration-200"
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
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Become part of our vibrant community. Contribute your insights, share your stories, 
              and help us create a platform for knowledge and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/about-us/our-team"
              className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl hover:bg-opacity-20 transition-all duration-300 text-center group"
            >
              <Users className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-serif font-bold mb-3">Meet the Team</h3>
              <p className="text-gray-300">
                Get to know the passionate individuals behind Hevsel Times and their areas of expertise.
              </p>
            </Link>
            
            <Link
              href="/get-involved/join-us"
              className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl hover:bg-opacity-20 transition-all duration-300 text-center group"
            >
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-serif font-bold mb-3">Get Involved</h3>
              <p className="text-gray-300">
                Join our team of writers, editors, and contributors to help shape the future of journalism.
              </p>
            </Link>
            
            <Link
              href="/get-involved/contact-us"
              className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl hover:bg-opacity-20 transition-all duration-300 text-center group"
            >
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-serif font-bold mb-3">Contact Us</h3>
              <p className="text-gray-300">
                Have a story idea, feedback, or want to collaborate? We'd love to hear from you.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
