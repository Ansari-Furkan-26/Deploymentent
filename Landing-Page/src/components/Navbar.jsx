import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

export default () => {

  const [state, setState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Features", path: "#feature" },
      { title: "Guides", path: "#guide" },
      { title: "Product", path: "#product" },
      { title: "Partners with us", path: "#partners" }
  ]

  return (
      <nav className="bg-gray-100 w-full md:static">
        <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-4">
          <div className="flex items-center justify-between py-3 md:py-5 md:block ">
              <motion.a
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-gray-600 to-gray-900 drop-shadow-md"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
                  Canteen Automation
              </motion.a>
            <div className="md:hidden">
              <motion.button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
                  onClick={() => setState(!state)}>
                  {
                      state ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                      ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                          </svg>
                      )
                  }
              </motion.button>
              </div>
          </div>
            <motion.div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}>
                <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    {
                        navigation.map((item, idx) => {
                            return (
                              <motion.li key={idx} className="text-gray-600 hover:text-gray-900"
                              initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{duration: 0.4,
                        delay: idx * 0.1,}}>
                                  <a href={item.path}>
                                      { item.title }
                                  </a>
                              </motion.li>
                            )
                        })
                    }
                </ul>
            </motion.div>
            <motion.div className="hidden md:inline-block"
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}>
              <a href="https://www.linkedin.com/in/furqan-ansari-frontnedgenie/" target='_blank' 
              className="py-3 px-4 text-white bg-gray-900 hover:bg-gray-700 rounded-xl shadow-lg">
                  Contact Us
              </a>
            </motion.div>
        </div>
      </nav>
  )
}