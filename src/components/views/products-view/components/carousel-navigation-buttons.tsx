import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const CarouselNavigationButtons = () => {
  return (
    <>
      <CarouselPrevious className="max-lg:hidden" />
      <CarouselNext className="max-lg:hidden" />

      <div className="mt-5 flex gap-8 self-center lg:hidden">
        <CarouselPrevious className="relative" />
        <CarouselNext className="relative" />
      </div>
    </>
  );
};

export default CarouselNavigationButtons;
