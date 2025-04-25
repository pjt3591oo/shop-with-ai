export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number | { toString(): string };
  inventory: number;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
  categoryId: string;
}

export interface ProductWithRelations extends Product {
  images: ProductImage[];
  category: Category;
  reviews: ProductReview[];
  averageRating?: number;
  reviewCount?: number;
}

export interface ProductImage {
  id?: string;
  url: string;
  alt: string | null;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  _count?: {
    products: number;
  };
}

export interface ProductReview {
  id: string;
  rating: number;
  comment: string | null;
  createdAt: Date;
  user: {
    name: string | null;
    image: string | null;
  };
} 