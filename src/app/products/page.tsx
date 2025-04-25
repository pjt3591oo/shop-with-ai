import { getAllProducts } from "@/entities/product";
import { ProductCard } from "@/features/product-card";

export const metadata = {
  title: "All Products",
  description: "Browse all products in our shop",
};

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
          All Products
        </h1>

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
      </div>
    </div>
  );
} 