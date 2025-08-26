import bannerImg from "../assets/banner.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div
      className="h-[550px] w-full bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Overlay */}
      <div className="bg-black/50 p-6 rounded-xl text-white mx-4 md:mx-auto max-w-2xl">
        {/* Heading slides from top */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Reliable Medical Equipment
        </motion.h1>

        {/* Paragraph slides from bottom */}
        <motion.p
          className="text-base sm:text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We provide high-quality and affordable medical equipment for
          hospitals, clinics, and personal care. Trusted by professionals,
          designed for your health.
        </motion.p>
      </div>
    </div>
  );
};

export default Banner;
