'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
            <span className="font-bold text-xl">ExpenseTracker</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/concur-app" className="hover:text-blue-200 font-medium">
              Dashboard
            </Link>
            <Link href="/concur-app/expenses" className="hover:text-blue-200 font-medium">
              Expenses
            </Link>
            <Link href="/concur-app/reports" className="hover:text-blue-200 font-medium">
              Reports
            </Link>
            <Link href="/concur-app/approvals" className="hover:text-blue-200 font-medium">
              Approvals
            </Link>
          </nav>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button 
                className="flex items-center space-x-1 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="font-medium">JD</span>
                </div>
                <span>John Doe</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link 
                    href="/concur-app/profile" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Your Profile
                  </Link>
                  <Link 
                    href="/concur-app/settings" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <div className="border-t border-gray-100"></div>
                  <Link 
                    href="/" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/concur-app" 
                className="hover:bg-blue-600 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                href="/concur-app/expenses" 
                className="hover:bg-blue-600 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Expenses
              </Link>
              <Link 
                href="/concur-app/reports" 
                className="hover:bg-blue-600 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Reports
              </Link>
              <Link 
                href="/concur-app/approvals" 
                className="hover:bg-blue-600 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Approvals
              </Link>
              <div className="border-t border-blue-600 pt-2">
                <Link 
                  href="/concur-app/profile" 
                  className="hover:bg-blue-600 px-3 py-2 rounded block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Your Profile
                </Link>
                <Link 
                  href="/concur-app/settings" 
                  className="hover:bg-blue-600 px-3 py-2 rounded block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Settings
                </Link>
                <Link 
                  href="/" 
                  className="hover:bg-blue-600 px-3 py-2 rounded block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign out
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
