import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, BookOpen, MapPin, Mail, Twitter, Linkedin, ArrowLeft, Eye } from 'lucide-react';
import ArticleCard from '@/components/ArticleCard';
import { teamMembers, articles } from '@/lib/data';

interface UserPageProps {
  params: Promise<{
    username: string;
  }>;
}

export default async function UserPage({ params }: UserPageProps) {
  const { username } = await params;
  const user = teamMembers.find(member => member.username === username);

  if (!user) {
    notFound();
  }

  const userArticles = articles.filter(article => article.author.username === user.username);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/about-us/our-team"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Team</span>
          </Link>
        </div>
      </div>

      {/* User Profile Header */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile Info */}
            <div className="lg:col-span-1">
              <div className="text-center lg:text-left">
                <div className="relative w-48 h-48 mx-auto lg:mx-0 mb-6">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    fill
                    className="rounded-full object-cover shadow-lg"
                    sizes="192px"
                  />
                </div>
                
                <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">
                  {user.name}
                </h1>
                
                <p className="text-xl text-primary font-semibold mb-4">
                  {user.role}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {user.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="bg-primary-light text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center lg:justify-start space-x-4 mb-6">
                  <a
                    href={`mailto:${user.social.email}`}
                    className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors duration-200"
                    title="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  {user.social.twitter && (
                    <a
                      href={user.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-500 hover:text-white transition-colors duration-200"
                      title="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {user.social.linkedin && (
                    <a
                      href={user.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-700 hover:text-white transition-colors duration-200"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userArticles.length}</div>
                    <div className="text-sm text-gray-600">Articles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {userArticles.reduce((total, article) => total + (article.views || 0), 0).toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Total Views</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio and Content */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Bio */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">About {user.name}</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {user.bio}
                  </p>
                </div>

                {/* Latest Articles */}
                {userArticles.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-serif font-bold text-gray-900">
                        Latest Articles by {user.name}
                      </h2>
                      {userArticles.length > 3 && (
                        <Link 
                          href={`/articles?author=${user.username}`}
                          className="text-primary hover:text-primary-dark font-semibold"
                        >
                          View All
                        </Link>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {userArticles.slice(0, 4).map((article) => (
                        <ArticleCard 
                          key={article.id} 
                          article={article} 
                          variant="compact"
                          showImage={false}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* No Articles Message */}
                {userArticles.length === 0 && (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                      No Articles Yet
                    </h3>
                    <p className="text-gray-600">
                      {user.name} hasn't published any articles yet. Check back soon for their latest work!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Get in Touch with {user.name}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Interested in collaborating or learning more about their work? Reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${user.social.email}`}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Send Email
            </a>
            <Link
              href="/get-involved/contact-us"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Contact Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Generate static params for all team members
export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    username: member.username,
  }));
}

// Generate metadata for each user
export async function generateMetadata({ params }: UserPageProps) {
  const { username } = await params;
  const user = teamMembers.find(member => member.username === username);
  
  if (!user) {
    return {
      title: 'User Not Found',
    };
  }

  return {
    title: `${user.name} - ${user.role} | X times`,
    description: user.bio,
    keywords: user.expertise.join(', '),
    authors: [{ name: user.name }],
    openGraph: {
      title: `${user.name} - ${user.role}`,
      description: user.bio,
      type: 'profile',
    },
    twitter: {
      card: 'summary',
      title: `${user.name} - ${user.role}`,
      description: user.bio,
    },
  };
}