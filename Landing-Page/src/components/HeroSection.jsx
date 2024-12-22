import React from "react";
import { motion } from "framer-motion";

export default () => {
  return (
    <motion.section
      className="bg-gray-100 h-screen bg-cover md:bg-center text-white py-16 px-4 max-h-[650px] md:px-10 rounded-3xl mx-5 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://framerusercontent.com/images/t3XjVTXILKG26b0KJlsiZVBT55I.png')",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-2 gap-12 text-gray-400 md:px-8">
        <motion.div
          className="space-y-5 max-w-xl mx-auto text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-sm text-gray-100 font-medium text-center py-2 rounded-2xl bg-black bg-opacity-40 mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 120,
              damping: 10,
            }}
          >
            Free Trial for 3 Months
            <motion.span
              role="img"
              aria-label="icon"
              className="animate-pulse"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
              ⚡
            </motion.span>
          </motion.h1>
          <motion.h2
            className="text-4xl text-transparent bg-clip-text bg-gradient-to-r md:bg-gradient-to-t from-gray-500 to-gray-50 font-extrabold mx-auto md:text-5xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Your Canteen <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r md:bg-gradient-to-t from-gray-500 to-gray-50">
              Just a Tap Away
            </span>
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            "Streamline your orders and enhance service with intelligent automation."
          </motion.p>
          <motion.div
            className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a
              href="#product"
              className="block py-2 px-4 text-gray-100 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg"
            >
              Get access
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <img
            src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/Safari%20(Big%20Sur)%20-%20Light.png"
            className="w-full shadow-lg rounded-lg border"
            alt=""
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
