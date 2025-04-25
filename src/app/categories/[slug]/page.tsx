import { getCategoryBySlug } from "@/entities/category";
import { ProductCard } from "@/features/product-card";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductsByCategoryId } from "@/entities/product";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = await getCategoryBySlug(params.slug);
  
  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested category does not exist",
    };
  }
  
  return {
    title: category.name,
    description: `Browse all products in the ${category.name} category`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await getCategoryBySlug(params.slug);
  
  if (!category) {
    notFound();
  }
  
  const products = await getProductsByCategoryId(category.id);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center space-x-2 text-sm mb-6">
          <Link href="/categories" className="text-gray-500 hover:text-gray-700">
            Categories
          </Link>
          <span className="text-gray-400">/</span>
          <span className="font-medium text-gray-900">{category.name}</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
          {category.name}
        </h1>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={
                  product.images.length > 0
                    ? {
                        src: product.images[0].url,
                        alt: product.images[0].alt || product.name,
                      }
                    : undefined
                }
                category={product.category.name}
                isAvailable={product.isAvailable && product.inventory > 0}
                rating={product.averageRating}
                reviewCount={product.reviewCount}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No products found in this category.</p>
            <Link
              href="/products"
              className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Browse all products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 