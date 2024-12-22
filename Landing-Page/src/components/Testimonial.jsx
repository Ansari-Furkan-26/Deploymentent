import React, { useState } from "react";
import { motion } from "framer-motion";

const TestimonialForm = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formActionURL =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdREVhkyUWMVUOuxQCd7QBw_ImBTm_F2sdCDFug2X9aS_DVWw/formResponse";

    const formData = new FormData();
    formData.append("entry.1553378233", feedback);

    fetch(formActionURL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(() => setSubmitted(true)) 
      .catch((err) => console.error("Error submitting feedback:", err));
  };

  return (
    <motion.section
      className="bg-gray-100 py-12 px-6 relative bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage:
          "url(https://framerusercontent.com/images/ffrFzNLJck56TrlD9MNMc6AZcZ4.png)",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="glass-effect p-6 rounded-3xl shadow-lg text-center max-w-lg w-full">
        <motion.h2
          className="text-2xl font-semibold text-gray-50"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Share Your Experience and Win a Surprise!
        </motion.h2>
        <motion.p
          className="text-gray-300 mt-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We’d love to hear your thoughts. The more accurate your feedback, the
          better your chance to get a surprise! 🎁
        </motion.p>
        {submitted ? (
          <motion.div
            className="text-center text-gray-900 bg-gray-300 py-4 rounded-lg font-semibold mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Thank you for sharing your experience! 🎉 <br />Stay tuned for your
            surprise.
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4 mt-6"
          >
            <motion.textarea
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="4"
              placeholder="Write your experience here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Submit Your Feedback
            </motion.button>
          </form>
        )}
        <motion.p
          className="text-gray-300 mt-4 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          *Your accurate feedback will help us improve our service and may
          even be featured here!
        </motion.p>
      </div>
    </motion.section>
  );
};

export default TestimonialForm;
