import ShoppingCart from "@/components/common/header/components/shopping-cart";
import { Typography } from "@/components/ui/typography";

const Header = () => {
  return (
    <>
      <div className="flex h-14 md:h-20" />

      <header className="container bg-background fixed inset-x-0 top-0 z-20 flex w-full items-center justify-center border-b">
        <div className="flex h-14 w-full max-w-[90%] items-center justify-between md:h-20">
          <Typography size="md">Anatolii Pyroh</Typography>

          <ShoppingCart />
        </div>
      </header>
    </>
  );
};

export default Header;
