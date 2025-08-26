import { motion } from "framer-motion";
import { Stethoscope, HeartPulse, Bandage } from "lucide-react";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <div
      className="relative h-[550px] bg-cover mt-36 mb-12 bg-center bg-no-repeat min-h-screen flex items-center"
      style={{ backgroundImage: `url(${aboutImg})` }}
    >
      {/* Floating medical icons */}
      <motion.div
        className="absolute top-20 left-10 text-black"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Stethoscope size={50} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-yellow-600"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <Bandage size={50} /> {/* Using Bandage icon */}
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 text-red-500"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <HeartPulse size={50} />
      </motion.div>

      {/* Content */}

      <motion.div
        className="relative container mx-auto px-6 text-center md:text-left md:w-3/4 lg:w-1/2 text-black"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About MediKit Store
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          At MediKit Store, we provide high-quality medical kits, first-aid
          equipment, and emergency supplies to ensure safety and preparedness
          for every situation. Our mission is to make medical essentials
          accessible, reliable, and affordable for everyone.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Founded with the goal of promoting health and safety, our team is
          dedicated to delivering trusted products and exceptional customer
          service. We continuously innovate and expand our offerings to meet
          your evolving needs.
        </motion.p>

        <motion.button
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
