import { motion } from "framer-motion";
import ceoImg from "../assets/ceo.jpg";

const CEOMessage = () => {
  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-12 bg-blue-400">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* CEO Image with floating effect */}
        <motion.div
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex-shrink-0 mx-auto md:mx-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, y: [0, -10, 0] }} // float up and down
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        >
          <img
            src={ceoImg}
            alt="CEO"
            className="rounded-full w-full h-full object-cover shadow-lg border-4 border-white"
          />
        </motion.div>

        {/* CEO Message */}
        <motion.div
          className="flex-1 text-center md:text-left text-white"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: "spring",
            stiffness: 80,
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Message from the CEO
          </h2>
          <p className="mb-6 text-base sm:text-lg md:text-lg leading-relaxed">
            At Manha Enterprise, our mission is to deliver high-quality,
            reliable, and innovative medical equipment to hospitals, clinics,
            and healthcare providers across Bangladesh. We are dedicated to
            ensuring the safety, well-being, and efficiency of medical
            professionals and patients alike. Through continuous research,
            innovation, and a commitment to excellence, we strive to meet the
            evolving needs of the healthcare sector. Our goal is to provide
            solutions that empower medical staff, improve patient care, and
            support modern healthcare practices. We sincerely thank our clients
            and partners for trusting us as their reliable source for medical
            technology and equipment.
          </p>
          <p className="font-semibold">— CEO</p>
        </motion.div>
      </div>
    </div>
  );
};

export default CEOMessage;
