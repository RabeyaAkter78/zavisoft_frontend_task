"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useGetProductByIdQuery } from "@/redux/api/productsApi";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
  images: string[];
  creationAt: string;
  updatedAt: string;
}

const ProductDetails = () => {
  const params = useParams();
  const productId = params.id as string;

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductByIdQuery(parseInt(productId));

  const [selectedColor, setSelectedColor] = useState("#1F2937");
  const [selectedSize, setSelectedSize] = useState<number | null>(38);

  // Default colors and sizes for demo
  const colors = ["#1F2937", "#6B8E6E", "#DC2626", "#2563EB"];
  const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

  if (isLoading) {
    return (
      <div className="bg-[#f3f3f3] min-h-screen py-10 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4a69e2]"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#f3f3f3] min-h-screen py-10 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-red-500 text-xl mb-4">
              Error: Failed to fetch product
            </div>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#4a69e2] text-white px-6 py-3 rounded-lg font-rubik font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-[#f3f3f3] min-h-screen py-10 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-gray-500 text-xl">Product not found</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen py-8 px-4 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-5">
        {/* LEFT SIDE - IMAGE GRID */}
        <div className="w-full md:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-4  ">
          {product.images?.map((img: string | StaticImport, index: React.Key | null | undefined) => (
            <div
              key={index}
              className=" flex justify-center items-center bg-background  rounded-tl-2xl "
            >
              <Image
                src={img}
                alt={product.title}
                width={429}
                height={510}
                className="object-cover w-[429px] h-[510px] rounded-tl-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder-image.jpg ";
                }}
              />
            </div>
          )) || (
            // Fallback if no images
            <div className="col-span-2 bg-white rounded-2xl overflow-hidden flex items-center justify-center p-6">
              <Image
                src="/placeholder-image.jpg"
                alt={product.title}
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          )}
        </div>

        {/* RIGHT SIDE - PRODUCT INFO */}
        <div className="w-full md:w-[30%]  rounded-2xl p-8">
          {/* Badge */}
          <span className="bg-blue-600  text-xs px-4 py-1 rounded-full">
            New Release
          </span>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold mt-4 leading-tight">
            {product.title}
          </h1>

          {/* Price */}
          <p className="text-blue-600 text-xl font-semibold mt-3">
            ${product.price}.00
          </p>

          {/* Description */}
          <p className="text-gray-600 text-sm mt-4">{product.description}</p>

          {/* Category */}
          <p className="text-gray-500 text-sm mt-2">
            Category: {product.category?.name}
          </p>

          {/* COLOR */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold mb-3">COLOR</h3>
            <div className="flex gap-3">
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* SIZE */}
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold">SIZE</h3>
              <span className="text-xs underline cursor-pointer">
                SIZE CHART
              </span>
            </div>

            <div className="grid grid-cols-5 gap-3 mt-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white border-gray-300 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 space-y-4">
            <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all">
              ADD TO CART
            </button>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
              BUY IT NOW
            </button>
          </div>

          {/* ABOUT PRODUCT */}
          <div className="mt-8 text-sm text-gray-600 space-y-3">
            <h3 className="font-semibold text-black">ABOUT THE PRODUCT</h3>
            <p>{product.description}</p>
            <p>
              This product is excluded from all promotional discounts and
              offers.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Pay over time in interest-free installments with Affirm, Klarna
                or Afterpay.
              </li>
              <li>
                Join adiClub to get unlimited free standard shipping, returns, &
                exchanges.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
