"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/shared/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex md:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50" 
        aria-hidden="true" 
        onClick={onClose}
      />
      
      {/* Menu */}
      <div className="relative w-full max-w-xs h-full bg-white shadow-xl flex flex-col overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-medium">Menu</h2>
          <button 
            onClick={onClose}
            className="p-2 -mr-2 text-gray-500 hover:text-primary-600 rounded-full hover:bg-gray-100"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/products', label: 'Products' },
              { href: '/categories', label: 'Categories' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
              { href: '/account', label: 'Account' }
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center py-2 px-3 text-base font-medium rounded-md',
                    pathname === item.href
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                  )}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t">
          <Link
            href="/cart"
            className="flex items-center justify-center w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
            onClick={onClose}
          >
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
} 