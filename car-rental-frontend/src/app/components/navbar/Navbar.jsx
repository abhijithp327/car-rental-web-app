"use client";

import { Input } from '@/components/ui/input';
import { Bell, Heart, Search, Settings, SlidersHorizontal } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';




const Navbar = () => {

    const router = useRouter();

    return (
        <section className="bg-primary-0">
            <div className="container px-4 py-6">
                <div className='flex items-center justify-between w-full'>
                    <div className='flex flex-col md:flex-row gap-8 md:gap-[64px] md:items-center w-full'>
                        <div className='flex justify-between'>
                            <img src="/images/logo.png" alt="logo" className='w-[108px] md:w-[148px] h-auto object-contain cursor-pointer' onClick={() => router.push('/')}></img>
                            <div className="flex md:hidden items-center justify-center w-7 h-7 rounded-full border bg-white cursor-pointer hover:bg-mainbg">
                                <img src="/images/person01.png" alt="image" className='' />
                            </div>
                        </div>

                        <div className='flex items-center justify-between w-full'>
                            <div className='relative group w-full max-w-[263px] md:max-w-[492px]'>
                                <Input type="text" placeholder="Search something here" className="text-sm rounded-xl md:rounded-full w-full h-[48px] md:h-[44px] pl-14" />
                                <div className='absolute top-[10px] left-4'>
                                    <Search className='w-6 h-6 text-secondary-400' />
                                </div>
                                <div className='hidden md:block absolute top-[10px] right-4 cursor-pointer' onClick={() => router.push('/filter')}>
                                    <SlidersHorizontal className='w-6 h-6 text-secondary-400' />
                                </div>
                            </div>

                            <div className='md:hidden cursor-pointer border w-[48px] h-[48px] flex items-center justify-center rounded-xl' onClick={() => router.push('/filter')}>
                                <SlidersHorizontal className='w-6 h-6 text-secondary-400' />
                            </div>

                        </div>

                    </div>

                    <div className='hidden md:flex items-center gap-5'>

                        <div className="flex items-center justify-center w-11 h-11 rounded-full border bg-white cursor-pointer hover:bg-mainbg hover:scale-110 transition-transform duration-300 ease-in-out">
                            <Heart className="text-secondary-400" fill="#596780" />
                        </div>


                        <div className="flex items-center justify-center w-11 h-11 rounded-full border bg-white cursor-pointer hover:bg-mainbg hover:scale-110 transition-transform duration-300 ease-in-out">
                            <div className='relative'>
                                <Bell className='text-secondary-400' fill='#596780' />
                                <div className='bg-red-500 w-[11px] h-[11px] absolute rounded-full top-[-12] left-5'></div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-11 h-11 rounded-full border bg-white cursor-pointer hover:bg-mainbg hover:scale-110 transition-transform duration-300 ease-in-out">
                            <Settings className='text-secondary-400' />
                        </div>

                        <div className="flex items-center justify-center w-11 h-11 rounded-full border bg-white cursor-pointer hover:bg-mainbg hover:scale-110 transition-transform duration-300 ease-in-out">
                            <img src="/images/person01.png" alt="image" className='' />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Navbar;
