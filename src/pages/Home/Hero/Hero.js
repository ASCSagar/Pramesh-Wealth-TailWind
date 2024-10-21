import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <div className="relative overflow-hidden h-[50vh] md:h-[60vh]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/50 via-primary-600/50 to-primary-700/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white" /* Adjusted font sizes and margin */
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-6 text-primary-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to={ctaLink}
                className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-full font-bold text-base hover:bg-primary-100 transition duration-300 shadow-lg hover:shadow-xl" /* Adjusted padding and font size */
              >
                {ctaText}
                <ArrowRight className="ml-2 w-4 h-4" />{" "}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
