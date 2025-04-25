"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/features/cart";

interface AddToCartButtonProps {
  productId: string;
  name: string;
  price: number | { toString(): string };
  imageUrl?: string;
  isAvailable: boolean;
}

export function AddToCartButton({ 
  productId, 
  name, 
  price, 
  imageUrl, 
  isAvailable 
}: AddToCartButtonProps) {
  const router = useRouter();
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    if (!isAvailable) return;
    
    setIsAdding(true);
    
    try {
      // Convert price to number if it's not already
      const priceAsNumber = typeof price === 'number' ? price : Number(price.toString());
      
      // Add item to cart
      addItem({
        id: productId,
        name,
        price: priceAsNumber,
        imageUrl
      });
      
      // Add short delay to show feedback
      setTimeout(() => {
        router.push('/cart');
      }, 300);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="mt-10 flex">
      <button
        type="button"
        onClick={handleAddToCart}
        disabled={!isAvailable || isAdding}
        className={`flex max-w-xs flex-1 items-center justify-center rounded-md px-8 py-3 text-base font-medium ${
          isAvailable
            ? "bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        } ${isAdding ? "opacity-75" : ""} sm:w-full`}
      >
        {isAdding ? "Adding..." : isAvailable ? "Add to cart" : "Out of stock"}
      </button>
    </div>
  );
} 