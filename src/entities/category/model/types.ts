export interface Category {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  parentId: string | null;
  _count?: {
    products: number;
  };
} 