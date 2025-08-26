import React from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import { useLoaderData, useNavigate } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  // Sort by price descending (highest price first) and take top 4
  const topProducts = data.sort((a, b) => b.price - a.price).slice(0, 5);

  return (
    <div>
      <Banner></Banner>
      {/* top cards */}
      <div className="w-4/5 mx-auto my-12">
        <h1 className="text-3xl font-bold text-center mb-2">
          Featured Medical Equipment
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Check out our top medical equipment carefully selected for performance
          and reliability.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {topProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/products")}
            className="btn btn-primary px-6 py-2 rounded-full hover:bg-blue-700"
          >
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
