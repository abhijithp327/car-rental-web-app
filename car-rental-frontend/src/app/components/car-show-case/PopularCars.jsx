"use client"

import React from 'react';
import CarsCard from '../cars-card/CarsCard';
import SliderCarsCard from '../cars-card/SliderCarsCard';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';


const PopularCars = () => {

  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start', slidesToScroll: 1 });
  const [desktopEmblaRef] = useEmblaCarousel({ loop: false          , align: 'start', slidesToScroll: 1 });

  const popularCars = [
    { id: 1, name: "Tesla Model S", type: "Electric", price: 100, discount_price: 80, petrol_capacity: "N/A", transition: "Automatic", seat_capacity: "5", image: "/images/car01.png" },
    { id: 2, name: "Audi R8", type: "Sports", price: 150, discount_price: 120, petrol_capacity: "73L", transition: "Automatic", seat_capacity: "2", image: "/images/car02.png" },
    { id: 3, name: "Honda City", type: "Sedan", price: 90, discount_price: 75, petrol_capacity: "40L", transition: "Manual", seat_capacity: "5", image: "/images/car03.png" },
    { id: 4, name: "BMW M4", type: "Sports", price: 160, discount_price: 130, petrol_capacity: "59L", transition: "Automatic", seat_capacity: "4", image: "/images/car04.png" },
    { id: 5, name: "Audi GT", type: "Sports", price: 140, discount_price: 115, petrol_capacity: "85L", transition: "Automatic", seat_capacity: "2", image: "/images/car05.png" },
    { id: 6, name: "Honda Civic GT", type: "Sedan", price: 95, discount_price: 80, petrol_capacity: "47L", transition: "Manual", seat_capacity: "5", image: "/images/car07.png" },
    { id: 7, name: "Volkswagen Polo GT", type: "Hatchback", price: 85, discount_price: 70, petrol_capacity: "45L", transition: "Manual", seat_capacity: "5", image: "/images/car08.png" },
    { id: 8, name: "Hyundai Verna", type: "Sedan", price: 92, discount_price: 78, petrol_capacity: "45L", transition: "Automatic", seat_capacity: "5", image: "/images/car02.png" },
  ];
  

  return (
    <section>
      <div className='container px-4 py-6'>

        <div className='flex flex-col gap-6'>
          
          <div className='flex justify-between'>
            <h3 className='text-secondary-300 text-base font-semibold'>Popular Cars</h3>
            <Link href='/cars' className='text-primary-500 text-sm md:text-base font-bold'>View all</Link>
          </div>

          {/* cars cards */}
          {/* desktop without slider */}
          {/* <div className="mt-5 hidden md:grid grid-cols-4 gap-8">
            {popularCars.map((car) => (
              <SliderCarsCard key={car.id} data={car} />

            ))}
          </div> */}
          {/* with slider */}
        {/* Desktop Slider */}
        <div className="hidden md:block overflow-hidden" ref={desktopEmblaRef}>
            <div className="flex gap-5">
              {popularCars.map((car) => (
             <div key={car.id} className="basis-[calc(25%-1rem)] shrink-0 min-w-0">
                  <SliderCarsCard data={car} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {popularCars.map((car) => (
                <div key={car.id} className="flex-[0_0_78%] min-w-0">
                  <SliderCarsCard data={car} />
                </div>
              ))}
            </div>
          </div>


        </div>

      </div>
    </section>
  )
};

export default PopularCars;
