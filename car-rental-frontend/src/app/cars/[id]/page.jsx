import { Star } from "lucide-react";
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
          <div className="bg-primary-0 max-w-[343px] h-full max-h-[345px] md:w-[600px] md:max-w-[50%] p-6 md:max-h-[468px] rounded-[6px]">

            <div className="flex flex-col">
              <h3 className="text-secondary-500 text-lg-2 font-bold">Nissan GT -R</h3>

              <div className="flex items-center gap-2">
                <div className="flex gap-1 text-[#FBAD39]">
                  <Star className="w-[12px] fill-[#FBAD39] h-[12px]" />
                  <Star className="w-[12px] fill-[#FBAD39] h-[12px]" />
                  <Star className="w-[12px] fill-[#FBAD39] h-[12px]" />       
                  <Star className="w-[12px] fill-[#FBAD39] h-[12px]" />
                  <Star className="w-[12px] fill-[#FBAD39] h-[12px]" />
                </div>
                <div>
                  <span>440+ Reviewer</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
