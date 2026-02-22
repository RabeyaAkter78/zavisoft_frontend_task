import React from "react";
import Image from "next/image";
import r1 from "../../assets/images/r1.png";
import r2 from "../../assets/images/r2.png";
import r3 from "../../assets/images/r3.png";
import u1 from "../../assets/images/u1.jpg";
import u2 from "../../assets/images/u2.png";
import u3 from "../../assets/images/u3.png";
import { FaStar } from "react-icons/fa";
const Reviews = () => {
  const reviews = [
    {
      id: 1,
      title: "NIKE AIR MAX 90",
      recommendation: "I highly recommend these shoes!",
      rating: 5,
      user: "John Doe",
      avatar: u1,
      image: r1,
    },
    {
      id: 2,
      title: "ADIDAS ULTRABOOST",
      recommendation: "Best running shoes I've ever owned!",
      rating: 5,
      user: "Jane Smith",
      avatar: u2,
      image: r2,
    },
    {
      id: 3,
      title: "NEW BALANCE 574",
      recommendation: "Comfortable and stylish!",
      rating: 4,
      user: "Mike Johnson",
      avatar: u3,
      image: r3,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-xl ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
      >
        <FaStar className="h-4 w-4 text-orange-400 ml-1"></FaStar>
      </span>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          REVIEWS
        </h2>
        <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
          SEE ALL
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-between items-center gap-4 p-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {review.title}
                </h3>

                <p className="text-lg text-gray-600 my-2">
                  {review.recommendation}
                </p>

                <div className="flex mb-3 gap-1 ">
                  {renderStars(review.rating)} <span className="ml-2"> 5.0</span>
                </div>
              </div>

              <div className="flex items-center">
                <div className="relative w-10 h-10 mr-3">
                  <Image
                    src={review.avatar}
                    alt={review.user}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                {/* <span className="text-sm font-medium text-gray-900">
                  {review.user}
                </span> */}
              </div>
            </div>
            <div className="relative  h-[325px]  bg-gray-100">
              <Image
                src={review.image}
                alt={review.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
