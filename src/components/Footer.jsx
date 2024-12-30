import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-indigo-900 text-white py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12"
        >
          {[
            {
              title: "Contact Us",
              content: (
                <>
                  <p className="mb-2">Email: info@courier.com</p>
                  <p>Phone: 1800-123-4567</p>
                </>
              )
            },
            {
              title: "Quick Links",
              content: (
                <ul className="space-y-2">
                  {["Track Shipment", "Services", "Contact"].map((link) => (
                    <li key={link}>
                      <motion.a
                        whileHover={{ x: 5 }}
                        href="#"
                        className="hover:text-blue-400 transition-colors inline-block"
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              )
            },
            {
              title: "Working Hours",
              content: (
                <>
                  <p className="mb-2">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: Closed</p>
                </>
              )
            }
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 touch-manipulation"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-purple-400">{section.title}</h3>
              <div className="text-base sm:text-lg space-y-2">
                {section.content}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer