import React from 'react';

export default function FAQPage() {
  const faqData = [
    {
      category: 'General',
      questions: [
        {
          question: 'What type of content do you publish?',
          answer: 'We publish in-depth journalism covering politics, technology, environment, business, health, and social issues. Our content includes articles, videos, podcasts, and multimedia stories that serve the public interest.'
        },
        {
          question: 'How often do you publish new content?',
          answer: 'We publish new articles daily, with 2-3 videos per week and weekly podcast episodes. Breaking news is covered as it happens.'
        },
        {
          question: 'Is your content free to read?',
          answer: 'Yes, all our content is free to read. We believe quality journalism should be accessible to everyone. We are supported through donations and partnerships.'
        }
      ]
    },
    {
      category: 'Contributing',
      questions: [
        {
          question: 'Do you accept freelance submissions?',
          answer: 'Yes, we welcome pitches from freelance writers. Please review our editorial guidelines and send your pitch to editors@mediawebsite.com with "Freelance Pitch" in the subject line.'
        },
        {
          question: 'What are your submission guidelines?',
          answer: 'Articles should be 800-2000 words, well-researched, and include at least two sources. Include a brief bio and relevant clips. We respond to all submissions within 2 weeks.'
        },
        {
          question: 'Do you pay freelance contributors?',
          answer: 'Yes, we pay competitive rates for accepted articles. Payment rates vary based on length, complexity, and experience level. Details are provided upon acceptance.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'How can I subscribe to your newsletter?',
          answer: 'You can subscribe using the newsletter signup form on our homepage or in the footer. We send weekly digests of our best content.'
        },
        {
          question: 'Do you have a mobile app?',
          answer: 'Currently, we don\'t have a dedicated mobile app, but our website is fully optimized for mobile devices and works great in mobile browsers.'
        },
        {
          question: 'How do I report a technical issue?',
          answer: 'Please contact us through our contact form and select "Technical Issue" as the subject. Include details about your browser, device, and the specific problem you\'re experiencing.'
        }
      ]
    },
    {
      category: 'Editorial',
      questions: [
        {
          question: 'How do you ensure accuracy in your reporting?',
          answer: 'We have a rigorous fact-checking process involving multiple editors, source verification, and legal review for sensitive content. We correct errors promptly and transparently.'
        },
        {
          question: 'What is your editorial independence policy?',
          answer: 'We maintain complete editorial independence from advertisers, donors, and political organizations. Our content decisions are made solely by our editorial team based on newsworthiness and public interest.'
        },
        {
          question: 'How do you handle corrections?',
          answer: 'We issue corrections promptly when errors are identified. Minor corrections are noted at the bottom of articles, while significant errors receive prominent correction notices.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-bg-subtle py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Find answers to common questions about our publication, submission process, and policies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search FAQ */}
          <div className="mb-12">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search FAQs..."
                className="w-full pl-10 pr-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-heading font-bold text-text-primary mb-6 border-b border-border-light pb-3">
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => (
                    <details key={questionIndex} className="group bg-bg-subtle rounded-lg overflow-hidden">
                      <summary className="flex justify-between items-center w-full p-6 text-left bg-bg-subtle hover:bg-primary/5 transition-colors cursor-pointer list-none">
                        <span className="text-lg font-heading font-semibold text-text-primary pr-4">
                          {faq.question}
                        </span>
                        <svg className="flex-shrink-0 w-5 h-5 text-primary transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      
                      <div className="px-6 pb-6">
                        <div className="border-t border-border-light pt-4">
                          <p className="text-text-secondary leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 bg-primary/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">
              Still have questions?
            </h2>
            <p className="text-text-secondary mb-6">
              Can't find what you're looking for? Our team is here to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/get-involved/contact-us"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Contact Us
              </a>
              <a 
                href="mailto:help@mediawebsite.com"
                className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
              >
                Email Support
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-bg-subtle rounded-lg">
              <svg className="w-12 h-12 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
                Editorial Guidelines
              </h3>
              <p className="text-sm text-text-secondary mb-4">
                Learn about our writing standards and editorial process.
              </p>
              <a href="/about-us/editorial-guidelines" className="text-primary hover:text-primary/80 text-sm font-medium">
                Read Guidelines →
              </a>
            </div>

            <div className="text-center p-6 bg-bg-subtle rounded-lg">
              <svg className="w-12 h-12 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
                Join Our Team
              </h3>
              <p className="text-sm text-text-secondary mb-4">
                Explore career opportunities and see how you can contribute.
              </p>
              <a href="/get-involved/join-us" className="text-primary hover:text-primary/80 text-sm font-medium">
                View Positions →
              </a>
            </div>

            <div className="text-center p-6 bg-bg-subtle rounded-lg">
              <svg className="w-12 h-12 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
                Publishing Standards
              </h3>
              <p className="text-sm text-text-secondary mb-4">
                Learn about our commitment to quality journalism.
              </p>
              <a href="/about-us/publishing-standards" className="text-primary hover:text-primary/80 text-sm font-medium">
                Read Standards →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}