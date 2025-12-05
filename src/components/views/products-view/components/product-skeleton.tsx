import { Card } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

const ProductSkeleton = () => {
  return (
    <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
      <div className="p-1">
        <Card>
          <Skeleton className="h-60 w-full" />

          <Skeleton className="mt-4 h-[185px] w-full max-sm:h-[160px]" />
        </Card>
      </div>
    </CarouselItem>
  );
};

export default ProductSkeleton;
