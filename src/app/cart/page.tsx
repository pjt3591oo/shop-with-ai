"use client";

import Link from "next/link";
import { CartItem, CartSummary, useCart } from "@/features/cart";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();
  
  // Calculate additional costs
  const shipping = items.length > 0 ? 5.00 : 0;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
        
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          {/* Cart items */}
          <div className="lg:col-span-7">
            {items.length > 0 ? (
              <ul className="divide-y divide-gray-200 border-b border-t border-gray-200">
                {items.map((item) => (
                  <li key={item.id}>
                    <CartItem 
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      imageUrl={item.imageUrl}
                      onRemove={removeItem}
                      onUpdateQuantity={updateQuantity}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="py-12 text-center">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <Link
                  href="/products"
                  className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </div>

          {/* Order summary */}
          <div className="mt-16 lg:col-span-5 lg:mt-0">
            {items.length > 0 && (
              <CartSummary 
                subtotal={subtotal}
                tax={tax}
                shipping={shipping}
                total={total}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 