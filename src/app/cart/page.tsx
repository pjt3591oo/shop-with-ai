"use client";

import { useState } from "react";
import Link from "next/link";
import { CartItem, CartSummary } from "@/features/cart";

// Mock cart data
const initialCartItems = [
  {
    id: "1",
    name: "Basic Tee",
    price: 35.00,
    quantity: 1,
    imageUrl: "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
  },
  {
    id: "2",
    name: "Nomad Tumbler",
    price: 42.00,
    quantity: 2,
    imageUrl: "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
  },
  {
    id: "3",
    name: "Throwback Hip Bag",
    price: 32.00,
    quantity: 1,
    imageUrl: "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-03.jpg",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(items => 
      items.map(item => item.id === id ? { ...item, quantity } : item)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.00;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
        
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          {/* Cart items */}
          <div className="lg:col-span-7">
            {cartItems.length > 0 ? (
              <ul className="divide-y divide-gray-200 border-b border-t border-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <CartItem 
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      imageUrl={item.imageUrl}
                      onRemove={handleRemoveItem}
                      onUpdateQuantity={handleUpdateQuantity}
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
            {cartItems.length > 0 && (
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