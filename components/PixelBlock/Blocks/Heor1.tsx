'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const Banner1 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className='border-b-1 sticky top-0 z-50 w-full shadow-sm border-b border-zinc-900/5 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-200'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='relative flex items-center justify-between h-16 md:h-20'>
            {/* Logo */}
            <Link className='flex items-center gap-2' href='/'>
              <span className='text-lg font-bold text-black dark:text-zinc-200'>
                PixelBlockUI
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <div className='md:hidden'>
              <button
                type='button'
                onClick={toggleMobileMenu}
                className='inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-zinc-500 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                aria-controls='mobile-menu'
                aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              >
                <span className='sr-only'>Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16m-7 6h7'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className='hidden md:block'>
              <div className='flex space-x-4'>
                <Link href='#' className='text-base font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-200'>
                  About
                </Link>
                <Link href='#' className='text-base font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-200'>
                  Features
                </Link>
                <Link href='#' className='text-base font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-200'>
                  Services
                </Link>
                <Link href='#' className='text-base font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-200'>
                  Pricing
                </Link>
                <Link href='#' className='text-base font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-200'>
                  Contacts
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id='mobile-menu'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <Link href='#' className='block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-200'>
                About
              </Link>
              <Link href='#' className='block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-200'>
                Features
              </Link>
              <Link href='#' className='block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-200'>
                Services
              </Link>
              <Link href='#' className='block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-200'>
                Pricing
              </Link>
              <Link href='#' className='block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-200'>
                Contacts
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className='bg-white'>
        <div className='relative isolate px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl py-32'>
            <div className='text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                PixelBlockUI Builder for Beautiful Landings
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                We ve done it carefully and simply. Combined with the ingredients makes for beautiful landings. It is definitely the tool you need to speed up your design process.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <Link
                  href='#'
                  className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Get started
                </Link>
                <Link
                  href='#'
                  className='group flex items-center gap-2 text-sm font-semibold leading-6 text-gray-900'
                >
                  Learn more{' '}
                  <span
                    aria-hidden='true'
                    className='relative inline-flex translate-x-0 transition duration-300 group-hover:translate-x-2'
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
