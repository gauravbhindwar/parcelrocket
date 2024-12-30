"use client"
import { useState, useEffect } from 'react'
import React from 'react'
import { motion } from 'framer-motion'
import Info from './Info'

const deliveryTypes = {
  comexpress: [
    { value: 'standard', label: 'Standard' },
    { value: 'express', label: 'Express' },
  ],
  bluedart: [
    { value: 'standard', label: 'Standard' },
    { value: 'express', label: 'Express' },
  ],
  dtdc: [
    { value: 'standard', label: 'Standard' },
    { value: 'express', label: 'Express' },
  ],
  delhivery: [
    { value: 'standard', label: 'Standard' },
    { value: 'express', label: 'Express' },
  ],
  // Add more courier providers and their delivery types as needed
}

const categories = [
  { value: 'documents', label: 'Documents' },
  { value: 'electronics', label: 'Electronics' },
  { value: 'clothing', label: 'Clothing' },
  { value: 'food', label: 'Food' },
  // Add more categories as needed
]

const PriceCalculator = () => {
  const [weight, setWeight] = useState('')
  const [distance, setDistance] = useState('')
  const [deliveryType, setDeliveryType] = useState('')
  const [price, setPrice] = useState(null)
  const [pickupPinCode, setPickupPinCode] = useState('')
  const [dropPinCode, setDropPinCode] = useState('')
  const [courierProvider, setCourierProvider] = useState('')
  const [courierProviders, setCourierProviders] = useState([])
  const [category, setCategory] = useState('')

  useEffect(() => {
    if (pickupPinCode && dropPinCode) {
      const fetchCourierProviders = async () => {
        try {
          const response = await fetch(`/api/getCourierProviders?pickupPinCode=${pickupPinCode}&dropPinCode=${dropPinCode}`)
          if (!response.ok) {
            const errorText = await response.text()
            throw new Error(`Network response was not ok: ${errorText}`)
          }
          const data = await response.json()
          setCourierProviders(data.providers)
          setCourierProvider(data.providers[0]?.name || '')
        } catch (error) {
          console.error('Error fetching courier providers:', error)
        }
      }
      fetchCourierProviders()
    }
  }, [pickupPinCode, dropPinCode])

  useEffect(() => {
    if (courierProvider) {
      setDeliveryType(deliveryTypes[courierProvider][0]?.value || '')
    }
  }, [courierProvider])

  const calculatePrice = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/calculatePrice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          weight,
          distance,
          deliveryType,
          courierProvider,
          pickupPinCode,
          dropPinCode,
          category,
        }),
      })
      if (!response.ok) throw new Error('Network response was not ok')
      const data = await response.json()
      setPrice(data.price)
    } catch (error) {
      console.error('Error calculating price:', error)
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] p-6">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
        >
          Calculate Shipping Cost
        </motion.h1>
        
        <form onSubmit={calculatePrice} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { label: "Pickup Pin Code", value: pickupPinCode, setter: setPickupPinCode },
              { label: "Drop Pin Code", value: dropPinCode, setter: setDropPinCode },
              { label: "Package Weight (kg)", value: weight, setter: setWeight, type: "number" },
              { 
                label: "Category",
                value: category,
                setter: setCategory,
                type: "select",
                options: categories
              }
            ].map((field, index) => (
              <motion.div
                key={field.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-1"
              >
                <label className="text-sm font-medium text-gray-700">{field.label}</label>
                {field.type === 'select' ? (
                  <select
                    value={field.value}
                    onChange={(e) => field.setter(e.target.value)}
                    className="w-full p-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-slate-50 text-sm"
                  >
                    {field.options.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type || "text"}
                    value={field.value}
                    onChange={(e) => field.setter(e.target.value)}
                    className="w-full p-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-slate-50 text-sm"
                    required
                  />
                )}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Courier Provider</label>
              <select
                value={courierProvider}
                onChange={(e) => setCourierProvider(e.target.value)}
                className="w-full p-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-slate-50 text-sm"
              >
                {courierProviders.map((provider) => (
                  <option key={provider.name} value={provider.name}>{provider.displayName}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Delivery Type</label>
              <select
                value={deliveryType}
                onChange={(e) => setDeliveryType(e.target.value)}
                className="w-full p-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-slate-50 text-sm"
              >
                {deliveryTypes[courierProvider]?.map((type) => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg text-sm mt-4"
          >
            Calculate Price
          </motion.button>
        </form>

        {price && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200"
          >
            <p className="text-center font-bold text-emerald-800">
              Estimated Price: ₹{price}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default PriceCalculator