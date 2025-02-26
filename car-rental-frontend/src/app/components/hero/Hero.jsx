"use client";

import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel();

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on("select", () => { });
        }
    }, [emblaApi]);

    return (
        <section>
            <div className="container px-4 py-6">
                {/* Mobile View - Embla Slider */}
                <div className="block md:hidden overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        <div className="flex-[0_0_100%] px-2 relative">
                            <img src="/images/ads01.png" alt="Ad 1" className="w-[327px] h-[232px] rounded-lg object-cover" />
                            <div className="absolute top-0 flex flex-col items-start gap-3 text-primary-0 p-5">
                                <h2 className="text-base font-semibold  ">The Best Platform for Car Rental</h2>
                                <p className="text-xs font-medium max-w-[210px]">Ease of doing a car rental safely and reliably. Of course at a low price</p>
                                <Button className="bg-primary-500 px-7">Rental Car</Button>
                            </div>
                        </div>
                        <div className="flex-[0_0_100%] px-2 relative                ">
                            <img src="/images/ads02.png" alt="Ad 2" className="w-[327px] h-[232px] rounded-lg object-cover" />
                            <div className="absolute top-0 flex flex-col items-start gap-3 text-primary-0 p-5">
                                <h2 className="text-base break-words">The Best Platform for Car Rental</h2>
                                <p className="text-xs max-w-[210px]">Ease of doing a car rental safely and reliably. Of course at a low price</p>
                                <Button className="bg-information-500 px-7">Rental Car</Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop View - Side-by-Side Layout */}
                <div className="hidden md:flex items-center gap-5 mt-2">
                    <div className="w-full h-[360px] relative">
                        <img src="/images/ads01.png" alt="Ad 1" className="w-full h-full " />
                        <div className="absolute top-0 flex flex-col items-start gap-5 text-primary-0 p-8">
                            <h2 className="text-xl-2 font-bold">The Best Platform <br /> for Car Rental</h2>
                            <p className="text-base font-medium">Ease of doing a car rental safely and <br /> reliably. Of course at a low price</p>
                            <Button className="bg-primary-500 px-7">Rental Car</Button>
                        </div>
                    </div>
                    <div className="w-full h-[360px] relative">
                        <img src="/images/ads02.png" alt="Ad 2" className="w-full h-full" />
                        <div className="absolute top-0 flex flex-col items-start gap-5 text-primary-0 p-8">
                            <h2 className="text-xl-2 font-bold">Easy way to rent a <br /> car at a low price</h2>
                            <p className="text-base font-medium">Ease of doing a car rental safely and <br /> reliably. Of course at a low price</p>
                            <Button className="bg-information-500 px-7">Rental Car</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
