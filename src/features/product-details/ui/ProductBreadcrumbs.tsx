import Link from "next/link";

interface ProductBreadcrumbsProps {
  productName: string;
  categoryName: string;
  categorySlug: string;
}

export function ProductBreadcrumbs({
  productName,
  categoryName,
  categorySlug,
}: ProductBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <li>
          <div className="flex items-center">
            <Link href="/products" className="mr-2 text-sm font-medium text-gray-900">
              Products
            </Link>
            <svg
              width={16}
              height={20}
              viewBox="0 0 16 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-4 text-gray-300"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <Link
              href={`/category/${categorySlug}`}
              className="mr-2 text-sm font-medium text-gray-900"
            >
              {categoryName}
            </Link>
            <svg
              width={16}
              height={20}
              viewBox="0 0 16 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-4 text-gray-300"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>
        <li className="text-sm">
          <span className="font-medium text-gray-500" aria-current="page">
            {productName}
          </span>
        </li>
      </ol>
    </nav>
  );
} 