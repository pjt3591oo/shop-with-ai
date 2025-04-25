import Link from "next/link";
import { prisma } from "@/shared/lib/prisma";
import { ProductCard } from "@/widgets/ProductCard";
import { cn } from "@/shared/lib/utils";

async function getFeaturedProducts() {
  try {
    const products = await prisma.product.findMany({
      take: 4,
      include: {
        images: {
          take: 1,
        },
        category: true,
        _count: {
          select: {
            reviews: true,
          },
        },
        reviews: {
          select: {
            rating: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return products.map(product => {
      const ratings = product.reviews.map(review => review.rating);
      const averageRating = ratings.length 
        ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length 
        : undefined;
      
      return {
        ...product,
        averageRating,
        reviewCount: product._count.reviews
      };
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

async function getCategories() {
  try {
    const categories = await prisma.category.findMany({
      take: 4,
      include: {
        _count: {
          select: {
            products: true,
          },
        },
      },
    });
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();
  const categories = await getCategories();

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden bg-primary-600">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-700" />
        <div className="relative py-20 px-6 sm:py-24 sm:px-10 lg:px-16 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
            Discover Quality Products
          </h1>
          <p className="mt-6 text-lg leading-8 text-black max-w-xl mx-auto">
            Shop the latest trends and find everything you need in one place with our carefully curated collection.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/products"
              className={cn(
                "rounded-md px-6 py-3 text-base font-semibold shadow-sm transition-colors",
                "bg-white text-primary-700 hover:bg-gray-100"
              )}
            >
              Shop Now
            </Link>
            <Link
              href="/categories"
              className="rounded-md px-6 py-3 text-base font-semibold text-black hover:text-black/80 transition-colors"
            >
              View Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
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
                      {category._count.products} products
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
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
          {featuredProducts.map((product) => (
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

      {/* Testimonials */}
      <section className="bg-gray-50 rounded-2xl py-12 px-6 sm:py-16 sm:px-10">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white font-medium">
                  {String.fromCharCode(64 + i)}
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">Customer {i}</h3>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg
                        key={j}
                        className={`h-4 w-4 ${j < 4 ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-primary-600 rounded-2xl py-16 px-6 sm:py-20 sm:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to start shopping?
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-100">
            Join thousands of satisfied customers and find the perfect products for your needs.
          </p>
          <div className="mt-10">
            <Link
              href="/products"
              className={cn(
                "rounded-md px-6 py-3 text-base font-semibold shadow-sm transition-colors",
                "bg-white text-primary-700 hover:bg-gray-100"
              )}
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
