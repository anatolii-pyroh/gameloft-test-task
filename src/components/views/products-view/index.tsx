import { Suspense } from "react";

import { productsService } from "@/services/products.service";

import CarouselContainer from "@/components/views/products-view/components/carousel-container";
import CarouselSkeleton from "@/components/views/products-view/components/carousel-skeleton";

const ProductsView = async () => {
  const products = await productsService.getAllProducts();

  return (
    <div className="container flex grow items-center justify-center bg-body py-2">
      <Suspense fallback={<CarouselSkeleton />}>
        <CarouselContainer products={products} />
      </Suspense>
    </div>
  );
};

export default ProductsView;
