import React from 'react';

export default function PublishingStandardsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-bg-subtle py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
              Publishing Standards
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Our commitment to excellence in journalism through rigorous standards 
              and ethical practices that guide every piece of content we publish.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Quality Standards */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">Quality Standards</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Every piece of content published on our platform must meet our stringent quality standards. 
                These standards ensure that our readers receive accurate, well-researched, and professionally 
                presented information that serves the public interest.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    title: 'Accuracy & Verification',
                    description: 'All facts must be verified through multiple reliable sources before publication.'
                  },
                  {
                    title: 'Editorial Review',
                    description: 'Multiple editorial reviews ensure content meets our quality and style standards.'
                  },
                  {
                    title: 'Source Protection',
                    description: 'We protect our sources while maintaining transparency about our reporting methods.'
                  },
                  {
                    title: 'Legal Compliance',
                    description: 'All content is reviewed for legal compliance and potential issues before publication.'
                  }
                ].map((standard) => (
                  <div key={standard.title} className="border border-border-light p-6 rounded-lg">
                    <h3 className="text-lg font-heading font-semibold text-text-primary mb-3">
                      {standard.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {standard.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Categories */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">Content Categories</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                We publish various types of content, each with specific standards and requirements:
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    category: 'Breaking News',
                    description: 'Immediate reporting of significant events with verified facts, updated as new information becomes available.',
                    standards: ['Real-time fact checking', 'Source verification', 'Regular updates', 'Clear attribution']
                  },
                  {
                    category: 'Investigative Reports',
                    description: 'In-depth investigations requiring extensive research, multiple sources, and comprehensive fact-checking.',
                    standards: ['Multiple source confirmation', 'Document verification', 'Legal review', 'Extended editorial process']
                  },
                  {
                    category: 'Analysis & Opinion',
                    description: 'Expert analysis and editorial opinions clearly labeled as such, with transparent disclosure of any conflicts of interest.',
                    standards: ['Clear labeling', 'Expert credentials', 'Conflict disclosure', 'Balanced perspective']
                  },
                  {
                    category: 'Multimedia Content',
                    description: 'Videos, podcasts, and interactive content that meet the same accuracy standards as written journalism.',
                    standards: ['Audio/visual quality', 'Fact verification', 'Clear narration', 'Accessible formatting']
                  }
                ].map((item) => (
                  <div key={item.category} className="bg-bg-subtle p-6 rounded-lg">
                    <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
                      {item.category}
                    </h3>
                    <p className="text-text-secondary mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.standards.map((standard) => (
                        <span key={standard} className="px-3 py-1 bg-white text-text-secondary text-sm rounded-full">
                          {standard}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Publication Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">Publication Process</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our multi-stage publication process ensures quality and accuracy at every step:
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: 'Research & Reporting',
                    description: 'Journalists conduct thorough research, interviews, and fact-gathering.'
                  },
                  {
                    step: 2,
                    title: 'Writing & Initial Review',
                    description: 'Stories are written and undergo initial editorial review for structure and content.'
                  },
                  {
                    step: 3,
                    title: 'Fact-Checking',
                    description: 'Dedicated fact-checkers verify all claims, quotes, and data points.'
                  },
                  {
                    step: 4,
                    title: 'Editorial Review',
                    description: 'Senior editors review for accuracy, clarity, and adherence to standards.'
                  },
                  {
                    step: 5,
                    title: 'Legal Review',
                    description: 'Legal review for sensitive content and potential legal issues.'
                  },
                  {
                    step: 6,
                    title: 'Final Approval',
                    description: 'Final approval from Editor-in-Chief before publication.'
                  }
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-text-primary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Corrections & Updates */}
            <div className="bg-primary/10 p-8 rounded-lg">
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">Corrections & Updates</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We are committed to correcting errors promptly and transparently. When mistakes are identified, 
                we issue corrections that clearly identify what was wrong and what has been changed. 
                Significant errors warrant prominent correction notices.
              </p>
              <p className="text-text-secondary leading-relaxed">
                For developing stories, we update our coverage as new information becomes available, 
                clearly marking updates with timestamps and explaining what new information has been added.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}