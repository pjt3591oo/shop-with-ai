import Link from "next/link";
import { cn } from "@/shared/lib/utils";

export function CallToAction() {
  return (
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
  );
} 