import React from 'react';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-bg-subtle py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-border-light p-8">
                <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      required
                      className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="story-tip">Story Tip</option>
                      <option value="feedback">Feedback</option>
                      <option value="technical">Technical Issue</option>
                      <option value="partnership">Partnership</option>
                      <option value="press">Press Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="mt-1 h-4 w-4 text-primary focus:ring-primary border-border-light rounded"
                    />
                    <label htmlFor="newsletter" className="text-sm text-text-secondary">
                      I would like to receive your newsletter and stay updated with your latest content.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                
                {/* Contact Info */}
                <div className="bg-bg-subtle p-6 rounded-lg">
                  <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
                    Get in Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="text-text-primary font-medium">Email</p>
                        <p className="text-text-secondary text-sm">hello@mediawebsite.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="text-text-primary font-medium">Address</p>
                        <p className="text-text-secondary text-sm">123 Media Street<br />News City, NC 12345</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Times */}
                <div className="bg-bg-subtle p-6 rounded-lg">
                  <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
                    Response Times
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">General Inquiries</span>
                      <span className="text-text-primary font-medium">1-2 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Story Tips</span>
                      <span className="text-text-primary font-medium">Same day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Technical Issues</span>
                      <span className="text-text-primary font-medium">1-3 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Press Inquiries</span>
                      <span className="text-text-primary font-medium">4-6 hours</span>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-bg-subtle p-6 rounded-lg">
                  <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-3">
                    <a href="#" className="p-2 bg-white rounded-lg hover:bg-primary/10 transition-colors">
                      <svg className="w-5 h-5 text-text-secondary hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="p-2 bg-white rounded-lg hover:bg-primary/10 transition-colors">
                      <svg className="w-5 h-5 text-text-secondary hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="p-2 bg-white rounded-lg hover:bg-primary/10 transition-colors">
                      <svg className="w-5 h-5 text-text-secondary hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}