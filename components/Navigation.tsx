'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Articles', href: '/articles' },
    { name: 'Videos', href: '/videos' },
    { name: 'Podcasts', href: '/podcasts' },
    {
      name: 'About Us',
      href: '#',
      dropdown: [
        { name: 'Aim & Scope', href: '/about-us/aim-and-scope' },
        { name: 'Our Team', href: '/about-us/our-team' },
        { name: 'Publishing Standards', href: '/about-us/publishing-standards' },
        { name: 'Editorial Guidelines', href: '/about-us/editorial-guidelines' },
        { name: 'Copyright Policy', href: '/about-us/copyright-policy' }
      ]
    },
    {
      name: 'Get Involved',
      href: '#',
      dropdown: [
        { name: 'Contact Us', href: '/get-involved/contact-us' },
        { name: 'Join Us', href: '/get-involved/join-us' },
        { name: 'FAQ', href: '/get-involved/faq' }
      ]
    }
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/blackedlogo.png"
              alt="Hevsel Times Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      className="flex items-center space-x-1 text-gray-700 hover:text-primary font-medium transition-colors duration-200"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Desktop Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 transition-all duration-200 ${
                        activeDropdown === item.name
                          ? 'opacity-100 visible transform translate-y-0'
                          : 'opacity-0 invisible transform -translate-y-2'
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-light hover:text-primary transition-colors duration-200"
                          onClick={handleLinkClick}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={menuRef}
          className={`lg:hidden fixed top-16 left-0 w-full bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'opacity-100 visible transform translate-y-0'
              : 'opacity-0 invisible transform -translate-y-4'
          }`}
          style={{ height: isMenuOpen ? 'auto' : '0', overflow: 'hidden' }}
        >
          <div className="px-4 py-4 space-y-4 max-h-screen overflow-y-auto">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full text-left text-gray-700 hover:text-primary font-medium py-2 transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {/* Mobile Dropdown */}
                    <div
                      className={`ml-4 space-y-2 transition-all duration-200 ${
                        activeDropdown === item.name
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0 overflow-hidden'
                      }`}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-sm text-gray-600 hover:text-primary py-2 transition-colors duration-200"
                          onClick={handleLinkClick}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-gray-700 hover:text-primary font-medium py-2 transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={() => setIsMenuOpen(false)}
          style={{ top: '64px' }}
        />
      )}
    </nav>
  );
};

export default Navigation;