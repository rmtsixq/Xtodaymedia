import React from 'react';

export default function CopyrightPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-bg-subtle py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
              Copyright Policy
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Our policies regarding copyright usage, content licensing, and intellectual property 
              rights that protect both our work and respect others' creative rights.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">Our Content Rights</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                All content published on this website, including articles, videos, podcasts, images, and multimedia content, 
                is protected by copyright law. This includes original reporting, analysis, photography, and graphic design.
              </p>
              <div className="bg-bg-subtle p-6 rounded-lg">
                <h3 className="text-lg font-heading font-semibold text-text-primary mb-3">
                  What This Means:
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• You may read and share links to our articles</li>
                  <li>• Brief excerpts (up to 150 words) may be quoted with proper attribution</li>
                  <li>• Reproduction of full articles requires written permission</li>
                  <li>• Commercial use of our content is prohibited without licensing</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">Fair Use Guidelines</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                We support fair use of our content for educational, journalistic, and commentary purposes. 
                Here are our guidelines for fair use:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Educational Use',
                    description: 'Teachers and students may use excerpts for classroom discussion and academic papers with proper citation.',
                    allowed: ['Classroom presentations', 'Academic research', 'Student projects', 'Course materials']
                  },
                  {
                    title: 'Journalistic Use',
                    description: 'Other news organizations may quote our reporting with attribution when covering the same story.',
                    allowed: ['News coverage', 'Commentary', 'Fact-checking', 'Analysis']
                  }
                ].map((category) => (
                  <div key={category.title} className="border border-border-light p-6 rounded-lg">
                    <h3 className="text-lg font-heading font-semibold text-text-primary mb-3">
                      {category.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="space-y-1">
                      {category.allowed.map((item) => (
                        <div key={item} className="text-xs text-text-muted">
                          ✓ {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">Third-Party Content</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                We respect the intellectual property rights of others and expect the same respect for our content. 
                When we use third-party content, we do so under proper licensing or fair use provisions.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    type: 'Images & Photography',
                    policy: 'We use licensed stock photos, Creative Commons images, or our own photography. All images are properly attributed.'
                  },
                  {
                    type: 'Video & Audio',
                    policy: 'Embedded content is used with permission or under fair use. We create original multimedia content when possible.'
                  },
                  {
                    type: 'Data & Research',
                    policy: 'We cite all sources for data, studies, and research. Original analysis is clearly distinguished from source material.'
                  }
                ].map((item) => (
                  <div key={item.type} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-heading font-semibold text-text-primary mb-1">
                        {item.type}
                      </h3>
                      <p className="text-text-secondary text-sm">
                        {item.policy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">DMCA & Takedown Requests</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                If you believe we have used your copyrighted material without permission, please contact us with a formal 
                takedown request including the following information:
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <h3 className="text-lg font-heading font-semibold text-text-primary mb-3">
                  Required Information:
                </h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• Identification of the copyrighted work</li>
                  <li>• Location of the allegedly infringing material on our site</li>
                  <li>• Your contact information</li>
                  <li>• A good faith statement that the use is not authorized</li>
                  <li>• A statement of accuracy under penalty of perjury</li>
                  <li>• Your physical or electronic signature</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 p-8 rounded-lg">
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">Contact for Permissions</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                For licensing inquiries, permission requests, or copyright questions, please contact our legal team:
              </p>
              <div className="space-y-2 text-text-secondary">
                <p><strong>Email:</strong> legal@mediawebsite.com</p>
                <p><strong>Subject Line:</strong> Copyright/Licensing Inquiry</p>
                <p><strong>Response Time:</strong> 5-7 business days</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}