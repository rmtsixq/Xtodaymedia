import React from 'react';

export default function AimAndScopePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-bg-subtle py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
              Aim and Scope
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Our mission is to deliver independent, high-quality journalism that informs, 
              educates, and empowers our global audience through trusted reporting and analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Mission Statement */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">Our Mission</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                We believe that quality journalism is essential to a functioning democracy and an informed society. 
                Our mission is to provide accurate, unbiased, and comprehensive coverage of the stories that matter most, 
                from local community issues to global affairs that shape our world.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Through rigorous reporting, thoughtful analysis, and innovative storytelling, we strive to give our 
                readers the information they need to make informed decisions about their lives, communities, and the world around them.
              </p>
            </div>

            {/* Vision */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">Our Vision</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                We envision a world where everyone has access to reliable, independent journalism that serves the 
                public interest. We aim to be a trusted voice in an increasingly complex media landscape, bridging 
                divides and fostering understanding through honest, transparent reporting.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Our vision extends beyond traditional news reporting to encompass multimedia storytelling, data-driven 
                journalism, and innovative formats that meet our audience where they are and how they consume information.
              </p>
            </div>

            {/* Editorial Scope */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">Editorial Scope</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our editorial coverage encompasses a broad range of topics that impact our readers' lives and society at large:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {[
                  {
                    title: 'Politics & Governance',
                    description: 'In-depth coverage of political developments, policy analysis, and government accountability.'
                  },
                  {
                    title: 'Technology & Innovation',
                    description: 'Exploring how emerging technologies shape society, economy, and daily life.'
                  },
                  {
                    title: 'Environment & Climate',
                    description: 'Comprehensive reporting on environmental issues, climate change, and sustainability.'
                  },
                  {
                    title: 'Business & Economics',
                    description: 'Analysis of economic trends, market developments, and their impact on communities.'
                  },
                  {
                    title: 'Health & Science',
                    description: 'Medical breakthroughs, public health issues, and scientific discoveries that matter.'
                  },
                  {
                    title: 'Society & Culture',
                    description: 'Stories about communities, cultural trends, and social movements that shape our world.'
                  }
                ].map((scope) => (
                  <div key={scope.title} className="bg-bg-subtle p-6 rounded-lg">
                    <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
                      {scope.title}
                    </h3>
                    <p className="text-text-secondary">
                      {scope.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">Core Values</h2>
              <div className="space-y-6">
                {[
                  {
                    value: 'Independence',
                    description: 'We maintain editorial independence from political, corporate, and other external influences.'
                  },
                  {
                    value: 'Accuracy',
                    description: 'We are committed to factual accuracy and will correct errors promptly and transparently.'
                  },
                  {
                    value: 'Transparency',
                    description: 'We are open about our reporting methods, sources, and potential conflicts of interest.'
                  },
                  {
                    value: 'Fairness',
                    description: 'We strive to present multiple perspectives and give all parties a fair opportunity to respond.'
                  },
                  {
                    value: 'Public Service',
                    description: 'We prioritize stories that serve the public interest and hold power accountable.'
                  }
                ].map((item, index) => (
                  <div key={item.value} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
                        {item.value}
                      </h3>
                      <p className="text-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Commitment to Quality */}
            <div className="bg-primary/10 p-8 rounded-lg">
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">Our Commitment to Quality</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We believe that quality journalism requires time, resources, and expertise. Our team of experienced 
                journalists, editors, and multimedia professionals work together to ensure that every piece of content 
                we publish meets the highest standards of accuracy, clarity, and relevance.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We invest in training, fact-checking, and continuous improvement to maintain our credibility and 
                serve our audience effectively. Our commitment extends to embracing new technologies and storytelling 
                methods that enhance our ability to inform and engage our readers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}