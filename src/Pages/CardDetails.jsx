import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CardDetails = () => {
  const data = useLoaderData(); // all products from loader
  const { id } = useParams(); // get id from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (data && id) {
      const singleCard = data.find((card) => card.id === parseInt(id));
      if (singleCard) {
        setProduct(singleCard);
      } else {
        setProduct(null);
      }
    }
  }, [data, id]);

  if (!product) {
    return (
      <p className="text-center mt-32 text-xl font-semibold">
        Product not found
      </p>
    );
  }

  return (
    <motion.div
      className="container mx-auto mt-32 mb-16 px-6 md:flex md:gap-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Product Image */}
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto rounded-lg shadow-lg max-w-md object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col justify-center">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {product.name}
        </motion.h1>

        <motion.p
          className="text-gray-700 mb-4 text-lg"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {product.description}
        </motion.p>

        <motion.p
          className="text-gray-600 text-lg mb-2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <strong>Category:</strong> {product.category}
        </motion.p>

        <motion.p
          className="text-gray-600 text-lg mb-2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <strong>Brand:</strong> {product.brand}
        </motion.p>

        <motion.p
          className="text-gray-600 text-lg mb-2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <strong>Warranty:</strong> {product.warranty}
        </motion.p>

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-2">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Specifications */}
        {product.specifications && (
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-2">Specifications</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key}>
                  <strong className="capitalize">{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Applications */}
        {product.applications && product.applications.length > 0 && (
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-2">Applications</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {product.applications.map((app, index) => (
                <li key={index}>{app}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Certifications */}
        {product.certifications && product.certifications.length > 0 && (
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-2">Certifications</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {product.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default CardDetails;
