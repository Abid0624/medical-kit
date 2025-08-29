import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Categories from "../Components/Categories";

const Products = () => {
  const [categories, setCategories] = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    // Extract unique categories from JSON
    const uniqueCategories = [
      ...new Set(data.map((item) => item.category)),
    ].map((cat) => ({ category: cat }));
    setCategories(uniqueCategories);
  }, [data]);

  return (
    <div className="w-11/12 mx-auto mt-32 mb-12">
      <h1 className="text-3xl font-bold text-center mb-6">
        Explore Our Medical Equipment
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Categories */}
        <div className="w-full md:w-1/4">
          <Categories categories={categories} />
        </div>

        {/* Right: Products */}
        <div className="w-full md:w-3/4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Products;
