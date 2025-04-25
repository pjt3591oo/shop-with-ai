import Link from "next/link";
import { Category } from "@/entities/category";

interface FeaturedCategoriesProps {
  categories: Category[];
}

export function FeaturedCategories({ categories }: FeaturedCategoriesProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
        <Link 
          href="/categories" 
          className="text-primary-600 hover:text-primary-700 text-sm font-medium"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="group block"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gradient-to-br from-primary-100 to-secondary-100 group-hover:opacity-90 transition-opacity">
              <div className="h-full w-full flex items-center justify-center p-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {category._count?.products || 0} products
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
} 