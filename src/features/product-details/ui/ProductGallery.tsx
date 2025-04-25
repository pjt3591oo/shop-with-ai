import { ProductImage } from "@/entities/product";

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  if (images.length === 0) {
    return (
      <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg lg:col-span-3">
        <div className="h-full w-full bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">No image available</p>
        </div>
      </div>
    );
  }

  if (images.length < 3) {
    return (
      <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block lg:col-span-3">
        <img
          src={images[0].url}
          alt={images[0].alt || productName}
          className="h-full w-full object-cover object-center"
        />
      </div>
    );
  }

  return (
    <>
      <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
        <img
          src={images[0].url}
          alt={images[0].alt || productName}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img
            src={images[1].url}
            alt={images[1].alt || productName}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img
            src={images[2].url}
            alt={images[2].alt || productName}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </>
  );
} 