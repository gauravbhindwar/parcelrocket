"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Info from '@/components/Info'
import Footer from '@/components/Footer'

const HomePage = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-16 md:py-24"
      >
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ship Smarter, Deliver Faster
            </h1>
            <p className="text-lg mb-8 opacity-90">
              All-in-one shipping solution for your business. Ship anywhere with the best courier partners.
            </p>
            <div className="flex gap-4 flex-wrap">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/calculate-price')}
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold shadow-xl"
              >
                Calculate Price
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden md:block"
          >
            <img src="https://via.placeholder.com/600x400?text=Shipping+Illustration" alt="Shipping illustration" className="w-full" />
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10K+", label: "Active Sellers" },
              { number: "29M+", label: "Shipments Delivered" },
              { number: "26K+", label: "Pin Codes Served" },
              { number: "250+", label: "Cities Covered" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Integration Partners */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Trusted By Leading Brands
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70">
            {/* Add partner logos here */}
                  {[
                    "https://www.delhivery.com/_nuxt/img/Delhivery_logo.dcef706.png",
                    "https://www.ecomexpress.in/_nuxt/logo.a5977302.svg",
                    "https://www.dtdc.in/img/logos/logo.png",
                    "https://www.xpressbees.com/images/whiteLogo.webp",
                    "https://ekartlogistics.com/assets/images/ekWhiteLogo.png",
                    "https://www.bluedart.com/image/layout_set_logo?img_id=1414225&t=1735058596401"
                  ].map((url, i) => (
                    <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-lg shadow-md bg-black"
                    >
                    <img src={url} alt={`Partner ${i + 1}`} className="w-full object-contain" />
                    </motion.div>
                  ))}
                  </div>
                </div>
                </div>

                {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📦",
                title: "Multiple Courier Partners",
                description: "Choose from the best courier partners for domestic and international shipping"
              },
              {
                icon: "🚚",
                title: "Real-time Tracking",
                description: "Track all your shipments in real-time from a single dashboard"
              },
              {
                icon: "💰",
                title: "Cost-Effective",
                description: "Get the best shipping rates and save up to 45% on shipping costs"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 rounded-xl bg-gray-50"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Info />
      <Footer />
    </div>
  )
}

export default HomePage