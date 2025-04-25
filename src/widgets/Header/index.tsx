"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { NavBar } from './NavBar';
import { MobileMenu } from './MobileMenu';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { useCart } from '@/features/cart';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-black">
              Shop
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavBar className="hidden md:flex" />

            {/* Desktop Action Icons */}
            <div className="flex items-center space-x-4">
              <button 
                className="p-2 text-gray-500 hover:text-primary-600 rounded-full hover:bg-gray-100"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              
              <Link 
                href="/account" 
                className="p-2 text-gray-500 hover:text-primary-600 rounded-full hover:bg-gray-100"
                aria-label="Account"
              >
                <User className="h-5 w-5" />
              </Link>
              
              <Link 
                href="/cart" 
                className={cn(
                  "p-2 text-gray-500 hover:text-primary-600 rounded-full hover:bg-gray-100",
                  "relative flex items-center justify-center"
                )}
                aria-label="Shopping bag"
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-primary-600 rounded-full">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            {/* Mobile Action Icons */}
            <Link 
              href="/cart" 
              className="p-2 mr-2 text-gray-500 hover:text-primary-600 rounded-full hover:bg-gray-100 relative"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-primary-600 rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>
            
            <button
              type="button"
              className="p-2 text-gray-500 hover:text-primary-600 rounded-full hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </header>
  );
} 