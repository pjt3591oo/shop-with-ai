"use client";

import { useRouter } from "next/navigation";

interface AddToCartButtonProps {
  productId: string;
  isAvailable: boolean;
}

export function AddToCartButton({ productId, isAvailable }: AddToCartButtonProps) {
  const router = useRouter();

  const handleAddToCart = async () => {
    // Here we would add logic to add the product to the cart
    // For now, just navigate to the cart page
    console.log(`Adding product ${productId} to cart`);
    router.push('/cart');
  };

  return (
    <div className="mt-10 flex">
      <button
        type="button"
        onClick={handleAddToCart}
        disabled={!isAvailable}
        className={`flex max-w-xs flex-1 items-center justify-center rounded-md px-8 py-3 text-base font-medium ${
          isAvailable
            ? "bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        } sm:w-full`}
      >
        {isAvailable ? "Add to cart" : "Out of stock"}
      </button>
    </div>
  );
} 