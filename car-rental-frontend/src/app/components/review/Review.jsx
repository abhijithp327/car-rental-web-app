import { Button } from '@/components/ui/button';
import { ChevronDown, Star } from 'lucide-react';
import React from 'react';

const Review = () => {

    const text = "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.";

    return (
        <div className='bg-primary-0 p-6 rounded-md'>

            <div className='flex flex-col gap-6'>
                <div className='flex items-center gap-3'>
                    <h4 className='text-secondary-500 text-lg font-semibold md:text-lg-2'>Reviews</h4>
                    <div className='p-1 w-full h-full max-w-10 max-h-6 bg-primary-500 flex items-center justify-center text-primary-0 text-sm font-bold rounded'>13</div>
                </div>

                <div className=''>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-start gap-2'>
                            <img src="/images/person01.png" alt="image" className='w-10 h-10 md:w-12 md:h-12' />
                            <div className='flex flex-col gap-3'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-secondary-500 text-sm font-semibold md:text-base'>Alex Stanton</h3>
                                        <p className='text-secondary-300 text-xs font-semibold md:text-sm'>CEO at Bukalapak</p>
                                    </div>
                                    <div className='flex flex-col gap-1 items-end'>
                                        <p className='text-secondary-300 text-sm font-medium md:text-base'>21 July 2024</p>
                                        <div className='flex items-center gap-1'>
                                            <Star className="w-[12px] fill-[#FBAD39] text-[#FBAD39] h-[12px] md:w-5 md:h-5" />
                                            <Star className="w-[12px] fill-[#FBAD39] text-[#FBAD39] h-[12px] md:w-5 md:h-5" />
                                            <Star className="w-[12px] fill-[#FBAD39] text-[#FBAD39] h-[12px] md:w-5 md:h-5" />
                                            <Star className="w-[12px] fill-[#FBAD39] text-[#FBAD39] h-[12px] md:w-5 md:h-5" />
                                            <Star className="w-[12px] text-secondary-300 h-[12px] md:w-5 md:h-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    {/* Mobile: Show first 80 characters */}
                                    <p className="text-secondary-300 text-sm font-normal md:hidden break-words">
                                        {text.length > 80 ? text.slice(0, 80) + "..." : text}
                                    </p>

                                    {/* Desktop: Show first 200 characters */}
                                    <p className="text-secondary-300 text-base font-normal hidden md:block break-words">
                                        {text.length > 200 ? text.slice(0, 300) + "..." : text}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className=''>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-start gap-2'>
                            <img src="/images/person02.png" alt="image" className='w-10 h-10 md:w-12 md:h-12' />
                            <div className='flex flex-col gap-3'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-secondary-500 text-sm font-semibold md:text-base'>Alex Stanton</h3>
                                        <p className='text-secondary-300 text-xs font-semibold md:text-sm'>CEO at Bukalapak</p>
                                    </div>
                                    <div className='flex flex-col gap-1 items-end'>
                                        <p className='text-secondary-300 text-sm font-medium md:text-base'>21 July 2024</p>
                                        <div className='flex items-center gap-1'>
                                            <Star className="w-[12px] fill-[#FBAD39] text-[#FBAD39] h-[12px] md:w-5 md:h-5" />
                                            <Star className="w-[12px] fill-[#FBAD39] text-[#FBAD39] h-[12px] md:w-5 md:h-5" />
                                            <Star className="w-[12px] fill-[#FBAD39] text-[#FBAD39] h-[12px] md:w-5 md:h-5" />
                                            <Star className="w-[12px] fill-[#FBAD39] text-[#FBAD39] h-[12px] md:w-5 md:h-5" />
                                            <Star className="w-[12px] text-secondary-300 h-[12px] md:w-5 md:h-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    {/* Mobile: Show first 80 characters */}
                                    <p className="text-secondary-300 text-sm font-normal md:hidden break-words">
                                        {text.length > 80 ? text.slice(0, 80) + "..." : text}
                                    </p>

                                    {/* Desktop: Show first 200 characters */}
                                    <p className="text-secondary-300 text-base font-normal hidden md:block break-words">
                                        {text.length > 200 ? text.slice(0, 300) + "..." : text}
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex items-center justify-center gap-2 group">
                    <Button className="bg-primary-0 text-secondary-300 text-sm font-semibold md:text-base px-7 flex items-center gap-2 group-hover:text-secondary-500">
                        Show More
                        <ChevronDown className="w-5 h-5 text-secondary-300 group-hover:text-secondary-500" />
                    </Button>
                </div>

            </div>




        </div>
    )
}

export default Review;
