import { useRef, useState } from "react";
import { motion } from "framer-motion";

const FaqsCard = (props) => {
    const answerElRef = useRef();
    const [state, setState] = useState(false);
    const [answerH, setAnswerH] = useState("0px");
    const { faqsList, idx } = props;

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight;
        setState(!state);
        setAnswerH(`${answerElH + 20}px`);
    };

    return (
        <motion.div
            className="space-y-3 mt-5 px-4 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }} // Trigger animation only once when it comes into view
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-sm md:text-lg text-gray-700 font-medium">
                {faqsList.q}
                {state ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 12H4"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                )}
            </h4>
            <div
                ref={answerElRef}
                className="duration-300"
                style={state ? { height: answerH } : { height: "0px" }}
            >
                <div>
                    <p className="text-gray-500 text-sm">{faqsList.a}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default () => {
    const faqsList = [
        {
            q: "How does Canteen Automation work?",
            a: "Our system automates the ordering process, billing, and inventory management for canteens. Customers can easily place their orders, and the system tracks real-time status, making it easier for canteen staff to manage the workflow.",
        },
        {
            q: "Is the system available on mobile?",
            a: "Yes, our Canteen Automation system is fully responsive and can be accessed via mobile devices, providing a seamless experience for users whether they're on a desktop or mobile.",
        },
        {
            q: "Can I pre-order my meals through the system?",
            a: "Absolutely! The pre-order feature lets users order meals ahead of time, ensuring that their food is ready when they arrive, reducing wait times.",
        },
        {
            q: "How secure is my payment information?",
            a: "We prioritize security. All payments are processed through trusted gateways, ensuring your personal and payment details are fully encrypted and secure.",
        },
        {
            q: "Can I customize my order?",
            a: "Yes! The system allows users to customize their meals based on available options, so you can get exactly what you want.",
        },
    ];

    return (
        <div className="bg-gray-100">
            <motion.section className="py-8 leading-relaxed max-w-screen-xl mx-auto px-4 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}>
                <div className="space-y-3 text-center">
                    <h1 className="text-3xl text-gray-800 font-semibold">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-gray-600 max-w-lg mx-auto text-sm">
                        We've answered all the frequently asked questions. Still have doubts? Feel free to reach out to us.
                    </p>
                </div>
                <div className="mt-14 max-w-2xl mx-auto">
                    {faqsList.map((item, idx) => (
                        <FaqsCard idx={idx} faqsList={item} key={idx} />
                    ))}
                </div>
            </motion.section>
        </div>
    );
};
