import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Heart, Star } from 'lucide-react';
import React from 'react';

const PaymentDetails = () => {
    return (
        <section>
            <div className='container px-4 py-6'>

                <div className='flex md:flex-row flex-col-reverse gap-8 items-center md:items-start'>
                    {/* Billing Info forms */}
                    <div className='w-full flex justify-center md:w-2/3'>
                        <div className='bg-primary-0 w-full max-w-[327px] md:max-w-[852px] p-6 flex flex-col gap-5 rounded-lg'>
                            <div className='flex flex-col gap-1'>
                                <h3>Billing Info</h3>
                                <div className='flex items-center justify-between'>
                                    <p>Please enter your billing info</p>
                                    <p>step 1 of 4</p>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row md:flex-wrap items-center gap-5'>
                                <div className='flex flex-col gap-4'>
                                    <Label htmlFor="name">Name</Label>
                                    <Input className='py-4 px-8 w-[295px] md:w-[370px] h-14 bg-mainbg' id="name" type="text" placeholder="Your name" />
                                </div>

                                <div className='flex flex-col gap-4'>
                                    <Label htmlFor="phone">Phone number</Label>
                                    <Input className='py-4 px-8 w-[295px] md:w-[370px] h-14 bg-mainbg' id="phone" type="text" placeholder="Your phone" />
                                </div>

                                <div className='flex flex-col gap-4'>
                                    <Label htmlFor="address">Address</Label>
                                    <Input className='py-4 px-8 w-[295px] md:w-[370px] h-14 bg-mainbg' id="address" type="text" placeholder="Your address" />
                                </div>

                                <div className='flex flex-col gap-4'>
                                    <Label htmlFor="city">Town/City</Label>
                                    <Input className='py-4 px-8 w-[295px] md:w-[370px] h-14 bg-mainbg' id="city" type="text" placeholder="Your town or city" />
                                </div>

                            </div>

                        </div>
                    </div>
                    {/* Car Info Card */}     
                    <div className='w-full flex justify-center md:w-1/3'>
                        <div className="bg-primary-0 w-full min-w-[327px] max-w-[327px] max-h-[428px] md:max-w-[492px] md:max-h-[560px] p-6 rounded-md">

                            <div className="flex flex-col gap-6 md:gap-12">

                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-secondary-500 text-lg-2 md:text-lg-2 font-bold">Rental Summary</h3>
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

                </div>

            </div>
        </section>
    )
};

export default PaymentDetails;