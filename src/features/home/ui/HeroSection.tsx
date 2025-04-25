import Link from "next/link";
import { cn } from "@/shared/lib/utils";

export function HeroSection() {
  return (
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
  );
} 