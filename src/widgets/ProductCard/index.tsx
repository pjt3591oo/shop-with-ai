import React from 'react';
import Link from 'next/link';
import { cn } from '@/shared/lib/utils';
import { Card, CardContent } from '@/shared/ui/Card';

interface ProductCardProps {
  id: string;
  name: string;
  price: number | { toString(): string };
  image?: {
    src: string;
    alt?: string;
  };
  category?: string;
  isAvailable?: boolean;
  rating?: number;
  reviewCount?: number;
  className?: string;
}

export function ProductCard({
  id,
  name,
  price,
  image,
  category,
  isAvailable = true,
  rating,
  reviewCount,
  className,
}: ProductCardProps) {
  return (
    <Card className={cn('group relative overflow-hidden transition-all duration-300 hover:-translate-y-1', className)}>
      <Link href={`/products/${id}`} className="block h-full">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200">
          {image ? (
            <img
              src={image.src}
              alt={image.alt || name}
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
              No image
            </div>
          )}
          {!isAvailable && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-white text-black text-xs font-medium px-2 py-0.5 rounded">
                Out of Stock
              </span>
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <div className="mt-2 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700 font-medium group-hover:text-primary-600 transition-colors">
                {name}
              </h3>
              {category && (
                <p className="mt-1 text-xs text-gray-500">{category}</p>
              )}
            </div>
            <p className="text-sm font-medium text-gray-900">
              ${Number(price).toFixed(2)}
            </p>
          </div>

          {rating !== undefined && (
            <div className="mt-2 flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((star) => (
                  <svg
                    key={star}
                    className={cn(
                      'h-4 w-4',
                      star < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
                    )}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              {reviewCount !== undefined && (
                <p className="ml-1 text-xs text-gray-500">
                  ({reviewCount})
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Link>
    </Card>
  );
} 