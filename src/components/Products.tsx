import Image from 'next/image';
import React from 'react';

const FamousProducts = () => {
  return (
    <div className="h-full cursor-pointer px-4 mb-5">
      <h1 className="text-[24px] sm:text-[32px] font-medium mb-8 text-center sm:text-left sm:ml-[105px]">
        Our popular products
      </h1>
      <div className="flex flex-wrap justify-center sm:justify-evenly items-center gap-8">
        {/* Product 1 */}
        <div className="flex flex-col items-center sm:items-start max-w-[630px]">
          <Image
            src={"/Large.png"}
            alt="chair"
            width={450}
            height={300}
            className="rounded-sm w-full sm:h-[265px] transition-transform duration-150 hover:scale-105"
          />
          <p className="mt-3 text-[18px] sm:text-[20px] text-center sm:text-left">
            The Poplar suede sofa
          </p>
          <span className="mt-1 text-[16px] sm:text-[18px] text-center sm:text-left">£980</span>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col items-center sm:items-start max-w-[205px]">
          <Image
            src={"/chair.png"}
            alt="chair"
            width={305}
            height={375}
            className="rounded-sm w-full sm:h-[260px] transition-transform duration-150 hover:scale-105"
          />
          <p className="mt-3 text-[18px] sm:text-[20px] text-center sm:text-left">
            The Dandy chair
          </p>
          <span className="mt-1 text-[16px] sm:text-[18px] text-center sm:text-left">£250</span>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col items-center sm:items-start max-w-[205px]">
          <Image
            src={"/Photo.png"}
            alt="chair"
            width={305}
            height={375}
            className="rounded-sm w-full sm:h-[260px] transition-transform duration-150 hover:scale-105"
          />
          <p className="mt-3 text-[18px] sm:text-[20px] text-center sm:text-left">
            The Dandy chair
          </p>
          <span className="mt-1 text-[16px] sm:text-[18px] text-center sm:text-left">£250</span>
        </div>
      </div>
      <div className="flex justify-center mt-10 sm:mt-[65px]">
        <button className="text-[16px] sm:text-[20px] px-6 sm:px-8 py-3 sm:py-4 rounded-md bg-[#F9F9F9] transition-transform duration-150 hover:scale-105 hover:bg-slate-300">
          View collection
        </button>
      </div>
    </div>
  );
};

export default FamousProducts;

