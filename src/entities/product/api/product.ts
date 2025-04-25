import { prisma } from "@/shared/lib/prisma";
import { ProductWithRelations } from "../model/types";

export async function getProductById(id: string): Promise<ProductWithRelations | null> {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        images: true,
        category: true,
        reviews: {
          include: {
            user: {
              select: {
                name: true,
                image: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!product) return null;

    const reviews = product.reviews.map(review => ({
      id: review.id,
      rating: review.rating,
      comment: review.comment,
      createdAt: review.createdAt,
      user: {
        name: review.user.name,
        image: review.user.image,
      }
    }));

    const ratings = reviews.map(review => review.rating);
    const averageRating = ratings.length 
      ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length 
      : undefined;

    return {
      ...product,
      reviews,
      averageRating,
      reviewCount: reviews.length
    } as unknown as ProductWithRelations;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export async function getProductsByCategoryId(categoryId: string): Promise<ProductWithRelations[]> {
  try {
    const products = await prisma.product.findMany({
      where: {
        categoryId,
      },
      include: {
        images: true,
        category: true,
        reviews: {
          include: {
            user: {
              select: {
                name: true,
                image: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return products.map(product => {
      const reviews = product.reviews.map(review => ({
        id: review.id,
        rating: review.rating,
        comment: review.comment,
        createdAt: review.createdAt,
        user: {
          name: review.user.name,
          image: review.user.image,
        }
      }));

      const ratings = reviews.map(review => review.rating);
      const averageRating = ratings.length 
        ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length 
        : undefined;
      
      return {
        ...product,
        reviews,
        averageRating,
        reviewCount: reviews.length
      } as unknown as ProductWithRelations;
    });
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
}

export async function getFeaturedProducts() {
  try {
    const products = await prisma.product.findMany({
      take: 4,
      include: {
        images: true,
        category: true,
        reviews: {
          include: {
            user: {
              select: {
                name: true,
                image: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return products.map(product => {
      const reviews = product.reviews.map(review => ({
        id: review.id,
        rating: review.rating,
        comment: review.comment,
        createdAt: review.createdAt,
        user: {
          name: review.user.name,
          image: review.user.image,
        }
      }));

      const ratings = reviews.map(review => review.rating);
      const averageRating = ratings.length 
        ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length 
        : undefined;
      
      return {
        ...product,
        reviews,
        averageRating,
        reviewCount: reviews.length
      } as unknown as ProductWithRelations;
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getAllProducts() {
  try {
    const products = await prisma.product.findMany({
      include: {
        images: true,
        category: true,
        reviews: {
          include: {
            user: {
              select: {
                name: true,
                image: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return products.map(product => {
      const reviews = product.reviews.map(review => ({
        id: review.id,
        rating: review.rating,
        comment: review.comment,
        createdAt: review.createdAt,
        user: {
          name: review.user.name,
          image: review.user.image,
        }
      }));

      const ratings = reviews.map(review => review.rating);
      const averageRating = ratings.length 
        ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length 
        : undefined;
      
      return {
        ...product,
        reviews,
        averageRating,
        reviewCount: reviews.length
      } as unknown as ProductWithRelations;
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
} 