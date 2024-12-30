export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { weight, distance, deliveryType, courierProvider, pickupPinCode, dropPinCode, category } = req.body

    // Example logic for calculating price based on courier provider
    let basePrice = 50
    switch (courierProvider) {
      case 'bluedart':
        basePrice = 60
        break
      case 'comexpress':
        basePrice = 50
        break
      case 'dtdc':
        basePrice = 55
        break
      case 'delhivery':
        basePrice = 65
        break
      // Add more courier providers as needed
      default:
        basePrice = 50
    }

    const weightPrice = weight * 10
    const distancePrice = distance * 5
    const expressMultiplier = deliveryType === 'express' ? 1.5 : 1

    const totalPrice = (basePrice + weightPrice + distancePrice) * expressMultiplier

    try {
      res.status(200).json({ price: totalPrice })
    } catch (error) {
      console.error('Error calculating price:', error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
