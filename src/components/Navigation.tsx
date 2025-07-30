'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [getInvolvedOpen, setGetInvolvedOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    setAboutUsOpen(false);
    setGetInvolvedOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Articles', href: '/articles' },
    { name: 'Videos', href: '/videos' },
    { name: 'Podcasts', href: '/podcasts' },
  ];

  const aboutUsItems = [
    { name: 'Aim and Scope', href: '/about-us/aim-and-scope' },
    { name: 'Our Team', href: '/about-us/our-team' },
    { name: 'Publishing Standards', href: '/about-us/publishing-standards' },
    { name: 'Editorial Guidelines', href: '/about-us/editorial-guidelines' },
    { name: 'Copyright Policy', href: '/about-us/copyright-policy' },
  ];

  const getInvolvedItems = [
    { name: 'Contact Us', href: '/get-involved/contact-us' },
    { name: 'Join Us', href: '/get-involved/join-us' },
    { name: 'FAQ', href: '/get-involved/faq' },
  ];

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-border-light sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/blackedlogo.png"
                alt="Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-primary hover:text-primary hover:bg-bg-subtle focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-all duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <nav
        className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
      >
        <div className="p-6">
          {/* Main Menu Items */}
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? 'bg-primary text-white'
                      : 'text-text-primary hover:bg-bg-subtle hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* About Us Section */}
          <div className="mt-8">
            <button
              onClick={() => setAboutUsOpen(!aboutUsOpen)}
              className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-text-primary hover:bg-bg-subtle hover:text-primary rounded-lg transition-all duration-200"
            >
              About Us
              <svg
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  aboutUsOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                aboutUsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <ul className="mt-2 space-y-1 pl-4">
                {aboutUsItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 rounded-lg text-base transition-all duration-200 ${
                        pathname === item.href
                          ? 'bg-primary text-white'
                          : 'text-text-secondary hover:bg-bg-subtle hover:text-primary'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Get Involved Section */}
          <div className="mt-6">
            <button
              onClick={() => setGetInvolvedOpen(!getInvolvedOpen)}
              className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-text-primary hover:bg-bg-subtle hover:text-primary rounded-lg transition-all duration-200"
            >
              Get Involved
              <svg
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  getInvolvedOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                getInvolvedOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <ul className="mt-2 space-y-1 pl-4">
                {getInvolvedItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 rounded-lg text-base transition-all duration-200 ${
                        pathname === item.href
                          ? 'bg-primary text-white'
                          : 'text-text-secondary hover:bg-bg-subtle hover:text-primary'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;