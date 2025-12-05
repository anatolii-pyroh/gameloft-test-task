"use client";

import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent } from "@/components/ui/carousel";
import CarouselNavigationButtons from "@/components/views/products-view/components/carousel-navigation-buttons";
import ProductSkeleton from "@/components/views/products-view/components/product-skeleton";

const CarouselSkeleton = () => {
  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="flex w-full max-w-[90%] flex-col"
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </CarouselContent>

      <CarouselNavigationButtons />
    </Carousel>
  );
};

export default CarouselSkeleton;
