import { motion } from "framer-motion";

export default () => {
    const contactMethods = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                </svg>
            ),
            title: "Join our community",
            desc: "Experience seamless ordering, delicious meals, and a vibrant dining atmosphere!.",
            link: {
                name: "Join our community",
                href: "https://chat.whatsapp.com/EKMRpRh5gapAlNaBw1dy7B"
            }
        }
    ];

    const footerNavs = [
        { href: "javascript:void()", name: "Terms" },
        { href: "javascript:void()", name: "Privacy" },
        { href: "https://frontendgenie.netlify.app/", name: "About us" }
    ];

    return (
        <footer className="pt-10 bg-gray-900 text-white">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-12 md:px-8 lg:flex">
                <div className="max-w-md md:pt-2">
                    <motion.h3
                        className="text-gray-200 text-3xl font-semibold sm:text-4xl"
                        initial={{ opacity: 0, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Let’s connect
                    </motion.h3>
                    <motion.p
                        className="text-gray-400 mt-3"
                        initial={{ opacity: 0, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        We’re here to help and answer any question you might have, We look forward to hearing from you.
                    </motion.p>
                </div>
                <motion.div
                    className="mt-8 md:mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0"
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <ul>
                        {contactMethods.map((item, idx) => (
                            <motion.li
                                key={idx}
                                className="space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none"
                                initial={{ opacity: 0, y: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h4 className="text-gray-200 text-lg font-medium xl:text-xl">
                                    {item.title}
                                </h4>
                                <p className="text-gray-400">{item.desc}</p>
                                <a
                                    href={item.link.href}
                                    target="_blank"
                                    className="flex items-center gap-1 text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium"
                                >
                                    {item.link.name}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            <div className="text-gray-400 max-w-screen-xl mx-auto px-4 md:px-8">
                <motion.div
                    className="mt-5 md:mt-10 py-5 border-t items-center justify-between sm:flex"
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p>All rights reserved © Canteen Automation</p>
                    <ul className="flex flex-wrap items-center gap-4 mt-2 md:mt-6 sm:text-sm sm:mt-0">
                        {footerNavs.map((item, idx) => (
                            <motion.li
                                key={idx}
                                className="hover:text-gray-500 duration-150"
                                initial={{ opacity: 0, y: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <a href={item.href}>{item.name}</a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </footer>
    );
};
