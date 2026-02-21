import React from "react";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}

const ProductCard = ({ image, title, price }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64 bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">{price}</span>
          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
            View Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
