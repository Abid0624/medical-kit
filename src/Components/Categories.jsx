/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="shadow-lg">
      <ul className="bg-white p-6 shadow-2xl rounded-lg space-y-6 text-center">
        {/* "All Products" button */}
        <li key="all-products">
          <NavLink
            to="/products"
            end // ✅ ensures it's only active at "/products"
            className={({ isActive }) =>
              `block w-full px-4 py-2 rounded-full ${
                isActive
                  ? "bg-blue-400 text-white font-bold"
                  : "bg-gray-100 text-gray-500 font-medium"
              }`
            }
          >
            All Products
          </NavLink>
        </li>

        {/* Loop through categories */}
        {categories.map((cat) => (
          <li key={cat.category}>
            <NavLink
              to={`/products/category/${cat.category}`}
              className={({ isActive }) =>
                `block w-full px-4 py-2 rounded-full ${
                  isActive
                    ? "bg-blue-400 text-white font-bold"
                    : "bg-gray-100 text-gray-500 font-medium"
                }`
              }
            >
              {cat.category}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
