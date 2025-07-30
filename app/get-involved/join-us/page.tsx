import React from 'react';
import Link from 'next/link';
import { Users, BookOpen, PenTool, VideoIcon, Headphones, Mail, ArrowRight, CheckCircle } from 'lucide-react';

export default function JoinUsPage() {
  const positions = [
    {
      title: 'Writer',
      icon: PenTool,
      description: 'Join our team of talented writers creating compelling articles across various disciplines.',
      requirements: ['Strong writing skills', 'Research experience', 'Academic background', 'Passion for journalism'],
      time: '5-10 hours/week'
    },
    {
      title: 'Editor',
      icon: BookOpen,
      description: 'Help shape our content by editing and reviewing articles for publication.',
      requirements: ['Excellent language skills', 'Editorial experience', 'Attention to detail', 'Leadership abilities'],
      time: '8-15 hours/week'
    },
    {
      title: 'Video Producer',
      icon: VideoIcon,
      description: 'Create engaging video content including interviews, documentaries, and educational materials.',
      requirements: ['Video editing skills', 'Creative vision', 'Technical expertise', 'Storytelling ability'],
      time: '10-20 hours/week'
    },
    {
      title: 'Podcast Host/Producer',
      icon: Headphones,
      description: 'Host engaging discussions and produce high-quality podcast content.',
      requirements: ['Communication skills', 'Audio editing knowledge', 'Interview experience', 'Subject expertise'],
      time: '6-12 hours/week'
    }
  ];

  const benefits = [
    'Professional development and portfolio building',
    'Networking with industry professionals',
    'Flexible schedule and remote work',
    'Published bylines and recognition',
    'Access to exclusive events and interviews',
    'Mentorship opportunities'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-accent text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                Become part of the Middle East's largest student-led academic journal. 
                Shape the future of journalism and make your voice heard globally.
              </p>
              <Link 
                href="#positions"
                className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <span>Explore Positions</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Why Join X times?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join a community of passionate individuals committed to creating meaningful impact through journalism and academic discourse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600">
              Find the perfect role that matches your skills and interests.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {positions.map((position, index) => {
              const IconComponent = position.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200 hover:border-primary transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-light rounded-full p-3 mr-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-gray-900">{position.title}</h3>
                      <p className="text-primary font-medium">{position.time}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{position.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href="/get-involved/contact-us"
                    className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to join our team and start making an impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Submit Application</h3>
              <p className="text-gray-600">
                Send us your resume, cover letter, and portfolio through our contact form.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Interview Process</h3>
              <p className="text-gray-600">
                Join us for a virtual interview to discuss your experience and interests.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Welcome Aboard</h3>
              <p className="text-gray-600">
                Start your journey with us and begin contributing to meaningful journalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join our mission to create meaningful journalism and academic discourse. 
            We're excited to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved/contact-us"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200"
            >
              Apply Now
            </Link>
            <Link
              href="/about-us/our-team"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}