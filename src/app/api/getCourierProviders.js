export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { pickupPinCode, dropPinCode } = req.query
    try {
      // Example logic for fetching courier providers based on pin codes
      const providers = [
        { name: 'comexpress', displayName: 'ComExpress' },
        { name: 'bluedart', displayName: 'BlueDart' },
        { name: 'dtdc', displayName: 'DTDC' },
        { name: 'delhivery', displayName: 'Delhivery' },
        // Add more courier providers as needed
      ].filter(provider => {
        // Add logic to filter providers based on pin codes
        // For example, check if the provider services the given pin codes
        return true // Replace with actual logic
      })
      console.log('Fetched courier providers:', providers)
      res.status(200).json({ providers })
    } catch (error) {
      console.error('Error fetching courier providers:', error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  } else {
    console.error('Method not allowed')
    res.status(405).json({ message: 'Method not allowed' })
  }
}
