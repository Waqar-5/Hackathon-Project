import React from 'react';
import Image from 'next/image';

const ShoppingCart = () => {
  return (
    <div className="bg-white min-h-screen p-4 md:p-8 lg:px-16">
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">Your shopping cart</h1>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr] gap-4 text-sm md:text-base border-b pb-4">
        {/* Table Headers */}
        <div className="font-semibold">Product</div>
        <div className="font-semibold text-center">Quantity</div>
        <div className="font-semibold text-right">Total</div>

        {/* Product Row 1 */}
        <div className="flex items-center gap-4">
          <Image
            src="/Product Image.png"
            alt="Graystone vase"
            width={80}
            height={80}
            className="rounded-md transition-transform duration-200 hover:scale-105"
          />
          <div>
            <p className="font-medium">Graystone vase</p>
            <p className="text-gray-500">A timeless ceramic vase with a sleek gray glaze.</p>
          </div>
        </div>
        <div className="text-center">1</div>
        <div className="text-right font-medium">£85</div>

        {/* Product Row 2 */}
        <div className="flex items-center gap-4">
          <Image
            src="/Product Image-1.png"
            alt="Basic white vase"
            width={80}
            height={80}
            className="rounded-md transition-transform duration-200 hover:scale-105"
          />
          <div>
            <p className="font-medium">Basic white vase</p>
            <p className="text-gray-500">Beautiful and simple, this is a vase for the decades.</p>
          </div>
        </div>
        <div className="text-center">1</div>
        <div className="text-right font-medium">£125</div>
      </div>

      {/* Subtotal */}
      <div className="mt-10 text-center lg:text-right">
        <div className="font-medium text-lg md:text-xl">Subtotal: £210</div>
        <p className="text-sm mt-4">
            Taxes and shipping are calculated at checkout
          </p>
        <button className="bg-[#2A254B] h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white">
          Go to checkout
        </button>
      </div>


    </div>
  );
};

export default ShoppingCart;
