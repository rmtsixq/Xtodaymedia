import React from 'react';
import Link from 'next/link';
import { Mail, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Content',
      links: [
        { name: 'Articles', href: '/articles' },
        { name: 'Videos', href: '/videos' },
        { name: 'Podcasts', href: '/podcasts' },
        { name: 'Newsletter', href: '#newsletter' }
      ]
    },
    {
      title: 'About Us',
      links: [
        { name: 'Aim & Scope', href: '/about-us/aim-and-scope' },
        { name: 'Our Team', href: '/about-us/our-team' },
        { name: 'Publishing Standards', href: '/about-us/publishing-standards' },
        { name: 'Editorial Guidelines', href: '/about-us/editorial-guidelines' },
        { name: 'Copyright Policy', href: '/about-us/copyright-policy' }
      ]
    },
    {
      title: 'Get Involved',
      links: [
        { name: 'Contact Us', href: '/get-involved/contact-us' },
        { name: 'Join Us', href: '/get-involved/join-us' },
        { name: 'FAQ', href: '/get-involved/faq' },
        { name: 'Community Guidelines', href: '/about-us/editorial-guidelines' }
      ]
    },
    {
      title: 'Categories',
      links: [
        { name: 'STEM', href: '/articles?category=STEM' },
        { name: 'Social Studies', href: '/articles?category=Social Studies' },
        { name: 'Politics', href: '/articles?category=Politics' },
        { name: 'Philosophy', href: '/articles?category=Philosophy' },
        { name: 'Art & Literature', href: '/articles?category=Art & Literature' },
        { name: 'Women Rights', href: '/articles?category=Women Rights' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/xtimes' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/xtimes' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@xtimes' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/xtimes' },
    { name: 'Email', icon: Mail, href: 'mailto:contact@xtimes.org' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Join Our Newsletter
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Stay updated with our latest content. Subscribe now to never miss articles, podcasts, and videos.
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white text-gray-900"
              />
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-3xl font-serif font-bold text-white">
                X times
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              The Middle East's largest student-led academic journal, delivering trustworthy journalism 
              through articles, videos, and podcasts with a focus on user experience and accessibility.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} X times. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/about-us/copyright-policy"
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/about-us/editorial-guidelines"
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/get-involved/contact-us"
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;