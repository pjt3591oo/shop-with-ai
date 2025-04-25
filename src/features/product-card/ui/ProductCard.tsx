import Link from "next/link";
import { Star } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number | { toString(): string };
  image?: {
    src: string;
    alt: string;
  };
  category: string;
  isAvailable?: boolean;
  rating?: number;
  reviewCount?: number;
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
}: ProductCardProps) {
  return (
    <div className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100">
        <Link href={`/products/${id}`}>
          {image ? (
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
            />
          ) : (
            <div className="h-full w-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">No image</p>
            </div>
          )}
        </Link>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 font-medium">
            <Link href={`/products/${id}`}>{name}</Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{category}</p>
          
          {/* Rating */}
          {typeof rating === 'number' && (
            <div className="mt-1 flex items-center">
              {[0, 1, 2, 3, 4].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star < Math.round(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              {reviewCount !== undefined && (
                <span className="ml-1 text-xs text-gray-500">
                  ({reviewCount})
                </span>
              )}
            </div>
          )}
        </div>
        <p className="text-sm font-medium text-gray-900">
          ${typeof price === 'number' ? price.toFixed(2) : Number(price).toFixed(2)}
        </p>
      </div>
      {!isAvailable && (
        <p className="mt-1 text-sm text-red-500">Out of stock</p>
      )}
    </div>
  );
} 