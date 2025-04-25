import { getCategories } from "@/entities/category";
import Link from "next/link";

export const metadata = {
  title: "All Categories",
  description: "Browse all product categories in our shop",
};

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
          All Categories
        </h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group block"
            >
              <div className="aspect-h-1 aspect-w-2 w-full overflow-hidden rounded-lg bg-gradient-to-br from-primary-100 to-secondary-100 group-hover:opacity-90 transition-opacity">
                <div className="h-full w-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                      {category.name}
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      {category._count?.products || 0} products
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {categories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No categories found.</p>
          </div>
        )}
      </div>
    </div>
  );
} 