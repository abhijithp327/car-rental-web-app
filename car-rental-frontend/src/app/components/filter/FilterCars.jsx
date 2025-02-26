"use client";

import React, { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import * as Slider from "@radix-ui/react-slider";


const FilterCars = () => {

    const [price, setPrice] = useState(100);

    const carTypes = [
        {
            name: "Sport",
            count: 10
        },
        {
            name: "SUV",
            count: 12
        },
        {
            name: "MPV",
            count: 16
        },
        {
            name: "Sedan",
            count: 20
        },
        {
            name: "Coupe",
            count: 14
        },
        {
            name: "Hatchback",
            count: 14
        },

    ];

    const carCapacity = [
        {
            capacity: "2 Person",
            count: 8
        },
        {
            capacity: "4 Person",
            count: 10
        },
        {
            capacity: "6 Person",
            count: 12
        },
        {
            capacity: "8 or More",
            count: 16
        },

    ];

    return (
        <div className='bg-primary-0 max-w-[340px] px-6 py-6 flex flex-col gap-14'>

            <div className='flex flex-col gap-8'>
                <div>
                    <h5 className="text-sm text-secondary-300 font-medium">Type</h5>
                </div>

                <div>
                    <ul className='flex flex-col gap-8'>
                        {carTypes.map((type, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <Checkbox id={type} className="w-5 h-5 rounded-[6px]" />
                                <Label htmlFor={type} className="cursor-pointer text-base font-semibold">
                                    {type.name} <span className='text-secondary-300 text-sm'> ({type.count})</span>
                                </Label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='flex flex-col gap-8'>
                <div>
                    <h5 className="text-sm text-secondary-300 font-medium">Capacity</h5>
                </div>

                <div>
                    <ul className='flex flex-col gap-8'>
                        {carCapacity.map((type, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <Checkbox id={type} className="w-5 h-5 rounded-[6px]" />
                                <Label htmlFor={type} className="cursor-pointer text-base font-semibold">
                                    {type.capacity} <span className='text-secondary-300 text-sm'> ({type.count})</span>
                                </Label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* PRICE SLIDER */}
            <div className="flex flex-col gap-4">
                <h5 className="text-sm text-secondary-300 font-medium">PRICE</h5>
                <Slider.Root
                    className="relative flex items-center select-none touch-none w-full h-5"
                    value={[price]}
                    onValueChange={(value) => setPrice(value[0])}
                    max={500} // Max price limit
                    step={10} // Step interval
                >
                    <Slider.Track className="bg-gray-300 relative grow rounded-full h-[8px]">
                        <Slider.Range className="absolute bg-blue-600 h-full rounded-full" />
                    </Slider.Track>
                    <Slider.Thumb
                        className="block w-5 h-5 bg-blue-600 border-2 border-white rounded-full shadow-lg cursor-pointer"
                        aria-label="Price"
                    />
                </Slider.Root>
                <p className="text-secondary-300 text-sm font-semibold">Max. ${price}.00</p>
            </div>

        </div>
    );
};

export default FilterCars;
