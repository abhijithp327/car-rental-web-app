import { ArrowDownUp, ChevronDown } from 'lucide-react';
import React from 'react';

const Filter = () => {
    return (
        <section>
            <div className="container px-4 py-6">
                <div className='flex flex-col md:flex-row items-center md:justify-between md:gap-12'>

                    <div className='w-full bg-primary-0 p-4 md:px-12 md:py-6 flex flex-col gap-4 rounded-xl'>
                        <div className='flex items-center gap-3'>
                            <span className="w-[8px] h-[8px] bg-primary-500 rounded-full shadow-[0_0_6px_2px] shadow-primary-500"></span>
                            <h3 className='text-base font-semibold'>Pick-Up</h3>
                        </div>

                        <div className='flex md:justify-between justify-between '>

                        <div className='flex flex-col gap-2'>
                                <h5 className='text-sm md:text-base font-bold'>Locations</h5>
                                
                                <select name="" id="" className="bg-primary-0 border-none outline-none text-[10px] font-semibold md:text-sm pr-3">
                                        <option value="">city</option>
                                    </select>
                                  
                            </div>

                            <div className='border-r'></div>

                            <div className='flex flex-col gap-2'>
                                <h5 className='text-sm md:text-base font-bold'>Date</h5>
                                
                                <select name="" id="" className="bg-primary-0 border-none outline-none text-[10px] font-semibold md:text-sm pr-3">
                                        <option value="">date</option>
                                    </select>
                                  
                            </div>

                            <div className='border-r'></div>

                            <div className='flex flex-col gap-2'>
                                <h5 className='text-sm md:text-base font-bold'>Time</h5>
                                <select name="" id="" className="bg-primary-0 border-none outline-none text-[10px] font-semibold md:text-sm pr-3">
                                        <option value="">time</option>
                                    </select>

                            </div>
                        </div>
                        
                    </div>

                    <div className='z-50 px-[18px] py-[18px] bg-primary-500 rounded-xl mt-[-10px] md:mt-0'>
                        <ArrowDownUp className='text-primary-0 w-6 h-6' />
                    </div>

                    <div className='mt-[-10px] md:mt-0 w-full bg-primary-0 p-4 md:px-12 md:py-6 flex flex-col gap-4 rounded-xl'>
                        <div className='flex items-center gap-3'>
                            <span className="w-[8px] h-[8px] bg-primary-500 rounded-full shadow-[0_0_6px_2px] shadow-primary-500"></span>
                            <h3 className='text-base font-semibold'>Pick-Up</h3>
                        </div>
                        <div className='flex md:justify-between justify-between '>

                            <div className='flex flex-col gap-2'>
                                <h5 className='text-sm md:text-base font-bold'>Locations</h5>
                                    <select name="" id="" className="bg-primary-0 border-none outline-none text-[10px] font-semibold md:text-sm pr-3">
                                        <option value="">city</option>
                                    </select>
                            </div>

                            <div className='border-r'></div>

                            <div className='flex flex-col gap-2'>
                                <h5 className='text-sm md:text-base font-bold'>Date</h5>
                                
                                <select name="" id="" className="bg-primary-0 border-none outline-none text-[10px] font-semibold md:text-sm pr-3">
                                        <option value="">date</option>
                                    </select>
                                  
                            </div>

                            <div className='border-r'></div>

                            <div className='flex flex-col gap-2'>
                                <h5 className='text-sm md:text-base font-bold'>Time</h5>

                                <select name="" id="" className="bg-primary-0 border-none outline-none text-[10px] font-semibold md:text-sm pr-3">
                                        <option value="">time</option>
                                    </select>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
};

export default Filter;
