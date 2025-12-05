import Decimal from "decimal.js-light";

import { Product } from "@/typings/product.type";

export const calculatePrice = (products: Product[]) => {
  if (products.length === 0) return 0;

  return products.reduce(
    (acc, product) =>
      new Decimal(acc).add(product.price).toDecimalPlaces(2).toNumber(),
    0,
  );
};

export const convertPrice = (
  price: number,
  moreThanFiveProductsAdded: boolean,
) => {
  return moreThanFiveProductsAdded
    ? new Decimal(price).mul(0.9).toDecimalPlaces(2).toNumber()
    : price;
};
