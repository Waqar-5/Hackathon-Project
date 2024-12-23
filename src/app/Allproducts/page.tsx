
import Image from "next/image";
import React from "react";
import { FaCaretDown } from "react-icons/fa";

const AllProducts = () => {
  const products = [
    {
      name: "The Dandy Chair",
      price: "£250",
      image: "/Photo-4.png",
    },
    {
      name: "Rustic Vase Set",
      price: "£155",
      image: "/Vase.png",
    },
    {
      name: "The Silky Vase",
      price: "£125",
      image: "/Silky.png",
    },
    {
      name: "The Lucy Lamp",
      price: "£399",
      image: "/Lamping.png",
    },
    {
      name: "Modern Table Lamp",
      price: "£399",
      image: "/pro-6.png",
    },
    {
      name: "Rustic Wall Decor",
      price: "£299",
      image: "/pro-7.png",
    },
    {
      name: "Vintage Mirror",
      price: "£325",
      image: "/pro-3.png",
    },
    {
      name: "Cozy Throw Blanket",
      price: "£155",
      image: "/pro-5.png",
    },
    {
      name: "The Dandy Chair",
      price: "£250",
      image: "/Photo-4.png",
    },
    {
      name: "Rustic Vase Set",
      price: "£155",
      image: "/Vase.png",
    },
    {
      name: "The Silky Vase",
      price: "£125",
      image: "/Silky.png",
    },
    {
      name: "The Lucy Lamp",
      price: "£399",
      image: "/Lamping.png",
    },
  ];

  return (
    <div className="py-8">
      {/* Header Image */}
      <div className="w-full">
        <Image
          src="/Frame 143.png"
          alt="Header"
          className="w-full object-cover h-40 sm:h-64 md:h-28
          "
          width={24}
          height={24}
        />
      </div>

      {/* Filters Section */}
      <div className="flex flex-col gap-4 px-4 mt-6 cursor-pointer transition ease-in-out duration-300  ">
        <div className="flex flex-wrap gap-6 items-center">
          <div className="flex items-center gap-2">
            <p className="font-medium">Category</p>
            <FaCaretDown />
          </div>
          <div className="flex items-center gap-2">
            <p className="font-medium">Product Type</p>
            <FaCaretDown />
          </div>
          <div className="flex items-center gap-2">
            <p className="font-medium">Price</p>
            <FaCaretDown />
          </div>
          <div className="flex items-center gap-2">
            <p className="font-medium">Brand</p>
            <FaCaretDown />
          </div>
        </div>
        <div className="flex justify-between items-center mb-9 md:ml-[800px]">
          <div className="flex items-center gap-2">
            <p className="font-medium">Sorting by:</p>
            <p className="font-medium">Date Added</p>
            <FaCaretDown />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative group p-4 transition-transform duration-500 ease-in-out transform hover:scale-105"
            >
              {/* Product Image */}
              <div className="relative w-full h-64 overflow-hidden rounded-md">
                <Image
                  src={product.image}
                  alt={product.name}
                  // fill
                  className="rounded-md object-cover transition-transform duration-500 group-hover:scale-110"
                  width={380}
                  height={580}
                />
              </div>
              {/* Product Details */}
              <h3 className="text-lg font-medium mt-4 text-center">{product.name}</h3>
              <p className="text-gray-600 mt-2 text-center">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;



