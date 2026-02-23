// app/cart/page.tsx or pages/cart.tsx
"use client";
import React, { useState } from "react";

const Cart = () => {
  const [size, setSize] = useState(10);
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "DROPSET TRAINER SHOES",
    description: "Men’s Road Running Shoes",
    color: "Enamel Blue/ University White",
    price: 130.0,
    image: "/shoes.png", // replace with your actual image path
    sizes: [8, 9, 10, 11, 12],
    quantities: [1, 2, 3, 4, 5],
  };

  const delivery = 6.99;
  const total = product.price * quantity + delivery;

  return (
    <div className="container mx-auto bg-background p-6 md:p-12">
      <h1 className="text-2xl font-bold mb-2">Saving to celebrate</h1>
      <p className="text-gray-600 mb-6">
        Enjoy up to 60% off thousands of styles during the End of Year sale -
        while supplies last. No code needed.{" "}
        <span className="underline cursor-pointer">Join us</span> or{" "}
        <span className="underline cursor-pointer">Sign-in</span>
      </p>

      <div className="md:flex md:space-x-8">
        {/* Your Bag */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Your Bag</h2>
          <p className="text-gray-500 mb-4">
            Items in your bag not reserved - check out now to make them yours.
          </p>

          <div className="flex items-center space-x-4 border border-gray-300 rounded-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-contain"
            />
            <div className="flex-1">
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-gray-600">{product.color}</p>

              <div className="flex items-center space-x-4 mt-2">
                {/* Size Dropdown */}
                <select
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="border border-gray-300 rounded p-1"
                >
                  {product.sizes.map((s) => (
                    <option key={s} value={s}>
                      Size {s}
                    </option>
                  ))}
                </select>

                {/* Quantity Dropdown */}
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border border-gray-300 rounded p-1"
                >
                  {product.quantities.map((q) => (
                    <option key={q} value={q}>
                      Qty {q}
                    </option>
                  ))}
                </select>
              </div>

              <p className="text-blue-600 font-bold mt-2">
                ${product.price.toFixed(2)}
              </p>

              {/* Icons */}
              <div className="flex space-x-2 mt-2 text-gray-500">
                <button aria-label="Add to wishlist">❤️</button>
                <button aria-label="Remove from bag">🗑️</button>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span className="font-medium">{quantity} ITEM</span>
            <span>${product.price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Delivery</span>
            <span>${delivery.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Sales Tax</span>
            <span>-</span>
          </div>
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="w-full bg-black text-white p-3 rounded-lg mb-4 hover:bg-gray-900 transition">
            CHECKOUT
          </button>

          <p className="text-gray-600 underline text-center cursor-pointer">
            User a promo code
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
