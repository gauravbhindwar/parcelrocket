import React from 'react'
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const Info = () => {
  return (
    <div className="bg-white py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text px-4"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Fast Delivery",
              image: "https://via.placeholder.com/400x300?text=Fast+Delivery",
              description: "Get your packages delivered quickly and securely across the country"
            },
            {
              title: "Real-time Tracking",
              image: "https://via.placeholder.com/400x300?text=Real-time+Tracking",
              description: "Track your shipments in real-time with our advanced tracking system"
            },
            {
              title: "Secure Handling",
              image: "https://via.placeholder.com/400x300?text=Secure+Handling",
              description: "Your packages are handled with utmost care and security"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.4)] transition-all duration-300"
            >
              <img src={service.image} alt={service.title} className="w-full h-40 sm:h-48 object-cover mb-4 sm:mb-6 rounded-xl"/>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-600">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Info