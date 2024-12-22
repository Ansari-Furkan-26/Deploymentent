import React from "react";
import { motion } from "framer-motion";

function GuideComponent() {
    const steps = [
        { title: "Create account", description: "Sign up with your details to create an account.", status: "completed" },
        { title: "Browse Products", description: "Explore the product catalog and discover your favorite items.", status: "completed" },
        { title: "Add to Cart", description: "Add the selected product to your shopping cart.", status: "completed" },
        { title: "Complete Purchase", description: "Choose a payment method and complete the purchase.", status: "active" },
        { title: "Receive Order", description: "Show the generated QR code to the staff to receive your order.", status: "inactive" }
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const staggerContainer = {
        hidden: { opacity: 1 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        },
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="px-4 sm:px-8 py-8 bg-gray-100"
            id="guide"
        >
            {/* Section Header */}
            <motion.div variants={fadeIn} className="text-center mb-12">
                <h2 className="text-3xl font-semibold text-black">How to Order and Receive Your Food</h2>
                <p className="text-gray-500 mt-4">Follow these simple steps for a seamless dining experience.</p>
            </motion.div>

            <div className="flex flex-wrap gap-12">
                {/* Steps Progress Bar */}
                <motion.div
                    variants={fadeIn}
                    className="flex flex-col shadow-xl items-center bg-white rounded-2xl py-5 px-6 md:px-8 flex-1 min-w-[300px]"
                >
                    <motion.div variants={staggerContainer} className="w-full">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className="flex items-start mb-6"
                            >
                                {/* Step Circle */}
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center min-w-[30px]
                                    ${
                                        step.status === "completed"
                                            ? "bg-[#22C075] text-gray-100"
                                            : step.status === "active"
                                            ? "bg-[#413BF5] text-gray-100"
                                            : "bg-gray-200 text-black"
                                    }`}
                                >
                                    {step.status === "completed" ? "✓" : index + 1}
                                </div>
                                {/* Step Details */}
                                <div className="ml-4">
                                    <h3
                                        className={`text-lg font-semibold ${
                                            step.status === "active" ? "text-black" : "text-gray-700"
                                        }`}
                                    >
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <p className="mt-6 text-center text-gray-500 text-sm md:text-base">Step Progress</p>
                </motion.div>

                {/* Tutorial Section */}
                <motion.div
                    variants={fadeIn}
                    className="flex flex-col gap-8 flex-1 min-w-[300px]"
                >
                    {/* Tutorial Text */}
                    <div>
                        <h3 className="text-2xl font-semibold text-black mb-4">Tutorial</h3>
                        <p className="text-gray-600">
                            Learn how to effortlessly order and receive your food with our simple steps. Our tutorial guides you through the process, ensuring a smooth and convenient experience every time.
                        </p>
                    </div>

                    {/* Video/Visual Section */}
                    <div className="relative">
                        <div className="w-full aspect-w-20 aspect-h-20">
                            <img
                                src="https://i.pinimg.com/originals/3c/7d/94/3c7d945329e94e258a29916055578022.jpg"
                                className="md:h-96 rounded-lg shadow-md"
                                alt="Placeholder Tutorial Visual"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default GuideComponent;
