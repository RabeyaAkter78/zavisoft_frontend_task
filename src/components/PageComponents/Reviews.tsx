import React from "react";
import Image from "next/image";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      title: "NIKE AIR MAX 90",
      recommendation: "I highly recommend these shoes!",
      rating: 5,
      user: "John Doe",
      avatar: "/api/placeholder/50/50",
      image: "/api/placeholder/200/150"
    },
    {
      id: 2,
      title: "ADIDAS ULTRABOOST",
      recommendation: "Best running shoes I've ever owned!",
      rating: 5,
      user: "Jane Smith",
      avatar: "/api/placeholder/50/50",
      image: "/api/placeholder/200/150"
    },
    {
      id: 3,
      title: "NEW BALANCE 574",
      recommendation: "Comfortable and stylish!",
      rating: 4,
      user: "Mike Johnson",
      avatar: "/api/placeholder/50/50",
      image: "/api/placeholder/200/150"
    },
    {
      id: 4,
      title: "PUMA RS-X",
      recommendation: "Great value for money!",
      rating: 4,
      user: "Sarah Wilson",
      avatar: "/api/placeholder/50/50",
      image: "/api/placeholder/200/150"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? "text-yellow-400" : "text-gray-300"}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">REVIEWS</h2>
        <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
          SEE ALL
        </button>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
            {/* Product Image */}
            <div className="relative h-48 bg-gray-100">
              <Image
                src={review.image}
                alt={review.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Product Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{review.title}</h3>

              {/* Recommendation */}
              <p className="text-sm text-gray-600 mb-3">{review.recommendation}</p>

              {/* Rating */}
              <div className="flex mb-3">
                {renderStars(review.rating)}
              </div>

              {/* User Info */}
              <div className="flex items-center">
                <div className="relative w-10 h-10 mr-3">
                  <Image
                    src={review.avatar}
                    alt={review.user}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-gray-900">{review.user}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;