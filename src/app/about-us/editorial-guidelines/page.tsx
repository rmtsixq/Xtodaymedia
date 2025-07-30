import React from 'react';

export default function EditorialGuidelinesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-bg-subtle py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
              Editorial Guidelines
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Comprehensive guidelines that ensure consistency, quality, and ethical standards 
              across all our editorial content and journalistic practices.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">Writing Standards</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Clarity and Accessibility',
                    description: 'Write clearly and concisely for a general audience. Avoid jargon and explain technical terms when necessary.'
                  },
                  {
                    title: 'Active Voice',
                    description: 'Use active voice whenever possible. It makes writing more direct and engaging.'
                  },
                  {
                    title: 'Attribution',
                    description: 'Always attribute information to sources. Use direct quotes when they add value or authenticity.'
                  },
                  {
                    title: 'Fact-Based Reporting',
                    description: 'Stick to verifiable facts. Clearly distinguish between facts, analysis, and opinion.'
                  }
                ].map((guideline) => (
                  <div key={guideline.title} className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                      {guideline.title}
                    </h3>
                    <p className="text-text-secondary">
                      {guideline.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">Source Guidelines</h2>
              <div className="bg-bg-subtle p-8 rounded-lg">
                <ul className="space-y-4 text-text-secondary">
                  <li className="flex items-start space-x-3">
                    <span className="text-primary">•</span>
                    <span>Always verify information with at least two independent sources for major claims</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary">•</span>
                    <span>Protect confidential sources while being transparent about why anonymity is necessary</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary">•</span>
                    <span>Use on-the-record quotes whenever possible</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary">•</span>
                    <span>Clearly identify sources' credentials and potential conflicts of interest</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">Ethics & Conflicts of Interest</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Financial Conflicts',
                    points: ['Disclose any financial interests in stories', 'No trading on non-public information', 'Avoid gifts that could influence coverage']
                  },
                  {
                    title: 'Personal Relationships',
                    points: ['Disclose personal relationships with sources', 'Recuse from stories involving close contacts', 'Maintain professional boundaries']
                  },
                  {
                    title: 'Political Activities',
                    points: ['Avoid partisan political activities', 'Disclose any political affiliations', 'Maintain editorial independence']
                  },
                  {
                    title: 'Social Media',
                    points: ['Professional conduct on all platforms', 'No breaking news on personal accounts', 'Respect privacy and confidentiality']
                  }
                ].map((category) => (
                  <div key={category.title} className="border border-border-light p-6 rounded-lg">
                    <h3 className="text-lg font-heading font-semibold text-text-primary mb-3">
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.points.map((point, index) => (
                        <li key={index} className="text-sm text-text-secondary">
                          • {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}