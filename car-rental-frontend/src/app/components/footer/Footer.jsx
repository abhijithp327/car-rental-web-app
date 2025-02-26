import { Copyright } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <section className="bg-primary-0">
            <div className="container px-4 py-12 md:py-[60px]">

                <div className='flex flex-col gap-6'>

                    <div className='flex flex-col gap-8'>

                        <div className='flex flex-col gap-3'>
                            <div className='flex items-start'>
                                <img src="/images/logo.png" alt="logo" className='w-[108px] md:w-[128px] max-h-[23px] object-contain' />
                            </div>
                            <p className='text-xs md:text-base text-secondary-300'>Our vision is to provide convenience <br /> and help increase your sales business</p>
                        </div>

                        <div className='flex flex-wrap items-center justify-between gap-12'>

                            <div className='flex flex-col gap-4'>
                                <h3 className='text-lg-2 font-bold'>About</h3>
                                <div className='flex flex-col gap-3 text-secondary-300 text-base font-medium'>
                                    <Link href="/works">How it works</Link>
                                    <Link href="/works">Featured</Link>
                                    <Link href="/works">Partnership</Link>
                                    <Link href="/works">Business Relation</Link>
                                </div>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <h3 className='text-lg-2 font-bold'>Socials</h3>
                                <div className='flex flex-col gap-3 text-secondary-300 text-base font-medium'>
                                    <Link href="/works">Discord</Link>
                                    <Link href="/works">Instagram</Link>
                                    <Link href="/works">Twitter</Link>
                                    <Link href="/works">Facebook</Link>
                                </div>
                            </div>


                            <div className='flex flex-col gap-4'>
                                <h3 className='text-lg-2 font-bold'>Community</h3>
                                <div className='flex flex-col gap-3 text-secondary-300 text-base font-medium'>
                                    <Link href="/works">Events</Link>
                                    <Link href="/works">Blog</Link>
                                    <Link href="/works">Podcast</Link>
                                    <Link href="/works">Invite a friend</Link>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='border'></div>

                    <div className=' flex flex-col-reverse md:flex-row md:justify-between gap-8'>
                        <div className='flex items-center text-sm md:text-base font-semibold'>
                            <Copyright className='w-4 h-4 text-black' />
                            <p>2025 MORENT. All rights reserved</p>
                        </div>
                        <div className='flex justify-between md:gap-[60px]'>
                            <p className='text-xs md:text-base font-semibold'>Privacy & Policy</p>
                            <p className='text-xs md:text-base font-semibold'>Terms & Condition</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Footer;
