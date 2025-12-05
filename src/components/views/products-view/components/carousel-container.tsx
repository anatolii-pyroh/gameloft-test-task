"use client";

import Autoplay from "embla-carousel-autoplay";

import { type Product as ProductType } from "@/typings/product.type";

import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Typography } from "@/components/ui/typography";
import CarouselNavigationButtons from "@/components/views/products-view/components/carousel-navigation-buttons";
import Product from "@/components/views/products-view/components/product";

interface Props {
  products: ProductType[];
}

const CarouselContainer = (props: Props) => {
  const { products } = props;

  if (products.length === 0) {
    return (
      <Typography size="lg" className="text-center">
        Oops! No products found
      </Typography>
    );
  }

  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="flex w-full max-w-[90%] flex-col"
    >
      <CarouselContent>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </CarouselContent>

      <CarouselNavigationButtons />
    </Carousel>
  );
};

export default CarouselContainer;
