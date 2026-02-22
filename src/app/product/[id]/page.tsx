"use client";
import React, { useState } from "react";
import Image from "next/image";

const ProductDetails = () => {
  const product = {
    title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    badge: "New Release",
    colors: ["#1F2937", "#6B8E6E"],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    descriptionColor: "Shadow Navy / Army Green",
    images: [
      "/shoes1.png",
      "/shoes2.png",
      "/shoes3.png",
      "/shoes4.png",
    ],
  };

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<number | null>(38);

  return (
    <div className="bg-[#f3f3f3] min-h-screen py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* LEFT SIDE - IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4">
          {product.images.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden flex items-center justify-center p-6"
            >
              <Image
                src={img}
                alt="product"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - PRODUCT INFO */}
        <div className="bg-white rounded-2xl p-8">
          
          {/* Badge */}
          <span className="bg-blue-600 text-white text-xs px-4 py-1 rounded-full">
            {product.badge}
          </span>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold mt-4 leading-tight">
            {product.title}
          </h1>

          {/* Price */}
          <p className="text-blue-600 text-xl font-semibold mt-3">
            ${product.price}.00
          </p>

          {/* COLOR */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold mb-3">COLOR</h3>
            <div className="flex gap-3">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-black"
                      : "border-gray-300"
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
              {product.sizes.map((size) => (
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
            <p>{product.descriptionColor}</p>
            <p>
              This product is excluded from all promotional discounts and
              offers.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Pay over time in interest-free installments with Affirm,
                Klarna or Afterpay.
              </li>
              <li>
                Join adiClub to get unlimited free standard shipping, returns,
                & exchanges.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;