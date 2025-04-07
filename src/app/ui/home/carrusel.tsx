'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { mockedImagesFrameworks } from "lib/mocks";
import Image from "next/image";

type Props = {};

function Carrosel({}: Props) {
  return (
    <Carousel  
    plugins={[
      Autoplay({
        delay: 1450,
      }),
    ]}
    opts={{
      align: "center",
      loop: true,
    }}>
      <CarouselContent>
        {mockedImagesFrameworks.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Image
              src={item.src}
              alt={item.alt}
              key={index}
              width={150}
              height={150}
              className="object-cover "
              priority
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Carrosel;
