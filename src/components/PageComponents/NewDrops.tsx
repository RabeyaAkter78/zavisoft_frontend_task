/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { useGetProductsQuery } from "@/redux/api/productsApi";
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
  creationAt: string;
  updatedAt: string;
}

const NewDrops = () => {

  const {
    data: products,
    isLoading,
    error,
    refetch,
  } = useGetProductsQuery({});
  // console.log("products", products);


  const paginatedProducts = products?.slice(0, 4);
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 my-[90px]">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4a69e2]"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 my-[90px]">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">Something went wrong</div>
          <button
            onClick={() => refetch()}
            className="bg-[#4a69e2] text-white px-6 py-3 rounded-lg font-rubik font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 my-[90px]">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-xl md:text-7xl font-semibold font-rubik text-gray-900 mb-4 md:mb-0">
          DON'T MISS OUT <br />
          NEW DROPS
        </h2>
        <Link href="/product">
          <button className="bg-[#4a69e2] text-white px-3 md:px-6 py-3 rounded-lg font-rubik font-medium hover:bg-blue-700 transition-colors duration-300">
            SHOP NEW DROPS
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginatedProducts.map((product: Product) => (
          <div
            key={product.id}
            className="relative transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="bg-[#eceef0] h-[350px] rounded-3xl border-8 border-white p-5 relative overflow-hidden">
              <span className="absolute top-4 left-4 bg-[#4a69e2] text-white text-xs font-semibold w-16 px-4 py-3 rounded-tl-xl rounded-br-xl -ml-4 -mt-4 flex justify-center items-center z-10">
                New
              </span>

              <div className="relative transition-transform duration-500 ease-in-out hover:scale-110 rounded-xl">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
            <div className="p-4 flex flex-col">
              <h3 className="text-sm md:text-base font-semibold text-gray-900 my-4">
                {product.title}
              </h3>
              <Link href={`/product/${product.id}`}>
                <button className="bg-black text-white w-full py-3 rounded-lg font-rubik font-medium hover:bg-gray-800 transition-colors duration-300">
                  VIEW PRODUCT -{" "}
                  <span className="text-yellow-600">{product.price}</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewDrops;
