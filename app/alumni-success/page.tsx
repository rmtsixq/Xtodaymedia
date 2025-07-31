import React from 'react';
import Link from 'next/link';
import { GraduationCap, MapPin, Calendar, Award, ExternalLink, Star, Globe, Sparkles } from 'lucide-react';

interface AlumniStory {
  id: string;
  name: string;
  university: string;
  degree: string;
  year: string;
  country: string;
  story: string;
  achievements: string[];
  articleContributions: number;
  image: string;
  universityLogo: string;
}

const alumniStories: AlumniStory[] = [
  {
    id: '1',
    name: 'Sarah Al-Rashid',
    university: 'Harvard University',
    degree: 'Computer Science & Social Studies',
    year: '2023',
    country: 'USA',
    story: 'My journey with X Times began when I submitted my first article on AI ethics during my senior year of high school. The editorial process taught me critical thinking skills that became invaluable during my Harvard application and beyond.',
    achievements: ['Dean\'s List', 'CS50 Teaching Fellow', 'Harvard Innovation Labs Member'],
    articleContributions: 8,
    image: '/avatars/sarah-alrashid.jpg',
    universityLogo: '🏛️'
  },
  {
    id: '2',
    name: 'Ahmed Hassan',
    university: 'Stanford University',
    degree: 'Engineering Physics',
    year: '2022',
    country: 'USA',
    story: 'Writing for X Times helped me develop my voice as a researcher. My article on renewable energy technologies was cited in my Stanford application and helped showcase my passion for sustainable engineering.',
    achievements: ['Stanford Cardinal Robotics Team', 'Published in Nature Energy', 'Venture Capital Intern'],
    articleContributions: 12,
    image: '/avatars/ahmed-hassan.jpg',
    universityLogo: '🌲'
  },
  {
    id: '3',
    name: 'Maya Chen',
    university: 'Oxford University',
    degree: 'Philosophy, Politics & Economics',
    year: '2024',
    country: 'UK',
    story: 'The rigorous peer review process at X Times prepared me for Oxford\'s tutorial system. Learning to defend my arguments and accept constructive criticism was crucial for my academic growth.',
    achievements: ['Oxford Union Debate Winner', 'Rhodes Scholarship Candidate', 'UN Model Delegate'],
    articleContributions: 15,
    image: '/avatars/maya-chen.jpg',
    universityLogo: '🇬🇧'
  }
];

const universityStats = [
  { name: 'Harvard University', students: 3, logo: '🏛️', acceptance: '3.4%' },
  { name: 'Stanford University', students: 3, logo: '🌲', acceptance: '3.7%' },
  { name: 'MIT', students: 2, logo: '🔬', acceptance: '4.1%' },
  { name: 'Oxford University', students: 2, logo: '🇬🇧', acceptance: '17.5%' },
  { name: 'Columbia University', students: 2, logo: '🗽', acceptance: '3.9%' },
  { name: 'Brown University', students: 3, logo: '🐻', acceptance: '5.1%' },
  { name: 'Yale University', students: 2, logo: '⚖️', acceptance: '4.5%' },
  { name: 'Princeton University', students: 1, logo: '🧡', acceptance: '3.9%' },
  { name: 'Caltech', students: 1, logo: '🚀', acceptance: '3.2%' },
  { name: 'UPenn', students: 2, logo: '🔔', acceptance: '5.7%' }
];

export default function AlumniSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-light via-primary to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-8">
              <GraduationCap className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-medium">Alumni Success Stories</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              Our Alumni
              <span className="block text-yellow-300">Excel Globally</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
              From Harvard to Oxford, our contributors have gained admission to the world's most prestigious universities. 
              Their journey started with sharing their ideas through X Times.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-4xl font-bold text-yellow-300 mb-2">25+</div>
                <div className="text-white/90">Universities</div>
                <div className="text-sm text-white/70">Ivy League & Top Global</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-4xl font-bold text-yellow-300 mb-2">50+</div>
                <div className="text-white/90">Alumni</div>
                <div className="text-sm text-white/70">Class of 2021-2025</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-4xl font-bold text-yellow-300 mb-2">$2M+</div>
                <div className="text-white/90">Scholarships</div>
                <div className="text-sm text-white/70">Total Awards Received</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Featured Success Stories
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Read how our contributors leveraged their experience with X Times to gain admission to top universities.
            </p>
          </div>
          
          <div className="space-y-12">
            {alumniStories.map((story, index) => (
              <div 
                key={story.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{story.universityLogo}</div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-gray-900">{story.name}</h3>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{story.university}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <GraduationCap className="w-4 h-4" />
                        <span>{story.degree}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>Class of {story.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-lg text-gray-700 italic border-l-4 border-primary pl-6">
                    "{story.story}"
                  </blockquote>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {story.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-primary" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{story.articleContributions} articles published</span>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-primary-light to-primary-dark p-8 rounded-2xl text-white">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-3xl">{story.universityLogo}</span>
                        </div>
                        <h4 className="text-xl font-bold mb-2">{story.university}</h4>
                        <p className="text-white/90 mb-4">{story.degree}</p>
                        <div className="flex items-center justify-center space-x-2">
                          <Globe className="w-4 h-4" />
                          <span className="text-sm">{story.country}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Statistics */}
      <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              University Admissions (2021-2025)
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our contributors have been accepted to the world's most competitive universities with historically low acceptance rates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {universityStats.map((university, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="text-4xl mb-3">{university.logo}</div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm leading-tight">{university.name}</h3>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">{university.students}</div>
                    <div className="text-xs text-gray-600">students admitted</div>
                    <div className="text-xs text-red-600 font-medium">
                      {university.acceptance} acceptance rate
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Start Your Success Story
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community of ambitious students and researchers. Share your ideas, develop your voice, 
            and build a portfolio that opens doors to your dream university.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/submit"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Submit Your First Article
            </Link>
            <Link 
              href="/about-us/our-team"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300"
            >
              Meet Our Current Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}