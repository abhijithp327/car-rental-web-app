import React from 'react';
import FilterCars from '../components/filter/FilterCars';
import FilterPickDrop from '../components/filter/FilterPickDrop';
import CarsCard from '../components/cars-card/CarsCard';

const FilterPage = () => {
    const carData = [
        { id: 1, name: "Tesla Model S", type: "Electric", price: 100, discount_price: 80, petrol_capacity: "N/A", transition: "Automatic", seat_capacity: "5", image: "/images/car01.png" },
        { id: 2, name: "Audi R8", type: "Sports", price: 150, discount_price: 120, petrol_capacity: "73L", transition: "Automatic", seat_capacity: "2", image: "/images/car02.png" },
        { id: 3, name: "Honda City", type: "Sedan", price: 90, discount_price: 75, petrol_capacity: "40L", transition: "Manual", seat_capacity: "5", image: "/images/car03.png" },
        { id: 4, name: "BMW M4", type: "Sports", price: 160, discount_price: 130, petrol_capacity: "59L", transition: "Automatic", seat_capacity: "4", image: "/images/car04.png" },
        { id: 5, name: "Audi GT", type: "Sports", price: 140, discount_price: 115, petrol_capacity: "85L", transition: "Automatic", seat_capacity: "2", image: "/images/car05.png" },
        { id: 6, name: "Honda Civic GT", type: "Sedan", price: 95, discount_price: 80, petrol_capacity: "47L", transition: "Manual", seat_capacity: "5", image: "/images/car07.png" },
        { id: 7, name: "Volkswagen Polo GT", type: "Hatchback", price: 85, discount_price: 70, petrol_capacity: "45L", transition: "Manual", seat_capacity: "5", image: "/images/car08.png" },
        { id: 8, name: "Hyundai Verna", type: "Sedan", price: 92, discount_price: 78, petrol_capacity: "45L", transition: "Automatic", seat_capacity: "5", image: "/images/car02.png" },
        { id: 8, name: "Hyundai I20", type: "Hatchback", price: 92, discount_price: 78, petrol_capacity: "45L", transition: "Automatic", seat_capacity: "5", image: "/images/car03.png" },
    ];

    return (
        <section className="">
            <div className="container px-4 py-12">

                <div className="flex flex-col md:flex-row gap-8">

                    {/* Sidebar filter - visible on md and above */}
                    <div className="hidden md:block w-1/4">
                        <FilterCars />
                    </div>

                    {/* Main content */}
                    <div className=''>
                        <div className="flex-1 flex flex-col gap-9">
                            <FilterPickDrop />

                            {/* Car listing grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {carData.map((car) => (
                                    <CarsCard key={car.id} data={car} mdWidth="317px" mdHeight="388px" />
                                ))}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default FilterPage;
