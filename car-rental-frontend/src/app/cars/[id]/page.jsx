"use client";

import CarsCard from "@/app/components/cars-card/CarsCard";
import SliderCarsCard from "@/app/components/cars-card/SliderCarsCard";
import Review from "@/app/components/review/Review";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { Heart, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProductDetails = () => {


  const carsData = [
    { id: 1, name: "Tesla Model S", type: "Electric", price: 100, discount_price: 80, petrol_capacity: "N/A", transition: "Automatic", seat_capacity: "5", image: "/images/car01.png" },
    { id: 2, name: "Audi R8", type: "Sports", price: 150, discount_price: 120, petrol_capacity: "73L", transition: "Automatic", seat_capacity: "2", image: "/images/car02.png" },
    { id: 3, name: "Honda City", type: "Sedan", price: 90, discount_price: 75, petrol_capacity: "40L", transition: "Manual", seat_capacity: "5", image: "/images/car03.png" },
    { id: 4, name: "BMW M4", type: "Sports", price: 160, discount_price: 130, petrol_capacity: "59L", transition: "Automatic", seat_capacity: "4", image: "/images/car04.png" },
    { id: 5, name: "Audi GT", type: "Sports", price: 140, discount_price: 115, petrol_capacity: "85L", transition: "Automatic", seat_capacity: "2", image: "/images/car05.png" },
    { id: 6, name: "Honda Civic GT", type: "Sedan", price: 95, discount_price: 80, petrol_capacity: "47L", transition: "Manual", seat_capacity: "5", image: "/images/car07.png" },
    { id: 7, name: "Volkswagen Polo GT", type: "Hatchback", price: 85, discount_price: 70, petrol_capacity: "45L", transition: "Manual", seat_capacity: "5", image: "/images/car08.png" },
    { id: 8, name: "Hyundai Verna", type: "Sedan", price: 92, discount_price: 78, petrol_capacity: "45L", transition: "Automatic", seat_capacity: "5", image: "/images/car02.png" },
  ];

  const [RecentEmblaRef] = useEmblaCarousel({ loop: false, align: 'start', slidesToScroll: 1 });
  const [RecommendationEmblaRef] = useEmblaCarousel({ loop: false, align: 'start', slidesToScroll: 1 });


  return (
    <section className="">
      <div className="container px-4 py-6">


        <div className="flex flex-col gap-8">
          {/* Main Section Grid and Details */}
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            {/* Image Section */}
            <div className="w-full md:w-1/2">

              <div className="grid grid-cols-4 gap-4">

                <div className="col-span-4">
                  <img src="/images/view0.png" alt="" className="w-full h-auto rounded-[6px]" />
                </div>

                <div className="row-span-2">
                  <img src="/images/view01.png" alt="" className="w-full h-auto rounded-[6px]" />
                </div>

                <div>
                  <img src="/images/view02.png" alt="" className="w-full h-auto rounded-[6px]" />
                </div>

                <div>
                  <img src="/images/view03.png" alt="" className="w-full h-auto rounded-[6px]" />
                </div>

              </div>
            </div>

            {/* Details Section */}
            <div className="bg-primary-0 w-full max-w-[356px] h-full md:min-h-[468px] min-h-[345px] max-h-[345px] md:w-[600px] md:max-w-[50%] p-6 md:max-h-[468px] rounded-md">

              <div className="flex flex-col gap-6 md:gap-12">

                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-secondary-500 text-lg-2 md:text-xl-2 font-bold">Nissan GT -R</h3>
                    <Heart className="md:w-6 md:h-6 text-[#ED3F3F] fill-[#ED3F3F] w-5 h-5 cursor-pointer " />
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex gap-1 text-[#FBAD39]">
                      <Star className="w-[12px] fill-[#FBAD39] h-[12px] md:w-5 md:h-5" />
                      <Star className="w-[12px] fill-[#FBAD39] h-[12px] md:w-5 md:h-5" />
                      <Star className="w-[12px] fill-[#FBAD39] h-[12px] md:w-5 md:h-5" />
                      <Star className="w-[12px] fill-[#FBAD39] h-[12px] md:w-5 md:h-5" />
                      <Star className="w-[12px] text-secondary-300 h-[12px] md:w-5 md:h-5" />
                    </div>
                    <div className="text-secondary-300 text-xs md:text-sm font-medium">
                      <span>440+ Reviewer</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-8">
                  <p className="text-secondary-300 text-xs md:text-lg font-normal">NISMO has became the embodiment of nissan's outstanding performance, inspired by the Nismo GT-R, the race car of the future.</p>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between gap-6">
                      <p className="text-secondary-300 text-xs md:text-lg font-medium">Sport</p>
                      <p className="text-secondary-500 text-xs md:text-lg font-medium">Capacity</p>
                      <p className="text-secondary-300 text-xs md:text-lg font-medium">2 Person</p>
                      <p className="text-secondary-500 text-xs md:text-lg font-medium">Type Car</p>
                    </div>
                    <div className="flex items-center justify-between gap-6">
                      <p className="text-secondary-300 text-xs md:text-lg font-medium">Steering</p>
                      <p className="text-secondary-500 text-xs md:text-lg font-medium">Manual</p>
                      <p className="text-secondary-300 text-xs md:text-lg font-medium">Gasoline</p>
                      <p className="text-secondary-500 text-xs md:text-lg font-medium">70L</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <p className="text-secondary-500 text-lg md:text-xl font-bold">$80.00/</p>
                      <span className="text-secondary-300 text-xs md:text-base font-medium">days</span>
                    </div>
                    <div className="">
                      <p className="text-secondary-300 text-xs md:text-sm font-medium line-through decoration-1">$100.00</p>
                    </div>
                  </div>
                  <Button className="bg-primary-500 text-primary-0 px-4 py-[10px] md:px-8 md:py-6 hover:bg-primary-600 rounded-[6px]">Rent Now</Button>
                </div>

              </div>

            </div>
            
          </div>

          {/* Review Section */}
          <div className="">
            <Review />
          </div>

          {/* Recent cars cards */}
          <div className="flex flex-col gap-6">

            <div className='flex justify-between'>
              <h3 className='text-secondary-300 text-base font-semibold'>Recent Cars</h3>
              <Link href='/cars' className='text-primary-500 text-sm md:text-base font-bold'>View all</Link>
            </div>

            <div className="">
              {/* Desktop View */}
              <div className="hidden md:grid grid-cols-4 gap-6">
                {carsData.slice(0, 4).map((car) => (
                  <SliderCarsCard data={car} key={car.id} />
                ))}
              </div>


              {/* Mobile View */}
              <div className="md:hidden overflow-hidden" ref={RecentEmblaRef}>
                <div className="flex gap-5">
                  {carsData.map((car) => (
                    <div key={car.id} className="flex-[0_0_78%] min-w-0">
                      <SliderCarsCard data={car} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Recommendation cars cards */}
          <div className="flex flex-col gap-6">

            <div className='flex justify-between'>
              <h3 className='text-secondary-300 text-base font-semibold'>Recommendation Cars</h3>
              <Link href='/cars' className='text-primary-500 text-sm md:text-base font-bold'>View all</Link>
            </div>

            <div className="">
              {/* Desktop View */}
              <div className="hidden md:grid grid-cols-4 gap-6">
                {carsData.slice(0, 4).map((car) => (
                  <SliderCarsCard data={car} key={car.id} />
                ))}
              </div>

              {/* Mobile View */}
              <div className="md:hidden overflow-hidden" ref={RecommendationEmblaRef}>
                <div className="flex gap-5">
                  {carsData.map((car) => (
                    <div key={car.id} className="flex-[0_0_78%] min-w-0">
                      <SliderCarsCard data={car} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductDetails;
