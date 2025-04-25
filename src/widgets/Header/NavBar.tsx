import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/shared/lib/utils';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavItem = ({ href, children, className }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center py-2 px-1 text-sm font-medium transition-colors border-b-2',
        isActive
          ? 'text-primary-700 border-primary-600'
          : 'text-gray-700 border-transparent hover:text-primary-600 hover:border-primary-300',
        className
      )}
    >
      {children}
    </Link>
  );
};

interface NavBarProps {
  className?: string;
}

export function NavBar({ className }: NavBarProps) {
  return (
    <nav className={cn('flex space-x-8', className)}>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/products">Products</NavItem>
      <NavItem href="/categories">Categories</NavItem>
      <NavItem href="/about">About</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </nav>
  );
} 