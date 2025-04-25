import { prisma } from "@/shared/lib/prisma";
import { ProductCard } from "@/widgets/ProductCard";

export const dynamic = "force-dynamic";

interface ProductWithRelations {
  id: string;
  name: string;
  description: string | null;
  price: number | { toString(): string };
  inventory: number;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
  categoryId: string;
  images: Array<{ url: string; alt: string | null }>;
  category: { name: string };
  _count?: {
    reviews: number;
  };
  reviews?: Array<{
    rating: number;
  }>;
}

async function getProducts(): Promise<ProductWithRelations[]> {
  try {
    const products = await prisma.product.findMany({
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
    return products as unknown as ProductWithRelations[];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  // Calculate average rating for each product
  const productsWithRating = products.map(product => {
    const ratings = product.reviews?.map(review => review.rating) || [];
    const averageRating = ratings.length 
      ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length 
      : undefined;
    
    return {
      ...product,
      averageRating,
      reviewCount: product._count?.reviews
    };
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select
              className="appearance-none rounded-md border border-gray-300 p-2 pr-8 focus:border-primary-500 focus:outline-none bg-white"
              defaultValue="newest"
            >
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A-Z</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productsWithRating.length > 0 ? (
          productsWithRating.map((product) => (
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
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
} 