import Link from "next/link";
import { cn } from "@/shared/lib/utils";

export default function CartPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Shopping Cart</h1>

        <div className="mt-12">
          {/* Empty cart state */}
          <div className="rounded-lg bg-white p-8 shadow-sm border border-gray-100">
            <div className="text-center">
              <div className="mx-auto h-24 w-24 text-gray-400">
                <svg
                  className="h-full w-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Your cart is empty</h3>
              <p className="mt-1 text-sm text-gray-500">
                Start adding items to your cart to see them here.
              </p>
              <div className="mt-6">
                <Link
                  href="/products"
                  className={cn(
                    "inline-flex items-center rounded-md px-4 py-2.5 text-sm font-medium shadow-sm transition-colors",
                    "bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  )}
                >
                  Browse Products
                </Link>
              </div>
            </div>
          </div>

          {/* Cart summary */}
          <div className="mt-8 rounded-lg bg-gray-50 px-6 py-6">
            <h2 className="text-lg font-medium text-gray-900">
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">$0.00</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Shipping</dt>
                <dd className="text-sm font-medium text-gray-900">--</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Tax</dt>
                <dd className="text-sm font-medium text-gray-900">--</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Order total</dt>
                <dd className="text-base font-medium text-gray-900">$0.00</dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                type="submit"
                disabled
                className={cn(
                  "w-full rounded-md px-4 py-3 text-base font-medium shadow-sm transition-colors",
                  "bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                  "disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:bg-gray-400"
                )}
              >
                Checkout
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Need help? <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium">Contact us</Link> or check our <Link href="/faq" className="text-primary-600 hover:text-primary-700 font-medium">FAQ</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 