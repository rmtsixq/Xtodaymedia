import React from 'react';
import Image from 'next/image';
import { mockTeamMembers } from '@/data/mockData';

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-bg-subtle py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
              Our Team
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Meet the dedicated journalists, editors, and content creators who work tirelessly 
              to bring you quality news and analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockTeamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  
                  {/* Contact Info */}
                  {member.email && (
                    <div className="mb-4">
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-sm text-text-muted hover:text-primary transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>
                  )}

                  {/* Social Links */}
                  {member.socialLinks && (
                    <div className="flex space-x-3">
                      {member.socialLinks.twitter && (
                        <a 
                          href={member.socialLinks.twitter}
                          className="p-2 rounded-full bg-bg-subtle hover:bg-primary/10 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="w-4 h-4 text-text-secondary hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                          </svg>
                        </a>
                      )}
                      {member.socialLinks.linkedin && (
                        <a 
                          href={member.socialLinks.linkedin}
                          className="p-2 rounded-full bg-bg-subtle hover:bg-primary/10 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="w-4 h-4 text-text-secondary hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      )}
                      {member.socialLinks.website && (
                        <a 
                          href={member.socialLinks.website}
                          className="p-2 rounded-full bg-bg-subtle hover:bg-primary/10 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="w-4 h-4 text-text-secondary hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-bg-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">
            Join Our Team
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            We're always looking for talented journalists, editors, and content creators 
            who share our commitment to quality journalism and public service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/get-involved/join-us"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              View Open Positions
            </a>
            <a 
              href="/get-involved/contact-us"
              className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}