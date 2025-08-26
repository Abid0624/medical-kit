import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const Cards = () => {
  const data = useLoaderData(); // all products from loader
  const { category } = useParams(); // get category from URL
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (!category) {
      setFilteredProducts(data);
    } else {
      const filtered = data.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  }, [data, category]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))
      ) : (
        <div className="text-center col-span-full font-bold text-3xl text-gray-500">
          No products found for this category.
        </div>
      )}
    </div>
  );
};

export default Cards;
