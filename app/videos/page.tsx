import React from 'react';
import { Play, Headphones } from 'lucide-react';

export default function VideosPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Videos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our video content featuring expert discussions, educational content, and in-depth analysis on current topics.
            </p>
          </div>
        </div>
      </section>



      {/* No Videos Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <Play className="w-16 h-16 text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              No videos yet
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our video content library is being curated. Check back soon for engaging video content featuring expert discussions, educational material, and in-depth analysis.
            </p>
            <div className="bg-primary-light p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-2">Coming Soon</h3>
              <p className="text-gray-700">
                We're preparing high-quality video content that will complement our written articles. Subscribe to our newsletter to get notified when new videos are published.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Channel CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Subscribe to Our YouTube Channel
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Stay updated with our latest video content by subscribing to our YouTube channel. 
            Get notified when we publish new discussions, interviews, and educational content.
          </p>
          <a
            href="https://youtube.com/@xtimes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            <Play className="w-6 h-6" />
            <span>Subscribe on YouTube</span>
          </a>
        </div>
      </section>


    </div>
  );
}