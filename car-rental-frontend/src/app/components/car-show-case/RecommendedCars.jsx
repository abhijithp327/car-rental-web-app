import React from 'react'
import CarsCard from '../cars-card/CarsCard';
import { Button } from '@/components/ui/button';

const RecommendedCars = () => {

    const recommendedCars = [
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
                    
                    <div className=''>
                        <div className='flex justify-between'>
                            <h3 className='text-secondary-300 text-base font-semibold'>Recommended Cars</h3>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-4 gap-5 place-items-start'>
                        {recommendedCars.map((car) => (
                            <CarsCard key={car.id} data={car} />
                        ))}
                    </div>

                    <div className='mt-4 flex items-center justify-center'>
                        <Button className="bg-primary-500 text-primary-0 px-4 py-[10px] shadow-md transition-all duration-300 ease-in-out 
                   hover:scale-105 hover:shadow-lg animate-fade-in-up hover:bg-primary-700">Show more cars</Button>
                    </div>

                </div>

            </div>
        </section>
    )
};

export default RecommendedCars;
