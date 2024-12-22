import React, { useState } from "react";
import { motion } from "framer-motion";

function AppDownloadPromotion() {
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true);
        setTimeout(() => {
            setButtonClicked(false);
        }, 5000); // Alert disappears after 5 seconds
    };

    // Animation Variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    const slideInLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    const slideInRight = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    const bounce = {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
    };

    return (
        <motion.section
            className="relative bg-cover bg-center"
            id="product"
            style={{
                backgroundImage: "url(https://i.pinimg.com/736x/d1/db/66/d1db66edffa5c6203824674fdddad949.jpg)",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >

            <motion.div
                className="relative z-10 flex flex-col md:flex-row text-left text-white py-16 px-8 md:px-24"
            >
                {/* Left Column - Text Content */}
                <motion.div variants={slideInLeft} className="md:w-1/2 mb-6 md:mb-0">
                    <h1 className="text-4xl font-bold mb-4">Canteen Automation</h1>
                    <h2 className="text-3xl font-thin mb-4">Get Your App Now!</h2>
                    <p className="text-lg">For a better experience, download the app now.</p>

                    {/* Button in mobile view */}
                    <div className="block md:hidden mt-6">
                        <motion.button
                            {...bounce}
                            className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg transition"
                            onClick={handleButtonClick}
                        >
                            Download APK
                        </motion.button>
                        {buttonClicked && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                className="mt-4 text-white bg-gray-800 p-4 rounded-lg shadow-lg"
                            >
                                <p>Coming soon... Stay tuned! 🚀</p>
                                <img
                                    src="https://media.giphy.com/media/l0K4rK0hUogNjl2Tk/giphy.gif"
                                    alt="Coming Soon Meme"
                                    className="mt-2 mx-auto"
                                    width="450"
                                />
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* Right Column - QR Code */}
                <motion.div variants={slideInRight} className="md:w-1/2 mt-5 md:mt-0 text-center md:text-right">
                    {/* QR code for Desktop view */}
                    <div className="hidden md:flex justify-center md:justify-end">
                        <motion.img
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, transition: { duration: 0.8 } }}
                            src="https://i.pinimg.com/736x/0e/97/27/0e972709749e682fb5bf8d85dcb2e35d.jpg"
                            alt="QR Code"
                            className="w-32 h-32 rounded-lg shadow-lg"
                        />
                    </div>
                    <p className="mt-4 hidden md:block">Simply scan the code and get started.</p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

export default AppDownloadPromotion;
