'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Search, Mail } from 'lucide-react';

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
      name: 'About',
      href: '#',
      dropdown: [
        { name: 'Aim & Scope', href: '/about-us/aim-and-scope' },
        { name: 'Our Team', href: '/about-us/our-team' },
        { name: 'Alumni Success', href: '/alumni-success' },
        { name: 'Editorial Guidelines', href: '/about-us/editorial-guidelines' }
      ]
    },
    { name: 'Submit', href: '/submit' },
    { name: 'Contact', href: '/contact' }
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
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">X</span>
            </div>
            <div>
              <span className="text-2xl font-serif font-bold text-primary">
                X Times
              </span>
              <div className="text-xs text-gray-500 -mt-1">Academic Journal</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      className="flex items-center space-x-1 text-gray-700 hover:text-primary font-medium transition-colors duration-200 py-2"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Desktop Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 transition-all duration-200 ${
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
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors duration-200 mx-2 rounded-lg"
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
                    className={`text-gray-700 hover:text-primary font-medium transition-colors duration-200 py-2 px-1 ${
                      item.name === 'Submit' 
                        ? 'bg-primary text-white hover:bg-primary-dark px-6 py-2 rounded-lg' 
                        : ''
                    }`}
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Newsletter CTA */}
            <Link
              href="#newsletter"
              className="flex items-center space-x-2 text-primary hover:text-primary-dark font-medium transition-colors duration-200 border border-primary hover:border-primary-dark px-4 py-2 rounded-lg"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden xl:inline">Newsletter</span>
            </Link>
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
          className={`lg:hidden fixed top-20 left-0 w-full bg-white border-t border-gray-200 transition-all duration-300 ease-in-out shadow-lg ${
            isMenuOpen
              ? 'opacity-100 visible transform translate-y-0'
              : 'opacity-0 invisible transform -translate-y-4'
          }`}
          style={{ height: isMenuOpen ? 'auto' : '0', overflow: 'hidden' }}
        >
          <div className="px-4 py-6 space-y-4 max-h-screen overflow-y-auto">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full text-left text-gray-700 hover:text-primary font-medium py-3 transition-colors duration-200"
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
                          className="block text-sm text-gray-600 hover:text-primary py-2 pl-4 border-l-2 border-gray-200 hover:border-primary transition-colors duration-200"
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
                    className={`block font-medium py-3 transition-colors duration-200 ${
                      item.name === 'Submit'
                        ? 'bg-primary text-white hover:bg-primary-dark px-4 py-3 rounded-lg text-center'
                        : 'text-gray-700 hover:text-primary'
                    }`}
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile Newsletter CTA */}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="#newsletter"
                className="flex items-center justify-center space-x-2 text-primary hover:text-primary-dark font-medium transition-colors duration-200 border border-primary hover:border-primary-dark px-4 py-3 rounded-lg"
                onClick={handleLinkClick}
              >
                <Mail className="w-4 h-4" />
                <span>Subscribe to Newsletter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={() => setIsMenuOpen(false)}
          style={{ top: '80px' }}
        />
      )}
    </nav>
  );
};

export default Navigation;