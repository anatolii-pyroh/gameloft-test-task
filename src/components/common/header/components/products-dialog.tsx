import { useCartStore } from "@/stores/cart.store";

import AddedProduct from "@/components/common/header/components/added-product";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Typography } from "@/components/ui/typography";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductsDialog = (props: Props) => {
  const { open, onOpenChange } = props;

  const products = useCartStore((state) => state.products);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogTitle className="sr-only">Products cart</DialogTitle>

        <Typography size="lg">
          Cart{" "}
          {products.length > 0 ? (
            <>(products added: {products.length})</>
          ) : null}
        </Typography>

        {products.length === 0 ? (
          <Typography size="md" fontWeight="medium" className="text-center">
            No products in cart
          </Typography>
        ) : (
          <ul className="-m-1 flex max-h-[400px] flex-col gap-5 overflow-y-auto p-1">
            {products.map((product) => (
              <AddedProduct
                key={product.id}
                product={product}
                moreThanFiveProductsAdded={products.length > 5}
              />
            ))}
          </ul>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProductsDialog;
