import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function FeaturesSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" }); // Trigger animations once

    const solutions = [
        {
            title: "Pre-Order",
            description: "Bhai.., no more waiting in line! Pre-order your food now.",
            subtitle: "Canteen Automation",
            bgImage: "url('https://i.pinimg.com/736x/f4/c9/64/f4c96462824222560056c94566448126.jpg')",
            bgColor: "bg-black text-white",
        },
        {
            title: "Real-Time Order Tracking",
            description: "Track your order in Real-time, ab no more ‘kahan hai mera khana?'.",
            subtitle: "Order Management",
            bgImage: "url('https://i.pinimg.com/736x/3b/c7/74/3bc77400bdcbaa0a9f9c9876e040f220.jpg')",
            bgColor: "bg-orange-400 text-black",
        },
        {
            title: "QR Code-Based Self-Service",
            description: "QR scan karo aur direct order recive karo! No need to wait for the waiter, it's all in your hands.",
            subtitle: "Self-Service Efficiency",
            bgImage: "url('https://i.pinimg.com/736x/3c/b0/e0/3cb0e003b928b469275702c1e1a31bcf.jpg')",
            bgColor: "bg-white text-black",
        },
    ];

    return (
        <section className="px-8 py-16 bg-gray-100" id="feature" ref={sectionRef}>
            {/* Header */}
            <motion.div
                className="text-center mb-12 md:flex justify-between"
                initial={{ opacity: 0, y: -50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1, scale: 0.95 }} 
            >
                <div className="text-left">
                    <motion.h2 className="text-xl py-1 px-3 max-w-[270px] rounded-2xl font-semibold bg-orange-100 text-black">
                        <span className="animate-pulse">🔥</span> Canteen Optimization
                    </motion.h2>
                    <h1 className="text-4xl font-medium text-black my-4">
                        Manage Intelligently, <br /> Serve Effectively
                    </h1>
                </div>
                <div className="mt-6 md:mt-4 text-left md:text-right">
                    <span className="text-2xl font-bold text-gray-700 my-4 block">1 Solutions</span>
                    <p className="text-gray-500">
                        Ek solution jisme sab kuch ho, <br /> organize items, track order, and take your dining experience to the next level!
                    </p>
                </div>
            </motion.div>

            {/* Solution Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {solutions.map((solution, index) => (
                    <motion.div
                        key={index}
                        className={`rounded-xl shadow-lg p-6 relative ${solution.bgColor}`}
                        style={{
                            backgroundImage: solution.bgImage,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileInView={{ opacity: 1, scale: 0.95 }} 
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
                    >
                        <div className="bg-opacity-50 p-6">
                            <h3 className="text-lg font-bold mb-4">{solution.title}</h3>
                            <p className="text-base font-thin mb-4">{solution.description}</p>
                            <p className="text-xs mt-4 text-gray-400">{solution.subtitle}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default FeaturesSection;
