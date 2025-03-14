"use client";

import { Fuel, Heart, Users } from 'lucide-react';
import { GiGearStick } from "react-icons/gi";
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const SliderCarsCard = ({ data }) => {

     const router = useRouter();

    return (
        <div className="bg-primary-0 max-w-[240px] h-[286px] md:max-w-[304px] w-full md:h-[388px] flex flex-col justify-between px-6 py-6 rounded-md transition-transform duration-300 hover:scale-105">


            <div className='flex flex-col'>
                <div className='flex items-center justify-between'>
                    <h4 className='text-secondary-500 text-base font-semibold md:text-lg md:font-bold'>{data.name}</h4>
                    <Heart
                        color="#ED3F3F"
                        fill="#ED3F3F"
                        className="w-4 h-4 md:w-6 md:h-6 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-80"
                    />

                </div>
                <p className='text-secondary-300 text-xs font-medium md:text-sm md:font-bold'>{data.type}</p>
            </div>

            <div className='flex flex-col items-center justify-between gap-5' onClick={() => router.push(`/cars/${data.id}`)}>
                <img src={data.image} className='max-w-[180px] md:max-w-[248px] w-full md:h-[100px] h-[56px] object-contain cursor-pointer' alt="image" />

                <div className='flex items-center justify-between w-full'>

                    <div className='flex items-center gap-1'>
                        <Fuel className='text-secondary-300 w-[14px] h-[14px] md:w-6 md:h-6' />
                        <p className='text-secondary-300 text-xs md:text-sm'>{data.petrol_capacity}</p>
                    </div>

                    <div className='flex items-center gap-1'>
                        <GiGearStick className='text-secondary-300 w-[14px] h-[14px] md:w-6 md:h-6' />
                        <p className='text-secondary-300 text-xs md:text-sm'>{data.transition}</p>
                    </div>

                    <div className='flex items-center gap-1'>
                        <Users className='text-secondary-300 w-[14px] h-[14px] md:w-6 md:h-6' />
                        <p className='text-secondary-300 text-xs md:text-sm'>{data.seat_capacity}</p>
                    </div>
                </div>

            </div>

            <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-1'>
                    <p className='text-base md:text-lg font-bold'>${data.discount_price}/ <span className='text-secondary-300 text-xs md:text-sm'>day</span></p>
                    <p className='text-xs md:text-base font-bold text-secondary-300 line-through decoration-1'>${data.price}</p>
                </div>
                <Button className="bg-primary-500 text-primary-0 px-4 py-[10px] hover:bg-primary-600 rounded-[6px]" onClick={() => router.push(`/payment/${data.id}`)}>Rent Now</Button>
            </div>

        </div>
    )
}

export default SliderCarsCard;
