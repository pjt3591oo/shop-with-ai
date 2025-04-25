"use client";

import Link from "next/link";

interface CartSummaryProps {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

export function CartSummary({ subtotal, tax, shipping, total }: CartSummaryProps) {
  return (
    <div className="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Subtotal</p>
          <p className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-600">Shipping estimate</p>
          <p className="text-sm font-medium text-gray-900">${shipping.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-600">Tax estimate</p>
          <p className="text-sm font-medium text-gray-900">${tax.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <p className="text-base font-medium text-gray-900">Order total</p>
          <p className="text-base font-medium text-gray-900">${total.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-6">
        <Link
          href="/checkout"
          className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 flex items-center justify-center"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
} 