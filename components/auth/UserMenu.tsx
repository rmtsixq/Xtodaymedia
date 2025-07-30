'use client';

import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  User, 
  Settings, 
  BookOpen, 
  LogOut, 
  ChevronDown,
  Edit,
  Crown
} from 'lucide-react';
import { useAuth } from '@/components/AuthContext';
import { logOut } from '@/lib/auth';

export default function UserMenu() {
  const { user, userProfile } = useAuth();

  if (!user || !userProfile) return null;

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const menuItems = [
    {
      icon: User,
      label: 'Profile',
      href: `/users/${userProfile.displayName?.toLowerCase().replace(/\s+/g, '')}`,
      description: 'View your public profile'
    },
    {
      icon: BookOpen,
      label: 'My Articles',
      href: '/dashboard/articles',
      description: 'Manage your articles'
    },
    {
      icon: Edit,
      label: 'Write',
      href: '/dashboard/write',
      description: 'Create new content'
    },
    {
      icon: Settings,
      label: 'Settings',
      href: '/dashboard/settings',
      description: 'Account preferences'
    }
  ];

  // Add admin items if user is admin
  if (userProfile.role === 'admin') {
    menuItems.push({
      icon: Crown,
      label: 'Admin Panel',
      href: '/admin',
      description: 'Site administration'
    });
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          <div className="relative w-8 h-8">
            {userProfile.photoURL ? (
              <Image
                src={userProfile.photoURL}
                alt={userProfile.displayName}
                fill
                className="rounded-full object-cover"
                sizes="32px"
              />
            ) : (
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">
                  {userProfile.displayName.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
          </div>
          <span className="hidden sm:block text-gray-700 font-medium">
            {userProfile.displayName}
          </span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {/* User Info */}
          <div className="p-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                {userProfile.photoURL ? (
                  <Image
                    src={userProfile.photoURL}
                    alt={userProfile.displayName}
                    fill
                    className="rounded-full object-cover"
                    sizes="48px"
                  />
                ) : (
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">
                      {userProfile.displayName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">
                  {userProfile.displayName}
                </p>
                <p className="text-xs text-gray-500">{userProfile.email}</p>
                <div className="flex items-center mt-1">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    userProfile.role === 'admin' 
                      ? 'bg-purple-100 text-purple-800'
                      : userProfile.role === 'editor'
                      ? 'bg-blue-100 text-blue-800'
                      : userProfile.role === 'writer'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {userProfile.role.charAt(0).toUpperCase() + userProfile.role.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-1">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <Link
                      href={item.href}
                      className={`${
                        active ? 'bg-gray-50' : ''
                      } group flex items-center px-4 py-3 text-sm transition-colors duration-150`}
                    >
                      <div className={`flex items-center justify-center w-8 h-8 rounded-lg mr-3 ${
                        active ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{item.label}</p>
                        <p className="text-xs text-gray-500">{item.description}</p>
                      </div>
                    </Link>
                  )}
                </Menu.Item>
              );
            })}
          </div>

          {/* Logout */}
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleLogout}
                  className={`${
                    active ? 'bg-red-50' : ''
                  } group flex w-full items-center px-4 py-3 text-sm transition-colors duration-150`}
                >
                  <div className={`flex items-center justify-center w-8 h-8 rounded-lg mr-3 ${
                    active ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <LogOut className="w-4 h-4" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-medium text-gray-900">Sign Out</p>
                    <p className="text-xs text-gray-500">Sign out of your account</p>
                  </div>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}