import { getFeaturedProducts } from "@/entities/product";
import { getFeaturedCategories } from "@/entities/category";
import { 
  HeroSection, 
  FeaturedCategories, 
  FeaturedProducts, 
  Testimonials, 
  CallToAction 
} from "@/features/home";

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();
  const categories = await getFeaturedCategories(4);

  return (
    <div className="space-y-20">
      <HeroSection />
      <FeaturedCategories categories={categories} />
      <FeaturedProducts products={featuredProducts} />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
