import { ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

import { useCartStore } from "@/stores/cart.store";
import type { Product as ProductType } from "@/typings/product.type";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Typography } from "@/components/ui/typography";
interface Props {
  product: ProductType;
}

const Product = (props: Props) => {
  const { product } = props;

  const addProduct = useCartStore((state) => state.addProduct);
  const removeProduct = useCartStore((state) => state.removeProduct);
  const products = useCartStore((state) => state.products);

  const [isHovered, setIsHovered] = useState(false);

  const productIsInCart = !!products.find((p) => p.id === product.id);

  const handleAddProduct = () => {
    addProduct(product);
    toast.success("Product added to cart");
  };

  const handleRemoveProduct = () => {
    removeProduct(product);
    toast.info("Product removed from cart");
  };

  return (
    <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
      <div className="p-1">
        <Card>
          <div className="relative h-60 w-full">
            <Image
              src={product.image}
              alt="productImg"
              fill
              sizes="33vw"
              className="object-contain"
              priority
            />
          </div>

          <div className="mt-4 flex flex-col gap-3 rounded-2xl sm:border sm:p-3">
            <Typography size="xl" className="line-clamp-1">
              {product.title}
            </Typography>

            <p className="line-clamp-2">{product.description}</p>

            <div className="mt-3 flex items-center justify-between">
              <Typography size="lg">{product.price}$</Typography>

              {productIsInCart ? (
                <Button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  svg={isHovered ? X : ShoppingCart}
                  variant={isHovered ? "destructive" : "success"}
                  onClick={handleRemoveProduct}
                />
              ) : (
                <Button
                  svg={ShoppingCart}
                  className="transition-all"
                  onClick={handleAddProduct}
                >
                  Add to cart
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </CarouselItem>
  );
};

export default Product;
