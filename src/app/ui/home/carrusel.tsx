import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  
type Props = {}

function Carrosel({}: Props) {
  return (
    <Carousel opts={{ align: "start", loop: true }}>
    <CarouselContent>
      <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        {/* Tecnología 1 */}
      </CarouselItem>
      <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        {/* Tecnología 2 */}
      </CarouselItem>
      <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        {/* Tecnología 3 */}
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  )
}

export default Carrosel