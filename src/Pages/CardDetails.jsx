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
        console.log(singleCard); // logs the found product
      } else {
        setProduct(null);
        console.log("Product not found");
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
          className="text-xl font-semibold mb-2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Price: <span className="text-blue-600">{product.price} BDT</span>
        </motion.p>

        <motion.p
          className="text-gray-600 text-lg"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Category: {product.category}
        </motion.p>

        {/* Product Features */}
        {product.features && product.features.length > 0 && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default CardDetails;
