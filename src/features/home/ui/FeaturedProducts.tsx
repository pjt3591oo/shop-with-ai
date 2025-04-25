import Link from "next/link";
import { ProductWithRelations } from "@/entities/product";
import { ProductCard } from "@/features/product-card";

interface FeaturedProductsProps {
  products: ProductWithRelations[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
        <Link 
          href="/products" 
          className="text-primary-600 hover:text-primary-700 text-sm font-medium"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
    </section>
  );
} 