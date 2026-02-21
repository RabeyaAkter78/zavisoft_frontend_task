/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import nd1 from "../../assets/images/nd1.png";
import nd2 from "../../assets/images/nd2.png";
import nd3 from "../../assets/images/nd3.png";
import nd4 from "../../assets/images/nd4.png";
const NewDrops = () => {
  const products = [
    {
      id: 1,
      image: nd1,
      title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
    },
    {
      id: 2,
      image: nd2,
      title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
    },
    {
      id: 3,
      image: nd3,
      title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
    },
    {
      id: 4,
      image: nd4,
      title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 my-[90px]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h2 className="text-4xl md:text-7xl font-semibold font-rubik text-gray-900 mb-4 md:mb-0">
          DON'T MISS OUT <br />
          NEW DROPS
        </h2>
        <button className="bg-[#4a69e2] text-white px-6 py-3 rounded-lg font-rubik font-medium hover:bg-blue-700 transition-colors duration-200">
          SHOP NEW DROPS
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="relative">
            <div className="bg-[#eceef0] h-[350px] rounded-3xl border-8 border-white p-5">
              <span className="absolute top-4 left-4 bg-[#4a69e2] text-white text-xs font-semibold w-16 px-4 py-3 rounded-tl-xl rounded-br-xl -ml-2 -mt-2 flex justify-center items-center z-10">
                New
              </span>

              <div className="relative ">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-4 flex flex-col">
              <h3 className="text-sm md:text-base font-semibold text-gray-900 my-4">
                {product.title}
              </h3>
              <button className="bg-black text-white w-full py-3 rounded-lg font-rubik font-medium hover:bg-gray-800 transition-colors duration-200 ">
                VIEW PRODUCT -{" "}
                <span className="text-yellow-600">{product.price}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewDrops;
