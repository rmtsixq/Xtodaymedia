import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Twitter, Linkedin, MapPin, BookOpen, Award, Users, Globe, Target, Star, GraduationCap, Calendar, Building, Sparkles } from 'lucide-react';
import { teamMembers } from '@/lib/data';

// Extended team data with more details
const extendedTeamData = [
  {
    ...teamMembers[0],
    achievements: [
      'Led editorial team to 200% growth in readership',
      'Featured speaker at 3 international conferences',
      'Published 15+ peer-reviewed articles'
    ],
    university: 'Columbia University',
    graduationYear: '2018',
    articlesPublished: 25,
    joinedDate: '2021',
    specialization: 'Cultural Studies & Academic Writing'
  },
  {
    ...teamMembers[1],
    achievements: [
      'Pioneered environmental justice section',
      'Collaborated with 10+ environmental organizations',
      'Mentor to 20+ student writers'
    ],
    university: 'Stanford University',
    graduationYear: '2016',
    articlesPublished: 18,
    joinedDate: '2021',
    specialization: 'Environmental Policy & Sustainability'
  },
  {
    ...teamMembers[2],
    achievements: [
      'Built AI content recommendation system',
      'Increased digital engagement by 300%',
      'Technical advisor for 5+ academic platforms'
    ],
    university: 'MIT',
    graduationYear: '2019',
    articlesPublished: 22,
    joinedDate: '2022',
    specialization: 'AI Ethics & Digital Innovation'
  }
];

const teamStats = [
  { icon: Users, label: 'Active Team Members', value: '25+', color: 'text-blue-500' },
  { icon: Globe, label: 'Countries Represented', value: '12', color: 'text-green-500' },
  { icon: Star, label: 'Combined Publications', value: '200+', color: 'text-yellow-500' },
  { icon: Award, label: 'Industry Awards', value: '8', color: 'text-purple-500' }
];

const achievements = [
  {
    year: '2021',
    title: 'Founded X Times',
    description: 'Established as the first student-led academic journal in the Middle East',
    icon: Sparkles
  },
  {
    year: '2022',
    title: 'International Recognition',
    description: 'Featured in top academic publications and conferences worldwide',
    icon: Globe
  },
  {
    year: '2023',
    title: '50+ University Acceptances',
    description: 'Our contributors gained admission to prestigious universities globally',
    icon: GraduationCap
  },
  {
    year: '2024',
    title: '200+ Published Articles',
    description: 'Reached milestone of 200 published academic articles and research papers',
    icon: BookOpen
  }
];

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-light via-primary to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-8">
              <Users className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-medium">Meet Our Team</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              The Minds Behind
              <span className="block text-yellow-300">X Times</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
              A diverse team of passionate scholars, writers, and innovators dedicated to 
              empowering the next generation of academic leaders and thought pioneers.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {teamStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
                    <IconComponent className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Editorial Leadership
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Meet the visionaries leading X Times toward excellence in academic journalism and student empowerment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {extendedTeamData.map((member, index) => (
              <div key={member.id} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="p-8">
                  {/* Profile Header */}
                  <div className="text-center mb-6">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary-light to-primary-dark rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-2">
                      {member.role}
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-2">
                      <Building className="w-4 h-4" />
                      <span>{member.university}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>Joined {member.joinedDate}</span>
                    </div>
                  </div>

                  {/* Specialization */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-primary" />
                      Specialization
                    </h4>
                    <p className="text-sm text-gray-600">{member.specialization}</p>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-gray-600">
                          <Star className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-primary/5 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-primary">{member.articlesPublished}</div>
                      <div className="text-xs text-gray-600">Articles</div>
                    </div>
                    <div className="bg-primary/5 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-primary">{member.graduationYear}</div>
                      <div className="text-xs text-gray-600">Graduated</div>
                    </div>
                  </div>

                  {/* Expertise Tags */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200">
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-400 hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-primary/5"
                      title="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition-colors duration-300 p-2 rounded-lg hover:bg-blue-50"
                        title="Twitter"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-700 transition-colors duration-300 p-2 rounded-lg hover:bg-blue-50"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team History & Achievements */}
      <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From a small group of passionate students to a leading academic publication platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-primary font-bold text-lg mb-2">{achievement.year}</div>
                  <h3 className="font-serif font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values & Culture */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Our Values & Culture
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Excellence</h3>
                    <p className="text-gray-600">We maintain the highest standards in academic journalism and research.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Collaboration</h3>
                    <p className="text-gray-600">We foster an inclusive environment where diverse perspectives thrive.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Impact</h3>
                    <p className="text-gray-600">We create content that makes a meaningful difference in academic discourse.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Growth</h3>
                    <p className="text-gray-600">We invest in the development and success of every team member.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Join Our Mission</h3>
              <p className="text-gray-700 mb-6">
                We're always looking for passionate individuals who share our commitment to 
                academic excellence and student empowerment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-600">Flexible remote work opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-600">Professional development support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-600">Mentorship from industry experts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-600">Access to exclusive academic networks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our team of dedicated scholars and help shape the future of academic journalism.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/submit"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Submit Your Work
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}