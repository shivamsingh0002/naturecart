import HeroCarousel from "@/components/HeroCarousel";
import FlashDeals from "@/components/FlashDeals";
import Categories from "@/components/Categories";
import OfferBanner from "@/components/OfferBanner";
import ProductSection from "@/components/ProductSection";
import FeaturedBrands from "@/components/FeaturedBrands";
import ReviewsSection from "@/components/ReviewsSection";
import RecommendedSection from "@/components/RecommendedSection";
import TrendingSlider from "@/components/TrendingSlider";
import CategoryGrid from "@/components/CategoryGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import FlashSale from "@/components/FlashSale";
import TestimonialSection from "@/components/TestimonialSection";
import AppDownload from "@/components/AppDownload";
import FloatingDeliveryBanner from "@/components/FloatingDeliveryBanner";
import AIRecommendations from "@/components/AIRecommendations";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-[#f7faf5] to-white">


      {/* HERO CAROUSEL */}
      <HeroCarousel />

      {/*category grid*/}
      <CategoryGrid />

      {/* FLASH DEALS */}
      <FlashDeals />

      <RecommendedSection />

      {/*Trending Slider*/}
      <TrendingSlider />

      <StatsSection />

      {/* CATEGORY GRID */}
      <Categories />

      {/* DEAL BANNER */}
      <div className="mx-auto max-w-7xl px-6">
        <OfferBanner />
      </div>

      {/* FEATURED PRODUCTS */}

      <section className="py-20">

  <div className="mb-12 text-center">

    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
      🔥 Best Selling Products
    </span>

    <h2 className="mt-5 text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
      Trending Products
    </h2>

    <p className="mt-3 text-lg text-gray-500">
      Fresh organic products loved by thousands of customers
    </p>

  </div>

  <div className="mx-auto max-w-7xl px-6">
    <ProductSection />

    <FeaturedBrands />

    <ReviewsSection />
  </div>

</section>

      {/* FLASH SALE */}
      <FlashSale />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* TESTIMONIALS */}
      <TestimonialSection />

      {/* APP DOWNLOAD */}
      <AppDownload />
      {/* AI RECOMMENDATIONS */}
      <AIRecommendations />

      {/* NEWSLETTER */}
      <Newsletter />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}