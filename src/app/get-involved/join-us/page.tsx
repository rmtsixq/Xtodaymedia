import React from 'react';

export default function JoinUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-bg-subtle py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              We're always looking for talented individuals who share our passion for quality journalism 
              and commitment to serving the public interest.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-8 text-center">Current Openings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Senior Reporter',
                  department: 'Editorial',
                  type: 'Full-time',
                  location: 'Remote/Hybrid',
                  description: 'Experienced journalist to cover politics and policy. 5+ years experience required.'
                },
                {
                  title: 'Video Producer',
                  department: 'Multimedia',
                  type: 'Full-time',
                  location: 'On-site',
                  description: 'Create engaging video content for our digital platforms. Experience with documentary-style production preferred.'
                },
                {
                  title: 'Data Journalist',
                  department: 'Editorial',
                  type: 'Full-time',
                  location: 'Remote',
                  description: 'Analyze data and create compelling visualizations to support our investigative reporting.'
                },
                {
                  title: 'Copy Editor',
                  department: 'Editorial',
                  type: 'Part-time',
                  location: 'Remote',
                  description: 'Review and edit articles for accuracy, style, and clarity. Strong attention to detail required.'
                },
                {
                  title: 'Social Media Manager',
                  department: 'Marketing',
                  type: 'Full-time',
                  location: 'Remote',
                  description: 'Manage our social media presence and develop digital engagement strategies.'
                },
                {
                  title: 'Freelance Writers',
                  department: 'Editorial',
                  type: 'Freelance',
                  location: 'Remote',
                  description: 'Contributing writers for various beats including technology, environment, and culture.'
                }
              ].map((job, index) => (
                <div key={index} className="bg-white border border-border-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-heading font-semibold text-text-primary">
                      {job.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      job.type === 'Full-time' ? 'bg-green-100 text-green-800' :
                      job.type === 'Part-time' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {job.type}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-text-secondary">
                      <span className="font-medium">Department:</span> {job.department}
                    </p>
                    <p className="text-sm text-text-secondary">
                      <span className="font-medium">Location:</span> {job.location}
                    </p>
                  </div>
                  <p className="text-sm text-text-secondary mb-4">
                    {job.description}
                  </p>
                  <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-bg-subtle rounded-lg p-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6 text-center">
                Application Form
              </h2>
              <p className="text-text-secondary text-center mb-8">
                Don't see a perfect match? We're always interested in hearing from talented individuals. 
                Submit your information and we'll keep you in mind for future opportunities.
              </p>

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-text-primary mb-2">
                    Position of Interest
                  </label>
                  <select
                    id="position"
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a position</option>
                    <option value="reporter">Reporter</option>
                    <option value="editor">Editor</option>
                    <option value="video-producer">Video Producer</option>
                    <option value="podcast-host">Podcast Host</option>
                    <option value="data-journalist">Data Journalist</option>
                    <option value="photographer">Photographer</option>
                    <option value="freelance">Freelance Contributor</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-text-primary mb-2">
                    Years of Experience
                  </label>
                  <select
                    id="experience"
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-text-primary mb-2">
                    Portfolio/Website URL
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    placeholder="https://"
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-text-primary mb-2">
                    Cover Letter *
                  </label>
                  <textarea
                    id="coverLetter"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                    placeholder="Tell us about yourself, your experience, and why you'd like to join our team..."
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-text-primary mb-2">
                    Resume/CV *
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-border-light border-dashed rounded-lg">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-text-muted" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex text-sm text-text-muted">
                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary/80">
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf,.doc,.docx" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-text-muted">PDF, DOC, DOCX up to 10MB</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-1 h-4 w-4 text-primary focus:ring-primary border-border-light rounded"
                  />
                  <label htmlFor="consent" className="text-sm text-text-secondary">
                    I consent to the processing of my personal data for recruitment purposes and agree to be contacted regarding job opportunities. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}