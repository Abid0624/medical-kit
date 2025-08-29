import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const { id, name, description, category, brand, warranty, image } = product;
  const navigate = useNavigate();

  return (
    <div className="card bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <figure className="w-full h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </figure>

      {/* Product Info */}
      <div className="card-body p-4">
        <h2 className="card-title text-xl font-bold">{name}</h2>
        <p className="text-gray-500 text-sm mb-2">
          {category} - {brand}
        </p>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <p className="text-gray-500 text-sm mb-2">
          <strong>Warranty:</strong> {warranty}
        </p>

        {/* Button */}
        <div className="card-actions mt-4">
          <button
            onClick={() => navigate(`/card/${id}`)}
            className="btn btn-outline btn-primary rounded-full w-full"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
