import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/919859886686?text=Hello%2C%20I%27m%20interested%20in%20your%20products.%20Could%20you%20please%20share%20more%20details%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      aria-label="Chat on WhatsApp"
    >
      <SiWhatsapp className="w-7 h-7" />
    </motion.a>
  );
}
