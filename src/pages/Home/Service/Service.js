import React from "react";
import { motion } from "framer-motion";

const Service = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-primary-50 p-6 rounded-xl shadow-soft hover:shadow-hover transition duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="w-12 h-12 text-primary-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </motion.div>
);

export default Service;
