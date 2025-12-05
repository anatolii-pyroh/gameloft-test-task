import { Trash2 } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

import { convertPrice } from "@/lib/product.lib";
import { useCartStore } from "@/stores/cart.store";
import { Product } from "@/typings/product.type";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

interface Props {
  product: Product;
  moreThanFiveProductsAdded: boolean;
}

const AddedProduct = (props: Props) => {
  const { product, moreThanFiveProductsAdded } = props;

  const removeProduct = useCartStore((state) => state.removeProduct);

  const convertedPrice = convertPrice(product.price, moreThanFiveProductsAdded);

  const handleRemoveProduct = (product: Product) => {
    try {
      removeProduct(product);
      toast.info("Product removed from cart");
    } catch (error) {
      toast.error("Failed to remove product from cart");
    }
  };

  return (
    <li>
      <Card className="flex gap-3 rounded-2xl max-md:border-none max-md:p-0 max-md:ring-0">
        <div className="relative my-auto h-24 min-w-24 flex-1 md:h-32">
          <Image
            src={product.image}
            alt="product-image"
            fill
            sizes="33vw"
            className="object-contain"
            priority
          />
        </div>

        <div className="flex flex-col gap-3 overflow-hidden">
          <Typography size="xl" className="line-clamp-1">
            {product.title}
          </Typography>

          <p className="line-clamp-2">{product.description}</p>

          <div className="mt-3 flex items-center justify-between">
            <Typography size="lg">{convertedPrice}$</Typography>

            <Button
              variant="destructive"
              size="sm"
              svg={Trash2}
              className="ml-auto w-fit"
              onClick={() => handleRemoveProduct(product)}
            >
              Remove
            </Button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default AddedProduct;
