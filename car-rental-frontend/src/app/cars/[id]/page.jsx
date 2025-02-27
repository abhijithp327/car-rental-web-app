import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import React from "react";

const ProductDetails = () => {
  return (
    <section className="">
      <div className="container px-4 py-6">

        <div className="flex flex-col md:flex-row md:justify-between gap-6">

          {/* Image Section */}
          <div className="w-full md:w-1/2">

            <div className="grid grid-cols-4 gap-4">

              <div className="col-span-4">
                <img src="/images/view0.png" alt="" className="w-full h-auto rounded-[6px]" />
              </div>

              <div className="row-span-2">
                <img src="/images/view01.png" alt="" className="w-full h-auto rounded-[6px]" />
              </div>

              <div>
                <img src="/images/view02.png" alt="" className="w-full h-auto rounded-[6px]" />
              </div>

              <div>
                <img src="/images/view03.png" alt="" className="w-full h-auto rounded-[6px]" />
              </div>

            </div>
          </div>

          {/* Details Section */}
          <div className="bg-primary-0 max-w-[343px] h-full md:min-h-[468px] min-h-[345px] max-h-[345px] md:w-[600px] md:max-w-[50%] p-6 md:max-h-[468px] rounded-[6px]">

            <div className="flex flex-col gap-6 md:gap-12">

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-secondary-500 text-lg-2 md:text-xl-2 font-bold">Nissan GT -R</h3>
                  <Heart className="md:w-6 md:h-6 text-[#ED3F3F] fill-[#ED3F3F] w-5 h-5 cursor-pointer " />
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
                      <p className="text-secondary-300 text-xs md:text-base font-medium">$100.00</p>
                  </div>
                </div>
                <Button className="bg-primary-500 text-primary-0 px-4 py-[10px] md:px-8 md:py-6 hover:bg-primary-600 rounded-[6px]">Rent Now</Button>
              </div>

            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
