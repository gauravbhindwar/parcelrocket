export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { query, provider } = req.query

    // Example logic for fetching location suggestions based on courier provider
    let apiUrl = ''
    switch (provider) {
      case 'bluedart':
        apiUrl = `https://api.bluedart.com/v1/autocomplete?query=${query}`
        break
      case 'comexpress':
        apiUrl = `https://api.comexpress.com/v1/autocomplete?query=${query}`
        break
      case 'dtdc':
        apiUrl = `https://api.dtdc.com/v1/autocomplete?query=${query}`
        break
      case 'delhivery':
        apiUrl = `https://api.delhivery.com/v1/autocomplete?query=${query}`
        break
      // Add more courier providers as needed
      default:
        apiUrl = `https://api.default.com/v1/autocomplete?query=${query}`
    }

    try {
      const response = await fetch(apiUrl)
      if (!response.ok) throw new Error('Network response was not ok')
      const data = await response.json()
      res.status(200).json(data)
    } catch (error) {
      console.error('Error fetching location suggestions:', error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
