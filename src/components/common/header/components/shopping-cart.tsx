"use client";

import { ShoppingBag } from "lucide-react";
import { useState } from "react";

import { useCartStore } from "@/stores/cart.store";

import ProductsDialog from "@/components/common/header/components/products-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { calculatePrice, convertPrice } from "@/lib/product.lib";

const ShoppingCart = () => {
  const products = useCartStore((state) => state.products);

  const [open, setOpen] = useState(false);

  const originalPrice = calculatePrice(products);
  const convertedPrice = convertPrice(originalPrice, products.length > 5);

  return (
    <>
      <ProductsDialog open={open} onOpenChange={setOpen} />

      <Button
        size="md"
        className="relative cursor-pointer transition-all [&_*]:cursor-pointer"
        svg={ShoppingBag}
        onClick={() => setOpen(true)}
      >
        {products.length > 0 ? (
          <>
            <Badge
              variant="success"
              className="absolute -right-3 -top-3 rounded-full max-md:hidden"
            >
              {products.length}
            </Badge>
            <Typography size="md" className="text-white">
              {convertedPrice}$
            </Typography>
          </>
        ) : null}
      </Button>
    </>
  );
};

export default ShoppingCart;
